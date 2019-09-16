<?php

namespace Statamic\Addons\Suggest\Modes;

use Statamic\API\Page;
use Statamic\API\Entry;
use Statamic\Addons\Suggest\TypeMode;

class BardLinkMode extends AbstractMode
{
    public function suggestions()
    {
        return Page::all()
            ->merge(Entry::all())
            ->multisort($this->request->input('sort', 'title:asc'))
            ->map(function ($item) {
                return [
                    'value' => $item->id(),
                    'text' => $this->label($item, 'title'),
                    'url' => $item->absoluteUrl(),
                ];
            })->values()->all();
    }
}
