<?php

namespace Statamic\Providers;

use Statamic\API\Config;
use AlgoliaSearch\Client;
use Statamic\Search\Search;
use Statamic\Search\ItemResolver;
use Statamic\Search\Algolia\Index;
use Illuminate\Support\ServiceProvider;

class SearchServiceProvider extends ServiceProvider
{
    protected $defer = true;

    public function provides()
    {
        return [Search::class, 'search.algolia.client'];
    }

    /**
     * Register the service provider.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Search::class, function () {
            return new Search([
                'default_driver' => Config::get('search.driver'),
                'default_index' => Config::get('search.default_index'),
            ], \Statamic\API\Search::indexes());
        });

        $this->app->bind(Index::class, function () {
            return new Index(app(ItemResolver::class), app('search.algolia.client'));
        });

        $this->app->bind('search.algolia.client', function () {
            return new Client(
                Config::get('search.algolia_app_id'),
                Config::get('search.algolia_api_key')
            );
        });
    }
}
