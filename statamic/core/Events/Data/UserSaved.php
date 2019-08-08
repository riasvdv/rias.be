<?php

namespace Statamic\Events\Data;

class UserSaved extends DataSaved
{
    /**
     * @var string
     */
    public $disk = 'users';
}
