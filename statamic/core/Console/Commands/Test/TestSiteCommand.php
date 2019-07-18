<?php

namespace Statamic\Console\Commands\Test;

use Symfony\Component\Process\ProcessBuilder;
use Symfony\Component\Process\Exception\RuntimeException;

class TestSiteCommand extends TestCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:site';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Runs only site PHPUnit tests.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $this->phpunit(['--testsuite', 'site']);
    }
}
