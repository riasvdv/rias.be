<?php

namespace Statamic\Events\Data;

use Statamic\API\Path;
use Statamic\CP\Fieldset;
use Statamic\Contracts\Data\DataEvent;
use Statamic\Events\Event;

class FieldsetDeleted extends Event implements DataEvent
{
    /**
     * @var Fieldset
     */
    private $fieldset;

    /**
     * @param Fieldset $fieldset
     */
    public function __construct(Fieldset $fieldset)
    {
        $this->fieldset = $fieldset;
    }

    /**
     * Get contextual data related to event.
     *
     * @return array
     */
    public function contextualData()
    {
        return $this->fieldset->toArray();
    }

    /**
     * Get paths affected by event.
     *
     * @return array
     */
    public function affectedPaths()
    {
        return [Path::makeFull($this->fieldset->path())];
    }
}
