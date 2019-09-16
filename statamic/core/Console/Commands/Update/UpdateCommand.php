<?php

namespace Statamic\Console\Commands\Update;

use Illuminate\Console\Command;

class UpdateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Statamic to the latest version (Alias of update:statamic)';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $this->call('update:statamic');
    }
}
