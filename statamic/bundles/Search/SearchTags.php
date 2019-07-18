<?php

namespace Statamic\Addons\Search;

use Statamic\API\Config;
use Statamic\API\Str;
use Statamic\API\Search;
use Statamic\API\Content;
use Statamic\Addons\Collection\CollectionTags;
use Statamic\Search\IndexNotFoundException;

class SearchTags extends CollectionTags
{
    /**
     * The search query
     *
     * @var string
     */
    protected $query;

    /**
     * The locale to search within.
     *
     * @var string
     */
    protected $locale;

    /**
     * The {{ search }} tag. An alias of search:results
     *
     * @return string
     */
    public function index()
    {
        return $this->results();
    }

    /**
     * The {{ search:results }} tag
     *
     * @return string
     */
    public function results()
    {
        if (! $this->query = $this->getQuery()) {
            return $this->parseNoResults();
        }

        $this->locale = $this->get('locale', site_locale());

        try {
            $this->collection = $this->buildSearchCollection();
        } catch (IndexNotFoundException $e) {
            \Log::debug($e->getMessage());
            return $this->parseNoResults();
        }

        // By default, each item from the search index will be replaced with the corresponding
        // data object. This has extra overhead, so if the user only needs to display data
        // already in the index, then this can be disabled for a speed boost.
        if ($this->getBool('supplement_data', true)) {
            $this->convertSearchResultsToContent();

            // Convert taxonomy fields to actual taxonomy terms.
            // This will allow taxonomy term data to be available in the template without additional tags.
            // If terms are not needed, there's a slight performance benefit in disabling this.
            if ($this->getBool('supplement_taxonomies', true)) {
                $this->collection = $this->collection->supplementTaxonomies();
            }

            $this->collection = $this->collection->localize($this->locale);

            $this->filter(false);
        }

        $this->limit();

        if ($this->collection->isEmpty()) {
            return $this->parseNoResults();
        }

        return $this->output();
    }

    protected function getSortOrder()
    {
        return $this->get('sort', 'search_score:desc');
    }

    protected function getQuery()
    {
         $query = request()->query($this->get('param', 'q'));

         return trim($query);
    }

    /**
     * Perform a search and generate a collection
     *
     * @return \Illuminate\Support\Collection
     */
    protected function buildSearchCollection()
    {
        $index = ($collection = $this->get('collection'))
            ? 'collections/' . $collection
            : Config::get('search.default_index');

        // The index name should have the locale appended. eg. index_fr
        // The default locale will *not* have the locale appended.
        $localizedIndex = $this->locale === default_locale() ? $index : "{$index}_{$this->locale}";

        // If a localized version doesn't exist, we'll just use the regular index name.
        $index = Search::indexExists($localizedIndex) ? $localizedIndex : $index;

        return Search::in($index)->search($this->query, $this->getList('fields'));
    }

    protected function convertSearchResultsToContent()
    {
        $collection = $this->collection->map(function ($result) {
            if (! $content = Content::find($result['id'])) {
                return null;
            }

            return $content;
        })->filter();

        $this->collection = collect_content($collection);
    }
}
