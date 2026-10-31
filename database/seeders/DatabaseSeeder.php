<?php

namespace Database\Seeders;

use CraftCms\Cms\Entry\Elements\Entry;
use CraftCms\Cms\Support\Facades\Elements;
use CraftCms\Cms\Support\Facades\Sections;
use DateTime;
use Illuminate\Database\Seeder;
use RuntimeException;

/**
 * Demo content for local and orb development databases.
 * Entries that already exist (matched by section and slug) are left alone.
 */
class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        $this->entry('pages', 'home', 'Home', [
            $this->block('header', <<<'MD'
                # Hi, I'm Rias 👋

                I build things for the web with PHP and Laravel, and I write about it here.
                MD),
            $this->block('article', <<<'MD'
                This is demo content seeded for local development. Edit it in the
                [control panel](/admin) or run `php artisan db:seed` on a fresh database.
                MD),
        ]);

        $this->entry('pages', 'blog', 'Blog', []);

        $this->entry('pages', 'contact', 'Contact', [
            $this->block('header', "# Contact\n\nWant to get in touch? Send an email to hey@rias.be."),
        ]);

        $posts = [
            ['caching-craft-pages', 'Caching Craft pages as static files', 'teal', <<<'MD'
                Serving pages straight from disk skips PHP entirely, which makes even a
                small server feel fast.
                MD, <<<'PHP'
                ```php
                Route::get('/', fn () => view('home'))->middleware('cache.static');
                ```
                PHP],
            ['tailwind-typography', 'Styling long-form content with Tailwind Typography', 'purple', <<<'MD'
                The `prose` classes give Markdown output sensible defaults without writing
                a single line of custom CSS.
                MD, <<<'HTML'
                ```html
                <article class="prose lg:prose-xl">{{ entry.body }}</article>
                ```
                HTML],
            ['alpine-in-twig', 'Sprinkling Alpine.js into Twig templates', 'orange', <<<'MD'
                Alpine keeps small interactions, like a mobile menu, right next to the markup
                they control.
                MD, <<<'HTML'
                ```html
                <button x-data="{ open: false }" @click="open = !open">Menu</button>
                ```
                HTML],
            ['rss-feeds-in-laravel', 'Adding an RSS feed with spatie/laravel-feed', 'blue', <<<'MD'
                A feed takes one config entry and a method that returns the items.
                MD, <<<'PHP'
                ```php
                public static function getAllItems(): Collection
                {
                    return Entry::find()->section('blog')->collect();
                }
                ```
                PHP],
        ];

        foreach ($posts as $i => [$slug, $title, $color, $intro, $code]) {
            $this->entry('blog', $slug, $title, [
                $this->block('header', "# {$title}\n\n{$intro}"),
                $this->block('article', 'Here is the gist of it:'),
                $this->block('code', $code),
                $this->block('article', 'That is all there is to it. Thanks for reading!'),
            ], $color, new DateTime('-'.($i * 9 + 2).' days'));
        }
    }

    private function block(string $type, string $markdown): array
    {
        return ['type' => $type, 'fields' => ['markdown' => $markdown]];
    }

    private function entry(string $sectionHandle, string $slug, string $title, array $blocks, string $color = 'teal', ?DateTime $postDate = null): void
    {
        if (Entry::find()->section($sectionHandle)->slug($slug)->status(null)->exists()) {
            return;
        }

        $section = Sections::getSectionByHandle($sectionHandle);
        $entry = new Entry;
        $entry->sectionId = $section->id;
        $entry->typeId = $section->getEntryTypes()[0]->id;
        $entry->title = $title;
        $entry->slug = $slug;
        $entry->postDate = $postDate ?? new DateTime;

        $contents = [];
        foreach ($blocks as $i => $block) {
            $contents['new'.($i + 1)] = $block;
        }
        $entry->setFieldValues([
            'color' => $this->hex($color),
            'contents' => $contents,
        ]);

        if (! Elements::saveElement($entry)) {
            throw new RuntimeException("Could not seed {$sectionHandle}/{$slug}: ".json_encode($entry->getErrors()));
        }
    }

    private function hex(string $label): string
    {
        return [
            'orange' => '#ed8936',
            'teal' => '#38b2ac',
            'blue' => '#4299e1',
            'purple' => '#9f7aea',
        ][$label];
    }
}
