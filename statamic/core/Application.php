<?php

namespace Statamic;

use Statamic\API\Config;
use Illuminate\Foundation\Application as Laravel;

class Application extends Laravel
{
    /**
     * Get the path to the application "app" directory.
     *
     * @return string
     */
    public function path()
    {
        return $this->basePath . DIRECTORY_SEPARATOR . 'core';
    }

    /**
     * Get the path to the public / web directory.
     *
     * @return string
     */
    public function publicPath()
    {
        return SITE_ROOT;
    }

    /**
     * Crank it up to eleven!
     *
     * @return void
     */
    public function toEleven()
    {
        if (! $memoryLimit = Config::get('system.php_max_memory_limit')) {
            $memoryLimit = -1;
        }

        // Moar memory!
        @ini_set('memory_limit', $memoryLimit);

        // Moar time!
        @set_time_limit(0);
    }
}
