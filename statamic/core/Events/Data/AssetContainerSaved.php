<?php

namespace Statamic\Events\Data;

use Statamic\API\Path;
use Statamic\Assets\AssetContainer;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class AssetContainerSaved extends Event implements DataEvent
{
    /**
     * @var AssetContainer
     */
    public $container;

    /**
     * @param AssetContainer $container
     */
    public function __construct(AssetContainer $container)
    {
        $this->container = $container;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->container->data();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [Path::makeFull($this->container->yamlPath())];
    }
}
