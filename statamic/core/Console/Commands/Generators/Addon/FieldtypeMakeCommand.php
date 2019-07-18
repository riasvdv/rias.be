<?php

namespace Statamic\Console\Commands\Generators\Addon;

use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\Str;

class FieldtypeMakeCommand extends GeneratorCommand
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type = 'fieldtype';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:fieldtype {name : Name of your addon}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate addon fieldtype files.';

    /**
     * The name of the addon
     *
     * @var string
     */
    private $addon;

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->addon = $addon = Str::studly($this->argument('name'));

        $initial = addons_path($addon) . '/';

        $this->generate('class', $initial.$addon.'Fieldtype.php');

        $this->generate('vue', $initial.'resources/assets/js/fieldtype.js');
    }

    private function generate($type, $path)
    {
        if (File::exists($path)) {
            $this->error(ucfirst($this->type) . " file already exists at: {$path}");

            return;
        }

        $stub = File::get(__DIR__ . "/stubs/fieldtype/{$type}.stub");

        $contents = str_replace(
            ['DummyAddon', 'dummy_addon'],
            [$this->addon, Str::snake($this->addon)],
            $stub
        );

        File::put($path, $contents);

        $this->info('Your Fieldtype '. ucfirst($type) .' file awaits at: ' . Path::makeRelative($path));
    }
}
