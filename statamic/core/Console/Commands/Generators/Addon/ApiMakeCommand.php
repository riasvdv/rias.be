<?php

namespace Statamic\Console\Commands\Generators\Addon;

class ApiMakeCommand extends GeneratorCommand
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type = 'api';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:api {name : Name of your addon}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon API file.';
}
