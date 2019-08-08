<?php

namespace Statamic\Addons\Suggest\Modes;

use Statamic\API\User;

class UsersMode extends AbstractMode
{
    public function suggestions()
    {
        return User::all()
            ->map(function ($user) {
                return [
                    'value' => (string) $user->id(),
                    'text' => $this->label($user, 'username'),
                ];
            })
            ->values()
            ->all();
    }
}
