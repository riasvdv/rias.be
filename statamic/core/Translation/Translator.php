<?php

namespace Statamic\Translation;

use Statamic\API\Folder;

class Translator extends \Illuminate\Translation\Translator
{
    /**
     * Fallback translation loader.
     *
     * @var \Illuminate\Translation\Translator
     */
    private $fallbackTranslator;

    /**
     * Return all the translations of all the translation files.
     *
     * Priority would first go the the user's local site translations before
     * Statamic's default translations.
     *
     * Since addon's localizations have a prefix, there isn't any issues that
     * will happen, or it's an edge case at the very least.
     *
     * @return Collection
     */
    public function all()
    {
        return collect(array_replace_recursive(
                $this->fallback()->all(),
                $this->primary()->all()
            ))->merge($this->getAddonTranslations());
    }

    /**
     * Return all the translations for the primary locale.
     *
     * @return Collection
     */
    private function primary()
    {
        return $this->getTranslations($this->locale(), site_path('lang'));
    }

    /**
     * Return all the fallback translations.
     *
     * @return Collection
     */
    private function fallback()
    {
        return $this->getTranslations('en', base_path('resources/lang'));
    }

    /**
     * Translate the given string to the requested locale.
     *
     * There are two provided translation locations:
     * - User:     site/lang/<locale>
     * - Fallback: resources/lang/en
     *
     * We made our own translation to look first for the local translation and
     * fallback to the core translation when there isn't any found.
     *
     * @param  string  $key
     * @param  array  $replace
     * @param  string  $locale
     * @param  bool  $fallback
     * @return string
     */
    public function get($key, array $replace = [], $locale = null, $fallback = true)
    {
        $translation = parent::get($key, $replace, $locale, $fallback);

        // If it's an addon translation, here's a temporary workaround to return the proper value for the addon.
        if ($key == $translation && str_contains($translation, 'addons.')) {
            $translations = array_dot($this->getAddonTranslations());
            $translation = isset($translations[$key]) ? $translations[$key] : $key;
        }

        // We can't use `has($key)` since we'll end up in the infinite void of space and time.
        if ($key == $translation) {
            $translation = $this->getFallbackTranslator()->get($key, $replace, $locale, $fallback);
        }

        return $translation;
    }

    /**
     * Get the fallback translator
     *
     * @return \Illuminate\Translation\Translator
     */
    private function getFallbackTranslator()
    {
        if ($this->fallbackTranslator) {
            return $this->fallbackTranslator;
        }

        return $this->fallbackTranslator = new parent(app('translation.loader.fallback'), $this->fallback);
    }

    /**
     * Return all the translations from the given path.
     *
     * @param  string  $path
     * @return array
     */
    private function getTranslations($locale, $path)
    {
        return collect(Folder::getFiles($path . '/' . $locale))
            ->localize();
    }

    /**
     * Return all the addon translations.
     *
     * @return array
     */
    private function getAddonTranslations()
    {
        return $this
            ->getLocalizableAddons()
            ->map(function ($files, $addon) {
                return collect($files)
                    ->localize("addons.{$addon}::")
                    ->all();
            })
            ->collapse();
    }

    /**
     * Return all the addons with localization available.
     *
     * @note    Not sure if it's better to clean this up with a macro or just
     *          keep it here in this method.
     *
     * @return \Illuminate\Support\Collection
     */
    private function getLocalizableAddons()
    {
        return collect(Folder::getFolders(site_path('addons')))
            ->filter(function ($item) {
                return Folder::exists(root_path() . $item . '/resources/lang/' . $this->locale);
            })
            ->keyBy(function ($item) {
                return pathinfo($item, PATHINFO_BASENAME);
            })
            ->map(function ($item) {
                return root_path() . $item . '/resources/lang/' . $this->locale;
            })
            ->map(function ($item) {
                return Folder::getFiles($item);
            });
    }
}
