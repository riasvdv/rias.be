<?php

/*
|--------------------------------------------------------------------------
| Create The Application
|--------------------------------------------------------------------------
|
| The first thing we will do is create a new Laravel application instance
| which serves as the "glue" for all the components of Laravel, and is
| the IoC container for the system binding all of the various parts.
|
*/

$app = new Statamic\Application(realpath(__DIR__.'/../'));

/*
|--------------------------------------------------------------------------
| Tweak Laravel Defaults
|--------------------------------------------------------------------------
|
| Laravel makes some assumptions about the way your app is structured.
| Statamic needs to move some things around to work the way we want.
| No problem, we'll just let Laravel know what's different.
|
*/

$app->useEnvironmentPath(realpath(__DIR__ . '/../../'));
$app->useStoragePath(realpath(__DIR__ . '/../../local/storage'));
$app->useDatabasePath(realpath(__DIR__ . '/../../site/database'));

/*
|--------------------------------------------------------------------------
| Bind Important Interfaces
|--------------------------------------------------------------------------
|
| Next, we need to bind some important interfaces into the container so
| we will be able to resolve them when needed. The kernels serve the
| incoming requests to this application from both the web and CLI.
|
*/

$app->singleton(
    'Illuminate\Contracts\Http\Kernel',
    'Statamic\Http\Kernel'
);

$app->singleton(
    'Illuminate\Contracts\Console\Kernel',
    'Statamic\Console\Kernel'
);

$app->singleton(
    'Illuminate\Contracts\Debug\ExceptionHandler',
    'Statamic\Exceptions\Handler'
);

/*
|--------------------------------------------------------------------------
| Configure the Logging Handler
|--------------------------------------------------------------------------
|
| Next, we configure the logging handlers for the application.
| This needs to happen as early as possible in order to
| catch any startup errors or notices.
|
*/

$app->configureMonologUsing(function($monolog) {
    new Statamic\Logging\LoggingHandler($monolog);
});


/*
|--------------------------------------------------------------------------
| Return The Application
|--------------------------------------------------------------------------
|
| This script returns the application instance. The instance is given to
| the calling script so we can separate the building of the instances
| from the actual running of the application and sending responses.
|
*/

return $app;
