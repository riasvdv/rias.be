<?php

namespace Statamic\Providers;

use Statamic\Extend\ServiceProvider;
use Illuminate\Contracts\Events\Dispatcher;

class OAuthServiceProvider extends ServiceProvider
{
    /**
     * The OAuth route
     *
     * @var string
     */
    public $oauth_route = 'oauth';

    /**
     * An array of oauth providers and their listeners
     *
     * @var array
     */
    protected $oauth_providers = [];

    /**
     * Boot the service provider
     *
     * @param \Illuminate\Contracts\Events\Dispatcher $events
     * @return void
     */
    public function boot(Dispatcher $events)
    {
        // Don't try to add listeners when running in the console.
        if (refreshing_addons()) {
            return;
        }

        // For each provider, we'll dynamically assign the redirect URL, since Statamic will
        // handle the OAuth logic. Then, if a listener has been provided (in the case of
        // a custom provider) we'll register the listener into the event dispatcher.
        foreach ($this->oauth_providers as $provider => $data) {
            config(["services.$provider.redirect" => route('oauth.callback', $provider)]);

            // If only a string was provided, we assume this was the listener.
            if (is_string($data)) {
                $data = ['listener' => $data];
            }

            if ($listener = array_get($data, 'listener')) {
                $events->listen('SocialiteProviders\Manager\SocialiteWasCalled', $listener);
            }
        }
    }

    /**
     * Register the service provider
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('oauth.bridge', function () {
            return new static($this->app);
        });
    }

    /**
     * Get the OAuth providers
     *
     * @return array
     */
    public function getProviders()
    {
        return $this->oauth_providers;
    }

    /**
     * Get the OAuth route
     *
     * @return string
     */
    public function getRoute()
    {
        return $this->oauth_route;
    }
}