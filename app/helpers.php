<?php

use Illuminate\Support\Str;
use Statamic\Facades\Entry;
use Statamic\Modifiers\Modify;
use Statamic\Tags\Loader as TagLoader;
use Statamic\View\Antlers\Parser;

function modify($value): Modify
{
    return Modify::value($value);
}

function collection(string $handle, bool $all = false): \Statamic\Stache\Query\EntryQueryBuilder
{
    /** @var \Statamic\Stache\Query\EntryQueryBuilder $query */
    $query = Entry::query();

    if ($handle !== '*') {
        $query->whereIn('collection', explode('|', $handle));
    }

    if (! $all) {
        $query->where('status', 'published');
    }

    return $query;
}

function tag(string $name, array $params = []): mixed
{
    if ($pos = strpos($name, ':')) {
        $original_method = substr($name, $pos + 1);
        $method = Str::camel($original_method);
        $name = substr($name, 0, $pos);
    } else {
        $method = $original_method = 'index';
    }

    $tag = app(TagLoader::class)->load($name, [
        'parser'     => app(Parser::class),
        'params'     => $params,
        'content'    => '',
        'context'    => [],
        'tag'        => $name.':'.$original_method,
        'tag_method' => $original_method,
    ]);

    return $tag->$method();

    //return call_user_func([$tag, $method]);
}
