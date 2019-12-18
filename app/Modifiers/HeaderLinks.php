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
            $replacement = preg_replace('/<(h[1-6])>(.*)(<\/h[1-6]>)/', '<$1 id="'.$slug.'">$2<a class="permalink" href="#'.$slug.'">#</a>$3', $match);
            $value = str_replace($match, $replacement, $value);
        }

        return $value;
    }
}
