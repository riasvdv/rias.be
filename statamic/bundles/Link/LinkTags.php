<?php

namespace Statamic\Addons\Link;

use Statamic\API\Data;
use Statamic\Addons\Path\PathTags;

class LinkTags extends PathTags
{
    public function __call($method, $args)
    {
        if ($data = Data::find($this->tag_method)) {
            return $data->in(site_locale())->absoluteUrl();
        }
    }
}
