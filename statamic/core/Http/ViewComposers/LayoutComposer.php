<?php

namespace Statamic\Http\ViewComposers;

use Statamic\API\URL;
use Statamic\API\Event;
use Illuminate\Contracts\View\View;

class LayoutComposer
{
    public function compose(View $view)
    {
        $view->with('cp_root', $this->cpRoot());

        $view->with('layout_head', $this->assemble('cp.add_to_head'));
    }

    private function cpRoot()
    {
        $url = [SITE_ROOT];

        if (! REWRITE_URLS) {
            $url[] = pathinfo(request()->getScriptName())['basename'];
        }

        $url[] = CP_ROUTE;

        return URL::tidy(join('/', $url));
    }

    private function assemble($event)
    {
        $response = Event::fire($event);

        return join(PHP_EOL, $response);
    }
}
