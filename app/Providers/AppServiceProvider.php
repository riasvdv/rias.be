<?php

namespace App\Providers;

use App\Http\Middleware\MarkResponsePublic;
use App\Markdown\PhikiCommonMarkFlavor;
use CraftCms\Cms\Support\Facades\Markdown;
use Illuminate\Routing\Router;
use Illuminate\Support\ServiceProvider;
use Rias\CraftStaticCache\Http\Middleware\CacheStaticResponse;

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

        // Static Cache inserts its middleware while booting, so place ours right inside it afterwards.
        $this->app->booted(function (): void {
            $router = $this->app->make(Router::class);
            $middleware = $router->getMiddlewareGroups()['craft.web'] ?? [];
            $position = array_search(CacheStaticResponse::class, $middleware, true);

            if ($position !== false) {
                array_splice($middleware, $position + 1, 0, [MarkResponsePublic::class]);
                $router->middlewareGroup('craft.web', $middleware);
            }
        });
    }
}
