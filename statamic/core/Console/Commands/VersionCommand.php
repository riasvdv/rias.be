<?php

namespace Statamic\Console\Commands;

use Statamic\API\Addon;
use Illuminate\Console\Command;

class VersionCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'version {addon?}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Displays the Statamic version.';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $item = 'Statamic';
        $version = STATAMIC_VERSION;

        if ($addon = $this->argument('addon')) {
            list($item, $version) = $this->getAddonDetails($addon);
        }

        $this->line(sprintf('<info>%s</info> version <comment>%s</comment>', $item, $version));
    }

    protected function getAddonDetails($item)
    {
        $addon = Addon::create($item);

        if (! $exists = is_dir($addon->directory())) {
            throw new \Exception("Addon [{$item}] does not exist.");
        }

        return [$addon->name(), $addon->version()];
    }
}
