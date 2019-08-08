<?php

namespace Statamic\Events\Data;

use Statamic\API\File;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class PagesMoved extends Event implements DataEvent
{
    /**
     * @var \Illuminate\Support\Collection
     */
    public $pages;

    /**
     * @param array $pages  A multidimensional array containing a Page object, a 'from' path, and a 'to' path.
     */
    public function __construct($pages)
    {
        $this->pages = collect($pages);
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->pages->map(function ($page) {
            $page['page'] = $page['page']->toArray();
            return $page;
        })->all();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        $pathPrefix = File::disk('content')->filesystem()->getAdapter()->getPathPrefix();

        return $this->pages->reduce(function ($carry, $page) use ($pathPrefix) {
            return array_merge($carry, [
                $pathPrefix . $page['from'],
                $pathPrefix . $page['to']
            ]);
        }, []);
    }
}
