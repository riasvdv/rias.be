<?php

namespace Statamic\Updater;

use Exception;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\Folder;
use Wilderborn\Partyline\Facade as Console;

class Swapper
{
    /**
     * @var string
     */
    private $newLocation;

    /**
     * @var string
     */
    private $currentLocation;

    public function swap()
    {
        $this->newLocation = Path::makeRelative(temp_path('update-unzipped/statamic/statamic'));
        $this->currentLocation = statamic_path();

        $this->deleteOldFiles();
        $this->copyNewFiles();
    }

    private function deleteOldFiles()
    {
        Console::line('Deleting old files...');

        $files = Folder::getFilesRecursively($this->currentLocation);

        $bar = Console::getOutput()->createProgressBar(count($files));

        try {
            foreach ($files as $file) {
                File::delete($file);
                $bar->advance();
            }
        } catch (Exception $e) {
            throw new Exception("Couldn't delete the statamic folder.", 0, $e);
        }

        $bar->finish();
        Console::getOutput()->newLine();
    }

    private function copyNewFiles()
    {
        Console::line('Copying new files...');

        $files = Folder::getFilesRecursively($this->newLocation);

        $bar = Console::getOutput()->createProgressBar(count($files));

        try {
            foreach ($files as $from) {
                $to = $this->currentLocation . substr($from, strlen($this->newLocation)+1);
                File::copy($from, $to);
                $bar->advance();
            }
        } catch (Exception $e) {
            throw new Exception("Couldn't copy the new statamic folder.", 0, $e);
        }

        $bar->finish();
        Console::getOutput()->newLine();
    }
}
