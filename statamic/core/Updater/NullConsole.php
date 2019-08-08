<?php

namespace Statamic\Updater;

/**
 * Temporary class until we merge in some other goodies. :)
 */
class NullConsole
{
    /**
     * Any calls to this class just return itself so you can chain forever and ever.
     *
     * @param string $method
     * @param array $args
     * @return $this
     */
    public function __call($method, $args)
    {
        return $this;
    }
}
