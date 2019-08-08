<?php

namespace Statamic\Http\Middleware\CP;

use Closure;
use Statamic\API\Config;

class StartPage
{
    /**
     * Create a new filter instance.
     */
    public function __construct()
    {
    }

    /**
     * Handle an incoming request.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Closure  $next
     * @return mixed
     */
    public function handle($request, Closure $next)
    {
        $start = Config::get('cp.start_page');

        if ($start === 'pages') {
            return redirect()->route('pages');
        }

        return redirect()->route('dashboard');
    }
}
