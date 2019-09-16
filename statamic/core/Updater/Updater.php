<?php

namespace Statamic\Updater;

class Updater
{
    /**
     * @var Backup
     */
    private $backup;

    /**
     * @var Downloader
     */
    private $downloader;

    /**
     * @var Extractor
     */
    private $extractor;

    /**
     * @var DependencyUpdater
     */
    private $dependencies;

    /**
     * @var Swapper
     */
    private $swapper;

    /**
     * @var Housekeeper
     */
    private $housekeeper;

    /**
     * @var string
     */
    private $version;

    /**
     * @var string
     */
    private $previousVersion;

    /**
     * @var Releases
     */
    private $releases;

    public function __construct(
        Releases $releases,
        Backup $backup,
        Downloader $downloader,
        Extractor $extractor,
        DependencyUpdater $dependencies,
        Swapper $swapper,
        Housekeeper $housekeeper
    )
    {
        $this->releases = $releases;
        $this->backup = $backup;
        $this->downloader = $downloader;
        $this->extractor = $extractor;
        $this->dependencies = $dependencies;
        $this->swapper = $swapper;
        $this->housekeeper = $housekeeper;
    }

    public function releases()
    {
        return $this->releases->all();
    }

    public function latestRelease()
    {
        return $this->releases->latest();
    }

    public function setVersion($version)
    {
        $this->version = $version;

        return $this;
    }

    public function setPreviousVersion($version)
    {
        $this->previousVersion = $version;

        return $this;
    }

    public function backup()
    {
        $this->backup->backup();
    }

    public function download()
    {
        $this->downloader->download($this->version);
    }

    public function extract()
    {
        $this->extractor->extract($this->version);
    }

    public function updateDependencies()
    {
        $this->dependencies->update();
    }

    public function swapFiles()
    {
        $this->swapper->swap();
    }

    public function cleanUp()
    {
        $this->housekeeper->clean($this->version, $this->previousVersion);
    }
}
