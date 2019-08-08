<?php

namespace Statamic\Console\Commands\Update;

use Statamic\Extend\Management\AddonManager;
use Statamic\Console\Commands\AbstractCommand;
use Symfony\Component\Process\Exception\ProcessFailedException;

class UpdateAddonsCommand extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:addons';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Composer dependencies within addons.';

    /**
     * Execute the console command.
     *
     * @param AddonManager $manager
     * @return mixed
     */
    public function handle(AddonManager $manager)
    {
        $packages = $manager->packages();

        if (empty($packages)) {
            $this->info('No addons with dependencies.');
            return;
        }

        $this->line('Adding packages: ' . join(', ', $packages));
        $this->warn('Please wait while dependencies are updated via Composer. This may take a while.');

        try {
            $manager->updateDependencies();
        } catch (ProcessFailedException $e) {
            $this->error($e->getMessage());
        }

        $this->info('Dependencies updated!');
    }
}
