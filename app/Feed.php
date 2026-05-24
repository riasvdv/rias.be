<?php

namespace App;

use CraftCms\Cms\Entry\Elements\Entry;
use Illuminate\Support\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Str;
use Spatie\Feed\FeedItem;

class Feed
{
    public static function getAllItems(): Collection
    {
        return collect(Entry::find()
            ->section('blog')
            ->status(Entry::STATUS_LIVE)
            ->drafts(false)
            ->orderBy('postDate', 'desc')
            ->all())
            ->map(fn (Entry $entry) => FeedItem::create()
                ->title(self::encoded($entry->title))
                ->id(self::productionUrl($entry->getUrl()))
                ->summary(self::summary($entry))
                ->updated(Carbon::instance($entry->postDate ?? $entry->dateUpdated ?? now()))
                ->link(self::productionUrl($entry->getUrl()))
                ->authorName('Rias Van der Veken')
                ->authorEmail('hey@rias.be')
                ->category($entry->color?->label ?? ''));
    }

    private static function summary(Entry $entry): string
    {
        $header = $entry->contents->type('header')->one();

        if (! $header) {
            return '';
        }

        return Str::replace('\\', '\\\\', self::encoded(strip_tags(Str::markdown($header->markdown ?? ''))));
    }

    private static function encoded(string $value): string
    {
        return mb_convert_encoding($value, 'UTF-8', 'HTML-ENTITIES');
    }

    private static function productionUrl(?string $url): string
    {
        return Str::replaceStart(rtrim(config('app.url'), '/'), 'https://rias.be', $url ?? '');
    }
}
