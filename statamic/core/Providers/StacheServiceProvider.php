<?php

namespace Statamic\Providers;

use Exception;
use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Config;
use Statamic\API\Folder;
use Illuminate\Http\Request;
use Statamic\Stache\Loader;
use Statamic\Stache\Stache;
use Statamic\Stache\Manager;
use Illuminate\Support\ServiceProvider;
use Statamic\Stache\Persister;
use Statamic\Stache\NullLockStore;
use Statamic\Stache\UpdateManager;
use Symfony\Component\Lock\Factory;
use Statamic\Stache\TimeoutException;
use Statamic\Stache\EmptyStacheException;
use Symfony\Component\Lock\Store\FlockStore;
use Symfony\Component\Lock\Store\RedisStore;
use Statamic\Testing\Doubles\StacheTestManager;
use Symfony\Component\Lock\Store\RetryTillSaveStore;

class StacheServiceProvider extends ServiceProvider
{
    /**
     * Indicates if loading of the provider is deferred.
     *
     * @var bool
     */
    protected $defer = true;

    /**
     * @var Stache
     */
    private $stache;

    /**
     * @var Manager
     */
    protected $manager;

    /**
     * @var Request
     */
    private $request;

    /**
     * Register services
     *
     * @return void
     */
    public function register()
    {
        $this->registerStache();

        $this->registerManager();
    }

    /**
     * Register the Stache
     *
     * @return void
     */
    private function registerStache()
    {
        $this->stache = $this->app->make(Stache::class)->lock($this->lock());

        $this->app->singleton(Stache::class, function () {
            return $this->stache;
        });

        $this->app->alias(Stache::class, 'stache');
    }

    private function lock()
    {
        if (Config::get('caching.stache_lock_enabled', true)) {
            $store = (config('cache.default') === 'redis')
                ? $this->createRedisLockStore()
                : $this->createFileLockStore();
        } else {
            $store = new NullLockStore;
        }

        $name = config('cache.prefix') . ':stache-lock';

        return (new Factory($store))->createLock($name);
    }

    private function createRedisLockStore()
    {
        $redis = $this->app->make('redis')->connection();

        return new RetryTillSaveStore(new RedisStore($redis));
    }

    private function createFileLockStore()
    {
        Folder::make($dir = temp_path('locks'));

        return new FlockStore($dir);
    }

    /**
     * Register the Stache Manager
     *
     * @return void
     */
    private function registerManager()
    {
        $class = (app()->environment() === 'testing') ? StacheTestManager::class : Manager::class;

        $manager = new $class(
            $this->stache,
            new Loader($this->stache),
            new UpdateManager($this->stache),
            new Persister($this->stache)
        );

        $this->app->instance(Manager::class, $manager);
    }

    /**
     * Load the Stache
     *
     * @param \Illuminate\Http\Request $request
     */
    public function boot(Request $request)
    {
        $this->request = $request;

        $this->app->make(Stache::class)->locales(Config::getLocales());

        $this->manager = $this->app->make(Manager::class);

        $this->manager->registerDrivers();

        // If the config changed since the last request, we want to clear the Stache. This
        // includes routes and settings files. Changes here may affect how URIs and other
        // related values are calculated. It's better to just start from an empty slate.
        $this->clearOnConfigChange();

        // Should we update the stache?
        // This variable would be true or false based on a user setting whether
        // we should update on each request, or whether it's a glide route.
        $update = $this->shouldUpdateStache();

        try {
            // At this point the Stache is just an empty object. We'll want to load
            // (aka. 'hydrate') it. We'll also mark it as warmed. If it turns
            // out that it was empty/cold, the exception will adjust that.
            $this->manager->load();
            $this->stache->heat();
        } catch (EmptyStacheException $e) {
            // If the stache was empty, we need to be sure to update it. We also
            // want to mark it as "cold". Some services (like search indexing)
            // should not run on the initial warm up to prevent overloading.
            $update = true;
            $this->stache->cool();
        } catch (TimeoutException $e) {
            // On large sites, the Stache may take some time to update, especially from an
            // empty state. If another request hits Statamic while it's in the middle of
            // being built, it may use a half-created cache resulting in missing data.
            $this->outputRefreshResponse();
        }

        // If we've opted to update the Stache, we'll do so, and
        // then persist any updates so we can load it next time.
        if ($update) {
            $this->manager->update();
        }

        $this->stache->heat();
    }

    /**
     * Should the Stache get updated?
     *
     * @return bool
     */
    private function shouldUpdateStache()
    {
        // Always-updating settings is off? Short-circuit here. Don't update.
        if (! Config::get('caching.stache_always_update')) {
            return false;
        }

        // Is this a Glide route? We don't want to update for those.
        $glide_route = ltrim(Str::ensureRight(Config::get('assets.image_manipulation_route'), '/'), '/');
        if (Str::startsWith($this->request->path(), $glide_route)) {
            return false;
        }

        // Got this far? We'll update.
        return true;
    }

    /**
     * If the config has changed since last time, we want to clear the Stache.
     *
     * @return void
     */
    private function clearOnConfigChange()
    {
        if ($this->manager->hasConfigChanged()) {
            \Statamic\API\Stache::clear();
        }
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [Stache::class];
    }

    /**
     * When the Stache is being built, we'll output a refresh/redirect until it's ready.
     *
     * @return void
     */
    private function outputRefreshResponse()
    {
        if ($this->isAjaxRequest()) {
            http_response_code(503);
            exit(t('stache_building'));
        }

        $html = sprintf('<meta http-equiv="refresh" content="1; URL=\'%s\'" />', request()->getUri());

        exit($html);
    }

    private function isAjaxRequest()
    {
        return request()->ajax() || request()->wantsJson();
    }
}
