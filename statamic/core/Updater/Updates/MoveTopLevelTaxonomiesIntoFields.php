<?php

namespace Statamic\Updater\Updates;

use Statamic\Contracts\CP\Fieldset;

class MoveTopLevelTaxonomiesIntoFields extends Update
{
    /**
     * Contents of all fieldsets
     *
     * @var array
     */
    private $fieldsets = [];

    public function shouldUpdate($newVersion, $oldVersion = '2.0.0')
    {
        return version_compare($newVersion, '2.9.0', '>=')
            && version_compare($oldVersion, '2.9.0', '<');
    }

    public function update()
    {
        collect(\Statamic\API\Fieldset::all())
            ->each(function ($fieldset) {
                $this->adjustFieldset($fieldset);
            });

        $this->saveFieldsets();
    }

    /**
     * Adjust the fieldset
     *
     * @param Fieldset $fieldset   The fieldset in question
     * @return void
     */
    private function adjustFieldset(Fieldset $fieldset)
    {
        $modified = false;
        $contents = $fieldset->contents();
        $fields = array_get($contents, 'fields', []);
        $taxonomies = array_get($contents, 'taxonomies');

        if ($taxonomies === null || $taxonomies === true || $taxonomies === false) {
            return;
        }

        if (! is_array($taxonomies)) {
            \Log::debug("Couldn't migrate fieldset [{$fieldset->name()}]. Unexpected taxonomies value.");
            return;
        }

        foreach ($taxonomies as $taxonomy => $config) {
            if ($config === true) {
                $config = [];
            }

            $config = [
                'type' => 'taxonomy',
                'taxonomy' => $taxonomy,
            ] + $config;

            $fields[$taxonomy] = $config;
            $modified = true;
        }

        $contents['fields'] = $fields;
        unset($contents['taxonomies']);

        if ($modified) {
            $this->fieldsets[$fieldset->name()] = $contents;
        }
    }

    /**
     * Save the adjusted fieldsts to disk
     *
     * @return void
     */
    private function saveFieldsets()
    {
        foreach ($this->fieldsets as $name => $contents) {
            $fieldset = \Statamic\API\Fieldset::get($name);
            $fieldset->contents($contents);
            $fieldset->save();

            $this->console()->checkLine("Fieldset <info>{$name}</info> migrated.");
        }
    }
}
