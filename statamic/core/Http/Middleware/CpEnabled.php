<?php

namespace Statamic\Http\Middleware;

use Closure;
use Statamic\Http\Controllers\StatamicController;

class CpEnabled
{
    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        if (env('DISABLE_CP')) {
            return app()->call(StatamicController::class.'@index', ['segments' => $request->path()]);
        }

        return $next($request);
    }
}
