<?php

use Statamic\API\OAuth;
use Statamic\API\Config;

start_measure('routing', 'Running routes');

/**
 * The Statamic Installer
 */
Route::controller('installer', 'InstallerController');

/**
 * Control Panel
 */
if (CP_ROUTE !== false) {
    Route::group(['middleware' => cp_middleware()], function () {
        require __DIR__ . '/routes-cp.php';
    });
}

/**
 * Glide
 * On-the-fly URL-based image transforms.
 */
Route::group(['prefix' => Config::get('assets.image_manipulation_route')], function () {
    get('/asset/{container}/{path?}', 'GlideController@generateByAsset')->where('path', '.*');
    get('/http/{url}/{filename?}', 'GlideController@generateByUrl');
    get('{path}', 'GlideController@generateByPath')->where('path', '.*');
});

/**
 * OAuth Social Authentication
 */
if (OAuth::enabled()) {
    Route::group(['prefix' => OAuth::route()], function () {
        Route::get('{provider}', ['uses' => 'Auth\OAuthController@redirectToProvider', 'as' => 'oauth']);
        Route::get('{provider}/callback', ['uses' => 'Auth\OAuthController@handleProviderCallback', 'as' => 'oauth.callback']);
    });
}

/**
 * Controller trigger
 * Visiting /!/foo/bar will call Statamic\Addons\Foo\FooController::bar() if it
 * exists then fall back to emitting a foo.bar event. The ! is customizable.
 */
Route::any(EVENT_ROUTE . '/{controller?}/{method?}/{params?}', 'StatamicController@controllerTrigger')->where('params', '.*');

/**
 * Front-end
 * All front-end website requests go through a single controller method.
 */
Route::any('/{segments?}', 'StatamicController@index')->where('segments', '.*')->name('site')->middleware(['staticcache']);

stop_measure('routing');
