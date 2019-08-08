<?php

namespace Statamic\Addons\UserRoles;

use Statamic\API\Config;
use Statamic\API\Helper;
use Statamic\API\User;
use Statamic\Extend\Fieldtype;

class UserRolesFieldtype extends Fieldtype
{
    public $category = ['special'];

    public function blank()
    {
        // If user cant edit roles, show default role settings in disabled roles field.
        if (User::loggedIn() && User::getCurrent()->cant('users:edit-roles')) {
            return Helper::ensureArray(Config::get('users.new_user_roles'));
        }

        return [];
    }
}
