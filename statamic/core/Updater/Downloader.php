<?php

namespace Statamic\Updater;

use Exception;
use GuzzleHttp\Client;
use Statamic\API\File;
use Statamic\API\Path;
use Wilderborn\Partyline\Facade as Console;
use Symfony\Component\Console\Helper\ProgressBar;

class Downloader
{
    /**
     * @var Client
     */
    private $client;

    /**
     * @var string
     */
    private $version;

    /**
     * @var string
     */
    private $zipPath;

    /**
     * @var ProgressBar
     */
    private $bar;

    /**
     *
     * @param $version
     */
    public function download($version)
    {
        $this->version = $version;

        $this->zipPath = Path::makeRelative(temp_path('updates/statamic-'.$version.'.zip'));

        $this->checkForExistingZip();

        $this->downloadZip();
    }

    /**
     * Throws an exception if the zip already exists
     *
     * @throws ZipDownloadedException
     */
    private function checkForExistingZip()
    {
        if (! File::exists($this->zipPath)) {
            return;
        }

        $e = new ZipDownloadedException;
        $e->setZipPath($this->zipPath);

        throw $e;
    }

    /**
     * Downloads the zip and saves it to disk
     *
     * @throws Exception
     */
    private function downloadZip()
    {
        Console::line('Downloading a fresh copy of Statamic...');

        $contents = $this->getZipFromServer();

        try {
            File::put($this->zipPath, $contents);
        } catch (Exception $e) {
            throw new Exception("Couldn't write the new Statamic zip to file.", 0, $e);
        }
    }

    /**
     * Downloads the zip from the server
     *
     * @return string
     * @throws Exception
     */
    private function getZipFromServer()
    {
        $client = new Client([
            'progress' => function ($size, $downloaded) {
                if ($size === 0) {
                    return;
                }

                if ($this->bar === null) {
                    $this->createDownloadProgressBar($size);
                }

                $this->bar->setProgress($downloaded);
            }
        ]);

        try {
            $response = $client->get('https://outpost.statamic.com/v2/get/' . $this->version);
        } catch (Exception $e) {
            throw new Exception("Couldn't get the latest release of Statamic from the server.", 0, $e);
        }

        $this->bar->finish();
        Console::getOutput()->newLine();

        return $response->getBody();
    }

    /**
     * Creates a progress bar
     *
     * @param int $size
     */
    protected function createDownloadProgressBar($size)
    {
        ProgressBar::setPlaceholderFormatterDefinition('max', function (ProgressBar $bar) {
            return $this->formatBytes($bar->getMaxSteps());
        });

        ProgressBar::setPlaceholderFormatterDefinition('current', function (ProgressBar $bar) {
            return str_pad($this->formatBytes($bar->getProgress()), 11, ' ', STR_PAD_LEFT);
        });

        $this->bar = Console::getOutput()->createProgressBar($size);
        $this->bar->setFormat('%current% / %max% %bar% %percent:3s%%');
        $this->bar->setRedrawFrequency(max(1, floor($size / 1000)));
        $this->bar->setBarWidth(30);

        $this->bar->start();
    }

    /**
     * Format bytes into something human readable
     *
     * @param int $bytes
     * @return string
     */
    protected function formatBytes($bytes)
    {
        $units = array('B', 'KB', 'MB', 'GB', 'TB');
        $bytes = max($bytes, 0);
        $pow = $bytes ? floor(log($bytes, 1024)) : 0;
        $pow = min($pow, count($units) - 1);
        $bytes /= pow(1024, $pow);

        return number_format($bytes, 2).' '.$units[$pow];
    }
}
