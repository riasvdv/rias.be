<?php

namespace Statamic\Addons\Cache;

use Statamic\API\URL;
use Statamic\API\Config;
use Statamic\Extend\Tags;

class CacheTags extends Tags
{
    /**
     * The {{ cache }} tag
     *
     * @return string
     */
    public function index()
    {
        // If disabled, do nothing.
        if (! $this->isEnabled()) {
            return $this->parse([]);
        }

        // Create a hash so we can identify it. Include the URL in the hash if this is scoped to the page.
        $hash = ($this->get('scope', 'site') === 'page')
            ? md5(URL::makeAbsolute(URL::getCurrent()) . $this->content)
            : md5($this->content);

        $path = 'troves:' . $hash;

        if (! $this->cache->exists($path)) {
            $html = $this->parse([], $this->context);

            $this->cache->put($path, $html, $this->getCacheLength());
        }

        return $this->cache->get($path);
    }

    private function isEnabled()
    {
        if (! Config::get('caching.cache_tags_enabled')) {
            return false;
        }

        // Only get requests. This disables the cache during live preview.
        return request()->method() === 'GET';
    }

    private function getCacheLength()
    {
        if (! $length = $this->get('for')) {
            return null;
        }

        $time = carbon('+' . $length);

        return carbon('now')->diffInMinutes($time);
    }
}
