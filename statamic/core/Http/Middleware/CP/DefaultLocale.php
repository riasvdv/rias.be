<?php

namespace Statamic\Http\Middleware\CP;

use Closure;
use Statamic\API\Str;
use Statamic\API\URL;
use Statamic\API\Config;

class DefaultLocale
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
        // Move along if this isn't a CP request.
        if (! Str::startsWith($request->path(), CP_ROUTE)) {
            return $next($request);
        }
        
        // Using the default locale? Done.
        if (site_locale() === Config::getDefaultLocale()) {
            return $next($request);
        }
        
        // What "The" CP URL should be.
        $cp_url = URL::tidy(
            array_get(Config::get('system.locales'), Config::getDefaultLocale().'.url') . '/' . CP_ROUTE
        );
        
        if (! Str::startsWith($cp_url, 'http')) {
            $cp_url = '//' . $request->server('SERVER_NAME') . $cp_url;
        }
        
        return redirect($cp_url);
    }
}
