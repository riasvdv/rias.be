<?php

namespace Statamic\Http\ViewComposers;

use Statamic\API\File;
use Illuminate\Contracts\View\View;
use Statamic\Extend\Management\AddonRepository;

class JavascriptComposer
{
    /**
     * @var AddonRepository
     */
    private $repo;

    public function __construct(AddonRepository $repo)
    {
        $this->repo = $repo;
    }

    public function compose(View $view)
    {
        $view->with('scripts', $this->scripts());
    }

    private function scripts()
    {
        // Don't bother doing anything on the login screen.
        if (\Route::current() && \Route::current()->getName() === 'login') {
            return '';
        }

        $scripts = $this->repo->thirdParty()->filename('scripts.js', 'resources/assets/js')->files();

        $str = '';

        foreach ($scripts as $path) {
            $dir = pathinfo($path)['dirname'];
            $parts = explode('/', $dir);

            $str .= sprintf('<script src="%s"></script>', resource_url("addons/{$parts[2]}/js/scripts.js"));
        }

        // If there's a site helper CP JS file, we'll add that *before* the addon scripts.
        if (File::exists('site/helpers/cp/scripts.js')) {
            $str = sprintf('<script src="%s"></script>', resource_url('helpers/cp/scripts.js')) . $str;
        }

        return $str;
    }
}
