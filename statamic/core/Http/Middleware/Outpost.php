<?php

namespace Statamic\Http\Middleware;

use Closure;
use Statamic\API\Str;
use Statamic\Outpost\Outpost as StatamicOutpost;

class Outpost
{
    /**
     * @var Request
     */
    private $request;

    /**
     * @var StatamicOutpost
     */
    private $outpost;

    /**
     * Create a new Middleware
     *
     * @param StatamicOutpost $outpost
     */
    public function __construct(StatamicOutpost $outpost)
    {
        $this->outpost = $outpost;
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
        $this->request = $request;

        $this->outpost->radio();

        $this->setLicensing();

        $this->setUpdateAvailability();

        return $next($request);
    }

    /**
     * Set a notice if there is a newer version available
     *
     * @return void
     */
    private function setUpdateAvailability()
    {
        view()->share('update_available', $this->outpost->isUpdateAvailable());
    }

    /**
     * Set some view data related to licensing messages
     *
     * @return void
     */
    private function setLicensing()
    {
        view()->composer('layout', function ($view) {
            $view->with('outpost', $this->outpost);
        });
    }
}
