<?php

namespace Statamic\Addons\Tags;

use Statamic\Extend\Fieldtype;

class TagsFieldtype extends Fieldtype
{
    public $category = ['structured', 'text'];

    public function preProcess($data)
    {
        return ($data) ? $data : [];
    }

    public function process($data)
    {
        if ($data == ['']) {
            return null;
        }

        return $data;
    }
}
