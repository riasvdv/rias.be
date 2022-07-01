<?php

use Spatie\CpuLoadHealthCheck\CpuLoadCheck;
use Spatie\Health\Checks\Checks\DatabaseCheck;
use Spatie\Health\Checks\Checks\DebugModeCheck;
use Spatie\Health\Checks\Checks\EnvironmentCheck;
use Spatie\Health\Checks\Checks\UsedDiskSpaceCheck;

return [

    /*
    |--------------------------------------------------------------------------
    | Control Panel
    |--------------------------------------------------------------------------
    |
    | Whether the Control Panel should be enabled, and through what route.
    |
    */

    'enabled' => env('CP_ENABLED', true),

    'route' => env('CP_ROUTE', 'cp'),

    /*
    |--------------------------------------------------------------------------
    | Start Page
    |--------------------------------------------------------------------------
    |
    | When a user logs into the Control Panel, they will be taken here.
    | Supported: "dashboard" or "pages"
    |
    */

    'start_page' => 'dashboard',

    /*
    |--------------------------------------------------------------------------
    | Dashboard Widgets
    |--------------------------------------------------------------------------
    |
    | Here you may define any number of dashboard widgets. You're free to
    | use the same widget multiple times in different configurations.
    |
    */

    'widgets' => [
        ['type' => 'health_check', 'check' => CpuLoadCheck::class, 'width' => '33'],
        ['type' => 'health_check', 'check' => DebugModeCheck::class, 'width' => '33'],
        ['type' => 'health_check', 'check' => EnvironmentCheck::class, 'width' => '33'],
        ['type' => 'health_check', 'check' => DatabaseCheck::class, 'width' => '33'],
        ['type' => 'health_check', 'check' => \Spatie\Health\Checks\Checks\RedisCheck::class, 'width' => '33'],
        ['type' => 'health_check', 'check' => UsedDiskSpaceCheck::class, 'width' => '33'],
    ],

    /*
    |--------------------------------------------------------------------------
    | Date Format
    |--------------------------------------------------------------------------
    |
    | When a date is encountered throughout the Control Panel, it will be
    | rendered in the following format. Any PHP date variables are permitted.
    |
    */

    'date_format' => 'Y/n/d',

    /*
    |--------------------------------------------------------------------------
    | Locale
    |--------------------------------------------------------------------------
    |
    | The locale in which the Control Panel should be translated.
    | If left blank, the default site locale will be used.
    | This may be overridden on a per-user basis.
    |
    */

    'locale' => null,

    /*
    |--------------------------------------------------------------------------
    | Pagination
    |--------------------------------------------------------------------------
    |
    | The numbers of items to show on each paginated page.
    |
    */

    'pagination_size' => 50,

];
