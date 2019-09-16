<?php

namespace Statamic\Http;

use Statamic\API\Arr;
use Statamic\API\File;
use Statamic\API\GlobalSet;
use Statamic\API\Path;
use Statamic\DataStore;
use Statamic\API\Parse;
use Statamic\API\Config;
use Statamic\API\Helper;
use Statamic\Config\Globals;
use Statamic\Routing\ExceptionRoute;
use Statamic\Contracts\Data\LocalizedData;

/**
 * Controls the rendering of templates in views
 */
class View
{
    /**
     * @var array|\Statamic\Contracts\Data\Content\Content
     */
    protected $data;

    /**
     * @var string
     */
    protected $template;

    /**
     * Create a new View instance
     *
     * @param \Statamic\DataStore $store
     */
    public function __construct(DataStore $store)
    {
        $this->store = $store;

        // Ensure the ViewFinder will look in the theme directory for templates
        app('view')->getFinder()->prependLocation(config('filesystems.disks.theme.root').'/templates');
    }

    /**
     * Render a template
     *
     * @param array|null  $data Additional data to be passed to the template
     * @param string|null $template Name of the template to load
     * @return string
     */
    public function render($data = [], $template = null)
    {
        $this->data = $data;

        $this->template = $template;

        // Render the first matching template for the view.
        foreach ($this->getTemplate() as $template) {
            if (view()->exists($template)) {
                $this->template = $template;
                $this->updateDataStore();
                start_measure('rendering', "Rendering Template [$template]");
                $view = view($template, $this->store->getAll());
                break;
            }
        }

        if (! isset($view)) {
            \Log::notice(sprintf("No matching templates: [%s]", join(', ', array_filter($this->getTemplate()))));

            return view('welcome');
        }

        stop_measure('rendering');

        return $view;
    }

    /**
     * Update the DataStore with necessary data
     */
    protected function updateDataStore()
    {
        // Add some helper variables into the scope
        $this->store->merge([
            'template' => $this->template,
            'layout'   => $this->getLayout()
        ]);

        // Add globals. Each global set will get their own scope.
        $this->mergeGlobalsIntoDataStore();

        // The 'global.yaml' global set will be merged into the global cascade.
        $this->store->merge($this->store->getScope('global'));

        // Merge anything passed to this in a $data parameter.
        // Also put it in the 'page' scope if anyone ever needs to access it from inside another scope
        $data = (is_object($this->data)) ? $this->data->toArray() : $this->data;
        $this->store->merge($data);
        $this->store->mergeInto('page', $data);
        $this->store->merge(['page_object' => $this->data instanceof LocalizedData ? $this->data->get() : $this->data]);
    }

    /**
     * Merge the globals into the data store
     *
     * @return void
     */
    protected function mergeGlobalsIntoDataStore()
    {
        GlobalSet::all()->each(function ($global) {
            $global = $global->in(site_locale())->get();

            $data = $global->dataWithDefaultLocale();

            // The data for the global can be overridden within environment yaml files. We want
            // to grab these overrides if they exist and merge it with the actual global data.
            $env = app(Globals::class)->get($global->slug(), []);
            $data = Arr::combineRecursive($data, $env);

            $this->store->mergeInto($global->slug(), $data);
        });
    }

    /**
     * Get the template to be rendered
     *
     * @return array
     */
    protected function getTemplate()
    {
        // First, if one was specified earlier, we'll just use that
        if ($this->template) {
            return Helper::ensureArray($this->template);
        }

        return $this->data->template();
    }

    /**
     * Get the layout to be rendered
     *
     * @return array|string
     */
    protected function getLayout()
    {
        if ($this->errorLayoutShouldBeUsed()) {
            return 'error';
        }

        return $this->data->layout();
    }

    protected function errorLayoutShouldBeUsed()
    {
        return $this->data instanceof ExceptionRoute
            && File::disk('theme')->exists('layouts/error.html');
    }
}
