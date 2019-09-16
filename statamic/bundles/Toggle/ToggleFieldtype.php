<?php

namespace Statamic\Addons\Toggle;

use Statamic\Extend\Fieldtype;

class ToggleFieldtype extends Fieldtype
{
    public $category = ['pickable', 'special'];

    public function process($data)
    {
        return (bool) $data;
    }

    public function canHaveDefault()
    {
        return true;
    }
}
