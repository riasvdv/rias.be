<?php

namespace Statamic\Providers;

use Statamic\API\File;
use Statamic\API\YAML;
use Statamic\Config\Roles;
use Statamic\Permissions\Permissions;
use Illuminate\Contracts\Auth\Access\Gate as GateContract;
use Illuminate\Foundation\Support\Providers\AuthServiceProvider as ServiceProvider;

class AuthServiceProvider extends ServiceProvider
{
    protected $defer = true;
    protected $policies = [];

    public function register()
    {
        $this->app->singleton('permissions', function () {
            return new Permissions;
        });

        $this->app->alias('permissions', 'Statamic\Permissions\Permissions');

        $this->app->singleton('Statamic\Config\Roles', function () {
            return new Roles;
        });
    }

    public function boot(GateContract $gate, Permissions $permissions)
    {
        parent::registerPolicies($gate);

        $this->loadRoles();

        $permissions->build();

        foreach ($permissions->all(true) as $group => $permission) {
            $gate->define($permission, function ($user) use ($permission) {
                return $user->isSuper() || $user->hasPermission($permission);
            });
        }
    }

    /**
     * Get the services provided by the provider.
     *
     * @return array
     */
    public function provides()
    {
        return [
            GateContract::class,
            'permissions',
            Permissions::class,
            Roles::class
        ];
    }

    /**
     * Load user roles
     */
    public function loadRoles()
    {
        $config = $this->app->make('Statamic\Config\Roles');

        $path = settings_path('users/roles.yaml');

        $roles = YAML::parse(File::get($path));

        foreach ($roles as $uuid => $data) {
            $roles[$uuid] = app('Statamic\Contracts\Permissions\RoleFactory')->create($data, $uuid);
        }

        $config->hydrate($roles);
    }
}
