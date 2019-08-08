<?php

namespace Statamic\Console\Commands\Generators\Addon;

use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Path;

class ControllerMakeCommand extends GeneratorCommand
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type = 'controller';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:controller {name : Name of your addon}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon Controller file.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->addon = $addon = Str::studly($this->argument('name'));

        $initial = addons_path($addon) . '/';

        $this->generate('class', $initial.$addon.'Controller.php');

        $this->generate('view', $initial.'resources/views/index.blade.php');

        $this->generate('routes', $initial.'routes.yaml');
    }

    private function generate($type, $path)
    {
        if (File::exists($path)) {
            $this->error(ucfirst($this->type) . " file already exists at: {$path}");

            return;
        }

        $stub = File::get(__DIR__ . "/stubs/controller/{$type}.stub");

        $contents = str_replace(
            ['DummyAddon', 'dummy_addon'],
            [$this->addon, Str::snake($this->addon)],
            $stub
        );

        File::put($path, $contents);

        $this->info('Your '. ucfirst($type) .' file awaits at: ' . Path::makeRelative($path));
    }
}
