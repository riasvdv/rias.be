<?php

namespace Statamic\Http\Middleware\CP;

use Closure;
use Statamic\Http\Controllers\StatamicController;

class AddHeaders
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
        $response = $next($request);

        if ($this->requestShouldRemainUncached($request)) {
            return $response;
        }

        $response->headers->set('Cache-Control', 'nocache, no-store, max-age=0, must-revalidate');
        $response->headers->set('Pragma', 'no-cache');
        $response->headers->set('Expires', 'Fri, 01 Jan 1990 00:00:00 GMT');

        return $response;
    }

    protected function requestShouldRemainUncached($request)
    {
        return $request->is(CP_ROUTE.'/assets/thumbnails/*');
    }
}
