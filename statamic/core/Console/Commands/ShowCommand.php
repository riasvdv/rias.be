<?php

namespace Statamic\Console\Commands;

use Illuminate\Console\Command;

class ShowCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'show {--all : Include native Laravel commands in the list.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Lists commands (alias of list)';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->call('list', [
            '--all' => $this->option('all')
        ]);
    }
}
