<?php

namespace Statamic\Providers;

use Statamic\API\Str;
use Statamic\API\Config;
use Illuminate\Routing\Router;
use Statamic\Events\RoutesMapping;
use Statamic\Routing\Router as StatamicRouter;
use Illuminate\Foundation\Support\Providers\RouteServiceProvider as ServiceProvider;

class RouteServiceProvider extends ServiceProvider
{
    /**
     * This namespace is applied to the controller routes in your routes file.
     *
     * In addition, it is set as the URL generator's root namespace.
     *
     * @var string
     */
    protected $namespace = 'Statamic\Http\Controllers';

    /**
     * Define your route model bindings, pattern filters, etc.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function boot(Router $router)
    {
        if (Str::startsWith(request()->path(), CP_ROUTE)) {
            app('Statamic\CP\Router')->bindAddonRoutes();
        }

        parent::boot($router);
    }

    public function register()
    {
        $this->app->bind(StatamicRouter::class, function () {
            $routes = array_get(Config::getRoutes(), 'routes', []);
            return new StatamicRouter($routes);
        });
    }

    /**
     * Define the routes for the application.
     *
     * @param  \Illuminate\Routing\Router  $router
     * @return void
     */
    public function map(Router $router)
    {
        event(new RoutesMapping($router));

        $router->group(['namespace' => $this->namespace], function ($router) {
            require app_path('Http/routes.php');
        });
    }
}
