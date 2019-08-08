<?php

namespace Statamic\Console\Commands\Generators;

use Illuminate\Console\Command;

use Statamic\API\Fieldset;
use Statamic\API\Path;
use Statamic\API\Str;
use Statamic\API\User;

class FieldsetMakeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:fieldset {title : The title of the fieldset}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a fieldset.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $title = $this->argument('title');

        $handle = Str::snake($title);

        $contents = [
            'title' => $title,
            'fields' => []
        ];

        $fieldset = Fieldset::create($handle, $contents);

        $fieldset->save();

        $this->info('Your fieldset awaits at: ' . $fieldset->path());
    }
}
