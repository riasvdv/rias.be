<?php

namespace Statamic\Importing\Statamic;

use Statamic\API\Term;
use Statamic\API\Page;
use Statamic\API\Entry;
use Exception;
use Statamic\API\URL;
use Statamic\API\Cache;
use Statamic\Importing\Importer;

class StatamicImporter
{
    public function prepare($data)
    {
        if (! $data = json_decode($data, true)) {
            throw new Exception('Invalid export data format.');
        }

        return (new Preparer)->prepare($data);
    }

    public function summary($prepared)
    {
        $summary = [];

        foreach ($prepared['pages'] as $page_url => $page) {
            $summary['pages'][$page_url] = [
                'url' => $page_url,
                'title' => array_get($page, 'title'),
                'exists' => Page::uriExists($page_url),
                '_checked' => true,
            ];
        }

        foreach ($prepared['entries'] as $collection => $entries) {
            $duplicates = 0;
            $collection_entries = [];

            foreach ($entries as $slug => $entry) {
                if ($has_duplicates = Entry::slugExists($slug, $collection)) {
                    $duplicates++;
                }

                $collection_entries[$slug] = [
                    'slug' => $slug,
                    'exists' => $has_duplicates,
                    '_checked' => true,
                ];
            }

            $summary['collections'][$collection] = [
                'title' => $collection,
                'route' => $prepared['collections'][$collection]['route'],
                'entries' => $collection_entries,
                'duplicates' => $duplicates,
            ];
        }

        foreach ($prepared['terms'] as $taxonomy => $terms) {
            $taxonomy_terms = [];

            foreach ($terms as $slug => $term) {
                $taxonomy_terms[$slug] = [
                    'slug' => $slug,
                    'exists' => !! Term::whereSlug($slug, $taxonomy),
                    '_checked' => true,
                ];
            }

            $summary['taxonomies'][$taxonomy] = [
                'title' => $taxonomy,
                'route' => $prepared['taxonomies'][$taxonomy]['route'],
                'terms' => $taxonomy_terms,
                '_checked' => true,
            ];
        }

        foreach ($prepared['globals'] as $set => $vars) {
            $variables = [];

            foreach ($vars as $key => $value) {
                $variables[$key] = [
                    'key' => $key,
                    '_checked' => true,
                ];
            }

            $summary['globals'][$set] = compact('set', 'variables');
        }

        return $summary;
    }

    public function import($prepared, $summary)
    {
        (new Migrator)->migrate($prepared, $summary);
    }
}
