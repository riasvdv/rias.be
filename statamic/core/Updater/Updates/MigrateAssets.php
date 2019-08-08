<?php

namespace Statamic\Updater\Updates;

use Statamic\API\Arr;
use Statamic\API\Str;
use Statamic\API\YAML;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\Folder;
use Illuminate\Support\Collection;
use Statamic\Assets\AssetContainerManager;

class MigrateAssets extends Update
{
    /**
     * All content files with their content
     *
     * @var Collection
     */
    private $contentFiles;

    /**
     * The content files that have had strings replaced
     *
     * @var Collection
     */
    private $replacedContentFiles;

    /**
     * The number of replacements that have occurred
     *
     * @var int
     */
    private $contentReplacements = 0;

    public function shouldUpdate($newVersion, $oldVersion = '2.0.0')
    {
        return version_compare($newVersion, '2.5.0', '>=')
            && version_compare($oldVersion, '2.5.0', '<');
    }

    public function update()
    {
        $this->console()->comment('Gathering asset related files...');

        $this->getAssetFiles();
        $this->getAssetFolders();
        $this->getAssets();

        if ($this->getContainerCount() === 0) {
            return $this->console()->crossLine('There are no asset containers to migrate.');
        }

        $this->console()->checkLine(sprintf(
            'Containers: %d, Folders: %d, Assets: %d',
            $this->getContainerCount(),
            $this->getFolderCount(),
            $this->getAssetCount()
        ));

        $this->console()->getOutput()->newLine();

        $this->console()->comment('Reformatting asset meta data...');
        $this->getAssetContainers();
        $this->addAssetsToContainers();
        $this->console()->checkLine('Asset data reformatted.');

        $this->console()->getOutput()->newLine();
        $this->console()->comment('Writing asset meta data...');

        $this->writeAssetContainersToNewLocations();
        $this->addFolderMeta();

        $this->console()->getOutput()->newLine();
        $this->console()->comment('Updating content files...');
        $this->updateContent();

        $this->console()->getOutput()->newLine();
        $this->console()->checkInfo('Assets migrated!');

        $this->cleanUp();
    }


    /**
     * Get files related to assets
     *
     * Prior to 2.2, asset meta files were stored in `site/storage/assets` with a
     * single container.yaml for the configuration, and multiple folder.yaml
     * files that would correspond to each directory in the container.
     *
     * @return void
     */
    private function getAssetFiles()
    {
        $this->files = collect(
            Folder::disk('storage')
                ->getFilesByTypeRecursively('assets', 'yaml')
        );
    }

    /**
     * Get the folder.yaml files
     *
     * We'll get the files parsed as YAML and grouped by their container.
     *
     * @return void
     */
    private function getAssetFolders()
    {
        $this->folders = $this->files->filter(function ($path) {
            return Str::endsWith($path, 'folder.yaml');
        })->map(function ($path) {
            $yaml = YAML::parse(File::disk('storage')->get($path));
            return compact('path', 'yaml');
        })->keyBy(function ($data) {
            return $data['path'];
        })->map(function ($data) {
            return $data['yaml'];
        })->groupBy(function ($data, $path) {
            return explode('/', $path)[1];
        }, true);
    }

    /**
     * Get the parsed container.yaml files
     *
     * We'll get the files parsed as YAML and keyed by their IDs.
     *
     * @return void
     */
    private function getAssetContainers()
    {
        $this->containers = $this->files->filter(function ($path) {
            return Str::endsWith($path, 'container.yaml');
        })->values()->keyBy(function ($path) {
            return explode('/', $path)[1];
        })->map(function ($path) {
            return YAML::parse(File::disk('storage')->get($path));
        });
    }

    /**
     * Get all the assets
     *
     * We'll get them grouped by container, with their file
     * paths updated to reflect the folders they were in.
     *
     * @return void
     */
    private function getAssets()
    {
        $this->assets = $this->folders->map(function ($folders, $container) {
            $folders = $this->addFolderPrefixesToFilenames($folders);
            return $this->reduceAssets($folders);
        });
    }

    /**
     * Get the number of assets
     *
     * @return int
     */
    private function getAssetCount()
    {
        return $this->assets->reduce(function ($carry, $assets) {
            return $assets->count() + $carry;
        }, 0);
    }

    /**
     * Get the number of folders
     *
     * @return int
     */
    private function getFolderCount()
    {
        return $this->folders->reduce(function ($carry, $folders) {
            return $folders->count() + $carry;
        }, 0);
    }

    /**
     * Get the number of containers
     *
     * @return int
     */
    private function getContainerCount()
    {
        return $this->folders->count();
    }

    /**
     * Add folder path prefixes to the "file" keys in assets
     *
     * Prior to 2.2, only the filenames were stored with assets. Since they were stored
     * in separate folder.yaml files, you could tell their path. Now that we're just
     * storing a single array per container, we also need to have the folder path.
     *
     * @param Collection $folders
     * @return mixed
     */
    private function addFolderPrefixesToFilenames($folders)
    {
        return $folders->map(function ($yaml, $path) {
            $prefix = collect(explode('/', $path))->slice(2, -1)->implode('/');

            $yaml['assets'] = collect(array_get($yaml, 'assets', []))->map(function ($asset) use ($prefix) {
                $asset['file'] = Str::removeLeft($prefix . '/' . $asset['file'], '/');
                return $asset;
            });

            return $yaml;
        });
    }

    private function reduceAssets($folders)
    {
        return $folders->reduce(function ($carry, $data) {
            $assets = collect(array_get($data, 'assets', []));
            return $carry->merge($assets);
        }, collect());
    }

    /**
     * Add assets to the containers
     *
     * Each container needs an array of all the assets contained within it.
     * However, we only need to keep assets that contain additional data.
     * We also want the filenames to be used for keys instead of IDs.
     *
     * @return void
     */
    private function addAssetsToContainers()
    {
        $this->containers = $this->containers->map(function ($yaml, $containerId) {
            $yaml['assets'] = $this->assets->get($containerId)->keyBy('file')->map(function ($asset) {
                return Arr::except($asset, ['file']);
            })->filter()->all();

            return $yaml;
        });
    }

    /**
     * Write containers to the new locations
     *
     * Asset containers now belong in the content directory
     * with only a single yaml file for each container.
     *
     * @return void
     */
    private function writeAssetContainersToNewLocations()
    {
        $this->containers->each(function ($yaml, $containerId) {
            $location = "assets/$containerId.yaml";

            $disk = File::disk('content');

            $disk->put($location, YAML::dump($yaml));

            $this->console()->checkLine(sprintf(
                'Container configuration for <info>%s</info> written to <info>%s</info>',
                $containerId,
                Path::makeRelative($disk->filesystem()->getAdapter()->getPathPrefix() . $location)
            ));
        });
    }

    /**
     * Add folder meta data
     *
     * Prior to 2.2, folders could be given meta like title fields. These were defined
     * within the respective folder.yaml files. Now, we're allowing users to place
     * folder.yaml files amongst the actual raw assets. We'll move them there.
     *
     * @return void
     */
    private function addFolderMeta()
    {
        $this->folders->each(function ($folders, $containerId) {
            return $folders->map(function ($folderData) {
                return Arr::except($folderData, ['assets']);
            })->filter()->each(function ($folderData, $storagePath) use ($containerId) {
                $folder = collect(explode('/', $storagePath))->slice(2, -1)->implode('/');
                $this->writeFolderMeta($containerId, $folder, $folderData);
            });
        });
    }

    /**
     * Write the folder meta data
     *
     * @param string $containerId
     * @param string $folder
     * @param array $folderData
     */
    private function writeFolderMeta($containerId, $folder, $folderData)
    {
        $containerData = $this->containers->get($containerId);

        $driver = array_get($containerData, 'driver', 'local');

        if ($driver === 's3') {
            $this->writeS3FolderMeta($containerData, $folder, $folderData);
        } else {
            $this->writeLocalFolderMeta($containerData, $folder, $folderData);
        }
    }

    /**
     * Write the folder meta data (for local adapter)
     *
     * @param array $containerData
     * @param string $folder
     * @param array $folderData
     */
    private function writeLocalFolderMeta($containerData, $folder, $folderData)
    {
        $resolvedPath = Path::assemble($containerData['path'], $folder, 'folder.yaml');

        File::put(
            $resolvedPath,
            YAML::dump($folderData)
        );

        $this->console()->checkLine(sprintf('Folder meta data written to <info>%s</info>', $resolvedPath));
    }

    /**
     * Write the folder meta data (for S3 adapter)
     *
     * @param array $containerData
     * @param string $folder
     * @param array $folderData
     */
    private function writeS3FolderMeta($containerData, $folder, $folderData)
    {
        unset($containerData['assets']);

        $filesystem = $this->containerManager()->createS3Filesystem($containerData);

        $path = Path::assemble($folder, 'folder.yaml');

        $filesystem->put($path, YAML::dump($folderData));

        $this->console()->checkLine(sprintf('Folder meta data written to <info>%s</info> in your container.', $path));
    }

    /**
     * Update content files
     *
     * Prior to 2.2, asset IDs were used in front matter.
     * We'll just swap them out for URLs.
     *
     * @return void
     */
    private function updateContent()
    {
        $this->replacedContentFiles = collect();

        $this->gatherContentFiles();

        $this->replaceIdsWithinContent();

        if (! $this->contentReplacements) {
            return $this->console()->crossLine('No asset IDs found.');
        }

        $this->console()->line(sprintf(
            'Found %d occurrences in %d files. Replacing...',
            $this->contentReplacements,
            $this->replacedContentFiles->count()
        ));

        $this->writeContentReplacements();

        $this->console()->checkLine('Content replacements written.');
    }

    /**
     * Create a collection of all content files with their paths and content.
     *
     * @return void
     */
    private function gatherContentFiles()
    {
        $content = collect(
            Folder::disk('content')->getFilesRecursively('/')
        )->map(function ($path) {
            $disk = 'content';
            $contents = File::disk($disk)->get($path);
            return compact('disk', 'path', 'contents');
        });

        $storage = collect(
            Folder::disk('storage')->getFilesRecursively('/')
        )->map(function ($path) {
            $disk = 'storage';
            $contents = File::disk($disk)->get($path);
            return compact('disk', 'path', 'contents');
        });

        $users = collect(
            Folder::disk('users')->getFiles('/')
        )->map(function ($path) {
            $disk = 'users';
            $contents = File::disk($disk)->get($path);
            return compact('disk', 'path', 'contents');
        });

        $this->contentFiles = $content->merge($storage)->merge($users)
            ->reject(function ($file) {
                return Str::endsWith($file['path'], '.DS_Store'); // yuck
            });
    }

    /**
     * Perform the ID-to-URL replacements
     *
     * @return void
     */
    private function replaceIdsWithinContent()
    {
        $this->assets->each(function ($assets, $containerId) {
            $prefix = $this->getContainerPrefix($containerId);

            $assets->each(function ($asset, $assetId) use ($prefix) {
                $url = $prefix . $asset['file'];
                $this->findAndReplaceId($assetId, $url);
            });
        });
    }

    /**
     * Find asset IDs and replace them with a URL
     *
     * @param string $find
     * @param string $replace
     * @return void
     */
    private function findAndReplaceId($find, $replace)
    {
        $this->contentFiles->each(function ($file) use ($find, $replace) {
            $path = $file['disk'] . '::' . $file['path'];

            $original = $this->replacedContentFiles->has($path)
                ? $this->replacedContentFiles->get($path)
                : $file['contents'];

            $contents = preg_replace('#\- '.$find.'#', '- '.$replace, $original);
            $contents = preg_replace('#\: '.$find.'#', ': '.$replace, $contents);

            if ($contents !== $original) {
                $this->replacedContentFiles->put($path, $contents);
                $this->contentReplacements++;
            }
        });
    }

    /**
     * Write the replaced content files to disk
     *
     * @return void
     */
    private function writeContentReplacements()
    {
        $this->replacedContentFiles->each(function ($contents, $path) {
            list($disk, $path) = explode('::', $path);
            File::disk($disk)->put($path, $contents);
        });
    }

    /**
     * Get the prefix for asset URLs in content.
     *
     * For web-accessible containers, it's just the URL. For below-webroot
     * containers, it's the container id and path joined by double colons.
     *
     * @param string $containerId
     * @return string
     */
    private function getContainerPrefix($containerId)
    {
        $containerData = $this->containers->get($containerId);

        $driver = array_get($containerData, 'driver', 'local');

        if ($driver === 's3') {
            unset($containerData['assets']);
            $adapter = $this->containerManager()->createS3Filesystem($containerData)->getAdapter();
            $url = rtrim($adapter->getClient()->getObjectUrl($adapter->getBucket(), array_get($containerData, 'path', '/')), '/');
        } else {
            $url = array_get($containerData, 'url');
        }

        $accessible = ! is_null($url);

        return ($accessible)
            ? Str::ensureRight($url, '/')
            : $containerId . '::';
    }

    /**
     * Remove the asset meta data used in pre-2.2
     *
     * @return void
     */
    private function cleanUp()
    {
        Folder::disk('storage')->delete('assets');

        $this->console()->checkLine('Old asset meta files have been deleted.');
    }

    /**
     * @return AssetContainerManager
     */
    private function containerManager()
    {
        return app(AssetContainerManager::class);
    }
}
