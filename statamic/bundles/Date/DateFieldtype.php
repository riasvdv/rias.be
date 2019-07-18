<?php

namespace Statamic\Addons\Date;

use Carbon\Carbon;
use Statamic\Extend\Fieldtype;

class DateFieldtype extends Fieldtype
{
    public $category = ['special', 'pickable', 'text'];

    public function preProcess($data)
    {
        if (! $data) {
            return;
        }

        if ($format = $this->getFieldConfig('format')) {
            $data = Carbon::createFromFormat($format, $data)->format('Y-m-d H:i');
        }

        return $data;
    }

    public function process($data)
    {
        if (! $data) {
            return null;
        }

        $date = Carbon::parse($data);

        return $date->format($this->dateFormat($data));
    }

    private function dateFormat($date)
    {
        $shouldShowTime = strlen($date) > 10
            && $this->getFieldConfig('allow_time') !== false;

        return $this->getFieldConfig(
            'format',
            $shouldShowTime ? 'Y-m-d H:i' : 'Y-m-d'
        );
    }
}
