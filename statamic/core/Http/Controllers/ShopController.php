<?php

namespace Statamic\Http\Controllers;

/**
 * Controller for the snippets area
 */
class ShopController extends CpController
{
    /**
     * View for /cp/plugins
     */
    public function index()
    {
        $data = [
            'title' => 'Shop'
        ];

        return view('shop', $data);
    }
}
