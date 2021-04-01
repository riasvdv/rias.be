<?php

use Illuminate\Support\Facades\Http;
use Illuminate\Support\HtmlString;
use Illuminate\Support\Str;
use Statamic\Facades\Entry;
use Statamic\Tags\Loader as TagLoader;
use Statamic\View\Antlers\Parser;

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

function statamic_tag(string $name, array $params = [], array $context = [])
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
        'context'    => $context,
        'tag'        => $name.':'.$original_method,
        'tag_method' => $original_method,
    ]);

    return $tag->$method();
}

function vite_assets(): HtmlString
{
    $devServerIsRunning = false;

    if (app()->environment('local')) {
        try {
            Http::get("http://localhost:3000");
            $devServerIsRunning = true;
        } catch (Exception) {
        }
    }

    if ($devServerIsRunning) {
        return new HtmlString(<<<HTML
            <script type="module" src="http://localhost:3000/@vite/client"></script>
            <script type="module" src="http://localhost:3000/resources/js/site.js"></script>
        HTML);
    }

    $manifest = json_decode(file_get_contents(
        public_path('build/manifest.json')
    ), true);

    $file = $manifest['resources/js/site.js']['file'];
    $css = $manifest['resources/js/site.js']['css'][0];

    return new HtmlString(<<<HTML
        <script type="module" src="/build/{$file}"></script>
        <link rel="stylesheet" href="/build/{$css}">
    HTML);
}
