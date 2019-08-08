<?php

namespace Statamic\Events\Data;

use Statamic\API\Path;
use Statamic\Assets\AssetFolder;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class AssetFolderDeleted extends Event implements DataEvent
{
    /**
     * @var AssetFolder
     */
    public $folder;

    /**
     * @var AssetContainer
     */
    public $container;

    /**
     * @var string
     */
    public $folder_path;

    /**
     * @var array
     */
    public $paths;

    /**
     * @param AssetFolder $folder
     * @param array  $paths      Any paths that have been deleted. They are relative to the asset container.
     */
    public function __construct(AssetFolder $folder, array $paths)
    {
        $this->folder = $folder;
        $this->container = $folder->container();
        $this->folder_path = $folder->path();
        $this->paths = $paths;
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
