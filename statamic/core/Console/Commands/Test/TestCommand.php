<?php

namespace Statamic\Console\Commands\Test;

use Illuminate\Console\Command;
use Illuminate\Filesystem\Filesystem;
use Symfony\Component\Process\ProcessBuilder;
use Symfony\Component\Process\Exception\RuntimeException;

class TestCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'test';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Runs PHPUnit tests.';

    /**
     * @var Filesystem
     */
    protected $filesystem;

    public function __construct(Filesystem $filesystem)
    {
        parent::__construct();
        $this->ignoreValidationErrors();
        $this->filesystem = $filesystem;
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        return $this->phpunit();
    }

    protected function phpunit($options = [])
    {
        if (! $this->filesystem->exists('statamic/vendor/phpunit')) {
            return $this->error('PHPUnit not installed. Run `composer install` in the `statamic` directory.');
        }

        $args = array_merge(
            array_slice($_SERVER['argv'], 2),
            $options
        );

        $process = (new ProcessBuilder())
            ->setTimeout(null)
            ->setPrefix([PHP_BINARY, 'statamic/vendor/phpunit/phpunit/phpunit'])
            ->setArguments($args)
            ->getProcess();

        try {
            $process->setTty(true);
        } catch (RuntimeException $e) {
            $this->output->writeln('Warning: '.$e->getMessage());
        }

        return $process->run(function ($type, $line) {
            $this->output->write($line);
        });
    }
}
