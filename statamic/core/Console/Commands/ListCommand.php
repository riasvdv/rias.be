<?php

namespace Statamic\Console\Commands;

use Statamic\API\Pattern;
use Illuminate\Console\Command;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Artisan;
use Symfony\Component\Console\Helper\DescriptorHelper;

class ListCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'list {--all : Include native Laravel commands in the list.}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Lists commands';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if ($this->option('all')) {
            $this->call('version');
        }

        $helper = new DescriptorHelper();
        $helper->describe($this->output, $this->getApplication());
    }

    /**
     * Get an instance of the Console application
     *
     * @return \Symfony\Component\Console\Application
     */
    public function getApplication()
    {
        // By default, we only want to show Statamic commands. However, we'll allow *all* commands
        // to be shown (which includes built-in Laravel commands) if an option is specified.
        if ($this->option('all')) {
            return parent::getApplication();
        }

        $application = new \Symfony\Component\Console\Application('Statamic', STATAMIC_VERSION);

        $application->addCommands($this->getCommands()->all());

        return $application;
    }

    /**
     * Get all the Statamic commands
     *
     * @return array
     */
    private function getCommands()
    {
        $commands = new Collection(Artisan::all());

        $commands = $commands->filter(function($command) {
            return Pattern::startsWith(get_class($command), 'Statamic');
        })->sortBy(function($command) {
            return $command->getName();
        });

        $namespaced_commands = $commands->reject(function($command) {
            return str_contains($command->getName(), ':');
        });

        $root_commands = $commands->filter(function($command) {
            return str_contains($command->getName(), ':');
        });

        return $namespaced_commands->merge($root_commands);
    }
}
