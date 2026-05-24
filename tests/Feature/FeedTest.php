<?php

namespace Tests\Feature;

use Tests\TestCase;

class FeedTest extends TestCase
{
    public function test_the_rss_feed_is_available(): void
    {
        $response = $this->get('/feed');

        $response
            ->assertOk()
            ->assertHeader('content-type', 'application/xml;charset=UTF-8')
            ->assertSee('Rias.be', false)
            ->assertSee('https://rias.be/blog/', false);
    }
}
