<?php

namespace Statamic\Console\Commands\Generators\Addon;

use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\Str;
use Illuminate\Console\Command;

class GeneratorCommand extends Command
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type;

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $addon = Str::studly($this->argument('name'));

        $subnamespace = ($this->type == 'command') ? 'Commands' : null;

        $initial_path = join('/', [$addon, $subnamespace, $addon]);

        if ($this->type === 'api') {
            $type = 'API';
        } elseif ($this->type === 'provider') {
            $type = 'ServiceProvider';
        } elseif ($this->type === 'suggest') {
            $type = 'SuggestMode';
        } else {
            $type = ucfirst($this->type);
        }

        $path = addons_path($initial_path . $type . '.php');

        if (File::exists($path)) {
            $this->error($type . " file already exists at: {$path}");

            return;
        }

        $stub = File::get(__DIR__ . "/stubs/{$this->type}.stub");

        $contents = str_replace(['DummyAddon', 'dummy_addon'], [$addon, Str::snake($addon)], $stub);

        File::put($path, $contents);

        $this->info('Your '.$type.' file awaits at: '.Path::makeRelative($path));
    }
}
