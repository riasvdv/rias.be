<?php

namespace Statamic\Console\Commands\Generators\Addon;

use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\Str;
use Illuminate\Console\Command;

class ComposerMakeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:composer {name : Name of your addon}
                                          {vendor : Your name or company name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon composer.json file.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $addon = Str::studly($this->argument('name'));
        $vendor = Str::slug($this->argument('vendor'));

        $path = addons_path(join('/', [$addon, 'composer.json']));

        if (File::exists($path)) {
            $this->error("File already exists at: {$path}");

            return;
        }

        $stub = File::get(__DIR__ . "/stubs/composer.json.stub");

        $contents = str_replace(
            ['vendor', 'package'],
            [$vendor, Str::slug($addon)],
            $stub
        );

        File::put($path, $contents);

        $this->info("Your Composer file awaits at: " . Path::makeRelative($path));
    }
}
