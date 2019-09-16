<?php

namespace Statamic\CP;

use Statamic\API\Data;
use Statamic\API\Helper;
use Statamic\Contracts\Assets\Asset;

class ColumnSupplementor
{
    public function supplement($columns, $collection)
    {
        $dotted = collect($columns)->map(function ($column) {
            return is_string($column) ? $column : $column['value'];
        })->filter(function ($column) {
            return str_contains($column, '.');
        });

        if ($dotted->isEmpty()) {
            return $collection;
        }

        foreach ($dotted as $column) {
            list($foreignKeysField, $field) = explode('.', $column, 2);

            $collection = $collection->supplement($column, function ($entry) use ($foreignKeysField, $field) {
                $foreignKeys = $entry->get($foreignKeysField);
                $isArray = is_array($foreignKeys);

                $values = collect(Helper::ensureArray($foreignKeys))->map(function ($key) use ($field) {
                    if (! $related = Data::find($key)) {
                        return $key;
                    }

                    return $this->getValue($related, $field);
                });

                return $isArray ? $values->all() : $values->first();
            });
        }

        return $collection;
    }

    private function getValue($related, $field)
    {
        $fallback = null;
        if (str_contains($field, '.')) {
            list($field, $fallback) = explode('.', $field);
        }

        if ($related instanceof Asset) {
            return $this->getAssetValue($related, $field, $fallback);
        }

        return $this->getMethodOrPropertyValue($related, $field, $fallback);
    }

    private function getAssetValue($asset, $field, $fallback)
    {
        if ($field === 'null') {
            $value = '';
        } else {
            if (! $value = $this->getMethodOrPropertyValue($asset, $field, $fallback)) {
                $value = $value ?: $asset->url();
            }
        }

        return [
            'thumbnail' => route('asset.thumbnail', ['asset' => base64_encode($asset->id()), 'size' => 'small']),
            'value' => $value
        ];
    }

    private function getMethodOrPropertyValue($item, $field, $fallbackField = null)
    {
        $value = method_exists($item, $field) ? $item->$field() : $item->get($field);

        if ($value) {
            return $value;
        }

        if (count(func_get_args()) == 3) {
            return $this->getMethodOrPropertyValue($item, $fallbackField);
        }

        return null;
    }
}
