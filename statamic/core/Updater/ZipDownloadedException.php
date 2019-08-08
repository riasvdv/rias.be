<?php

namespace Statamic\Updater;

class ZipDownloadedException extends \Exception
{
    /**
     * @var string
     */
    private $zipPath;

    /**
     * @return string
     */
    public function getZipPath()
    {
        return $this->zipPath;
    }

    /**
     * @param string $zipPath
     */
    public function setZipPath($zipPath)
    {
        $this->zipPath = $zipPath;
    }
}
