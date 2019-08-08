<?php

namespace Statamic\Addons\Iterate;

use Statamic\Extend\Tags;

class IterateTags extends Tags
{
    /**
     * Maps to the {{ iterate:fieldname }} tag.
     *
     * Also maps to {{ foreach:fieldname }}.
     * It's called Iterate because foreach is a reserved word. Thanks PHP.
     *
     * @return mixed
     */
    public function __call($method, $args)
    {
        list($keyKey, $valueKey) = $this->getKeyNames();

        $values = collect(
            array_get($this->context, $this->tag_method, [])
        )->map(function ($value, $key) use ($keyKey, $valueKey) {
            return [$keyKey => $key, $valueKey => $value];
        })->values();

        return $this->parseLoop($values->all());
    }

    /**
     * Get the key names to be used for the key and value.
     *
     * Using this tag, the key will be available in the "key" variable and the value will
     * be available in the "value" variable. Although you may redefine the names if it
     * makes your templates more readable. For example if your list is songs_lengths
     * with the song name as the key and the length as the value. You could use
     * as="song|song_length" on the tag to create more readable variables.
     *
     * @return array
     */
    protected function getKeyNames()
    {
        $keyKey = 'key';
        $valueKey = 'value';

        if (count($as = $this->getList('as', [])) === 1) {
            $valueKey = $as[0];
        } elseif (count($as) > 1) {
            list($keyKey, $valueKey) = $as;
        }

        return [$keyKey, $valueKey];
    }
}
