<?php

namespace Tests\Feature;

// use Illuminate\Foundation\Testing\RefreshDatabase;
use Tests\TestCase;

class ExampleTest extends TestCase
{
    public function test_the_frontend_assets_are_built(): void
    {
        $manifest = json_decode(
            file_get_contents(public_path('build/manifest.json')),
            true,
            flags: JSON_THROW_ON_ERROR,
        );

        $this->assertArrayHasKey('resources/css/site.css', $manifest);
        $this->assertArrayHasKey('resources/js/site.js', $manifest);
    }
}
