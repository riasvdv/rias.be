<?php

namespace Statamic\Console\Commands\Generators\Addon;

class TasksMakeCommand extends GeneratorCommand
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type = 'tasks';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:tasks {name : Name of your addon}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon tasks file.';
}
