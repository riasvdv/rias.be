<?php

namespace Statamic\Stache;

use Illuminate\Support\Collection;
use Statamic\API\Cache;
use Statamic\API\File;

class Persister
{
    /**
     * @var \Statamic\Stache\Stache
     */
    private $stache;

    /**
     * @var Collection
     */
    private $meta;

    /**
     * @var Collection
     */
    private $items;

    /**
     * @var Collection
     */
    private $keys;

    /**
     * @param \Statamic\Stache\Stache $stache
     */
    public function __construct(Stache $stache)
    {
        $this->stache = $stache;
        $this->items = collect();
    }

    /**
     * Persist the Stache to Cache
     *
     * @param Collection $updates  Repos that need to be persisted
     */
    public function persist($updates)
    {
        // Compile all the cacheable data in preparation for writing it into the cache.
        $this->compile($updates);

        // Write all the data to the cache. We will make sure to acquire a lock while doing
        // this to prevent other requests from loading an incompletely written cache.
        if ($this->stache->lock()->acquire(true)) {
            $this->cache();
            $this->stache->lock()->release();
        }
    }

    protected function compile($updates)
    {
        // Get the meta from the stache
        $this->meta = collect($this->stache->meta());
        $this->keys = collect($this->stache->keys());

        // Loop through all the updated repos and format their data according to
        // how their driver has specified it. Put the data into arrays
        // that we can loop over in a moment.
        $updates->unique()->each(function ($key) {
            $repo = $this->stache->repo($key);

            $arr = $this->stache->driver($key)->toPersistentArray($repo);

            $this->meta->put($key, $arr['meta']);

            if (isset($arr['items'])) {
                $this->items->put($key, $arr['items']);
            }
        });
    }

    protected function cache()
    {
        // Persist the taxonomies
        $this->store('taxonomies/data', $this->stache->taxonomies->toPersistableArray());
        $this->keys[] = 'taxonomies/data';

        // Loop through all the item objects which each driver has organized
        // into folders. These are separate because it has the potential to
        // be quite large. These will be lazy loaded to prevent overhead.
        $this->items->each(function ($folders, $key) {
            collect($folders)->each(function ($data, $folder) use ($key) {
                $keyed = $key . '/' . $folder;
                $this->store($keyed, $data);
                $this->keys->push($keyed);
            });
        });

        // Store meta data separately. This will be simple data that can
        // be loaded all the time with minimal overhead.
        $this->stache->meta($meta = $this->meta->all());
        $this->store('meta', $meta);
        $this->stache->keys($keys = $this->keys->unique()->all());
        $this->store('keys', $keys);
    }

    /**
     * Store the value
     *
     * @param string $key
     * @param mixed $value
     */
    private function store($key, $value)
    {
        Cache::put("stache::$key", $value);
    }
}
