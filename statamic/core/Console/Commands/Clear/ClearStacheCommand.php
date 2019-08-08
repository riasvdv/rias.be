<?php

namespace Statamic\Console\Commands\Clear;

use Statamic\API\Folder;
use Statamic\API\Stache;
use Illuminate\Console\Command;

class ClearStacheCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'clear:stache';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear the "Stache" cache.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        Stache::clear();

        $this->info('The Stache has been trimmed.');
    }
}
