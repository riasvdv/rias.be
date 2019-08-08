<?php

namespace Statamic\Data\Entries;

use Statamic\API\Entry as EntryAPI;
use Statamic\API\File;
use Statamic\API\YAML;
use Statamic\API\Config;
use Statamic\API\Folder;
use Statamic\API\Fieldset;
use Statamic\Data\DataFolder;
use Statamic\Events\Data\CollectionDeleted;
use Statamic\Events\Data\CollectionSaved;
use Statamic\Contracts\Data\Entries\Collection as CollectionContract;

class Collection extends DataFolder implements CollectionContract
{
    /**
     * @var \Statamic\Data\EntryCollection
     */
    protected $entries;

    /**
     * @var \Carbon\Carbon
     */
    protected $last_modified;

    /**
     * @var string|null
     */
    protected $route;

    /**
     * @var string|null
     */
    protected $original_route;

    /**
     * Get the yaml path.
     *
     * @param bool $fromContent
     * @return string
     */
    public function yamlPath($fromContent = false)
    {
        $path = 'collections/' . $this->path() . '/folder.yaml';

        if ($fromContent) {
            return $path;
        }

        $prefix = Config::get('system.filesystems.content.root');

        return "{$prefix}/{$path}";
    }

    /**
     * @return int
     */
    public function count()
    {
        return EntryAPI::countWhereCollection($this->path());
    }

    /**
     * @return \Statamic\Data\EntryCollection
     */
    public function entries()
    {
        if ($this->entries) {
            return $this->entries;
        }

        if (! $entries = EntryAPI::whereCollection($this->path())) {
            $entries = collect_entries();
        }

        switch ($this->order()) {
            case 'number':
                $entries = $entries->multisort('order:asc');
                break;
            case 'date':
                $entries = $entries->multisort('date:desc');
                break;
            default:
                $entries = $entries->multisort('title:asc');
        }

        return $this->entries = $entries;
    }

    /**
     * @param string                         $key
     * @param \Statamic\Contracts\Data\Entry $entry
     */
    public function addEntry($key, $entry)
    {
        $this->entries->put($key, $entry);
    }

    /**
     * @param string $key
     */
    public function removeEntry($key)
    {
        $this->entries->pull($key);
    }

    /**
     * @return \Carbon\Carbon
     */
    public function lastModified()
    {
        $date = null;

        foreach ($this->entries() as $entry) {
            $modified = $entry->lastModified();

            if ($date) {
                if ($modified->gt($date)) {
                    $date = $modified;
                }
            } else {
                $date = $modified;
            }
        }

        return $date;
    }

    /**
     * @return mixed
     */
    public function save()
    {
        // Save yaml file.
        File::disk('content')->put($this->yamlPath(true), YAML::dump($this->data()));

        // If the route was modified, update routes.yaml
        if ($this->route && ($this->original_route !== $this->route)) {
            Config::set('routes.collections.'.$this->path(), $this->route());
            Config::save();
        }

        // Whoever wants to know about it can do so now.
        event(new CollectionSaved($this));
    }

    /**
     * Get the collection order
     *
     * @return string
     */
    public function order()
    {
        $order = $this->get('order', 'alphabetical');

        if (in_array($order, ['numeric', 'numerical', 'numbers', 'numbered'])) {
            $order = 'number';
        }

        if ($order === 'alpha') {
            $order = 'alphabetical';
        }

        return $order;
    }

    /**
     * Delete the folder
     *
     * @return mixed
     */
    public function delete()
    {
        // Delete each child entry first, to ensure events get fired, etc.
        $this->entries()->each(function ($entry) {
            $entry->delete();
        });

        // Delete folder.
        Folder::disk('content')->delete('collections/' . $this->path());

        // Remove from routes.
        $routes = collect(Config::get('routes.collections'))->except($this->path())->all();
        Config::set('routes.collections', $routes);
        Config::save();

        // Whoever wants to know about it can do so now.
        event(new CollectionDeleted($this));
    }

    /**
     * Get the URL to edit this in the CP
     *
     * @return string
     */
    public function editUrl()
    {
        return cp_route('collection.edit', $this->path());
    }

    /**
     * Get the URL to create a new Entry in this Collection inn the CP
     *
     * @return string
     */
    public function createEntryUrl()
    {
        return cp_route('entry.create', $this->path());
    }

    /**
     * Get or set the route definition
     *
     * @return string
     */
    public function route($route = null)
    {
        if (is_null($route)) {
            return $this->route ?: array_get(Config::getRoutes(), 'collections.'.$this->path());
        }

        if (! $this->original_route) {
            $this->original_route = $this->route();
        }

        $this->route = $route;
    }

    /**
     * Get or set the fieldset
     *
     * @param string|null|bool
     * @return Statamic\Contracts\CP\Fieldset
     */
    public function fieldset($fieldset = null)
    {
        if (! is_null($fieldset)) {
            $this->set('fieldset', $fieldset);
        }

        if ($fieldset === false) {
            $this->set('fieldset', null);
        }

        return Fieldset::get([
            $this->get('fieldset'),
            Config::get('theming.default_entry_fieldset'),
            Config::get('theming.default_fieldset')
        ])->withTaxonomies();
    }

    /**
     * Get or set the ID
     *
     * @param null|string $id
     * @return string
     */
    public function id($id = null)
    {
        return $this->path($id);
    }
}
