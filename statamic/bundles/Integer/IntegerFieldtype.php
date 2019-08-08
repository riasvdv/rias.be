<?php

namespace Statamic\Addons\Integer;

use Statamic\Extend\Fieldtype;

class IntegerFieldtype extends Fieldtype
{
    public $category = ['special'];

    public function process($data)
    {

        if ($data === null || $data === '') {
            return null;
        }

        return (int) $data;
    }
}
