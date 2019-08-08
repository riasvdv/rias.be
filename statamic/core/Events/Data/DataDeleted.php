<?php

namespace Statamic\Events\Data;

use Statamic\API\File;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class DataDeleted extends Event implements DataEvent
{
    /**
     * @var string
     */
    public $id;

    /**
     * @var array
     */
    public $paths;

    /**
     * @param string $id
     * @param array  $paths
     */
    public function __construct($id, array $paths)
    {
        $this->id = $id;
        $this->paths = $paths;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return ['id' => $this->id];
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        $disk = isset($this->disk) ? $this->disk : 'content';
        $pathPrefix = File::disk($disk)->filesystem()->getAdapter()->getPathPrefix();

        return collect($this->paths)->map(function ($path) use ($pathPrefix) {
            return $pathPrefix . $path;
        })->all();
    }
}
