<?php

namespace Statamic\Console\Commands\Test;

use Symfony\Component\Process\ProcessBuilder;
use Symfony\Component\Process\Exception\RuntimeException;

class TestAddonsCommand extends TestCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test:addons';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Runs only addon PHPUnit tests.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        return $this->phpunit(['--testsuite', 'addons']);
    }
}
