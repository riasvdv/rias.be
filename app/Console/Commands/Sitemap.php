<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Tags\Url;
use Statamic\Facades\Entry;

class Sitemap extends Command
{
    protected $signature = 'sitemap';

    protected $description = 'Create the sitemap';

    public function handle()
    {
        $paths = Entry::all()
            ->filter(function ($content) {
                return $content->url();
            })
            ->unique(function ($content) {
                return $content->url();
            });

        $sitemap = \Spatie\Sitemap\Sitemap::create();

        /** @var \Statamic\Entries\Entry $entry */
        foreach ($paths as $entry) {
            $sitemap->add(
                Url::create(str_replace(config('app.url'), 'https://www.rias.be', $entry->absoluteUrl()))
                    ->setLastModificationDate($entry->hasDate() ? $entry->date() : Carbon::now())
                    ->setChangeFrequency(Url::CHANGE_FREQUENCY_MONTHLY)
            );
        }

        $sitemap->writeToFile(public_path('sitemap.xml'));

        $this->info('Sitemap saved!');
    }
}
