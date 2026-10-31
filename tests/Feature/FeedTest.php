<?php

namespace Tests\Feature;

use CraftCms\Cms\Database\Migrations\Install;
use CraftCms\Cms\Database\Migrator;
use CraftCms\Cms\Entry\Elements\Entry;
use CraftCms\Cms\ProjectConfig\ProjectConfig;
use CraftCms\Cms\Site\Data\Site;
use CraftCms\Cms\Support\Facades\Elements;
use CraftCms\Cms\Support\Facades\Sections;
use DateTime;
use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class FeedTest extends TestCase
{
    use RefreshDatabase;

    public function test_the_rss_feed_is_available(): void
    {
        $section = Sections::getSectionByHandle('blog');
        $post = new Entry;
        $post->sectionId = $section->id;
        $post->typeId = $section->getEntryTypes()[0]->id;
        $post->title = 'Hello feed';
        $post->slug = 'hello-feed';
        $post->postDate = new DateTime('-1 day');
        $post->setFieldValues([
            'contents' => [
                'new1' => ['type' => 'header', 'fields' => ['markdown' => "# Hello feed\n\nA post summary."]],
            ],
        ]);
        $this->assertTrue(Elements::saveElement($post));

        $response = $this->get('/feed');

        $response
            ->assertOk()
            ->assertHeader('content-type', 'application/xml;charset=UTF-8')
            ->assertSee('Rias.be', false)
            ->assertSee('https://rias.be/blog/hello-feed', false)
            ->assertSee('A post summary.', false);
    }

    /**
     * Installs Craft from the committed project config instead of running
     * plain Laravel migrations, which don't create Craft's tables.
     */
    protected function migrateDatabases(): void
    {
        // Never rewrite config/craft/project while testing.
        app(ProjectConfig::class)->writeYamlAutomatically = false;

        $migrator = app(Migrator::class)->track('craft');
        $migrator->runMigration((new Install(
            username: 'admin',
            password: 'password',
            email: 'admin@example.com',
            // Matches config/craft/project/sites; the installer copies it onto the primary site.
            site: new Site([
                'name' => 'Rias.be',
                'handle' => 'default',
                'language' => 'en',
                'baseUrl' => '$APP_URL',
                'hasUrls' => true,
                'primary' => true,
            ]),
        ))->silent(), 'up');
    }
}
