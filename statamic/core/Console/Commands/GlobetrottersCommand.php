<?php

namespace Statamic\Console\Commands;

use Illuminate\Console\Command;

class GlobetrottersCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'globetrotters';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Plays the Harlem Globetrotters\' theme song.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $this->comment('*whistle* Do do do...');
        exec('open https://www.youtube.com/watch?v=AuIgor5_PaQ');
    }
}