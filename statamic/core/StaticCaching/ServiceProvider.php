<?php

namespace Statamic\StaticCaching;

use Illuminate\Cache\Repository;
use Statamic\API\Config;
use Illuminate\Support\ServiceProvider as LaravelServiceProvider;
use Statamic\API\Str;

class ServiceProvider extends LaravelServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = true;

    /**
     * Register services
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(Cacher::class, function () {
            $cache = app(Repository::class);
            $config = $this->getStaticCachingConfig();

            return ($config['type'] === 'file')
                ? new FileCacher(new Writer, $cache, $config)
                : new ApplicationCacher($cache, $config);
        });

        $this->commands(ClearStaticCommand::class);
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [Cacher::class];
    }

    private function getStaticCachingConfig()
    {
        $config = [];
        $prefix = 'static_caching_';

        foreach (Config::get('caching', []) as $key => $value) {
            if (Str::startsWith($key, $prefix)) {
                $key = Str::removeLeft($key, $prefix);
                $config[$key] = $value;
            }
        }

        $config['base_url'] = $this->app['request']->root();
        $config['locale'] = site_locale();

        return $config;
    }
}
