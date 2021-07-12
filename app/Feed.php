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
                    ->title(mb_convert_encoding((string) $entry->augmentedValue('title'), "UTF-8", "HTML-ENTITIES"))
                    ->id($entry->absoluteUrl())
                    ->summary(mb_convert_encoding((string) $header['header'], "UTF-8", "HTML-ENTITIES"))
                    ->updated($entry->date())
                    ->link($entry->absoluteUrl())
                    ->authorName('Rias Van der Veken')
                    ->authorEmail('hey@rias.be')
                    ->category($entry->augmentedValue('color')->value()['label']);
            });
    }
}
