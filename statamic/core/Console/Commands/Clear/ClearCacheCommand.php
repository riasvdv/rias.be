<?php

namespace Statamic\Console\Commands\Clear;

use Illuminate\Console\Command;

class ClearCacheCommand extends Command
{
    /**
     * The console command signature.
     *
     * @var string
     */
    protected $signature = 'clear:cache {--all : Clear all related caches.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear the application cache.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $this->call('cache:clear');

        if ($this->option('all')) {
            $this->call('view:clear');
            $this->call('clear:glide');
        }
    }
}
