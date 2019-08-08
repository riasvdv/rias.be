<?php

namespace Statamic\Events\Data;

use Statamic\Events\Event;

class FindingFieldset extends Event
{
    public $fieldset;
    public $type;
    public $data;

    public function __construct($fieldset, $type, $data)
    {
        $this->fieldset = $fieldset;
        $this->type = $type;
        $this->data = $data;
    }
}
