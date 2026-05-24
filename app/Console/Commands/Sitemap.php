<?php

namespace App\Console\Commands;

use CraftCms\Cms\Entry\Elements\Entry;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Illuminate\Support\Str;
use Spatie\Sitemap\Sitemap as SpatieSitemap;
use Spatie\Sitemap\Tags\Url;

class Sitemap extends Command
{
    protected $signature = 'sitemap';

    protected $description = 'Create the sitemap';

    public function handle(): int
    {
        $paths = collect(Entry::find()
            ->site('*')
            ->status(Entry::STATUS_LIVE)
            ->drafts(false)
            ->all())
            ->filter(fn (Entry $entry) => $entry->getUrl())
            ->unique(fn (Entry $entry) => $entry->getUrl());

        $sitemap = SpatieSitemap::create();

        foreach ($paths as $entry) {
            $sitemap->add(
                Url::create($this->productionUrl($entry->getUrl()))
                    ->setLastModificationDate($entry->dateUpdated ?? Carbon::now())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
            );
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap saved!');

        return self::SUCCESS;
    }

    private function productionUrl(string $url): string
    {
        return Str::replaceStart(rtrim(config('app.url'), '/'), 'https://rias.be', $url);
    }
}
