<?php

namespace Statamic\Console\Commands\Generators\SiteHelpers;

use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\Console\Commands\AbstractCommand;

class ControllerMakeCommand extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:controller-helper { name : The name of the controller. }
                                                   { --create-only : Only attempt to create the file, and do nothing if it exists. }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a site helper controller file.';

    private $destination;
    private $studlyName;

    public function handle()
    {
        $this->studlyName = Str::studly($this->argument('name'));

        $this->destination = site_path("helpers/{$this->studlyName}Controller.php");

        return (File::exists($this->destination)) ? $this->update() : $this->create();
    }

    private function create()
    {
        $contents = File::get(__DIR__.'/stubs/controller.stub');

        $contents = str_replace('Dummy', $this->studlyName, $contents);

        File::put($this->destination, $contents);

        $this->info('Controller helper file created in ' . Path::makeRelative($this->destination));
    }

    private function update()
    {
        if ($this->option('create-only')) {
            return;
        }

        $this->warn('Helper file already exists.');

        if (! $name = $this->ask('Enter the name of a method to append to the file', false)) {
            return;
        }

        $contents = File::get($this->destination);

        // Remove any trailing whitespace and the closing class curly brace.
        $contents = substr(rtrim($contents), 0, -1);

        $contents .= $this->methodStub($name) . '}';

        File::put($this->destination, $contents);

        $this->checkInfo('Helper file updated.');
    }

    private function methodStub($name)
    {
        $name = Str::camel($name);

        return str_replace(
            ['methodName', 'method_name'],
            [$name, Str::snake($name)],
            File::get(__DIR__.'/stubs/controller-method.stub')
        );
    }
}
