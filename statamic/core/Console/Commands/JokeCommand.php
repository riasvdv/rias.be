<?php

namespace Statamic\Console\Commands;

use Illuminate\Console\Command;

class JokeCommand extends Command
{
    /**
     * The console command name.
     *
     * @var string
     */
    protected $name = 'joke';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Tells a joke.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $joke = json_decode(file_get_contents('http://api.icndb.com/jokes/random'));

        $this->info(PHP_EOL.htmlspecialchars_decode(object_get($joke, 'value.joke')).PHP_EOL);
    }
}