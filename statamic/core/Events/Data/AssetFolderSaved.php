<?php

namespace Statamic\Events\Data;

use Statamic\API\Path;
use Statamic\Assets\AssetFolder;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class AssetFolderSaved extends Event implements DataEvent
{
    /**
     * @var AssetFolder
     */
    public $folder;

    /**
     * @param AssetFolder $folder
     */
    public function __construct(AssetFolder $folder)
    {
        $this->folder = $folder;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->folder->data();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [Path::makeFull($this->folder->resolvedYamlPath())];
    }
}
