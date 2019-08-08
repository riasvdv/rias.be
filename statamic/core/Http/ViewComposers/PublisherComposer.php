<?php

namespace Statamic\Http\ViewComposers;

use Illuminate\Contracts\View\View;
use Illuminate\Http\Request;

class PublisherComposer
{
    /**
     * The request object.
     *
     * @var Request
     */
    protected $request;

    /**
     * Create a new composer instance.
     *
     * @param  Request  $request
     * @return PublisherComposer
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Compose the view.
     *
     * @param  View  $view
     * @return void
     */
    public function compose(View $view)
    {
        // $view->with('locale', $this->request->query('locale', site_locale()));
    }
}
