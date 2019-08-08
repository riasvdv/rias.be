<?php

namespace Statamic\Console\Commands;

class RefreshAddonsCommand extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'addons:refresh';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Refresh the installed addons.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->crossLine('This command is deprecated. Please use <comment>php please update:addons</comment>');
        $this->output->newLine();
        $this->call('update:addons');
    }
}
