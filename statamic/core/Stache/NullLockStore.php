<?php

namespace Statamic\Stache;

use Symfony\Component\Lock\Key;
use Symfony\Component\Lock\StoreInterface;

class NullLockStore implements StoreInterface
{
    public function save(Key $key)
    {
        //
    }

    public function waitAndSave(Key $key)
    {
        //
    }

    public function putOffExpiration(Key $key, $ttl)
    {
        //
    }

    public function delete(Key $key)
    {
        //
    }

    public function exists(Key $key)
    {
        //
    }
}
