<?php

namespace Statamic\Addons\Suggest;

use Statamic\Exceptions\FatalException;
use Statamic\Extend\Fieldtype;

class SuggestFieldtype extends Fieldtype
{
    public $category = ['pickable', 'relationship'];

    public function blank()
    {
        return [];
    }

    public function preProcess($data)
    {
        if ($this->getFieldConfig('max_items') === 1) {
            $data = [$data];
        }

        return $data;
    }

    public function process($data)
    {
        $maxItems = (int) $this->getFieldConfig('max_items');

        if ($maxItems === 1 && is_array($data)) {
            $data = reset($data);
        }

        return $data;
    }
}
