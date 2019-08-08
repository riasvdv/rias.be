<?php

namespace Statamic\Forms\Metrics;

class MinMetric extends AbstractMetric
{
    public function result()
    {
        if (! $field = $this->get('field')) {
            throw new \Exception('Cannot get sum metric without specifying a field.');
        }

        $min = $this->submissions()->filter(function ($submission) use($field) {
            return is_numeric($submission->get($field));
        })->sortBy(function ($submission) use ($field) {
            return $submission->get($field);
        })->first();

        return $min->get($field);
    }
}
