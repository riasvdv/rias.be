<?php

namespace Statamic\Console\Commands\Generators;

use Statamic\API\Str;
use Statamic\API\URL;
use Statamic\API\Path;
use Statamic\API\Parse;
use Statamic\API\Config;
use Statamic\API\Folder;
use Statamic\API\AssetContainer;
use Statamic\Assets\AssetContainerManager;
use Statamic\Console\Commands\AbstractCommand;

class AssetContainerMakeCommand extends AbstractCommand
{
    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an asset container.';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:asset-container {--handle=} {--driver=} {--path=} {--url=}';

    /**
     * Asset container driver types
     *
     * @var array
     */
    protected $drivers = [
        'local' => 'Local Filesystem',
        's3' => 'Amazon S3'
    ];

    /**
     * The provided handle of the container
     *
     * @var string
     */
    protected $handle;

    /**
     * The provided path of the container
     *
     * @var string
     */
    protected $path;

    /**
     * Amazon S3 regions
     *
     * @var array
     */
    protected $s3Regions = [
        'us-east-1' => 'US East (N. Virginia) / US Standard / us-east-1',
        'us-east-2' => 'US East (Ohio) / us-east-2',
        'us-west-1' => 'US West (N. California) / us-west-1',
        'us-west-2' => 'US West (Oregon) / us-west-2',
        'ca-central-1' => 'Canada (Central) / ca-central-1',
        'ap-south-1' => 'Asia Pacific (Mumbai) / ap-south-1',
        'ap-northeast-2' => 'Asia Pacific (Seoul) / ap-northeast-2',
        'ap-southeast-1' => 'Asia Pacific (Singapore) / ap-southeast-1',
        'ap-southeast-2' => 'Asia Pacific (Sydney) / ap-southeast-2',
        'ap-northeast-1' => 'Asia Pacific (Tokyo) / ap-northeast-1',
        'eu-central-1' => 'EU (Frankfurt) / eu-central-1',
        'eu-west-1' => 'EU (Ireland) / eu-west-1',
        'eu-west-2' => 'EU (London) / eu-west-2',
        'sa-east-1' => 'South America (Sao Paulo) / sa-east-1)',
    ];

    /**
     * @var AssetContainerManager
     */
    protected $manager;

    /**
     * Execute the console command.
     *
     * @param AssetContainerManager $manager
     * @return void
     */
    public function handle(AssetContainerManager $manager)
    {
        $this->manager = $manager;

        $this->handle = $this->getHandle();

        $driver = $this->getDriver();

        $method = 'create' . ucfirst($driver) . 'Container';

        $this->$method();
    }

    /**
     * Get the handle selection
     *
     * @return string
     */
    private function getHandle()
    {
        $handle = ($this->option('handle'))
            ? $this->option('handle')
            : $this->ask('Enter a handle. This is how you will refer to your container in code.');

        return $this->validateHandle($handle);
    }

    /**
     * Ensure the selected handle is a valid choice
     *
     * @param string $handle
     * @return string
     */
    private function validateHandle($handle)
    {
        if (AssetContainer::find($handle)) {
            $this->error('An asset container with this handle already exists.');
            $handle = $this->getHandle();
        }

        if (! $this->validateAlphaDash($handle)) {
            $this->error('The handle may only contain letters, numbers, and dashes.');
            $handle = $this->getHandle();
        }

        return $handle;
    }

    /**
     * Validate that a value contains only alpha-numeric characters, dashes, and underscores.
     *
     * @param  string $value
     * @return bool
     */
    protected function validateAlphaDash($value)
    {
        if (! is_string($value) && ! is_numeric($value)) {
            return false;
        }

        return preg_match('/^[\pL\pM\pN_-]+$/u', $value);
    }

    /**
     * Get the driver selection
     *
     * @return string
     */
    private function getDriver()
    {
        $driver = ($this->option('driver'))
            ? $this->option('driver')
            : $this->choice('Choose a driver', $this->drivers, 'local');

        return $this->validateDriver($driver);
    }

    /**
     * Ensure the selected driver is a valid choice
     *
     * @param string $driver
     * @return string
     */
    private function validateDriver($driver)
    {
        if (! in_array($driver, array_keys($this->drivers))) {
            $this->error("Driver [$driver] is not a valid option.");
            $driver = $this->getDriver();
        }

        return $driver;
    }

    /**
     * Create an asset container
     *
     * @param string $driver
     * @param array $data
     */
    private function createContainer($driver, array $data)
    {
        $container = AssetContainer::create($driver);
        $container->handle($this->handle);
        $container->data($data);
        $container->save();

        $this->checkInfo('Asset container created.');
    }

    /**
     * Create a local driver based asset container
     *
     * @return void
     */
    private function createLocalContainer()
    {
        $this->path = $this->getLocalPath();

        $url = $this->getLocalUrl();

        $this->output->newLine();

        $this->createContainer('local', [
            'path' => $this->path,
            'url'  => $url
        ]);
    }

    /**
     * Get the local path selection
     *
     * @return string
     */
    private function getLocalPath()
    {
        if ($this->option('path')) {
            return $this->validateLocalPath($this->option('path'));
        }

        $path = $this->anticipate(
            'Enter the path to the container. It may be absolute or relative to the root directory.',
            $this->getLocalPathChoices(),
            $this->handle
        );

        return $this->validateLocalPath($path);
    }

    /**
     * Get some local path choices
     *
     * @return array
     */
    private function getLocalPathChoices()
    {
        return collect(Folder::getFolders('/'))->reject(function ($path) {
            return Str::startsWith($path, '.') || $path === 'statamic';
        })->all();
    }

    /**
     * Ensure the selected path is a valid choice
     *
     * @param string $path
     * @return string
     */
    private function validateLocalPath($path)
    {
        $resolved = $this->resolveLocalPath($path);

        $this->line("Path <comment>$path</comment> resolves to <comment>$resolved</comment>.");

        if ($exists = is_dir($resolved)) {
            $this->checkLine('Directory exists.');
        }

        // If the directory doesn't exist, we'll give the user the opportunity
        // to create the directory after confirming it looks correct.
        if (! $exists) {
            $this->crossLine("Directory does not exist.");

            // If they've opted to _not_ create the directory, we'll
            // ask for them to provide the path one more time.
            if (! $this->shouldCreateDirectory($path)) {
                $path = $this->getLocalPath();
            }
        }

        return $path;
    }

    /**
     * Ask the user whether they want to create the directory
     *
     * @param string $path
     * @return bool
     */
    private function shouldCreateDirectory($path)
    {
        $this->line('If the above directory looks correct, Statamic can attempt to create it for you.');

        if ($create = $this->confirm('Create directory?', true)) {
            $this->createDirectory($path);
        } else {
            $this->line('The directory will not be created.');
        }

        return $create;
    }

    /**
     * Create a directory at a given path
     *
     * @param $path
     */
    private function createDirectory($path)
    {
        if (mkdir($this->resolveLocalPath($path))) {
            $this->checkLine('Directory successfully created.');
        } else {
            $this->crossLine("There was a problem creating the directory.");
        }
    }

    /**
     * Get the full path from a given path
     *
     * @param string $path
     * @return string
     */
    private function resolveLocalPath($path)
    {
        return $this->manager->resolveLocalPath($path);
    }

    /**
     * Get the local url selection
     *
     * @return string
     */
    private function getLocalUrl()
    {
        if ($this->option('url')) {
            return $this->validateLocalUrl($this->option('url'));
        }

        $url = $this->ask(
            "Enter the URL of the container. This can be absolute or relative. ".PHP_EOL.
            ' If this directory is not web-accessible, leave this blank.',
            false
        );

        if ($url === false) {
            return $this->line('No URL specified.');
        }

        return $this->validateLocalUrl($url);
    }

    /**
     * Attempt to validate a URL
     *
     * @param string $url
     * @return mixed
     */
    private function validateLocalUrl($url)
    {
        if (! $resolved = $this->manager->getAbsoluteUrl($url)) {
            $this->crossLine("URL verification is being skipped because your site URL has not been specified.");
            return $url;
        }

        $this->line("URL <comment>$url</comment> resolves to <comment>$resolved</comment>. Verifying...");

        // Create a temporary file in the folder that we'll request since visiting the
        // URL of a directory isn't reliable enough. It'll probably result in a 404.
        $path = '/statamic-test-'.time();
        $tmp = $this->resolveLocalPath($this->path) . $path;
        touch($tmp);
        $headers = @get_headers($resolved . $path);
        unlink($tmp);

        if (!$headers || strpos($headers[0], '404')) {
            $this->crossLine("The URL could not be verified. However, this is not 100% accurate. <comment>Your URL may still be correct.</comment>");
        } else {
            $this->checkLine('URL verified.');
        }

        return $url;
    }

    /**
     * Create an Amazon S3 container
     *
     * @return mixed
     */
    private function createS3Container()
    {
        $key = $this->ask('Access key ID?');
        $secret = $this->ask('Secret access key?');
        $bucket = $this->ask('Bucket name?');
        $region = $this->askWithCompletion('Region?', $this->s3Regions, 'us-east-1');
        $path = $this->ask('If you want to use a subdirectory for this container, enter the path.', '/');

        $data = compact('key', 'secret', 'bucket', 'region', 'path');

        // If the validation failed...
        if (! $this->validateS3($data)) {
            // Show them what data they entered
            $this->outputS3RetrySummary($data);

            // Retry if they chose not to proceed with the invalid credentials
            if (! $this->confirm('Would you like to create the container anyway?')) {
                return $this->createS3Container();
            }
        }

        $this->createContainer('s3', $data);
    }

    /**
     * Validate the S3 credentials
     *
     * @param array $data
     * @return bool
     */
    private function validateS3($data)
    {
        $this->comment('Verifying credentials...');

        // Attempt to view the files in the container. If there's
        // an authentication error, an exception will be thrown.
        try {
            $this->manager->createS3Filesystem($data)->files('/');
        } catch (\Exception $e) {
            $this->crossLine("Your credentials couldn't be verified.");
            return false;
        }

        $this->checkLine('Credentials verified.');
        $this->output->newLine();

        return true;
    }

    /**
     * Output some details about the validation attempt
     *
     * @param array $data
     * @return void
     */
    private function outputS3RetrySummary($data)
    {
        $this->output->newLine();

        foreach ($data as $k => $v) {
            $this->line("<comment>{$k}:</comment> {$v}");
        }

        $this->output->newLine();
    }
}
