<?php

namespace Statamic\SiteHelpers;

use Exception;
use Illuminate\Support\Str;
use Statamic\Extend\Tags as AbstractTags;

class Tags extends AbstractTags
{
    public function mix()
    {
        $manifest = STATAMIC_ROOT.'/mix-manifest.json';

        if (! file_exists($manifest)) {
            throw new Exception("Could not find {$manifest}");
        }

        $path = $this->getParam('url');
        if (!Str::startsWith($path, '/')) {
            $path = "/{$path}";
        }

        $manifest = json_decode(file_get_contents($manifest), true);

        if (! isset($manifest[$path])) {
            throw new Exception("{$path} not found in mix-manifest.");
        }

        return $manifest[$path];
    }

}
