<?php

namespace Statamic\Console\Commands\Update;

use Statamic\Updater\Updater;
use Illuminate\Console\Command;
use Symfony\Component\Process\Process;
use Statamic\Updater\ZipDownloadedException;
use Statamic\Console\Commands\AbstractCommand;
use Symfony\Component\Process\Exception\ProcessFailedException;

class UpdateStatamicCommand extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'update:statamic';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Update Statamic to the latest version.';

    /**
     * @var Updater
     */
    private $updater;

    /**
     * @var string
     */
    private $version;

    /**
     * Execute the console command.
     *
     * @param Updater $updater
     * @return mixed
     */
    public function handle(Updater $updater)
    {
        \Partyline::bind($this);

        $this->updater = $updater;

        $this->setVersion();

        $this->output->newLine();
        $this->info(sprintf(
            "Updating from Statamic <info>%s</info> to <info>%s</info>",
            STATAMIC_VERSION,
            $this->version
        ));

        $this->backup();
        $this->download();

        $this->extract();
        $this->updateDependencies();
        $this->swapFiles();

        // Once the files have been swapped, Statamic can be considered updated.
        $this->checkInfo("Statamic has been successfully updated to {$this->version}!");
        $this->output->newLine();

        $this->cleanUp();
    }

    private function setVersion()
    {
        $this->version = $this->getLatestVersion();

        if (version_compare(STATAMIC_VERSION, $this->version, '==')) {
            throw new \LogicException('You are already on Statamic ' . $this->version);
        }

        $this->updater
             ->setVersion($this->version)
             ->setPreviousVersion(STATAMIC_VERSION);
    }

    private function getLatestVersion()
    {
        $this->output->newLine();
        $this->comment('Determining the latest version of Statamic...');

        $release = $this->updater->latestRelease();

        $version = $release['tag_name'];

        $this->line("Latest version is <comment>$version</comment>");

        return $version;
    }

    private function backup()
    {
        $this->output->newLine();
        $this->comment('Backing up...');

        $this->updater->backup();
    }

    private function download()
    {
        $this->output->newLine();
        $this->comment("Getting a copy of Statamic...");

        try {
            $this->updater->download();
        } catch (ZipDownloadedException $e) {
            $this->line(sprintf('Using previously downloaded zip detected at <comment>%s</comment>.', $e->getZipPath()));
        }
    }

    private function extract()
    {
        $this->line('Extracting the zip into a temporary location...');

        $this->updater->extract();

        $this->checkLine('Extraction complete.');
        $this->output->newLine();
    }

    private function updateDependencies()
    {
        $this->comment('Updating dependencies...');

        $this->updater->updateDependencies();

        $this->checkLine('Dependencies updated.');
        $this->output->newLine();
    }

    private function swapFiles()
    {
        $this->comment('Swapping files...');

        $this->updater->swapFiles();

        $this->output->newLine();
    }

    private function cleanUp()
    {
        $this->comment('Cleaning up...');

        // Release the lock here otherwise the following command will never progress.
        app('stache')->lock()->release();

        $process = new Process(vsprintf('%s please update:housekeeping --from=%s', [
            PHP_BINARY, STATAMIC_VERSION
        ]));

        $process->run();

        if (! $process->isSuccessful()) {
            $this->crossLine('Something went wrong while cleaning up.');
            throw new ProcessFailedException($process);
        }

        $this->checkLine('All clean.');
    }
}
