<?php

namespace Statamic\Events\Data;

use Statamic\API\Path;
use Statamic\Assets\Asset;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class AssetMoved extends Event implements DataEvent
{
    /**
     * @var Asset
     */
    public $asset;

    /**
     * @var string
     */
    public $oldPath;

    /**
     * @param Asset $asset
     * @param string $oldPath
     */
    public function __construct(Asset $asset, $oldPath)
    {
        $this->asset = $asset;
        $this->oldPath = $oldPath;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->asset->toArray();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [
            Path::makeFull($this->oldPath),
            Path::makeFull($this->asset->resolvedPath()),
            Path::makeFull($this->asset->container()->yamlPath()),
        ];
    }
}
