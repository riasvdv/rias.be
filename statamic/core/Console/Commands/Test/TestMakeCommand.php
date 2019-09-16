<?php

namespace Statamic\Console\Commands\Test;

use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\Console\Commands\AbstractCommand;

class TestMakeCommand extends AbstractCommand
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $signature = 'make:test {name}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a PHPUnit test class.';

    public function handle()
    {
        $name = Str::studly($this->argument('name'));

        $path = site_path("tests/{$name}Test.php");

        if (File::exists($path)) {
            return $this->error('Test at ' . Path::makeRelative($path) . ' already exists.');
        }

        $stub = File::get(__DIR__ . '/test.stub');

        $contents = str_replace('Example', $name, $stub);

        File::put($path, $contents);

        $this->info('Your test file awaits at: ' . Path::makeRelative($path));
    }
}
