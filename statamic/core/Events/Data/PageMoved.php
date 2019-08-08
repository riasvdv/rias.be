<?php

namespace Statamic\Events\Data;

use Statamic\API\File;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Data\Pages\Page;
use Statamic\Events\Event;

class PageMoved extends Event implements DataEvent
{
    /**
     * @var Page
     */
    public $page;

    /**
     * @var string
     */
    public $oldPath;

    /**
     * @var string
     */
    public $newPath;

    /**
     * @param Page $page
     * @param string $oldPath
     */
    public function __construct(Page $page, $oldPath, $newPath)
    {
        $this->page = $page;
        $this->oldPath = $oldPath;
        $this->newPath = $newPath;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->page->toArray();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        $pathPrefix = File::disk('content')->filesystem()->getAdapter()->getPathPrefix();

        return [
            $pathPrefix . $this->oldPath,
            $pathPrefix . $this->newPath,
        ];
    }
}
