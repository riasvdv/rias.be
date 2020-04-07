<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Carbon;
use Spatie\Sitemap\Tags\Url;
use Statamic\Facades\Entry;

class Sitemap extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sitemap';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create the sitemap';

    public function __construct()
    {
        parent::__construct();
    }

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

        $sitemap->writeToFile(storage_path('app/static/sitemap.xml'));

        $this->info('Sitemap saved!');
    }
}
