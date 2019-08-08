<?php

namespace Statamic\Events\Data;

use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class SettingsSaved extends Event implements DataEvent
{
    /**
     * @var string
     */
    public $path;

    /**
     * @var array
     */
    public $data;

    /**
     * @param string $path
     * @param array $data
     */
    public function __construct($path, array $data)
    {
        $this->path = $path;
        $this->data = $data;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->data;
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
