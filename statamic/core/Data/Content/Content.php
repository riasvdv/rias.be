<?php

namespace Statamic\Data\Content;

use Carbon\Carbon;
use Statamic\API\Str;
use Statamic\API\Config;
use Statamic\API\File;
use Statamic\API\Helper;
use Statamic\API\URL;
use Statamic\API\YAML;
use Statamic\Contracts\Data\Entries\Entry;
use Statamic\Contracts\Data\Globals\GlobalSet;
use Statamic\Contracts\Data\Pages\Page;
use Statamic\Contracts\Data\Taxonomies\Term;
use Statamic\Data\Data;
use League\Flysystem\FileNotFoundException;
use Statamic\Events\Data\ContentSaved;
use Statamic\Events\Data\ContentDeleted;
use Statamic\Exceptions\UuidExistsException;
use Statamic\Contracts\Data\Content\Content as ContentContract;

abstract class Content extends Data implements ContentContract
{
    /**
     * Get or set the slug
     *
     * @param string|null $slug
     * @return mixed
     */
    abstract public function slug($slug = null);

    /**
     * Get or set the order key
     *
     * @param mixed|null $order
     * @return mixed
     */
    public function order($order = null)
    {
        if (is_null($order)) {
            return array_get($this->attributes, 'order');
        }

        $this->attributes['order'] = $order;
    }

    /**
     * Get or set the publish status
     *
     * @param null|bool $published
     * @return void|bool
     */
    public function published($published = null)
    {
        if (is_null($published)) {
            // The publish state may be stored within the front-matter.
            // Otherwise, we'll get it from the attributes.
            $setStatus = $this->get('published');
            return is_null($setStatus) ? array_get($this->attributes, 'published', true) : $setStatus;
        }

        // If we are *not* targeting the default locale, but the default locale is published,
        // we will set the published state within the localized version's front-matter.
        if (! $this->isDefaultLocale()) {
            if ($this->attributes['published'] === $published) {
                $this->remove('published');
            } else {
                $this->set('published', $published);
            }
            return;
        }

        $this->attributes['published'] = $published;
    }

    /**
     * Publish the content
     *
     * @return void
     */
    public function publish()
    {
        // If we are *not* targeting the default locale, but the default locale is published,
        // we will set the published state within the localized version's front-matter.
        if (!$this->isDefaultLocale() && $this->attributes['published']) {
            $this->set('published', true);
            return;
        }

        $this->attributes['published'] = true;
    }

    /**
     * Unpublishes the content
     *
     * @return void
     */
    public function unpublish()
    {
        // If we are *not* targeting the default locale, but the default locale is published,
        // we will set the published state within the localized version's front-matter.
        if (!$this->isDefaultLocale() && $this->attributes['published']) {
            $this->set('published', false);
            return;
        }

        $this->attributes['published'] = false;
    }

    /**
     * Add supplemental data to the attributes
     *
     * @return void
     */
    public function supplement()
    {
        $this->setSupplement('id', $this->id());
        $this->setSupplement('slug', $this->slug());
        $this->setSupplement('url', $this->url());
        $this->setSupplement('uri', $this->uri());
        $this->setSupplement('url_path', $this->uri()); // deprecated
        $this->setSupplement('permalink', $this->absoluteUrl());
        $this->setSupplement('edit_url', $this->editUrl());
        $this->setSupplement('published', $this->published());
        $this->setSupplement('order', $this->order());

        if ($this->supplement_taxonomies) {
            $this->addTaxonomySupplements();
        }
    }

    /**
     * Get data from the cascade (folder.yaml files)
     *
     * @deprecated Use cascadingData instead
     */
    protected function getFolderData()
    {
        return $this->cascadingData();
    }

    /**
     * Get or set the URI
     *
     * This is the "identifying URL" for lack of a better description.
     * For instance, where `/fr/blog/my-post` would be a URL, `/blog/my-post` would be the URI.
     *
     * @param string|null $uri
     * @return mixed
     */
    abstract public function uri($uri = null);

    /**
     * Get the URL
     *
     * @return string
     */
    public function url()
    {
        return URL::makeRelative($this->absoluteUrl());
    }

    /**
     * Get the full, absolute URL
     *
     * @return string
     */
    public function absoluteUrl()
    {
        return URL::makeAbsolute(
            URL::prependSiteUrl($this->uri(), $this->locale()),
            $this->locale()
        );
    }

    /**
     * Get or set the template
     *
     * @param string|null $template
     * @return mixed
     */
    abstract public function template($template = null);

    /**
     * Get or set the layout
     *
     * @param string|null $layout
     * @return mixed
     */
    abstract public function layout($layout = null);

    /**
     * Get the folder of the file relative to content path
     *
     * @return string
     */
    abstract public function folder();

    /**
     * Save the data
     *
     * @return mixed
     */
    public function save()
    {
        // Reset to the default locale. Any other methods during the save
        // process will likely assume we're using the default locale.
        $this->locale(default_locale());

        $this->ensureId();

        $original = $this->original;

        // Setup event for whoever wants to intercept or change the content being saved.
        $responses = event('content.saving', [$this, $original]);

        // If any listener responses return null, the content shouldn't be saved.
        if (in_array(null, $responses, true)) {
            return $this;
        }

        // If file was moved, set the old path.
        $oldPaths = collect($this->locales())->map(function ($locale) {
            return $this->originalLocalizedPath($locale);
        })->all();

        // Write files to disk. One for each locale stored in this data.
        $this->writeFiles();

        // Subclasses will be able to perform any post-save functionality. For example,
        // renaming a page would leave an empty folder, the Page class will delete it.
        $this->completeSave();

        // Now that the item is saved, we can consider it the original state again.
        $this->syncOriginal();

        // Setup event for whoever wants to know about the saved content.
        $eventClass = 'Statamic\Events\Data\\' . ucfirst($this->contentType()) . 'Saved';
        event('content.saved', [$this, $original]); // Deprecated! Please listen on ContentSaved event instead!
        event(new $eventClass($this, $original, $oldPaths));
        event(new ContentSaved($this, $original, $oldPaths));

        return $this;
    }

    /**
     * Write the files to disk
     *
     * @return void
     */
    protected function writeFiles()
    {
        $files = collect($this->locales())->map(function ($locale) {
            // Get the before and after paths so we can rename if necessary.
            $path = $this->localizedPath($locale);
            $original_path = $this->originalLocalizedPath($locale);

            // Grab the data for this specific locale.
            $data = $this->dataForLocale($locale);

            // Remove any localized data that's the same as the default locale
            if ($locale !== default_locale()) {
                $data = $this->removeLocalizedDataIdenticalToDefault($data, $this->defaultData());
            }

            // Ensure there's an ID. The default locale will have one, but
            // the localized versions won't. We'll want it in the file.
            $data['id'] = $this->id();

            // Separate the content from the front-matter
            $content = array_get($data, 'content');
            if ($content || $content == '') {
                unset($data['content']);
            }

            return [
                'path'          => $path,
                'original_path' => $original_path,
                'front_matter'  => $this->normalizeFrontMatter($data),
                'content'       => $content
            ];
        });

        // Write each version to file.
        $files->each(function ($file) {
            $contents = YAML::dump($file['front_matter'], $file['content']);

            File::disk('content')->put($file['path'], $contents);

            // If the file was renamed, attempt to delete the old files.
            if ($file['path'] !== $file['original_path']) {
                try {
                    File::disk('content')->delete($file['original_path']);
                } catch (FileNotFoundException $e) {
                    // It's possible that a new locale was created meaning there's no
                    // existing one to delete. In this case, it's cool. Do nothing.
                }
            }
        });
    }

    /**
     * Remove any localized data keys that are the identical to the default locale's data.
     *
     * @param array $localized
     * @param array $default
     * @return array
     */
    protected function removeLocalizedDataIdenticalToDefault($localized, $default)
    {
        foreach ($localized as $key => $value) {
            if ($key === 'id') {
                continue;
            }

            if ($value === array_get($default, $key)) {
                unset($localized[$key]);
            }
        }

        return $localized;
    }

    /**
     * Normalize the front-matter before saving
     *
     * @param array $data
     * @return array
     */
    protected function normalizeFrontMatter($data)
    {
        return $data;
    }

    /**
     * Perform any necessary operations after a save has been completed
     *
     * @return void
     */
    protected function completeSave()
    {
        //
    }

    /**
     * Get or set the fieldset
     *
     * @param string|null|bool
     * @return \Statamic\Contracts\CP\Fieldset
     */
    public function fieldset($fieldset = null)
    {
        if (is_null($fieldset)) {
            $fieldset = $this->getFieldset()->locale($this->locale());
            event(new \Statamic\Events\Data\FindingFieldset($fieldset, $this->contentType(), $this));
            return $fieldset;
        }

        $this->set('fieldset', $fieldset);
    }

    /**
     * Get the fieldset
     *
     * @return string|null
     */
    abstract protected function getFieldset();

    /**
     * Get the content type
     *
     * @return string
     */
    public function contentType()
    {
        if ($this instanceof Page) {
            return 'page';
        } elseif ($this instanceof Entry) {
            return 'entry';
        } elseif ($this instanceof Term) {
            return 'term';
        } elseif ($this instanceof GlobalSet) {
            return 'globals';
        }
    }

    /**
     * Delete the content
     *
     * @return mixed
     */
    public function delete()
    {
        // Get all the paths that will need to be deleted. Depending on the content type,
        // more than one file may be deleted. For instance, deleting a page will delete
        // its children. Deleting a default locale will delete its localized versions.
        $paths = $this->getPathsForDeletion();

        // Iterate over the paths and perform the actual deletions. Goodbye, files.
        $paths->each(function ($path) {
            try {
                File::disk('content')->delete($path);
            } catch (FileNotFoundException $e) {
                // Prevent an error if the file doesn't exist.
                // For example, taxonomy terms can exist without a file existing.
            }
        });

        // Subclasses will be able to perform any post-save functionality. For example,
        // renaming a page would leave an empty folder, the Page class will delete it.
        $this->completeDelete();

        // Whoever wants to know about it can do so now.
        $event_class = 'Statamic\Events\Data\\' . ucfirst($this->contentType()) . 'Deleted';
        event(new $event_class($this->id(), $paths->all()));
        event(new ContentDeleted($this->id(), $paths->all()));
    }

    /**
     * Get the paths of files to be deleted
     *
     * @return \Illuminate\Support\Collection
     */
    protected function getPathsForDeletion()
    {
        // If we're deleting the default locale, the localized versions will need to
        // go along with it. In this case, we'll build up an array of all the paths.
        if ($this->isDefaultLocale()) {
            return collect($this->locales())->reduce(function ($paths, $locale) {
                return $paths->push($this->localizedPath($locale));
            }, collect());
        }

        // If we're just deleting a localized version, we'll
        // only need the current path, but we still want it formatted as an array.
        return collect([$this->path()]);
    }

    /**
     * Perform any necessary operations after a delete has been completed
     *
     * @return void
     */
    protected function completeDelete()
    {
        //
    }

    /**
     * Whether the data can be taxonomized
     *
     * @return bool
     */
    public function isTaxonomizable()
    {
        return true;
    }

    public function toSearchableArray($fields)
    {
        $array = [];

        foreach ($fields as $field) {
            $value = method_exists($this, $camel = Str::camel($field))
                ? $this->$camel()
                : $this->getWithDefaultLocale($field);

            if ($value instanceof Carbon) {
                $value = $value->timestamp;
            }

            $array[$field] = $value;
        }

        return $array;
    }

    /**
     * Get the last modified time of the content
     *
     * @return \Carbon\Carbon
     */
    public function lastModified()
    {
        // Content with no files have been created programmatically (eg. for a sneak peek)
        // and haven't been saved yet. We'll use the current time in that case.
        $timestamp = File::disk('content')->exists($path = $this->path())
            ? File::disk('content')->lastModified($path)
            : time();

        return Carbon::createFromTimestamp($timestamp);
    }
}
