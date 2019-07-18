<?php

namespace Statamic\Importing\Statamic;

use Statamic\API\Collection;
use Statamic\API\GlobalSet;
use Statamic\API\Page;
use Statamic\API\Entry;
use Statamic\API\Taxonomy;
use Statamic\API\Term;

class Migrator
{
    /**
     * The migration array
     *
     * @var array
     */
    private $migration;

    /**
     * The summary array
     *
     * @var array
     */
    private $summary;

    /**
     * Perform the migration
     *
     * @param $migration
     * @param $summary
     */
    public function migrate($migration, $summary)
    {
        $this->migration = $this->prepareMigration($migration);
        $this->summary = $summary;

        $this->createTaxonomies();
        $this->createTaxonomyTerms();

        $this->createCollections();
        $this->createEntries();

        $this->createPages();

        $this->createGlobals();
    }

    /**
     * Prepare the migration
     *
     * @param array $migration
     * @return array
     */
    private function prepareMigration($migration)
    {
        $migration['pages'] = collect($this->sortDeepest(array_get($migration, 'pages', [])->all()));

        return $migration;
    }

    /**
     * Sort an array by folder depth (amount of slashes)
     *
     * @param  array $arr An array with paths for keys
     * @return array      The sorted array
     */
    private function sortDeepest($arr)
    {
        uksort($arr, function ($a, $b) {
            return (substr_count($a, '/') >= substr_count($b, '/')) ? 1 : -1;
        });

        // Move homepage to top
        if (isset($arr['/'])) {
            $arr = ['/' => $arr['/']] + $arr;
        }

        return $arr;
    }

    /**
     * Create taxonomies
     *
     * @return void
     */
    private function createTaxonomies()
    {
        foreach (array_get($this->migration, 'taxonomies', []) as $taxonomy_slug => $taxonomy_data) {
            $taxonomy = Taxonomy::create($taxonomy_slug);

            $taxonomy->route($taxonomy_data['route']);
            unset($taxonomy_data['route']);

            $taxonomy->data($taxonomy_data);

            $taxonomy->save();
        }
    }

    /**
     * Create taxonomy terms
     *
     * @return void
     */
    private function createTaxonomyTerms()
    {
        foreach (array_get($this->migration, 'terms', []) as $taxonomy_slug => $terms) {
            foreach ($terms as $term_slug => $term_data) {
                // Skip if this term was not checked in the summary.
                if (! $this->summary['taxonomies'][$taxonomy_slug]['terms'][$term_slug]['_checked']) {
                    continue;
                }

                Term::create($term_slug)->taxonomy($taxonomy_slug)->with($term_data)->save();
            }
        }
    }

    /**
     * Create collections
     *
     * @return void
     */
    private function createCollections()
    {
        foreach (array_get($this->migration, 'collections', []) as $handle => $data) {
            $collection = Collection::create($handle);

            $collection->route($data['route']);
            unset($data['route']);

            $collection->data($data);

            $collection->save();
        }
    }

    /**
     * Create entries
     *
     * @return void
     */
    private function createEntries()
    {
        foreach ($this->migration['entries'] as $collection => $entries) {
            foreach ($entries as $slug => $meta) {
                // Skip if this entry was not checked in the summary.
                if (! $this->summary['collections'][$collection]['entries'][$slug]['_checked']) {
                    continue;
                }

                $entry = Entry::create($slug)
                              ->collection($collection)
                              ->with($meta['data']);

                if ($meta['order']) {
                    $entry->order($meta['order']);
                }

                $entry->get()->save();
            }
        }
    }

    /**
     * Create pages
     *
     * @return void
     */
    private function createPages()
    {
        foreach ($this->migration['pages'] as $url => $meta) {
            // Skip if this page was not checked in the summary.
            if (! $this->summary['pages'][$url]['_checked']) {
                continue;
            }

            $page = Page::create($url)->with($meta['data']);

            if ($order = array_get($meta, 'order')) {
                $page->order($order);
            }

            $page = $page->get();

            $page->ensureId();
            $page->save();
        }
    }

    private function createGlobals()
    {
        foreach ($this->migration['globals'] as $set_name => $variables) {
            $global = GlobalSet::whereHandle($set_name) ?: GlobalSet::create($set_name)->get();

            foreach ($variables as $key => $value) {
                if (! $this->summary['globals'][$set_name]['variables'][$key]['_checked']) {
                    unset($variables[$key]);
                }
            }

            $data = array_merge($global->data(), $variables);

            $global->data($data);

            $global->save();
        }
    }
}
