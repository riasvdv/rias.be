<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
use Statamic\Support\Str;

class ToMetaDescription extends Modifier
{
    public function index($value)
    {
        $value = str_replace('</p><p>', '. ', $value);
        $value = strip_tags($value);
        $value = htmlspecialchars_decode($value);
        $value = Str::limit($value, 300);

        return $value;
    }
}
