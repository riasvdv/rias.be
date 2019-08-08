<?php

namespace Statamic\Providers;

use Statamic\API\Helper;
use Statamic\Extend\Management\AddonRepository;
use Illuminate\Contracts\Events\Dispatcher as DispatcherContract;
use Illuminate\Foundation\Support\Providers\EventServiceProvider as ServiceProvider;

class EventServiceProvider extends ServiceProvider
{
    protected $listen = [
        \Statamic\Events\DataIdCreated::class => [
            \Statamic\Stache\Listeners\SaveCreatedId::class
        ],
        'kernel.handled' => [
            \Statamic\Stache\Listeners\PersistStache::class
        ]
    ];

    protected $subscribe = [
        \Statamic\Stache\Listeners\UpdateItem::class,
        \Statamic\Data\Taxonomies\TermTracker::class,
        \Statamic\Listeners\GeneratePresetImageManipulations::class,
        \Statamic\StaticCaching\Invalidator::class,
    ];

    public function register()
    {
        //
    }

    public function boot(DispatcherContract $dispatcher)
    {
        parent::boot($dispatcher);

        if (refreshing_addons()) {
            return;
        }

        // Register all the events specified in each listener class
        foreach ($this->app->make(AddonRepository::class)->listeners()->installed()->classes() as $class) {
            $listener = app($class);

            foreach ($listener->events as $event => $methods) {
                foreach (Helper::ensureArray($methods) as $method) {
                    $dispatcher->listen($event, [$listener, $method]);
                }
            }
        }
    }
}
