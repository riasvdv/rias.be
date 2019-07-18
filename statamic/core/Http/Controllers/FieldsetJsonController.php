<?php

namespace Statamic\Http\Controllers;

use Statamic\API\Addon;
use Statamic\API\Config;
use Statamic\API\Fieldset;
use Statamic\API\Helper;
use Statamic\API\Str;
use Statamic\API\Taxonomy;

class FieldsetJsonController extends CpController
{
    /**
     * List all fieldsets
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $fieldsets = collect(Fieldset::all())->sortBy(function ($fieldset) {
            return $fieldset->title();
        })->map(function ($fieldset) {
            // If we've decided to omit hidden fieldsets, and this one should be
            // hidden, we'll just move right along.
            if (bool($this->request->query('hidden', true)) === false && $fieldset->hidden()) {
                return null;
            }

            return [
                'title'    => $fieldset->title(),
                'hidden'   => $fieldset->hidden(),
                'id'       => $fieldset->name(), // vue uses this as an id
                'uuid'     => $fieldset->name(), // keeping this here temporarily, just in case.
                'edit_url' => $fieldset->editUrl()
            ];
        })->filter()->values()->all();

        return ['columns' => ['title'], 'items' => $fieldsets];
    }

    public function edit($fieldset)
    {
        $fieldset = $this->getInitialFieldset($fieldset);

        try {
            $array = $fieldset->toArray(false);
        } catch (\Exception $e) {
            return response(['success' => false, 'message' => $e->getMessage()], 500);
        }

        $array['sections'] = collect($array['sections'])->map(function ($section) {
            $section['id'] = $section['handle']; // For Vue.
            $section['fields'] = collect($section['fields'])->map(function ($field) {
                return $this->addConditions($field);
            })->all();
            return $section;
        })->all();

        return $array;
    }

    public function show($fieldset)
    {
        $fieldset = $this->getInitialFieldset($fieldset);

        $fieldset->locale($this->request->input('locale', default_locale()));

        if ($this->request->taxonomies === 'true') {
            $fieldset->withTaxonomies();
        }

        event('fieldsets.json.show', $fieldset);

        try {
            $array = $fieldset->toPublishArray();
        } catch (\Exception $e) {
            return response(['success' => false, 'message' => $e->getMessage()], 500);
        }

        if ($fieldset->name() === 'user') {
            // If logging in using emails, make sure there is no username field.
            if (Config::get('users.login_type') === 'email') {
                $array['sections'] = collect($array['sections'])->map(function ($section) {
                    $section['fields'] = collect($section['fields'])->filterWithKey(function ($field, $name) {
                        return $name !== 'username';
                    })->all();
                    return $section;
                })->all();
            }
        }

        return $array;
    }

    private function addConditions($field)
    {
        if (!isset($field['show_when']) && !isset($field['hide_when'])) {
            return $field;
        }

        $type = isset($field['show_when']) ? 'show' : 'hide';
        $conditions = $type === 'show' ? $field['show_when'] : $field['hide_when'];
        $style = is_string($conditions) ? 'custom' : 'standard';

        $field['conditions'] = [
            'type' => $type,
            'style' => $style,
            'custom' => $style === 'custom' ? $conditions : null,
            'conditions' => [],
        ];

        if (is_array($conditions)) {
            $field['conditions']['conditions'] = collect($conditions)->map(function ($values, $handle) {
                if (Str::startsWith($handle, 'or_')) {
                    $operator = 'or';
                    $handle = Str::removeLeft($handle, 'or_');
                }

                return [
                    'handle' => $handle,
                    'operator' => isset($operator) ? $operator : 'and',
                    'values' => Helper::ensureArray($values)
                ];
            })->values()->all();
        }

        return $field;
    }

    /**
     * @param string $fieldset  Name of the fieldset, as specified in the URL.
     * @return \Statamic\Contracts\CP\Fieldset
     */
    private function getInitialFieldset($fieldset)
    {
        // When using the builder to create a new fieldset, we need an object to work
        // with, but obviously one doesn't exist. So, we'll just use a temporary one.
        if ($fieldset === 'create' || $this->request->creating === 'true') {
            return Fieldset::create('temporary');
        }

        // Addon fieldsets will be specified using "addon.addonname.fieldsetname"
        if (substr_count($fieldset, '.') === 2) {
            return $this->getAddonFieldset($fieldset);
        }

        // Settings fieldsets will be specified using "settings.area"
        if (substr_count($fieldset, '.') === 1) {
            return $this->getSettingsFieldset($fieldset);
        }

        // Otherwise, just get a regular fieldset.
        return Fieldset::get($fieldset);
    }

    private function getAddonFieldset($fieldset)
    {
        list(, $addonName, $fieldsetName) = explode('.', $fieldset);

        if ($fieldsetName !== 'settings') {
            throw new \Exception('Cannot get non-settings fieldset.');
        }

        return Addon::create($addonName)->settingsFieldset();
    }

    private function getSettingsFieldset($fieldset)
    {
        list(, $fieldset) = explode('.', $fieldset);

        return Fieldset::get($fieldset, 'settings');
    }
}
