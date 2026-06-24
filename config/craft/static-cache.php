<?php

declare(strict_types=1);

use CraftCms\Cms\Cms;
use Rias\CraftStaticCache\Replacers\CsrfTokenReplacer;

return [
    /**
     * Enable full-page static caching for eligible site requests.
     */
    'enabled' => ! env('APP_DEBUG'),

    /**
     * Laravel cache store used for the canonical cached response.
     * Set to null to use the application's default cache store.
     */
    'store' => null,

    /**
     * Also publish cached HTML to disk so a web server can serve it directly.
     */
    'publish' => true,

    /**
     * Disk publishing options used when publish is enabled.
     */
    'disk' => [
        /**
         * Base directory where static HTML files are written.
         * Use a web-accessible path when serving files directly from rewrite rules.
         */
        'path' => public_path('static'),

        /**
         * Directory permissions used when creating cache folders.
         */
        'permissions' => Cms::config()->defaultDirMode,

        /**
         * Include the request host in the published file path.
         */
        'hostAware' => true,
    ],

    /**
     * Query-string handling for cache keys.
     */
    'queryParameters' => [
        /**
         * Ignore all query parameters unless they are explicitly allowed.
         */
        'ignoreByDefault' => true,

        /**
         * Query parameters that should remain part of the cache key.
         */
        'allow' => [],
    ],

    /**
     * Request exclusion rules.
     */
    'exclude' => [
        /**
         * URI parts or patterns that should never be cached.
         */
        'uriParts' => [],
    ],

    /**
     * Rules used to clear related cached URLs when Craft elements change.
     */
    'invalidation' => [
        /**
         * Map invalidation rule names, such as section handles, to URI patterns.
         *
         * Examples:
         * 'news' => ['news/*'],
         * 'all' => [
         *     'blog/*',
         *     ['uriParts' => ['products/', ['slug']]],
         * ],
         */
        'rules' => [
            /**
             * Patterns cleared for all element invalidation events.
             */
            'all' => [],
        ],
    ],

    /**
     * Replacers transform dynamic fragments before storage and after retrieval.
     * Each replacer must implement \Rias\CraftStaticCache\Contracts\Replacer.
     */
    'replacers' => [
        CsrfTokenReplacer::class,
    ],

    /**
     * Cache locks prevent duplicate renders for the same URL under load.
     */
    'locks' => [
        /**
         * Laravel cache store used for locks.
         * Set to null to use the application's default cache store.
         */
        'store' => null,

        /**
         * Seconds to wait for another request to finish rendering the same URL.
         */
        'waitSeconds' => 5,
    ],
];
