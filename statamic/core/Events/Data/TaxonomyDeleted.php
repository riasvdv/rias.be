<?php

namespace Statamic\Events\Data;

use Statamic\API\Path;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Data\Taxonomies\Taxonomy;
use Statamic\Events\Event;

class TaxonomyDeleted extends Event implements DataEvent
{
    /**
     * @var Taxonomy
     */
    public $taxonomy;

    /**
     * @param Taxonomy $taxonomy
     */
    public function __construct(Taxonomy $taxonomy)
    {
        $this->taxonomy = $taxonomy;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->taxonomy->data();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [
            Path::makeFull($this->taxonomy->yamlPath()),
            settings_path('routes.yaml'),
        ];
    }
}
