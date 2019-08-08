<?php

namespace Statamic\Stache\Listeners;

use Statamic\API\Str;
use Statamic\Stache\Stache;
use Statamic\Stache\Persister;
use Statamic\Providers\StacheServiceProvider;

class PersistStache
{
    public function handle($event)
    {
        // If the Stache was never loaded, don't bother doing anything.
        if (! $this->stacheLoaded()) {
            return;
        }

        // Get the keys of the repos that have been updated. If an aggregate repo
        // was updated, we'll just grab the base repo key (before the ::).
        $updates = app(Stache::class)->updated()->map(function ($key) {
            if (Str::contains($key, '::')) {
                $key = explode('::', $key)[0];
            }

            return $key;
        });

        if ($updates->count()) {
            app(Persister::class)->persist($updates);
        }
    }

    /**
     * Check if the Stache provider was ever registered
     *
     * @return bool
     */
    private function stacheLoaded()
    {
        return in_array(
            StacheServiceProvider::class,
            array_keys(app()->getLoadedProviders())
        );
    }
}
