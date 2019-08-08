<?php

namespace Statamic\Console\Commands\Generators\SiteHelpers;

use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\Console\Commands\AbstractCommand;

class FiltersMakeCommand extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:filters-helper { --create-only : Only attempt to create the file, and do nothing if it exists. }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a site helper filters file.';

    private $destination;

    public function __construct()
    {
        parent::__construct();

        $this->destination = site_path('helpers/Filters.php');
    }

    public function handle()
    {
        return (File::exists($this->destination)) ? $this->update() : $this->create();
    }

    private function create()
    {
        File::copy(__DIR__.'/stubs/filters.stub', $this->destination);

        $this->info('Filters helper file created in ' . Path::makeRelative($this->destination));
    }

    private function update()
    {
        if ($this->option('create-only')) {
            return;
        }

        $this->warn('Helper file already exists.');

        if (! $name = $this->ask('Enter the name of a filter to append to the file', false)) {
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
            File::get(__DIR__.'/stubs/filter-method.stub')
        );
    }
}
