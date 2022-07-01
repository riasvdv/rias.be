<?php

namespace App\Fieldtypes;

use Statamic\Fieldtypes\Text;

class Currency extends Text
{
    public function component(): string
    {
        return 'text';
    }

    public function indexComponent(): string
    {
        return 'text';
    }

    /**
     * Pre-process the data before it gets sent to the publish page.
     *
     * @param  mixed  $data
     * @return array|mixed
     */
    public function preProcess($data)
    {
        $data = parent::preProcess($data);

        return number_format($data / 100, 2);
    }

    public function preProcessIndex($value)
    {
        $value = parent::preProcessIndex($value);

        $symbol = mb_substr($value, 0, 1);
        $number = (int) mb_substr($value, 1);

        return $symbol.number_format($number / 100, 2);
    }

    /**
     * Process the data before it gets saved.
     *
     * @param  mixed  $data
     * @return array|mixed
     */
    public function process($data)
    {
        return $data * 100;
    }
}
