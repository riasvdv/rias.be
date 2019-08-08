<?php

namespace Statamic\Providers;

use Aws\S3\S3Client;
use Statamic\API\Arr;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\YAML;
use Statamic\API\Parse;
use Statamic\API\Config;
use Statamic\API\Folder;
use League\Flysystem\Filesystem;
use Illuminate\Support\ServiceProvider;
use League\Flysystem\AwsS3v3\AwsS3Adapter;
use League\Flysystem\Cached\CachedAdapter;
use League\Flysystem\Cached\Storage\Predis;
use Illuminate\Contracts\Config\Repository;
use Illuminate\Filesystem\FilesystemManager;
use League\Flysystem\Cached\Storage\Memory as MemoryStore;

class FilesystemServiceProvider extends ServiceProvider
{
    /**
     * The default local filesystem config
     *
     * @var array
     */
    private $local;

    /**
     * The YAML-configured set of filesystems within Statamic
     *
     * @var array
     */
    private $filesystems;

    /**
     * All the configured filesystem disks
     *
     * @var array
     */
    private $disks = [];

    /**
     * @var Repository
     */
    private $config;

    /**
     * @var FilesystemManager
     */
    private $manager;

    /**
     * Custom Flysystems that have been extended onto the Filesystem Manager
     *
     * @var array
     */
    private $extended = [];

    public function register()
    {
        //
    }

    public function boot(Repository $config, FilesystemManager $manager)
    {
        $this->config = $config;
        $this->manager = $manager;

        // Start with the default/local disk. Most of the filesystem disks
        // will simply be the local disk with a different root directory.
        $this->local = $config->get('filesystems.disks.local');

        // Grab the YAML based Statamic filesystem configuration.
        $this->filesystems = Config::get('system.filesystems');

        // Create all the base filesystems.
        $this->disks = [
            'webroot' => $this->createWebrootFilesystem(),
            'glide' => $this->createGlideFilesystem(),
            'content' => $this->createContentFilesystem(),
            'storage' => $this->createStorageFilesystem(),
            'users' => $this->createUsersFilesystem(),
            'themes' => $this->createThemesFilesystem()
        ];

        // Make another filesystem for the active theme. It's exactly the
        // same as the `themes` filesystem, but in the active theme's
        // subdirectory. It'll just makes things a little easier.
        $this->disks['theme'] = $this->createThemeFilesystem();

        // Merge into the Laravel config. The asset container filesystem
        // bindings rely on the content disk to be available up-front.
        $this->mergeIntoLaravel();

        // Create a filesystem for each asset container.
        $this->createAssetContainerFilesystems();

        // Merge them back into Laravel again.
        $this->mergeIntoLaravel();
    }

    /**
     * Create a disk based on the local filesystem, but with a different root.
     *
     * @param string $root
     * @return array
     */
    private function createDiskFromLocal($root)
    {
        $config = $this->local;

        // When given an absolute path (for example, one starting with a slash) we'll
        // use that as the root. This could be useful for pointing at a directory
        // outside of the Statamic installation. When given a relative path,
        // we'll simply add it onto the Statamic root directory path.
        if (Path::isAbsolute($root)) {
            $config['root'] = $root;
        } else {
            $config['root'] .= '/' . $root;
        }

        return $config;
    }

    /**
     * Create a filesystem used for the Glide cache
     *
     * @return array
     */
    private function createGlideFilesystem()
    {
        $root = Config::get('assets.image_manipulation_cached')
            ? Config::get('assets.image_manipulation_cached_path')
            : cache_path('glide');

        return $this->createDiskFromLocal($root);
    }

    /**
     * Create a filesystem where the root is the webroot
     *
     * @return array
     */
    private function createWebrootFilesystem()
    {
        return $this->createDiskFromLocal(STATAMIC_ROOT);
    }

    /**
     * Create the content filesystem
     *
     * By default, this would be site/content
     *
     * @return array
     */
    private function createContentFilesystem()
    {
        return $this->createDiskFromLocal(
            array_get($this->filesystems, 'content.root')
        );
    }

    /**
     * Create the storage filesystem
     *
     * By default, this would be site/storage
     *
     * @return array
     */
    private function createStorageFilesystem()
    {
        return $this->createDiskFromLocal(
            array_get($this->filesystems, 'storage.root')
        );
    }

    /**
     * Create the users filesystem
     *
     * By default, this would be site/users
     *
     * @return array
     */
    private function createUsersFilesystem()
    {
        return $this->createDiskFromLocal(
            array_get($this->filesystems, 'users.root')
        );
    }

    /**
     * Create the themes filesystem
     *
     * By default, this would be site/themes
     *
     * @return array
     */
    private function createThemesFilesystem()
    {
        return $this->createDiskFromLocal(
            array_get($this->filesystems, 'themes.root')
        );
    }

    /**
     * Create the active theme filesystem
     *
     * This is a shortcut to the active theme. It's simply the "themes"
     * filesystem with the root pointing to the active theme's subdirectory.
     *
     * @return mixed
     */
    private function createThemeFilesystem()
    {
        $theme = $this->disks['themes'];

        $theme['root'] .= '/' . Config::getThemeName();

        return $theme;
    }

    /**
     * Create a filesystem for each asset container
     *
     * Each filesystem will be named "asset:id"
     *
     * @return void
     */
    private function createAssetContainerFilesystems()
    {
        $this->assetContainers()->each(function ($container, $id) {
            $driver = array_get($container, 'driver', 'local');
            $method = 'create' . ucfirst($driver) . 'AssetContainerFilesystem';

            $this->disks['assets:'.$id] = $this->$method($container);
        });
    }

    /**
     * Get all the asset container data, keyed by their IDs.
     *
     * @return \Illuminate\Support\Collection
     */
    private function assetContainers()
    {
        return collect(
            Folder::disk('content')->getFilesByType('assets', 'yaml')
        )->map(function ($path) {
            return [
                'id'   => substr($path, 7, -5),
                'data' => YAML::parse(Parse::env(File::disk('content')->get($path)))
            ];
        })->pluck('data', 'id');
    }

    /**
     * Create a local driver based asset container filesystem
     *
     * @param array $data  Asset container data
     * @return array
     */
    private function createLocalAssetContainerFilesystem($data)
    {
        return $this->createDiskFromLocal(
            array_get($data, 'path', '/')
        );
    }

    /**
     * Create an Amazon S3 driver based asset container filesystem
     *
     * @param array $data  Asset container data
     * @return array
     */
    private function createS3AssetContainerFilesystem($data)
    {
        // Extend the FilesystemManager with our own S3 Flysystem
        $this->extendWithS3Driver();

        // Laravel has built in support for an 's3' driver. However, we want to make our own
        // driver that leverages Flysystem's cached adapter decorator. We'll allow users to
        // just reference 's3' as the driver, but behind the scene's we'll be using ours.
        $data['driver'] = 'custom_s3';

        $credentials = collect(Arr::only($data, ['key', 'secret']))->map(function ($value) {
            return Parse::env($value);
        })->all();

        return array_merge($data, [
            'version' => 'latest',
            'root' => array_get($data, 'path', '/'),
            'visibility' => 'public',
            'credentials' => $credentials,
            'options' => array_get($data, 'options', []),
        ]);
    }

    /**
     * Extend the Laravel FilesystemManager with our own cached version
     *
     * @return void
     */
    private function extendWithS3Driver()
    {
        if (isset($this->extended['custom_s3'])) {
            return;
        }

        $this->manager->extend('custom_s3', function ($app, $config) {
            $s3 = new AwsS3Adapter(new S3Client($config), $config['bucket'], $config['root'], $config['options']);

            // If the cache option was specified, we'll use Predis to store the filesystem meta
            // data for the specified time. Otherwise, we'll just use an in-memory adapter.
            if ($expire = array_get($config, 'cache')) {
                $cache = new Predis($this->app['redis']->connection(), 'flysystem.custom_s3', $expire);
            } else {
                $cache = new MemoryStore;
            }

            return new Filesystem(new CachedAdapter($s3, $cache), $config);
        });

        $this->extended['custom_s3'] = true;
    }

    /**
     * Merge our built up disk config into Laravel's config
     *
     * @return void
     */
    private function mergeIntoLaravel()
    {
        $this->config->set('filesystems.disks', $this->disks);
    }
}
