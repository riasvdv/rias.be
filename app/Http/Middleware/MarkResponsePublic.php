<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

/**
 * Laravel responses default to `Cache-Control: private`, which Craft Static Cache
 * refuses to store. Runs inside the static cache middleware so guest pages can be cached.
 */
class MarkResponsePublic
{
    public function handle(Request $request, Closure $next): mixed
    {
        $response = $next($request);

        if ($response instanceof Response && $request->isMethodCacheable() && ! $request->user()) {
            $response->setPublic();
        }

        return $response;
    }
}
