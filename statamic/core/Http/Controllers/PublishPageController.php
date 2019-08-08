<?php

namespace Statamic\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\API\Page;
use Statamic\API\URL;
use Statamic\API\Fieldset;
use Statamic\Events\Data\PublishFieldsetFound;

/**
 * @todo  For the methods `create` and `edit`, not sure which is much cleaner,
 *        building the `submit_url` from there or building it from the view
 *        {{ route("{$content_type}.save") }}.
 */
class PublishPageController extends PublishController
{
    /**
     * Display the publish field.
     *
     * @param  Request  $request
     * @param  string  $url  The URL of the parent page.
     * @return \Illuminate\Contracts\View\View
     */
    public function create(Request $request, $url = '/')
    {
        $this->authorize('pages:create');

        if (! $parent = $this->page($url)) {
            return redirect(route('pages'))->withErrors("Page [$url] doesn't exist.");
        }

        $fieldset = Fieldset::get($request->query('fieldset', $parent->fieldset()->name()));
        event(new PublishFieldsetFound($fieldset, 'page'));

        $data = $this->addBlankFields($fieldset);
        $data['slug'] = null;

        return view('publish', [
            'title'             => t('create_page'),
            'uuid'              => null,
            'uri'               => null,
            'url'               => null,
            'slug'              => null,
            'extra'             => ['parent_url' => $url],
            'is_new'            => true,
            'content_type'      => 'page',
            'status'            => $parent->getWithCascade('default_status') === 'draft' ? false : true,
            'is_default_locale' => true,
            'locale'            => $this->locale($request),
            'locales'           => $this->getLocales(),
            'fieldset'          => $fieldset->toPublishArray(),
            'content_data'      => $data,
            'suggestions'       => $this->getSuggestions($fieldset),
        ]);
    }

    /**
     * Display the edit form for the page.
     *
     * @param  Request  $request
     * @param  string  $url  URL of the page to edit. No URI indicates the home page.
     * @return void
     */
    public function edit(Request $request, $url = '/')
    {
        $this->authorize('pages:view');

        if (! $page = $this->page($url)) {
            return redirect()->route('pages')->withErrors('No page found.');
        }

        $locale = $this->locale($request);
        $page   = $page->in($locale)->get();
        $fieldset = $page->fieldset();
        event(new PublishFieldsetFound($fieldset, 'page', $page));
        $data   = $this->addBlankFields($fieldset, $page->processedData());
        $data['slug'] = $page->slug();

        return view('publish', [
            'is_new'            => false,
            'content_data'      => $data,
            'content_type'      => 'page',
            'fieldset'          => $fieldset->toPublishArray(),
            'title'             => array_get($data, 'title', $url),
            'uuid'              => $page->id(),
            'uri'               => $page->uri(),
            'url'               => $page->url(),
            'slug'              => $data['slug'],
            'status'            => $page->published(),
            'locale'            => $locale,
            'is_default_locale' => $page->isDefaultLocale(),
            'locales'           => $this->getLocales($page->id()),
            'extra'             => [
                'is_home'    => $page->uri() === '/',
                'parent_url' => URL::parent($url)
            ],
            'suggestions' => $this->getSuggestions($fieldset),
        ]);
    }

    /**
     * Build the redirect.
     *
     * @param  Request  $request
     * @param  \Statamic\Data\Pages\Page  $page
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function redirect(Request $request, $page)
    {
        $parameters = ['url' => ltrim($page->url(), '/')];

        if ($request->continue) {
            return route('page.edit', $parameters);
        }

        if ($request->another) {
            return route('page.create', [
                'parent' => request('extra.parent_url'),
                'fieldset' => request('fieldset')
            ]);
        }

        return route('pages');
    }

    /**
     * Fetch the page from the given URL.
     *
     * @param  string  $url
     * @return \Statamic\Data\Pages\Page|null
     */
    private function page($url)
    {
        return Page::whereUri(URL::format($url));
    }

    /**
     * Return the locale from the request.
     *
     * @param  Request  $request
     * @return string
     */
    private function locale(Request $request)
    {
        return $request->query('locale', site_locale());
    }

    /**
     * Whether the user is authorized to publish the object.
     *
     * @param Request $request
     * @return bool
     */
    protected function canPublish(Request $request)
    {
        return $request->user()->can(
            $request->new ? 'pages:create' : 'pages:edit'
        );
    }
}
