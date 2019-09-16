<?php

namespace Statamic\Forms\Metrics;

class SumMetric extends AbstractMetric
{
    public function result()
    {
        if (! $field = $this->get('field')) {
            throw new \Exception('Cannot get sum metric without specifying a field.');
        }

        return $this->submissions()->filter(function ($submission) use($field) {
            return is_numeric($submission->get($field));
        })->sum(function ($submission) use ($field) {
            return $submission->get($field);
        });
    }
}
