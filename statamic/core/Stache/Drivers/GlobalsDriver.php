<?php

namespace Statamic\Stache\Drivers;

use Statamic\API\GlobalSet;
use Statamic\API\YAML;

class GlobalsDriver extends AbstractDriver
{
    /**
     * @var bool
     */
    protected $localizable = true;

    public function getFilesystemRoot()
    {
        return 'globals';
    }

    public function createItem($path, $contents)
    {
        $data = YAML::parse($contents);

        if ($existing = $this->stache->repo($this->key())->getItem(array_get($data, 'id'))) {
            $existing->data($data);
            return $existing;
        }

        return GlobalSet::create(pathinfo($path)['filename'])
            ->with($data)
            ->get();
    }

    public function isMatchingFile($file)
    {
        return $file['type'] === 'file' && $file['extension'] === 'yaml';
    }

    public function toPersistentArray($repo)
    {
        $globals = $repo->getItems()->map(function ($set) {
            return $set->shrinkWrap();
        });

        return [
            'meta' => [
                'paths' => $repo->getPathsForAllLocales()->toArray()
            ],
            'items' => ['data' => $globals]
        ];
    }

    /**
     * Get the locale based on the path
     *
     * @param string $path
     * @return string
     */
    public function getLocaleFromPath($path)
    {
        $parts = explode('/', $path);

        if (count($parts) === 2) {
            return default_locale();
        }

        return $parts[1];
    }

    /**
     * Get the localized URL
     *
     * @param        $locale
     * @param array  $data
     * @param string $path
     * @return string
     */
    public function getLocalizedUri($locale, $data, $path)
    {
        //
    }

    /**
     * @inheritdoc
     */
    public function load($collection)
    {
        return $collection->map(function ($item, $id) {
            $attr = $item['attributes'];

            // Get the data for the default locale. Remove the ID since
            // we already have it and will be setting it separately.
            $data = $item['data'][default_locale()];
            unset($data['id']);

            $set = GlobalSet::create($attr['slug'])
                ->id($id)
                ->with($data)
                ->get();

            // If the set has additional locale data, add them.
            if (count($item['data']) > 1) {
                foreach ($item['data'] as $locale => $data) {
                    $set->dataForLocale($locale, $data);
                }

                $set->syncOriginal();
            }

            return $set;
        });
    }
}
