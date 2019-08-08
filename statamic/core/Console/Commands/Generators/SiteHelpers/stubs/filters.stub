<?php

namespace Statamic\SiteHelpers;

use Statamic\Extend\Filter;

class Filters extends Filter
{
    /**
     * Maps to {{ collection:handle filter="example" }}
     *
     * @param \Illuminate\Support\Collection $collection
     * @return \Illuminate\Support\Collection
     */
    public function example($collection)
    {
        return $collection->filter(function ($entry) {
            return $entry;
        });
    }
}
