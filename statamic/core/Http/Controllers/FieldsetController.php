<?php

namespace Statamic\Http\Controllers;

use Statamic\API\Arr;
use Statamic\API\Addon;
use Statamic\API\Config;
use Statamic\API\Fieldset;
use Statamic\API\Folder;
use Statamic\API\Helper;
use Statamic\API\Str;
use Statamic\API\Pattern;
use Statamic\API\Taxonomy;
use Statamic\CP\FieldtypeFactory;
use Illuminate\Support\Collection;
use Statamic\CP\Fieldset as FieldsetObject;

class FieldsetController extends CpController
{
    /**
     * List all fieldsets
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $data = [
            'title' => 'Fieldsets'
        ];

        return view('fieldsets.index', $data);
    }

    /**
     * @param string $name
     * @return \Illuminate\View\View
     */
    public function edit($name)
    {
        $fieldset = Fieldset::get($name);

        $title = t('editing') . ' ' . $name . '.yaml';

        return view('fieldsets.edit', compact('title', 'fieldset'));
    }

    /**
     * Delete a fieldset
     *
     * @return array
     */
    public function delete()
    {
        $ids = Helper::ensureArray($this->request->input('ids'));

        foreach ($ids as $name) {
            $fieldset = Fieldset::get($name);
            $fieldset->delete();
        }

        return ['success' => true];
    }

    public function update($name)
    {
        $contents = $this->request->input('fieldset');

        $fieldset = $this->prepareFieldset($name, $contents);

        $fieldset->save();

        return [
            'success' => true,
            'message' => translate('cp.fieldset_updated'),
            'redirect' => route('fieldset.edit', $fieldset->name())
        ];
    }

    private function process($fields, $fallback_type = 'text')
    {
        // Go through each field in the fieldset
        return collect($fields)->map(function ($field_config, $field_name) use ($fallback_type, $fields) {
            // Get the config fieldset for that field's fieldtype. Still with me?
            $type = array_get($field_config, 'type', $fallback_type);
            $fieldtype = FieldtypeFactory::create($type);
            $fieldtypes = $fieldtype->getConfigFieldset()->fieldtypes();

            // Go through each fieldtype in the config fieldset and process the values.
            foreach ($fieldtypes as $k => $field) {
                // If a non-array is encountered, it's probably a "handle: true" used in the "taxonomies" section.
                if (! is_array($field_config)) {
                    continue;
                }

                if (! in_array($field->getName(), array_keys($field_config))) {
                    continue;
                }

                $field_config[$field->getName()] = $field->process($field_config[$field->getName()]);
            }

            return FieldsetObject::cleanFieldForSaving($field_config);
        })->all();
    }

    /**
     * Process conditions submitted through the Vue component.
     *
     * @param  array $contents  Fieldset contents.
     * @return array            The fieldset contents with condition syntax appropriately updated.
     */
    private function processConditions($contents)
    {
        $contents['fields'] = collect($contents['fields'])->map(function ($field) {
            return $this->processFieldConditions($field);
        })->all();

        return $contents;
    }

    /**
     * Process a single field's conditions.
     *
     * @param  array $config  The field's config.
     * @return array          The field's config, with condition syntax appropriately updated.
     */
    private function processFieldConditions($config)
    {
        unset($config['show_when'], $config['hide_when']);

        if (! $conditions = array_pull($config, 'conditions')) {
            return $config;
        }

        if (! $type = array_get($conditions, 'type')) {
            return $config;
        }

        $values = ($conditions['style'] === 'custom')
            ? $conditions['custom']
            : $this->processStandardFieldConditions($conditions['conditions']);

        $config[$type . '_when'] = $values;

        return $config;
    }

    private function processStandardFieldConditions($conditions)
    {
        return collect($conditions)->map(function ($condition) {
            $handle = $condition['handle'];

            if ($condition['operator'] === 'or') {
                $handle = 'or_' . $handle;
            }

            $values = $this->normalizeConditionValues($condition['values']);
            $values = (count($values) === 1) ? $values[0] : $values;

            return compact('handle', 'values');
        })->pluck('values', 'handle')->all();
    }

    private function normalizeConditionValues($values)
    {
        return collect($values)->map(function ($value) {
            switch ($value) {
                case 'true':
                    return true;
                case 'false':
                    return false;
                default:
                    return $value;
            }
        })->all();
    }

    public function create()
    {
        return view('fieldsets.create', [
            'title' => 'Create fieldset'
        ]);
    }

    public function store()
    {
        $contents = $this->request->input('fieldset');

        $slug = $this->request->has('slug')
            ? $this->request->input('slug')
            : Str::slug(array_get($contents, 'title'), '_');

        $fieldset = $this->prepareFieldset($slug, $contents);

        $fieldset->save();

        return [
            'success' => true,
            'message' => translate('cp.fieldset_created'),
            'redirect' => route('fieldset.edit', $fieldset->name())
        ];
    }

    /**
     * Quickly create a new barebones fieldset from within the fieldtype
     *
     * @return array
     */
    public function quickStore()
    {
        $title = $this->request->name;
        $name = Str::slug($title, '_');

        if (Fieldset::exists($name)) {
            return ['success' => true];
        }

        $fieldset = Fieldset::create($name);
        $fieldset->title($title);
        $fieldset->save();

        return ['success' => true];
    }

    private function prepareFieldset($slug, $contents)
    {
        $contents['sections'] = collect($contents['sections'])
            ->keyBy('handle')
            ->map(function ($section) {
                return $this->processSection($section);
            })->all();

        $fieldset = Fieldset::create($slug, Arr::removeNullValues($contents));

        return $fieldset;
    }

    private function processSection($section)
    {
        $section = array_except($section, ['id', 'handle']);

        $section = $this->processConditions($section);

        $section['fields'] = $this->process(
            collect($section['fields'])->keyBy('name')->all()
        );

        return $section;
    }
}
