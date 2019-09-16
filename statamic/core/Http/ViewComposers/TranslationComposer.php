<?php

namespace Statamic\Http\ViewComposers;

use Illuminate\Contracts\View\View;

class TranslationComposer
{
    public function compose(View $view)
    {
        $translator = app('translator');

        $view->with('translations', $translator->all())
            ->with('cp_locale', $translator->locale());
    }
}
