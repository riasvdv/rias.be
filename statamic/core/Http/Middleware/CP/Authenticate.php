<?php

namespace Statamic\Http\Middleware\CP;

use Closure;
use Illuminate\Contracts\Auth\Guard;
use Illuminate\Contracts\Auth\Access\Gate;

class Authenticate
{
    /**
     * The Guard implementation.
     *
     * @var Guard
     */
    protected $auth;

    /**
     * The Gate implementation
     *
     * @var Gate
     */
    protected $gate;

    /**
     * Create a new filter instance.
     *
     * @param  Guard                                 $auth
     * @param \Illuminate\Contracts\Auth\Access\Gate $gate
     */
    public function __construct(Guard $auth, Gate $gate)
    {
        $this->auth = $auth;
        $this->gate = $gate;
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
        if ($this->auth->guest()) {
            if ($request->ajax()) {
                return response('Unauthorized.', 401);
            } else {
                return redirect()->guest(CP_ROUTE . '/auth/login');
            }
        }

        if (! $this->gate->check('cp:access')) {
            if ($request->ajax()) {
                return response('Unauthorized.', 403);
            } else {
                abort(403);
            }
        }

        return $next($request);
    }
}
