<?php

namespace Statamic\Console\Commands;

use Statamic\API\Config;
use Illuminate\Console\Command;

class SetCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'set';

    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'set {setting} {value}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Assign a new value to a setting. (Alias of config:set)';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $this->call('config:set', [
            'setting' => $this->argument('setting'),
            'value' => $this->argument('value')
        ]);
    }
}
