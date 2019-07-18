<?php

namespace Statamic\Console\Commands\Update;

use Statamic\Events\SystemUpdated;
use Statamic\Updater\Housekeeper;
use Statamic\Console\Commands\AbstractCommand;

class UpdateHousekeepingCommand extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:housekeeping { --from= : The version you are upgrading from. }';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Performs housekeeping after a manual update.';

    /**
     * @var string
     */
    protected $currentVersion = STATAMIC_VERSION;

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (!$previousVersion = $this->option('from')) {
            $previousVersion = $this->ask('From which version have you upgraded?', '2.0.0');
        }

        if (version_compare($this->currentVersion, $previousVersion, '<')) {
            throw new \Exception('You must upgrade from a lower version.');
        }

        $this->line(sprintf(
            "Performing clean up steps for a <info>%s</info> to <info>%s</info> upgrade.",
            $previousVersion,
            $this->currentVersion
        ));

        $housekeeper = new Housekeeper;
        $housekeeper->console = $this;
        $housekeeper->clean($this->currentVersion, $previousVersion);

        $this->output->newLine(2);
        $this->checkInfo('Housekeeping complete.');
    }
}
