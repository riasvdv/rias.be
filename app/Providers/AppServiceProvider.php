<?php

namespace App\Providers;

use App\Markdown\PhikiCommonMarkFlavor;
use CraftCms\Cms\Support\Facades\Markdown;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     */
    public function register(): void
    {
        //
    }

    /**
     * Bootstrap any application services.
     */
    public function boot(): void
    {
        Markdown::extend('gfm', new PhikiCommonMarkFlavor);
    }
}
