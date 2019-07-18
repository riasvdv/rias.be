<?php

namespace Statamic\Console\Commands\Generators\Addon;

class ModifierMakeCommand extends GeneratorCommand
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type = 'modifier';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:modifier {name : Name of your addon}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon modifier file.';
}
