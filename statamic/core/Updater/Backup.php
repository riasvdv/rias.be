<?php

namespace Statamic\Updater;

use Exception;
use Statamic\API\File;
use Statamic\API\Zip;
use Statamic\API\Path;
use Statamic\API\Folder;
use Wilderborn\Partyline\Facade as Console;

class Backup
{
    /**
     * @var string
     */
    private $folder;

    /**
     * @var string
     */
    private $zipPath;

    /**
     * @var \League\Flysystem\Filesystem
     */
    private $zip;

    public function __construct()
    {
        $this->folder = temp_path('backup');
        $this->zipPath = Path::makeRelative($this->folder . '/statamic-' . STATAMIC_VERSION . '-' . time() . '.zip');
    }

    public function backup()
    {
        $this->ensureBackupFolderExists();
        $this->buildZip();
        $this->writeZip();
    }

    private function ensureBackupFolderExists()
    {
        if (Folder::exists($this->folder)) {
            return;
        }

        Console::line('Creating a folder to place backups in.');

        try {
            Folder::make($this->folder);
        } catch (Exception $e) {
            throw new Exception("Couldn't create the backup folder.");
        }
    }

    private function buildZip()
    {
        Console::line('Creating a zip file...');

        $this->zip = Zip::make($this->zipPath);

        Console::line('Adding files to the zip...');

        $files = Folder::getFilesRecursively(statamic_path());

        foreach ($files as $path) {
            $this->zip->put($path, File::get($path));
        }
    }

    private function writeZip()
    {
        Console::line('Writing the zip to disk...');

        try {
            Zip::write($this->zip);
        } catch (Exception $e) {
            throw new Exception("Couldn't create the backup zip.");
        }

        Console::checkLine("Backup saved to <info>{$this->zipPath}</info>");
    }
}
