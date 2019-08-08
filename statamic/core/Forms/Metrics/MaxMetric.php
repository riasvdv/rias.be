<?php

namespace Statamic\Forms\Metrics;

class MaxMetric extends AbstractMetric
{
    public function result()
    {
        if (! $field = $this->get('field')) {
            throw new \Exception('Cannot get sum metric without specifying a field.');
        }

        $max = $this->submissions()->filter(function ($submission) use($field) {
            return is_numeric($submission->get($field));
        })->sortByDesc(function ($submission) use ($field) {
            return $submission->get($field);
        })->first();

        return $max->get($field);
    }
}
