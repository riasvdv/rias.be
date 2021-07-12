<?php

namespace App\Fieldtypes;

use Statamic\Fieldtypes\Text;

class Url extends Text
{
    public function component(): string
    {
        return 'text';
    }

    public function indexComponent(): string
    {
        return 'url';
    }
}
