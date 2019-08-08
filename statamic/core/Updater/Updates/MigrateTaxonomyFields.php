<?php

namespace Statamic\Updater\Updates;

use Statamic\API\Taxonomy;
use Statamic\Contracts\CP\Fieldset;

class MigrateTaxonomyFields extends Update
{

    /**
     * @var \Illuminate\Support\Collection
     */
    private $taxonomies;

    /**
     * Contents of all fieldsets
     *
     * @var array
     */
    private $fieldsets = [];

    /**
     * Which fieldsets are used as partials in which other fieldsets
     *
     * @var array
     */
    private $partialUses = [];

    public function shouldUpdate($newVersion, $oldVersion = '2.0.0')
    {
        return version_compare($newVersion, '2.5.0', '>=')
            && version_compare($oldVersion, '2.5.0', '<');
    }

    public function update()
    {
        $this->taxonomies = Taxonomy::all();

        collect(\Statamic\API\Fieldset::all())
            ->each(function ($fieldset) {
                $this->determinePartialUsage($fieldset);
            })->each(function ($fieldset) {
                $this->adjustFieldset($fieldset);
            })->each(function ($fieldset) {
                $this->adjustPartial($fieldset);
            });

        $this->saveFieldsets();
    }


    private function determinePartialUsage(Fieldset $fieldset)
    {
        // Go through all other fieldsets
        foreach (\Statamic\API\Fieldset::all() as $f) {

            // Check if the provided fieldset exists as a partial within the iterated fieldset.
            foreach ($f->fieldsWithPartials() as $field) {
                if (array_get($field, 'type', 'text') === 'partial' && $field['fieldset'] === $fieldset->name()) {
                    $this->partialUses[$fieldset->name()][] = $f->name();
                }
            }

        }
    }

    /**
     * Adjust a field
     *
     * Move any taxonomy fields into a taxonomies array
     *
     * @param Fieldset $fieldset   The fieldset in question
     * @return void
     */
    private function adjustFieldset(Fieldset $fieldset)
    {
        $fields = $fieldset->fieldsWithPartials();
        $contents = $fieldset->contents();

        if (isset($contents['taxonomies'])) {
            $this->console()->crossLine("Fieldset <info>{$fieldset->name()}</info> already migrated.");
            return;
        }

        foreach ($this->taxonomies as $handle => $taxonomy) {
            if (! array_has($fields, $handle)) {
                continue;
            }

            $field = array_get($fields, $handle);

            unset($fields[$handle]);

            $contents['taxonomies'][$handle] = $this->normalizeTaxonomyField($field);
        }

        // If no changes have been made, it means there were no taxonomy fields. We want to
        // maintain this behavior, which means we need to explicitly show no taxonomies.
        if ($contents === $fieldset->contents()) {
            $contents['taxonomies'] = false;
        }

        $contents['fields'] = $fields;

        $this->fieldsets[$fieldset->name()] = $contents;
    }

    /**
     * Normalize a taxonomy field
     *
     * @param array $field
     * @return mixed
     */
    private function normalizeTaxonomyField($field)
    {
        unset($field['type'], $field['taxonomy'], $field['mode']);

        if (empty($field)) {
            return true;
        }

        return $field;
    }

    /**
     * Adjust a partial fieldset
     * If a given fieldset was used as a partial, the taxonomies key should be moved to its parent.
     *
     * @param Fieldset $fieldset
     * @return void
     */
    private function adjustPartial(Fieldset $fieldset)
    {
        $name = $fieldset->name();

        // Non-partials can just be skipped.
        if (! isset($this->partialUses[$name])) {
            return;
        }

        // If this fieldset isn't in the array, it's because it's already been migrated so it was skipped earlier.
        if (! isset($this->fieldsets[$name])) {
            return;
        }

        $contents = $this->fieldsets[$name];

        // If there were no taxonomies, we can skip this one, too.
        if (! isset($contents['taxonomies'])) {
            return;
        }

        // Move the taxonomies key that was added to this partial into the parent,
        // and set the partials taxonomies to false.
        foreach ($this->partialUses[$name] as $parent) {
            $this->fieldsets[$parent]['taxonomies'] = $contents['taxonomies'];
            $this->fieldsets[$name]['taxonomies'] = false;
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
