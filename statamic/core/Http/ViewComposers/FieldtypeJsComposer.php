<?php

namespace Statamic\Http\ViewComposers;

use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\Config;
use Illuminate\Contracts\View\View;
use Statamic\Extend\Management\AddonRepository;

class FieldtypeJsComposer
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
        $view->with('fieldtype_js', $this->fieldtypeJs());
    }

    private function fieldtypeJs()
    {
        // Don't bother doing anything on the login screen.
        if (\Route::current() && \Route::current()->getName() === 'login') {
            return '';
        }

        $defaults = [];

        $str = collect($this->repo->fieldtypes()->files())->map(function ($path) use (&$defaults) {
            $dir = collect(explode('/', $path))->take(3)->implode('/');

            // Add the default value to the array
            $name = explode('/', $dir)[2];
            $fieldtype = app('Statamic\CP\FieldtypeFactory')->create($name);
            $defaults[$fieldtype->getHandle()] = $fieldtype->blank();

            if (File::exists(Path::assemble($dir, 'resources/assets/js/fieldtype.js'))) {
                return $fieldtype->js->tag('fieldtype');
            }
        })->filter()->unique()->implode('');

        return '<script>Statamic.fieldtypeDefaults = '.json_encode($defaults).';</script>' . $str . $this->redactor();
    }

    private function redactor()
    {
        $str = '<script>Statamic.redactorSettings = ';

        $configs = collect(Config::get('system.redactor', []))->keyBy('name')->map(function ($config) {
            return $config['settings'];
        })->all();

        $str .= json_encode($configs);

        $str .= ';</script>';

        return $str;
    }
}
