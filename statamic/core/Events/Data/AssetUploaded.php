<?php

namespace Statamic\Events\Data;

use Statamic\API\Path;
use Statamic\Assets\Asset;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class AssetUploaded extends Event implements DataEvent
{
    /**
     * @var Asset
     */
    public $asset;

    /**
     * @param Asset $asset
     */
    public function __construct(Asset $asset)
    {
        $this->asset = $asset;
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
        return [Path::makeFull($this->asset->resolvedPath())];
    }
}
