<?php

namespace Statamic\CP\Publish;

use Statamic\API\Arr;
use Statamic\API\Helper;
use Statamic\Data\Processor;
use Statamic\Addons\Suggest\TypeMode;

trait PreloadsSuggestions
{
    protected function getSuggestions($fieldset)
    {
        return collect(
            $this->getSuggestFields($fieldset->fields())
        )->map(function ($config) {
            $config = Arr::except($config, ['display', 'instructions', 'placeholder', 'max_items']);

            $mode = (new TypeMode)->resolve(
                $config['type'],
                array_get($config, 'mode', 'options')
            );

            return [
                'suggestions' => $mode->setConfig($config)->suggestions(),
                'key' => json_encode($config)
            ];
        })->pluck('suggestions', 'key');
    }

    protected function getSuggestFields($fields, $prefix = '')
    {
        $suggestFields = [];

        foreach ($fields as $handle => $config) {
            $type = array_get($config, 'type', 'text');

            if (isset($config['options'])) {
                $config['options'] = format_input_options($config['options']);
            }

            foreach (['collection', 'taxonomy'] as $forceArrayKey) {
                if (isset($config[$forceArrayKey])) {
                    $config[$forceArrayKey] = Helper::ensureArray($config[$forceArrayKey]);
                }
            }

            if ($type === 'grid') {
                $suggestFields = array_merge($suggestFields, $this->getSuggestFields($config['fields'], $prefix . $handle));
            }

            if ($type === 'replicator' || $type === 'bard') {
                foreach (array_get($config, 'sets', []) as $set) {
                    if (isset($set['fields'])) {
                        $suggestFields = array_merge($suggestFields, $this->getSuggestFields($set['fields'], $prefix . $handle));
                    }
                }
            }

            if (in_array($type, ['suggest', 'collection', 'taxonomy', 'pages', 'users', 'collections', 'form'])) {
                $suggestFields[$prefix . $handle] = $config;
            }
        }

        return $suggestFields;
    }
}
