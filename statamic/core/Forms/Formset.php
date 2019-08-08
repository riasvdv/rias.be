<?php

namespace Statamic\Forms;

use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\YAML;
use Statamic\Contracts\Forms\Formset as FormsetContract;

class Formset implements FormsetContract
{
    /**
     * @var string
     */
    private $name;

    /**
     * @var array
     */
    private $data = [];

    /**
     * Get or set the name
     *
     * @param  string|null $name
     * @return string
     */
    public function name($name = null)
    {
        if (is_null($name)) {
            return $this->name;
        }

        $this->name = $name;
    }

    /**
     * Get or set the title
     *
     * @param  string|null $title
     * @return string
     */
    public function title($title = null)
    {
        if (is_null($title)) {
            return $this->get('title', Str::slug($this->name));
        }

        $this->set('title', $title);
    }

    /**
     * Get or set the fields
     *
     * @param  array|null $fields
     * @return array
     */
    public function fields($fields = null)
    {
        if (is_null($fields)) {
            return $this->get('fields', []);
        }

        $this->set('fields', $fields);
    }

    /**
     * Get or set the columns
     *
     * @param  array|null $columns
     * @return array
     */
    public function columns($columns = null)
    {
        if (is_null($columns)) {
            $columns = [];
            $names = $this->get('columns', array_keys($this->fields()));

            foreach ($names as $name) {
                $columns[$name] = array_get($this->fields(), "{$name}.display", $name);
            }

            return $columns;
        }

        $this->set('columns', $columns);
    }

    /**
     * Get or set the data
     *
     * @param  array|null $data
     * @return array
     */
    public function data($data = null)
    {
        if (is_null($data)) {
            return $this->data;
        }

        $this->data = $data;
    }

    /**
     * Get a value in the formset
     *
     * @param  string $key
     * @param  string $default
     * @return mixed
     */
    public function get($key, $default = null)
    {
        return array_get($this->data(), $key, $default);
    }

    /**
     * Set a value in the formset
     *
     * @param  string $key
     * @param  string $default
     * @return mixed
     */
    public function set($key, $value)
    {
        $this->data[$key] = $value;
    }

    /**
     * Remove a value from the formset
     *
     * @param string $key
     * @return mixed
     */
    public function remove($key)
    {
        unset($this->data[$key]);
    }

    /**
     * The URL to view submissions in the CP
     *
     * @return string
     */
    public function url()
    {
        return cp_route('form.show', $this->name());
    }

    /**
     * The URL to edit it in the CP
     *
     * @return string
     */
    public function editUrl()
    {
        return cp_route('form.edit', $this->name());
    }

    /**
     * Save the formset
     *
     * @return void
     */
    public function save()
    {
        $data = [
            'title' => $this->title(),
            'store' => $this->get('store'),
            'honeypot' => $this->get('honeypot'),
            'fields' => $this->fields(),
            'columns' => array_keys($this->columns()),
            'metrics' => $this->get('metrics'),
            'email' => $this->get('email')
        ];

        $data = array_filter($data, function ($item) {
            return is_array($item)
                ? !empty($item)
                : !in_array($item, [null, ''], true);
        });

        File::put($this->path(), YAML::dump($data));
    }

    public function path()
    {
        return settings_path("formsets/{$this->name()}.yaml");
    }

    /**
     * Convert to an array
     *
     * @return array
     */
    public function toArray()
    {
        return [
            'title' => $this->title(),
            'fields' => $this->fields(),
            'edit_url' => $this->editUrl()
        ];
    }

    /**
     * Is a field an uploadable type?
     *
     * @param string $field
     * @return mixed
     */
    public function isUploadableField($field)
    {
        $field = collect($this->fields())->get($field);

        return in_array(array_get($field, 'type'), ['file', 'files', 'asset', 'assets']);
    }
}
