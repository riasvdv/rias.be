<?php

namespace Statamic\Importing\Statamic;

use Statamic\API\Str;
use Statamic\API\URL;
use Statamic\API\Helper;

class Preparer
{
    private $data;
    private $migration = [];

    public function prepare(array $data)
    {
        $this->data = $data;

        if (! isset($this->data['pages']) || ! is_array($this->data['pages'])) {
            $this->data['pages'] = [];
        }

        ksort($this->data['pages']);

        $this->migration = [
            'taxonomies' => collect(),
            'terms' => collect(),
            'collections' => collect(),
            'entries' => collect(),
            'pages' => collect($this->data['pages']),
            'globals' => collect()
        ];

        $this->createTaxonomies();
        $this->createCollections();
        $this->createGlobals();

        return $this->migration;
    }

    private function createTaxonomies()
    {
        if (! isset($this->data['taxonomies'])) {
            return;
        }

        foreach ($this->data['taxonomies'] as $taxonomy_name => $terms) {
            $this->migration['taxonomies']->put($taxonomy_name, [
                'title' => Str::title($taxonomy_name),
                'route' => '/'.$taxonomy_name.'/{slug}'
            ]);

            $this->migration['terms']->put($taxonomy_name, collect());

            foreach ($terms as $slug => $term_data) {
                // Older versions of the importer saved the slugs of the terms to the json.
                // We longer need to do that. This can be removed, but keeping it here
                // for temporary backwards compatibility.
                if (is_string($term_data)) {
                    continue;
                }

                $this->migration['terms'][$taxonomy_name]->put($slug, $term_data);
            }
        }
    }

    private function createCollections()
    {
        if (! isset($this->data['collections'])) {
            return;
        }

        foreach (array_get($this->data, 'collections', []) as $name => $entries) {
            $this->createCollection($name, $entries);
            $this->createEntries($name, $entries);
        }
    }

    /**
     * Create a collection
     *
     * @param  string $collection
     * @param  array  $entries
     * @return void
     */
    private function createCollection($collection, $entries)
    {
        $route = '/'.$collection.'/{slug}';

        $collection = str_replace('/', '-', $collection);

        $entry = reset($entries);

        $order = $entry['order'];
        if (is_string($order)) {
            $type = 'date';
        } elseif (is_int($order)) {
            $type = 'number';
        } else {
            $type = 'alphabetical';
        }

        $this->migration['collections']->put($collection, [
            'order' => $type,
            'route' => $route
        ]);

        $this->migration['entries']->put($collection, collect());
    }

    /**
     * Create the entries in a collection
     *
     * @param  string $collection
     * @param  array  $entries
     * @return void
     */
    private function createEntries($collection, $entries)
    {
        foreach ($entries as $url => $data) {
            $slug = URL::slug($url);

            $this->migration['entries'][str_replace('/', '-', $collection)]->put($slug, $data);
        }
    }

    /**
     * Replace slugs in taxonomy fields with their IDs
     *
     * @param  array $data  The array of data to modify
     * @return array        The modified array
     */
    private function replaceTaxonomies($data)
    {
        foreach ($data as $field_name => &$value) {
            if (! $this->isTaxonomyField($field_name)) {
                continue;
            }

            $is_string = false;
            if (is_string($value)) {
                $is_string = true;
                $value = [$value];
            }

            foreach ($value as $i => $slug) {
                // Replace the slug with the ID. If it's not found for whatever reason,
                // we'll just leave the slug as-is.
                $value[$i] = array_get($this->migration['terms'][$field_name]->get($slug), 'id', $slug);
            }

            if ($is_string) {
                $value = reset($value);
            }
        }

        return $data;
    }

    /**
     * Is a given $key a taxonomy field name?
     *
     * @param  string  $key
     * @return boolean
     */
    private function isTaxonomyField($key)
    {
        return $this->migration['taxonomies']->has($key);
    }

    /**
     * Create globals
     *
     * @return void
     */
    private function createGlobals()
    {
        if (! isset($this->data['globals'])) {
            return;
        }

        $globals = $this->data['globals'];

        // If there are globals in "settings", we'll merge them in with "global"
        // instead of creating a set named "settings. That could get weird.
        if ($settings = array_get($globals, 'settings')) {
            $globals['global'] = array_merge(
                array_get($globals, 'global', []),
                $settings
            );
            unset($globals['settings']);
        }

        $this->migration['globals'] = $globals;
    }
}
