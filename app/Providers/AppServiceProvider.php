<?php

namespace App\Providers;

use Facade\Ignition\Facades\Flare;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        Flare::group('Statamic', [
            'view' => "<pre>" . view('errors.404')->toHtml() . "</pre>",
        ]);
    }

    public function register()
    {
        //
    }
}
