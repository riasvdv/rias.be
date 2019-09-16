<?php

namespace Statamic\Updater\Updates;

use Statamic\API\Taxonomy;
use Statamic\Contracts\CP\Fieldset;

class MigrateMetaFields extends Update
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

        if ($title = array_get($fields, 'title')) {
            $title['type'] = 'text';
            $fields['title'] = $title;
            $modified = true;
        }

        if ($date = array_get($contents, 'date')) {
            $date = ['type' => 'date'] + $date;
            $fields['date'] = $date;
            unset($contents['date']);
            $modified = true;
        }

        if ($modified) {
            $contents['fields'] = $fields;
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
