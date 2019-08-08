<?php

namespace Statamic\Events;

use Statamic\Contracts\Data\Users\User;

class PasswordReset extends Event
{
    public $user;

    public function __construct(User $user)
    {
        $this->user = $user;
    }
}
