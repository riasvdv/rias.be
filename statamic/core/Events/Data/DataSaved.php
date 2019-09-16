<?php

namespace Statamic\Events\Data;

use Statamic\API\File;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Data\Data;
use Statamic\Events\Event;

class DataSaved extends Event implements DataEvent
{
    /**
     * @var Data
     */
    public $data;

    /**
     * @var array
     */
    public $original;

    /**
     * @var array
     */
    public $oldPaths = [];

    /**
     * @param Data $data
     * @param array $original
     * @param array $oldPaths
     */
    public function __construct(Data $data, $original, $oldPaths = [])
    {
        $this->data = $data;
        $this->original = $original;
        $this->oldPaths = $oldPaths;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->data->toArray();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return collect($this->data->locales())->map(function ($locale) {
            return $this->data->localizedPath($locale);
        })->merge($this->oldPaths)->map(function ($path) {
            return $this->fullPath($path);
        })->unique()->all();
    }

    /**
     * Build full path from relative path.
     *
     * @param string $path
     * @return string
     */
    protected function fullPath($path)
    {
        $disk = isset($this->disk) ? $this->disk : 'content';
        $pathPrefix = File::disk($disk)->filesystem()->getAdapter()->getPathPrefix();

        return $pathPrefix . $path;
    }
}
