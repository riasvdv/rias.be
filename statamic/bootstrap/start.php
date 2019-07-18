<?php

use Statamic\API\Str;
use Statamic\API\URL;
use Statamic\API\Path;
use Statamic\Http\ResourceServer\Server;

define('STATAMIC_VERSION', '2.11.13');

/*
|--------------------------------------------------------------------------
| Constants
|--------------------------------------------------------------------------
|
| Some things should never change.
|
*/

define('APP_FOLDER', pathinfo($statamic)['filename']);
define('BASE', Path::tidy(realpath(rtrim(APP, APP_FOLDER))));

define('ARTISAN_BINARY', STATAMIC_ROOT . '/please');

define('SITE_ROOT', $site_root);
define('CP_ROUTE', $control_panel);
define('RESOURCES_ROUTE', isset($resources) ? $resources : 'resources');

define('REWRITE_URLS', isset($rewrite_urls) ? $rewrite_urls : true);

define('EVENT_ROUTE', '!');
define('LOCALE', $locale);
define('DEFAULT_ENVIRONMENT', isset($environment) ? $environment : 'production');

/*
|--------------------------------------------------------------------------
| Load resources
|--------------------------------------------------------------------------
|
| Since CP resources are potentially located below webroot, we'll need
| to dynamically serve them. Doing that here allows us to bypass
| booting the application, and requests can be served faster.
|
*/

if (isset($_SERVER['REQUEST_URI'])) {
    $req = $_SERVER['REQUEST_URI'];
    $scr = pathinfo($_SERVER['SCRIPT_NAME'])['basename'];
    $uri1 = URL::assemble(SITE_ROOT, RESOURCES_ROUTE).'/';
    $uri2 = URL::assemble(SITE_ROOT, $scr, RESOURCES_ROUTE).'/';

    if (Str::startsWith($req, [$uri1, $uri2])) {
        (new Server)->serve();
        exit();
    }
}

/*
|--------------------------------------------------------------------------
| Create essential folders
|--------------------------------------------------------------------------
|
| Laravel needs some folders to exist in order to write cache files,
| logs, and other magical what-nots. Let's make sure they exist,
| and if they don't, we'll create them.
|
*/

$local = __DIR__.'/../../local/';
$folders = [
    'cache',
    'storage/framework/cache',
    'storage/framework/sessions',
    'storage/framework/views',
    'storage/logs',
    'temp'
];
foreach ($folders as $folder) {
    $dir = $local.$folder;

    if (! is_dir($dir)) {
        mkdir($dir, 0777, true);
    }
}

/*
|--------------------------------------------------------------------------
| Turn On The Lights
|--------------------------------------------------------------------------
|
| We need to illuminate PHP development, so let us turn on the lights.
| This bootstraps the framework and gets it ready for use, then it
| will load up this application so that we can run it and send
| the responses back to the browser and delight our users.
|
*/

return require_once __DIR__ . '/app.php';
