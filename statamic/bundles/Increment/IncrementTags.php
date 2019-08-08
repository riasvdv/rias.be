<?php

namespace Statamic\Addons\Increment;

use Statamic\Extend\Tags;

class IncrementTags extends Tags
{
    static $arr = [];

    /**
     *
     * Increments unique counter instances.
     *
     * @return int
     */
    public function __call($method, $args)
    {
        if (! isset(self::$arr[$method])) {
            self::$arr[$method] = $this->get('from', 0);

            return self::$arr[$method];
        }

        return self::$arr[$method] = self::$arr[$method] + $this->get('by', 1);
    }

}
