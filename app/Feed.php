<?php

namespace App;

use Illuminate\Support\Collection;
use Spatie\Feed\FeedItem;
use Statamic\Facades\Entry;

class Feed
{
    public static function getALlItems(): Collection
    {
        /** @var \Statamic\Stache\Query\EntryQueryBuilder $query */
        $query = Entry::query();

        return $query
            ->where('collection', 'blog')
            ->where('published', true)
            ->where('date', '<=', now())
            ->orderBy('date', 'desc')
            ->get()
            ->map(function (\Statamic\Entries\Entry $entry) {
                $header = collect($entry->augmentedValue('contents')->value())->firstWhere('type', 'header');

                return FeedItem::create()
                    ->title((string) $entry->augmentedValue('title'))
                    ->id($entry->absoluteUrl())
                    ->summary((string) $header['header'])
                    ->updated($entry->lastModified())
                    ->link($entry->absoluteUrl())
                    ->authorName('Rias Van der Veken')
                    ->authorEmail('hey@rias.be')
                    ->category($entry->augmentedValue('color')->value()['label']);
            });
    }
}
