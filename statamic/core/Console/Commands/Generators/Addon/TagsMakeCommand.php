<?php

namespace Statamic\Console\Commands\Generators\Addon;

class TagsMakeCommand extends GeneratorCommand
{
    /**
     * The type of addon class being generated.
     *
     * @var string
     */
    protected $type = 'tags';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:tags {name : Name of your addon}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate an addon tags file.';
}
