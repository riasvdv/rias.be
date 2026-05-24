<?php

namespace Tests\Unit\Markdown;

use App\Markdown\PhikiCommonMarkFlavor;
use CraftCms\Cms\Markdown\MarkdownOptions;
use Phiki\Phiki;
use PHPUnit\Framework\TestCase;
use Psr\SimpleCache\CacheInterface;

class PhikiCommonMarkFlavorTest extends TestCase
{
    public function test_it_uses_the_configured_phiki_cache(): void
    {
        $cache = new SpyCache;
        $phiki = (new Phiki)->cache($cache);
        $converter = (new PhikiCommonMarkFlavor($phiki))(new MarkdownOptions);

        $markdown = <<<'MARKDOWN'
```php
echo 'cached';
```
MARKDOWN;

        $firstRender = $converter->convert($markdown)->getContent();
        $secondRender = $converter->convert($markdown)->getContent();

        $this->assertStringContainsString('class="phiki language-php', $firstRender);
        $this->assertSame($firstRender, $secondRender);
        $this->assertSame(1, $cache->sets);
        $this->assertSame(1, $cache->hits);
    }
}

class SpyCache implements CacheInterface
{
    /** @var array<string, mixed> */
    public array $items = [];

    public int $hits = 0;

    public int $sets = 0;

    public function get(string $key, mixed $default = null): mixed
    {
        if (! array_key_exists($key, $this->items)) {
            return $default;
        }

        $this->hits++;

        return $this->items[$key];
    }

    public function set(string $key, mixed $value, null|int|\DateInterval $ttl = null): bool
    {
        $this->sets++;
        $this->items[$key] = $value;

        return true;
    }

    public function delete(string $key): bool
    {
        unset($this->items[$key]);

        return true;
    }

    public function clear(): bool
    {
        $this->items = [];

        return true;
    }

    public function getMultiple(iterable $keys, mixed $default = null): iterable
    {
        foreach ($keys as $key) {
            yield $key => $this->get($key, $default);
        }
    }

    public function setMultiple(iterable $values, null|int|\DateInterval $ttl = null): bool
    {
        foreach ($values as $key => $value) {
            $this->set($key, $value, $ttl);
        }

        return true;
    }

    public function deleteMultiple(iterable $keys): bool
    {
        foreach ($keys as $key) {
            $this->delete($key);
        }

        return true;
    }

    public function has(string $key): bool
    {
        return array_key_exists($key, $this->items);
    }
}
