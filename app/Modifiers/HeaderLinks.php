<?php

namespace App\Modifiers;

use Statamic\Modifiers\Modifier;
use Statamic\Support\Str;

class HeaderLinks extends Modifier
{
    public function index($value, $params, $context)
    {
        preg_match('/<h[1-6]>.*<\/h[1-6]>/', $value, $matches);

        foreach ($matches as $match) {
            $content = strip_tags($match);
            $slug = Str::slug($content);
            $replacement = preg_replace('/<(h[1-6])>(.*)(<\/h[1-6]>)/', '<$1 id="'.$slug.'" class="group">$2<a class="permalink opacity-0 group-hover:opacity-100 animate text-2xl" href="#'.$slug.'">#</a>$3', $match);
            $value = str_replace($match, $replacement, $value);
        }

        return $value;
    }
}
