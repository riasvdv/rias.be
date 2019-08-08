<?php

namespace Statamic\Events\Data;

class UserDeleted extends DataDeleted
{
    /**
     * @var string
     */
    public $disk = 'users';
}
