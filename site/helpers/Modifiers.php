<?php

namespace Statamic\SiteHelpers;

use Illuminate\Support\Str;

class Modifiers
{
    public function toMetaDescription(string $value): string
    {
        $value = str_replace('</p><p>', '. ', $value);
        $value = strip_tags($value);
        $value = htmlspecialchars_decode($value);
        $value = Str::limit($value, 300);

        return $value;
    }
}
