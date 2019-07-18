<?php

namespace Statamic\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Translation\FileLoader;
use Statamic\Translation\Translator;

class TranslationServiceProvider extends ServiceProvider
{
    /**
     * Defer the service provider.
     *
     * @var bool
     */
    protected $defer = true;

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
    }

    /**
     * Register any application services.
     *
     * Store the default translations (the core translations) to a fallback
     * instance. Use the fallback when the translation isn't found in the
     * user's local translations.
     *
     * @return void
     */
    public function register()
    {
        $this->registerFileLoader('translation.loader', site_path('lang'));

        $this->registerFileLoader('translation.loader.fallback', $this->app['path.lang']);

        $this->app->singleton('translator', function ($app) {
            $loader = $app['translation.loader'];

            $locale = $app['config']['app.locale'];

            $trans = new Translator($loader, $locale);

            $trans->setFallback($app['config']['app.fallback_locale']);

            return $trans;
        });
    }

    /**
     * Register a file loader.
     *
     * @param  string  $abstract
     * @param  string  $path
     * @return void
     */
    protected function registerFileLoader($abstract, $path)
    {
        $this->app->singleton($abstract, function ($app) use ($path) {
            return new FileLoader($app['files'], $path);
        });
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return ['translator', 'translation.loader', 'translation.loader.fallback'];
    }
}
