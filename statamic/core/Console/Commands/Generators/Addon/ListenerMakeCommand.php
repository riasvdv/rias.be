<?php

namespace Statamic\Console\Commands\Generators\Addon;

class ListenerMakeCommand extends GeneratorCommand
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type = 'listener';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:listener {name : Name of your addon}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon event listener file.';
}
