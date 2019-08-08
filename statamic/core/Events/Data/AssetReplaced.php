<?php

namespace Statamic\Events\Data;

use Statamic\Assets\Asset;

class AssetReplaced
{
    /**
     * @var Asset
     */
    public $asset;

    /**
     * @param Asset $asset
     */
    public function __construct(Asset $asset)
    {
        $this->asset = $asset;
    }
}
