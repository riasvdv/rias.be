<?php

namespace Statamic\Events\Data;

use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class FileUploaded extends Event implements DataEvent
{
    /**
     * @var string
     */
    public $path;

    /**
     * @param string $path
     */
    public function __construct($path)
    {
        $this->path = $path;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return [];
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [$this->path];
    }
}
