<?php

namespace Statamic\Addons\UserGroups;

use Statamic\Extend\Fieldtype;

class UserGroupsFieldtype extends Fieldtype
{
    public $category = ['special'];
    
    public function blank()
    {
        return [];
    }
}
