<?php
/*
|--------------------------------------------------------------------------
| Path to the `statamic` folder
|--------------------------------------------------------------------------
|
| We know you love Statamic. That's why you're here. But you might not
| like putting folders where we've suggested. That's okay. Just do us
| a favor and let us know where you'd like them.
|
*/

$statamic = '../statamic';

/*
|--------------------------------------------------------------------------
| Site Root
|--------------------------------------------------------------------------
|
| The site root is where your website is being served from. Most of the
| time it'll likely be in the webroot, so you can leave it as "/". But
| sometimes you need to move it. Maybe you're just using Statamic for
| a blog, or you're setting up locale subdirectories. Whatever the
| case, just specify it below.
|
*/

$site_root = '/';

/*
|--------------------------------------------------------------------------
| Rewrite URLs
|--------------------------------------------------------------------------
|
| If you're unable to use any kind of URL rewriting such as Apache htaccess
| or nginx rewrite rules, you can force the "index.php" into your URLs to
| tell Statamic to handle the request. This behavior is off by default.
|
*/

$rewrite_urls = true;

/*
|--------------------------------------------------------------------------
| Control Panel
|--------------------------------------------------------------------------
|
| The URL where you'll access the Control Panel. It's usually "cp"
| like http://statamic.com/cp, But if you want to change it, do
| it here. You may also disable the CP by setting to false.
|
*/

$control_panel = 'cp';

/*
|--------------------------------------------------------------------------
| Locale
|--------------------------------------------------------------------------
|
| We speak English, but not everyone does. Let us know which locale
| you'd like to be serving here.
|
*/

$locale = 'en';

/*
|--------------------------------------------------------------------------
| Resources
|--------------------------------------------------------------------------
|
| Statamic routes its own assets (css, js, etc) and any addons' assets
| from a variable location. Depending on your setup, they might be
| below webroot, so this route lets us serve them from a public
| location. If you need to use the word `_resources` in your
| own URLs, you may go ahead and modify this setting.
|
*/

$resources = '_resources';

/*
|--------------------------------------------------------------------------
| Default Environment
|--------------------------------------------------------------------------
|
| Unless specified in your .env file using the APP_ENV key,
| this will be the name of your default environment.
|
*/

$environment = 'production';

/*
|--------------------------------------------------------------------------
| DANGER!$#@
|--------------------------------------------------------------------------
|
| Don't edit anything below here.
| Things might happen. Bad things.
|
*/

define('STATAMIC_ROOT', __DIR__);
define('RELATIVE_APP', $statamic);
define('APP', realpath(STATAMIC_ROOT . '/' . rtrim($statamic, '/')));

$bootstrap = APP . '/bootstrap/start.php';

if (! is_file($bootstrap)) {
    if (function_exists('http_response_code')) {
        http_response_code(503);
    }

    $msg = "<style>body{font:normal 16px/2 arial, sans-serif;}code{font:bold 14px/2 consolas,monospace;
            background:#eee;padding:3px 5px;}</style>";
    $msg .= "Uh oh. We couldn't find your <code>statamic</code> folder.<br>
            Check that it's set correctly in <code>" . __FILE__ . "</code>";

    exit($msg);
}

/*
|--------------------------------------------------------------------------
| Register The Auto Loader
|--------------------------------------------------------------------------
|
| Composer provides a convenient, automatically generated class loader for
| our application. We just need to utilize it! We'll simply require it
| into the script here so that we don't have to worry about manual
| loading any of our classes later on. It feels nice to relax.
|
*/

require APP . '/bootstrap/autoload.php';

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

$app = require_once $bootstrap;

/*
|--------------------------------------------------------------------------
| Run The Application
|--------------------------------------------------------------------------
|
| Once we have the application, we can handle the incoming request
| through the kernel, and send the associated response back to
| the client's browser allowing them to enjoy the creative
| and wonderful application we have prepared for them.
|
*/

$kernel = $app->make('Illuminate\Contracts\Http\Kernel');

$response = $kernel->handle(
    $request = Illuminate\Http\Request::capture()
);

$response->send();

$kernel->terminate($request, $response);
