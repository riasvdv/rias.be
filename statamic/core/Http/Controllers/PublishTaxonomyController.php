<?php

namespace Statamic\Http\Controllers;

use Illuminate\Http\Request;
use Statamic\API\Taxonomy;
use Statamic\API\Term;
use Statamic\API\Fieldset;
use Stringy\StaticStringy as Stringy;
use Statamic\Events\Data\PublishFieldsetFound;

class PublishTaxonomyController extends PublishController
{
    /**
     * Create a new taxonomy
     *
     * @param string $group_name  The group the taxonomy will belong to
     * @return \Illuminate\View\View
     */
    public function create($group_name)
    {
        $this->authorize("taxonomies:$group_name:create");

        if (! $group = Taxonomy::whereHandle($group_name)) {
            return redirect(route('collections'))->withErrors("Taxonomy [$group->path()] doesn't exist.");
        }

        $fieldset = $group->fieldset();
        event(new PublishFieldsetFound($fieldset, 'term'));
        $data = $this->addBlankFields($fieldset);
        $data['slug'] = null;

        $title = translate(
            'cp.create_taxonomy_term',
            ['term' => str_singular(Stringy::toTitleCase($group->title()))]
        );

        $extra = [
            'taxonomy' => $group_name,
            'route' => $group->route()
        ];

        return view('publish', [
            'extra'             => $extra,
            'is_new'            => true,
            'content_data'      => $data,
            'content_type'      => 'taxonomy',
            'fieldset'          => $fieldset->toPublishArray(),
            'title'             => $title,
            'uuid'              => null,
            'url'               => null,
            'uri'               => null,
            'slug'              => null,
            'status'            => true,
            'locale'            => default_locale(),
            'is_default_locale' => true,
            'locales'           => $this->getLocales(),
            'suggestions'       => $this->getSuggestions($fieldset),
        ]);
    }

    /**
     * Edit an existing taxonomy term
     *
     * @param  Request  $request
     * @param  string  $taxonomy
     * @param  string  $slug
     * @return \Illuminate\Contracts\View\View
     */
    public function edit(Request $request, $taxonomy, $slug)
    {
        $this->authorize("taxonomies:$taxonomy:view");

        $locale = $request->query('locale', site_locale());

        if (! $term = Term::whereSlug($slug, $taxonomy)) {
            return redirect()->route('term.show', $taxonomy)->withErrors('No taxonomy found.');
        }

        $id = $term->id();

        $term = $term->in($locale)->get();

        $status = $term->published();

        $extra = [
            'taxonomy' => $taxonomy,
            'default_slug' => $slug
        ];

        $fieldset = $term->fieldset();
        event(new PublishFieldsetFound($fieldset, 'term', $term));

        $data = $this->addBlankFields($fieldset, $term->processedData());
        $data['title'] = $term->title();
        $data['slug'] = $term->slug();

        return view('publish', [
            'extra'             => $extra,
            'is_new'            => false,
            'content_data'      => $data,
            'content_type'      => 'taxonomy',
            'fieldset'          => $fieldset->toPublishArray(),
            'title'             => array_get($data, 'title', $slug),
            'uuid'              => $id,
            'uri'               => $term->uri(),
            'url'               => $term->url(),
            'slug'              => $slug,
            'status'            => $status,
            'locale'            => $locale,
            'is_default_locale' => $term->isDefaultLocale(),
            'locales'           => $this->getLocales($id),
            'suggestions'       => $this->getSuggestions($fieldset),
        ]);
    }

    /**
     * Build the redirect.
     *
     * @param  Request  $request
     * @param  \Statamic\Contracts\Data\Taxonomies\Term  $term
     * @return \Illuminate\Http\RedirectResponse
     */
    protected function redirect(Request $request, $term)
    {
        if ($request->continue) {
            return route('term.edit', [
                'group' => $term->taxonomyName(),
                'slug'  => $term->slug(),
            ]);
        }

        if ($request->another) {
            return route('term.create', $term->taxonomyName());
        }

        return route('terms.show', $term->taxonomyName());
    }

    /**
     * Whether the user is authorized to publish the object.
     *
     * @param Request $request
     * @return bool
     */
    protected function canPublish(Request $request)
    {
        $taxonomy = $request->input('extra.taxonomy');

        return $request->user()->can(
            $request->new ? "taxonomies:$taxonomy:create" : "taxonomies:$taxonomy:edit"
        );
    }
}
