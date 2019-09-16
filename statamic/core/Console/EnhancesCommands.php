<?php

namespace Statamic\Console;

use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Output\OutputInterface;

trait EnhancesCommands
{
    /**
     * Run the console command.
     *
     * @param  InputInterface $input
     * @param  OutputInterface $output
     * @return int
     */
    public function run(InputInterface $input, OutputInterface $output)
    {
        \Partyline::bind($this);

        return parent::run($input, $output);
    }

    public function checkLine($message)
    {
        $this->line("<info>[✓]</info> $message");
    }

    public function checkInfo($message)
    {
        $this->info("[✓] $message");
    }

    public function crossLine($message)
    {
        $this->line("<fg=red>[✗]</> $message");
    }
}
