<?php

namespace Statamic\Http\Middleware;

use Closure;
use Statamic\API\File;

class Installer
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
        if (! File::exists('installer.php')) {
            abort(404);
        }

        return $next($request);
    }
}
