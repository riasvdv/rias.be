<?php

/**
 * Control Panel Authentication
 */
Route::group(['prefix' => CP_ROUTE . '/auth'], function () {
    get('login', 'Auth\AuthController@getLogin')->name('login');
    post('login', 'Auth\AuthController@postLogin');
    get('logout', 'Auth\AuthController@getLogout')->name('logout');
    get('login/reset', 'Auth\AuthController@getPasswordReset')->name('login.reset');
    post('login/reset', 'Auth\AuthController@postPasswordReset');
    get('token', function () {
        return csrf_token();
    });
});

/**
 * The Control Panel
 */
Route::group(['prefix' => CP_ROUTE, 'middleware' => ['auth']], function () {
    get('/', 'CpController@index')->middleware('start')->name('cp');

    // Dashboard
    get('dashboard', 'DashboardController@index')->name('dashboard');

    get('licensing', 'LicensingController@index')->name('licensing');
    get('licensing/refresh', 'LicensingController@refresh')->name('licensing.refresh');
    post('licensing', 'LicensingController@update')->name('licensing.update');

    // Content
    get('content', 'PagesController@index')->name('content');

    // Pages
    Route::group(['prefix' => 'pages'], function () {
        get('/', 'PagesController@pages')->name('pages');
        post('/', 'PagesController@save')->name('pages.post');
        get('/get', 'PagesController@get')->name('pages.get');
        post('/delete', 'PagesController@delete')->name('page.delete');

        post('publish', 'PublishPageController@save')->name('page.save');
        get('create/{parent?}', 'PublishPageController@create')->name('page.create')->where('parent', '.*');
        get('edit/{url?}', ['uses' => 'PublishPageController@edit', 'as' => 'page.edit'])->where('url', '.*');

        post('mount', ['uses' => 'PagesController@mountCollection', 'as' => 'page.mount']);
        post('duplicate', 'DuplicatePageController@store');
    });

    // Collections
    Route::group(['prefix' => 'collections'], function () {
        get('/', 'CollectionsController@index')->name('collections');
        get('get', 'CollectionsController@get')->name('collections.get');
    });

    // Entries
    Route::group(['prefix' => 'collections/entries'], function () {
        get('/', 'EntriesController@index')->name('entries');
        delete('delete', 'EntriesController@delete')->name('entries.delete');
        get('/{collection}/get', 'EntriesController@get')->name('entries.get');
        get('/{collection}/search', 'EntriesSearchController@search')->name('entries.search');
        post('reorder', 'EntriesController@reorder')->name('entries.reorder');

        get('/{collection}/create', 'PublishEntryController@create')->name('entry.create');
        post('/{collection}/duplicate', 'DuplicateEntryController@store')->name('entry.duplicate');
        get('/{collection}/{slug}', ['uses' => 'PublishEntryController@edit', 'as' => 'entry.edit']);
        post('publish', 'PublishEntryController@save')->name('entry.save');

        get('/{collection}', 'EntriesController@show')->name('entries.show');
    });

    // Taxonomies
    Route::group(['prefix' => 'taxonomies'], function () {
        get('/', 'TaxonomiesController@index')->name('taxonomies');
        get('get', 'TaxonomiesController@get')->name('taxonomies.get');
    });

    // Taxonomy Terms
    Route::group(['prefix' => 'taxonomies/terms'], function () {
        get('/', 'TaxonomyTermsController@index')->name('terms');
        delete('delete', 'TaxonomyTermsController@delete')->name('terms.delete');
        get('/{collection}/get', 'TaxonomyTermsController@get')->name('terms.get');
        post('reorder', 'TaxonomyTermsController@reorder')->name('terms.reorder');

        get('/{collection}/create', 'PublishTaxonomyController@create')->name('term.create');
        get('/{collection}/{slug}', 'PublishTaxonomyController@edit')->name('term.edit');
        post('publish', 'PublishTaxonomyController@save')->name('taxonomy.save');
        // get('/{collection}/create', 'PublishController@createTaxonomy')->name('term.create');
        // get('/{collection}/{slug}', ['uses' => 'PublishController@editTaxonomy', 'as' => 'term.edit']);
        get('/{collection}', 'TaxonomyTermsController@show')->name('terms.show');
    });

    // Globals
    Route::group(['prefix' => 'globals'], function () {
        get('/', 'GlobalsController@index')->name('globals');
        get('get', 'GlobalsController@get')->name('globals.get');

        get('{slug}', ['uses' => 'PublishGlobalController@edit', 'as' => 'globals.edit']);
        post('publish', 'PublishGlobalController@save')->name('global.save');
    });

    // Assets
    Route::group(['prefix' => 'assets'], function () {
        get('/', 'AssetsController@index')->name('assets');

        Route::group(['prefix' => 'containers'], function () {
            delete('delete', 'AssetContainersController@delete')->name('assets.containers.delete');
            get('get', 'AssetContainersController@get')->name('assets.containers.get');
            post('resolve-path', 'AssetContainersController@getResolvedPath');
            post('resolve-url', 'AssetContainersController@getResolvedUrl');
            post('validate-s3', 'AssetContainersController@validateS3Credentials');
            get('{container}/folders', 'AssetContainersController@folders')->name('assets.containers.folders');
        });

        Route::group(['prefix' => 'folders'], function () {
            post('/', 'AssetFoldersController@store')->name('assets.folder.store');
            delete('delete', 'AssetFoldersController@delete')->name('assets.folders.delete');
            get('{container}/{path?}', 'AssetFoldersController@edit')->where('path',
                '.*')->name('assets.folder.edit');
            post('{container}/{path?}', 'AssetFoldersController@update')->where('path',
                '.*')->name('assets.folder.update');
        });

        get('thumbnails/{asset}/{size?}', 'AssetThumbnailController@show')->name('asset.thumbnail');

        post('get', 'AssetsController@get')->name('assets.get');
        delete('delete', 'AssetsController@delete')->name('asset.delete');
        get('browse/{container}/{folder?}', 'AssetsController@browse')->where('folder',
            '.*')->name('assets.browse');
        post('browse', 'AssetsController@json');
        post('search', 'AssetsController@search');
        post('/', 'AssetsController@store')->name('asset.store');
        get('download/{container}/{path}', 'AssetsController@download')->name('asset.download')->where('path', '.*');
        post('rename/{container}/{path}', 'AssetsController@rename')->name('asset.rename')->where('path', '.*');
        post('move', 'AssetsController@move')->name('asset.move');
        get('{container}/{path}', 'AssetsController@edit')->name('asset.edit')->where('path', '.*');
        post('{container}/{path}', 'AssetsController@update')->name('asset.update')->where('path', '.*');
    });


    // Users
    Route::group(['prefix' => 'users'], function () {
        get('account', 'UsersController@account')->name('account');
        get('account/password', 'UsersController@accountPassword')->name('account.password');
        get('/', 'UsersController@index')->name('users');
        get('get', 'UsersController@get')->name('users.get');
        get('search', 'UsersController@search')->name('users.search');
        get('create', 'UsersController@create')->name('user.create');
        delete('delete', 'UsersController@delete')->name('users.delete');
        post('publish', 'PublishUserController@save')->name('user.save');

        // User Roles
        Route::group(['prefix' => 'roles'], function () {
            get('/', 'RolesController@index')->name('user.roles');
            get('get', 'RolesController@get')->name('user.roles.get');
            get('create', 'RolesController@create')->name('user.role.create');
            post('/', 'RolesController@store')->name('user.role.store');
            delete('delete', 'RolesController@delete')->name('user.roles.delete');
            get('roles', 'RolesController@getRoles');
            get('{role}', 'RolesController@edit')->name('user.role');
            post('{role}', 'RolesController@update')->name('user.role');
        });

        // User Groups
        Route::group(['prefix' => 'groups'], function () {
            get('/', 'UserGroupsController@index')->name('user.groups');
            get('get', 'UserGroupsController@get')->name('user.groups.get');
            get('create', 'UserGroupsController@create')->name('user.group.create');
            post('/', 'UserGroupsController@store')->name('user.group.store');
            delete('delete', 'UserGroupsController@delete')->name('user.groups.delete');
            get('groups', 'UserGroupsController@getGroups');
            get('{group}', 'UserGroupsController@edit')->name('user.group');
            post('{group}', 'UserGroupsController@update')->name('user.group');
        });

        get('{username}', 'UsersController@edit')->name('user.edit');
        get('{username}/reset-url', 'UsersController@getResetUrl');
        get('{username}/send-reset-email', 'UsersController@sendResetEmail');
        get('{username}/password/edit', 'UsersController@editPassword')->name('user.password.edit');
        post('{username}/password', 'UsersController@updatePassword')->name('user.password.update');
    });

    Route::group(['prefix' => 'forms'], function () {
        get('/', 'FormsController@index')->name('forms');
        get('get', 'FormsController@get')->name('forms.get');
        get('create', 'FormsController@create')->name('form.create');
        post('/', 'FormsController@store')->name('form.store');
        get('{form}', 'FormsController@show')->name('form.show');
        get('{form}/submissions', 'FormsController@getFormSubmissions')->name('form.submissions');
        get('{form}/edit', 'FormsController@edit')->name('form.edit');
        get('{form}/get', 'FormsController@getForm')->name('form.get');
        post('{form}', 'FormsController@update')->name('form.update');
        get('{form}/submission/{submission}', 'FormsController@submission')->name('form.submission.show');
        get('{form}/submission/{submission}/delete',
            'FormsController@deleteSubmission')->name('form.submission.delete');
        get('{form}/export/{type}', 'FormsController@export')->name('form.export');
    });

    // Configuration
    Route::group(['prefix' => 'configure/content', 'middleware' => 'configurable'], function () {
        get('/', function () {
            return redirect()->route('collections.manage');
        })->name('content');

        Route::group(['prefix' => 'assets'], function () {
            delete('/', 'AssetContainersController@delete')->name('assets.containers.delete');
            get('/', 'AssetContainersController@manage')->name('assets.containers.manage');
            post('/', 'AssetContainersController@store')->name('assets.container.store');
            get('create', 'AssetContainersController@create')->name('assets.container.create');
            get('{uuid}', 'AssetContainersController@edit')->name('assets.container.edit');
            post('{uuid}', 'AssetContainersController@update')->name('assets.container.update');
        });

        // Configure Collections
        Route::group(['prefix' => 'collections'], function () {
            get('/', 'CollectionsController@manage')->name('collections.manage');
            post('/', 'CollectionsController@store')->name('collection.store');
            get('create', 'CollectionsController@create')->name('collection.create');
            delete('delete', 'CollectionsController@delete')->name('collection.delete');
            delete('delete', 'CollectionsController@delete')->name('collections.delete');
            get('{collection}', 'CollectionsController@edit')->name('collection.edit');
            post('{collection}', 'CollectionsController@update')->name('collection.update');
        });

        // Configure Taxonomies
        Route::group(['prefix' => 'taxonomies'], function () {
            get('/', 'TaxonomiesController@manage')->name('taxonomies.manage');
            delete('delete', 'TaxonomiesController@delete')->name('taxonomy.delete');
            get('create', 'TaxonomiesController@create')->name('taxonomy.create');
            post('/', 'TaxonomiesController@store')->name('taxonomy.store');
            delete('delete', 'TaxonomiesController@delete')->name('taxonomies.delete');
            get('{collection}', 'TaxonomiesController@edit')->name('taxonomy.edit');
            post('{collection}', 'TaxonomiesController@update')->name('taxonomy.update');
        });

        // Globals
        Route::group(['prefix' => 'globals'], function () {
            get('/', 'GlobalsController@manage')->name('globals.manage');
            post('/', 'GlobalsController@store')->name('globals.store');
            get('create', 'GlobalsController@create')->name('globals.create');
            delete('delete', 'GlobalsController@delete')->name('globals.delete');
            get('{global}', 'GlobalsController@configure')->name('globals.configure');
            post('{global}', 'GlobalsController@update')->name('globals.update');
        });
    });

    // Templates
    get('system/templates/get', 'CpController@templates');

    // Themes
    get('system/themes/get', 'CpController@themes');

    // Settings
    Route::group(['prefix' => 'settings', 'middleware' => 'configurable'], function () {
        get('/', 'SettingsController@index')->name('settings');
        get('{name}', 'SettingsController@edit')->name('settings.edit');
        post('{name}', 'SettingsController@update')->name('settings.update');
    });

    // Fieldsets
    Route::group(['prefix' => 'fieldsets-json'], function () {
        get('/', 'FieldsetJsonController@index');
        get('{fieldset}', 'FieldsetJsonController@show');
        get('{fieldset}/edit', 'FieldsetJsonController@edit');
    });
    Route::group(['prefix' => 'fieldsets'], function () {
        Route::group(['middleware' => 'configurable'], function () {
            get('/', 'FieldsetController@index')->name('fieldsets');
            get('/create', 'FieldsetController@create')->name('fieldset.create');
            delete('delete', 'FieldsetController@delete')->name('fieldsets.delete');
            post('quick', 'FieldsetController@quickStore');
            get('/{fieldset}', 'FieldsetController@edit')->name('fieldset.edit');
            post('/{fieldset}', 'FieldsetController@update')->name('fieldset.update');
            post('/', 'FieldsetController@store')->name('fieldset.store');
        });
    });

    get('fieldtypes', 'FieldtypesController@index')->name('fieldtypes');

    // Addons
    Route::group(['prefix' => 'configure/addons', 'middleware' => 'configurable'], function () {
        get('/', 'AddonsController@index')->name('addons');
        get('get', 'AddonsController@get')->name('addons.get');
        delete('delete', 'AddonsController@delete')->name('addons.delete');
        get('refresh', 'AddonsController@refresh')->name('addons.refresh');
    });
    Route::group(['prefix' => 'addons', 'middleware' => 'configurable'], function () {
        get('{addon}/settings', 'AddonsController@settings')->name('addon.settings');
        post('{addon}/settings', 'AddonsController@saveSettings');
    });

    // Importers
    get('import', 'ImportController@index')->name('import');
    post('import/upload', 'ImportController@upload')->name('import.upload');
    get('import/configure', 'ImportController@configure')->name('import.configure');
    post('import/import', 'ImportController@import')->name('importer.import');

    // Updater
    get('system/updater', 'UpdaterController@index')->name('updater');
    get('system/updater/confirm/{version}', 'UpdaterController@confirmUpdate')->name('updater.confirm');

    // The AJAX methods
    post('system/updater/backup', 'UpdaterController@backup');
    post('system/updater/download', 'UpdaterController@download');
    post('system/updater/unzip', 'UpdaterController@unzip');
    post('system/updater/composer', 'UpdaterController@composer');
    post('system/updater/swap', 'UpdaterController@swap');
    post('system/updater/clean', 'UpdaterController@cleanUp');

    // Search
    Route::group(['prefix' => 'search'], function () {
        get('/', 'SearchController@index');
        get('perform', 'SearchController@search');
        get('update', 'SearchController@update');
    });

    get('resolve-duplicate-ids', 'DuplicateIdController@index')->name('resolve-duplicate-ids');
    post('resolve-duplicate-ids', 'DuplicateIdController@update')->name('resolve-duplicate-ids.update');

    // 404 - Any unrecognized /cp pages come here.
    get('{segments}', 'CpController@pageNotFound')->where('segments', '.*')->name('404');
});
