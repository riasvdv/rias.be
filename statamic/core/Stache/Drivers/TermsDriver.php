<?php

namespace Statamic\Stache\Drivers;

use Statamic\API\Term;
use Statamic\API\Str;

class TermsDriver extends AbstractDriver implements AggregateDriver
{
    // The driver is not concerned with handling either localization or routability.
    protected $localizable = false;
    protected $routable = false;

    public function getFilesystemRoot()
    {
        return 'taxonomies';
    }

    public function getModifiedItems($files)
    {
        $creator = new TermItemCreator(
            $this->stache,
            $files
        );

        return $creator->create()->each(function ($taxonomy) {
            $taxonomy->each(function ($item) {
                $term = $item['item'];
                $this->stache->taxonomies->addUris($term->taxonomyName(), $term->slug());
            });
        });
    }

    public function createItem($path, $contents)
    {
        //
    }

    /**
     * Delete the items from the repo
     *
     * @param \Statamic\Stache\Repository $repo
     * @param \Illuminate\Support\Collection $deleted
     * @param \Illuminate\Support\Collection $modified
     */
    public function deleteItems($repo, $deleted, $modified)
    {
        $deleted->each(function ($path) {
            $path = Str::removeRight($path, '.yaml');
            $id = explode('/', $path, 2)[1];
            list($taxonomy, $slug) = explode('/', $id);
            $this->stache->taxonomies->removeUri($taxonomy, $slug);
        });
    }

    public function isMatchingFile($file)
    {
        return $file['type'] === 'file' && str_contains($file['dirname'], '/');
    }

    /**
     * Get the locale based on the path
     *
     * @param string $path
     * @return string
     */
    public function getLocaleFromPath($path)
    {
        return default_locale();
    }

    /**
     * Get the key from a path
     *
     * @param string $path
     * @return string
     */
    public function getKeyFromPath($path)
    {
        // Get the taxonomy
        return explode('/', $path)[1];
    }

    public function toPersistentArray($repo)
    {
        return [
            'meta' => [
                'paths' => $this->getPersistentPaths($repo),
                'uris' => $this->getPersistentUris($repo)
            ],
            'items' => $this->getPersistentItems($repo)
        ];
    }

    private function getPersistentPaths($repo)
    {
        return [];
    }

    private function getPersistentUris($repo)
    {
        return [];
    }

    private function getPersistentItems($repo)
    {
        return [];
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
        //
    }
}
