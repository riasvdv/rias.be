<?php

namespace Tests\Feature;

use PHPUnit\Framework\Attributes\Test;
use Tests\TestCase;

class HomepageTest extends TestCase
{
    #[Test]
    public function it_can_load_the_homepage()
    {
        $response = $this->get('/');

        $response->assertStatus(200);
        $response->assertSee('Rias');
    }
}
