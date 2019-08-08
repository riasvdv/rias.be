<?php

namespace Statamic\Updater\Updates;

use Statamic\API\Config;
use Statamic\API\Str;
use Statamic\API\YAML;
use Statamic\API\File;
use Statamic\API\Folder;

class MigrateTaxonomies extends Update
{
    private $files;
    private $taxonomies;
    private $terms;
    private $defaultLocale;
    private $localizedSlugs = [];
    private $newTaxonomies;
    private $newTerms;
    private $contentFiles;
    private $replacedContentFiles;
    private $contentReplacements = 0;

    public function shouldUpdate($newVersion, $oldVersion = '2.0.0')
    {
        return version_compare($newVersion, '2.5.0', '>=')
            && version_compare($oldVersion, '2.5.0', '<');
    }

    public function update()
    {
        $this->defaultLocale = Config::getDefaultLocale();

        $this->console()->comment('Gathering taxonomy related files...');

        $this->getTaxonomyFiles();
        $this->getTaxonomyConfigurationFiles();
        $this->getTerms();

        if ($this->taxonomies->isEmpty()) {
            return $this->console()->crossLine('There are no taxonomies to migrate.');
        }

        $this->console()->checkLine(sprintf(
            'Taxonomies: %d, Terms: %d',
            $this->taxonomies->count(),
            $this->terms->count()
        ));

        $this->console()->getOutput()->newLine();
        $this->console()->comment('Adjusting structure...');
        $this->relocateConfigurationFiles();
        $this->adjustNewTermFiles();
        $this->relocateLocalizedData();
        $this->appendLocalizedSlugs();

        $this->console()->getOutput()->newLine();
        $this->console()->comment('Writing new structure...');
        $this->writeNewTaxonomies();
        $this->writeNewTerms();
        $this->deleteOldTerms();

        $this->console()->getOutput()->newLine();
        $this->console()->comment('Updating content files...');
        $this->updateContent();

        $this->console()->getOutput()->newLine();
        $this->console()->checkInfo('Taxonomies migrated!');
    }

    /**
     * Get files related to taxonomies
     *
     * Prior to 2.2, taxonomy configuration was stored in folder.yaml files located
     * in `site/content/taxonomies`, alongside `md` files for each term.
     *
     * @return void
     */
    private function getTaxonomyFiles()
    {
        $this->files = collect(
            Folder::disk('content')
                ->getFilesByTypeRecursively('taxonomies', ['yaml', 'md', 'html'])
        );
    }

    /**
     * Get the folder.yaml files
     *
     * We'll get the files parsed as YAML and grouped by their taxonomy.
     *
     * @return void
     */
    private function getTaxonomyConfigurationFiles()
    {
        $this->taxonomies = $this->files->filter(function ($path) {
            return Str::endsWith($path, 'folder.yaml');
        })->map(function ($path) {
            $yaml = YAML::parse(File::disk('content')->get($path));
            return compact('path', 'yaml');
        })->keyBy(function ($data) {
            return $data['path'];
        })->map(function ($data) {
            return $data['yaml'];
        });
    }

    /**
     * Get all the terms
     *
     * @return void
     */
    private function getTerms()
    {
        $this->terms = $this->files->filter(function ($path) {
            return Str::endsWith($path, ['.md', '.html']);
        })->map(function ($path) {
            $data = YAML::parse(File::disk('content')->get($path));

            $id = array_get($data, 'id');
            unset($data['id']);

            $slug = pathinfo($path)['filename'];

            // The title is what's already defined if there is a title,
            // or a titleized and de-slugified slug.
            $title = array_get($data, 'title', Str::title(str_replace(['-', '_'], ' ', $slug)));

            // Get the default data for a term.
            // If a term has different data than the default, it will require its own file.
            // Right now the "default data" is simply a title.
            $defaultData = compact('title');

            // Remove default term data from the data. Whatever doesn't have to be in the file, won't be.
            $cleanedData = $this->removeDefaultTermData($data, $defaultData);

            // Determine if the term has additional data.
            $hasData = $data !== $defaultData;

            // If it does have additional data, we'll add back the default data.
            // Technically, it doesn't need to be there, but it may be confusing for folks to see some
            // data remain, and other values disappear, like the title field.
            if ($hasData) {
                $cleanedData = $data;
            }

            return [
                'id'            => $id,
                'path'          => $path,
                'taxonomy'      => explode('/', $path)[1],
                'locale'        => $locale = $this->getLocaleFromPath($path),
                'slug'          => $slug,
                'title'         => $title,
                'localizedSlug' => ($locale === $this->defaultLocale) ? null : array_get($data, 'slug'),
                'hasData'       => $hasData,
                'data'          => $cleanedData
            ];
        })->values();
    }

    private function getLocaleFromPath($path)
    {
        $parts = explode('/', $path);

        if (count($parts) === 3) {
            return $this->defaultLocale;
        }

        return $parts[2];
    }

    private function removeDefaultTermData($data, $defaultData)
    {
        foreach ($defaultData as $key => $value) {
            if (isset($data[$key]) && $data[$key] === $value) {
                unset($data[$key]);
            }
        }

        return $data;
    }

    private function relocateConfigurationFiles()
    {
        $this->newTaxonomies = collect();

        $this->taxonomies->each(function ($data, $path) {
            $this->newTaxonomies->put(
                explode('/', $path)[1],
                YAML::parse(File::disk('content')->get($path))
            );
        });

    }

    private function adjustNewTermFiles()
    {
        $this->newTerms = collect();

        $defaultLocaleTerms = $this->terms->filter(function ($term) {
            return $term['locale'] === $this->defaultLocale;
        });

        $termsWithData = $defaultLocaleTerms->filter(function ($term) {
            return $term['hasData'];
        });

        $unnecessary = $defaultLocaleTerms->count() - $termsWithData->count();

        $termsWithData->each(function ($term) {
            $this->addNewTerm($term['taxonomy'], $term['slug'], $term['data']);
        });

        $this->console()->checkLine("Unnecessary term files removed: <info>$unnecessary</info>");
    }

    private function addNewTerm($taxonomy, $slug, $data, $locale = null)
    {
        if (! $this->newTerms->has($taxonomy)) {
            $this->newTerms[$taxonomy] = collect();
        }

        // If a locale has been specified, the data should be nested inside the
        // default locale's data, with the specified locale as the key.
        if ($locale) {
            $existing = $this->newTerms[$taxonomy]->get($slug, []);
            $existing[$locale] = $data;
            $data = $existing;
        }

        $this->newTerms[$taxonomy]->put($slug, $data);
    }

    private function relocateLocalizedData()
    {
        $this->terms->filter(function ($term) {
            return $term['locale'] !== $this->defaultLocale;
        })->each(function ($term) {
            $this->addLocalizedSlug($term['taxonomy'], $term['locale'], $term['slug'], $term['localizedSlug']);

            unset($term['data']['slug']);

            if (! empty($term['data'])) {
                $this->addNewTerm($term['taxonomy'], $term['slug'], $term['data'], $term['locale']);
            }
        });

        $this->console()->checkLine('Localized term data has been added to each term.');
    }

    private function addLocalizedSlug($taxonomy, $locale, $slug, $localizedSlug)
    {
        if ($locale === $this->defaultLocale) {
            return;
        }

        if (! $localizedSlug) {
            return;
        }

        $this->localizedSlugs[$taxonomy][$locale][$slug] = $localizedSlug;
    }

    private function writeNewTaxonomies()
    {
        $this->newTaxonomies->each(function ($data, $taxonomy) {
            File::disk('content')->put("taxonomies/$taxonomy.yaml", YAML::dump($data));

            $this->console()->checkLine(
                "Moved <info>site/content/taxonomies/{$taxonomy}/folder.yaml</info> " .
                "to <info>site/content/taxonomies/{$taxonomy}.yaml</info>."
            );
        });
    }

    private function writeNewTerms()
    {
        $this->newTerms->each(function ($terms, $taxonomy) {
            $terms->each(function ($data, $slug) use ($taxonomy) {
                File::disk('content')->put("taxonomies/$taxonomy/$slug.yaml", YAML::dump($data));
            });

            $this->console()->checkLine("New <info>$taxonomy</info> term files written: <info>{$terms->count()}</info>");
        });
    }

    private function appendLocalizedSlugs()
    {
        foreach ($this->localizedSlugs as $taxonomy => $slugs) {
            $data = $this->newTaxonomies->get($taxonomy);
            $data['slugs'] = $slugs;
            $this->newTaxonomies[$taxonomy] = $data;

        }

        $this->console()->checkLine('Localized slugs have been added to the taxonomy configuration.');
    }

    private function deleteOldTerms()
    {
        $this->files->each(function ($path) {
            if (Str::endsWith($path, ['.md', '.html', '/folder.yaml'])) {
                File::disk('content')->delete($path);
            }
        });

        Folder::disk('content')->deleteEmptySubfolders('taxonomies');

        $this->console()->checkLine('Old taxonomy files deleted.');
    }

    /**
     * Update content files
     *
     * Prior to 2.2, term IDs were used in front matter.
     * We'll just swap them out for slugs.
     *
     * @return void
     */
    private function updateContent()
    {
        $this->replacedContentFiles = collect();

        $this->gatherContentFiles();

        $this->replaceIdsWithinContent();

        if (! $this->contentReplacements) {
            return $this->console()->crossLine('No term IDs found.');
        }

        $this->console()->line(sprintf(
            'Found %d occurrences in %d files. Replacing...',
            $this->contentReplacements,
            $this->replacedContentFiles->count()
        ));

        $this->writeContentReplacements();

        $this->console()->checkLine('Content replacements written.');
    }

    /**
     * Create a collection of all content files with their paths and content.
     *
     * @return void
     */
    private function gatherContentFiles()
    {
        $content = collect(
            Folder::disk('content')->getFilesRecursively('/')
        )->map(function ($path) {
            $disk = 'content';
            $contents = File::disk($disk)->get($path);
            return compact('disk', 'path', 'contents');
        });

        $users = collect(
            Folder::disk('users')->getFiles('/')
        )->map(function ($path) {
            $disk = 'users';
            $contents = File::disk($disk)->get($path);
            return compact('disk', 'path', 'contents');
        });

        $this->contentFiles = $content->merge($users)
            ->reject(function ($file) {
                return Str::endsWith($file['path'], '.DS_Store'); // yuck
            });
    }

    /**
     * Perform the ID-to-value replacements
     *
     * @return void
     */
    private function replaceIdsWithinContent()
    {
        $this->terms->each(function ($term) {
            $this->findAndReplaceId($term['id'], $term['title']);
        });
    }

    /**
     * Find asset IDs and replace them with a URL
     *
     * @param string $find
     * @param string $replace
     * @return void
     */
    private function findAndReplaceId($find, $replace)
    {
        $this->contentFiles->each(function ($file) use ($find, $replace) {
            $path = $file['disk'] . '::' . $file['path'];

            $original = $this->replacedContentFiles->has($path)
                ? $this->replacedContentFiles->get($path)
                : $file['contents'];

            $contents = preg_replace('#\- '.$find.'#', '- '.$replace, $original);
            $contents = preg_replace('#\: '.$find.'#', ': '.$replace, $contents);

            if ($contents !== $original) {
                $this->replacedContentFiles->put($path, $contents);
                $this->contentReplacements++;
            }
        });
    }

    /**
     * Write the replaced content files to disk
     *
     * @return void
     */
    private function writeContentReplacements()
    {
        $this->replacedContentFiles->each(function ($contents, $path) {
            list($disk, $path) = explode('::', $path);
            File::disk($disk)->put($path, $contents);
        });
    }
}
