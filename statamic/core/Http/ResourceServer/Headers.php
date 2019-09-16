<?php

namespace Statamic\Http\ResourceServer;

use Statamic\API\Helper;

class Headers
{
    public static function set($headers)
    {
        // Allow a string to be passed in.
        $headers = Helper::ensureArray($headers);

        foreach ($headers as $key => $value) {
            if (is_numeric($key)) {
                header($value);
            } else {
                header("$key: $value");
            }
        }
    }
}
