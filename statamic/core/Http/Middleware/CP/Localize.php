<?php

namespace Statamic\Http\Middleware\CP;

use Lang;
use Closure;
use Carbon\Carbon;
use Statamic\API\User;
use Statamic\API\Config;
use Statamic\API\Helper;

class Localize
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
        $this->setLocale();

        return $next($request);
    }

    /**
     * Set the locale the translator will use within the control panel.
     *
     * Users can set their own locale in their files. If unspecified, it will fall back
     * to the locale setting in cp.yaml. Finally, it will fall back to the site locale.
     *
     * @return void
     */
    private function setLocale()
    {
        $user_locale = (User::loggedIn()) ? User::getCurrent()->get('locale') : null;

        $locale = Helper::pick(
            $user_locale,
            Config::get('cp.locale'),
            Config::getShortLocale()
        );

        try {
            Carbon::setLocale($locale);
        } catch (\Exception $e) {
            // Just in case Carbon doesn't support the locale provided,
            // we wouldn't want things to break.
        }

        Lang::setLocale($locale);
    }
}
