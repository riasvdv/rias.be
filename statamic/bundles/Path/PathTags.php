<?php

namespace Statamic\Addons\Path;

use Statamic\API\URL;
use Statamic\API\Data;
use Statamic\API\Path;
use Statamic\API\Config;
use Statamic\Extend\Tags;

class PathTags extends Tags
{
    /**
     * Maps to the {{ path }} tag
     *
     * @return string
     */
    public function index()
    {
        // If no src param was used, we will treat this as a regular `path` variable.
        if (! $src = $this->get(['src', 'to'])) {
            return array_get($this->context, 'path');
        }

        // Check if the string is an ID so we can relate the data.
        if (is_id($src)) {
            if ($data = Data::find($src)) {
                return $data->in(site_locale())->absoluteUrl();
            }
        }

        // Ensure the string is a valid link.
        $url = Path::tidy(Config::getSiteUrl() . $src);

        if ($this->getBool('absolute', false)) {
            $url = URL::makeAbsolute($url);
        }

        return $url;
    }
}
