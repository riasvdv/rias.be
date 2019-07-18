<?php

namespace Statamic\Updater\Updates;

use Statamic\API\Str;
use Statamic\API\Role;

class AddViewPermissions extends Update
{
    public function shouldUpdate($newVersion, $oldVersion = '2.0.0')
    {
        return version_compare($newVersion, '2.8.0', '>=')
            && version_compare($oldVersion, '2.8.0', '<');
    }

    public function update()
    {
        foreach (Role::all() as $role) {
            $permissions = $role->permissions();

            $permissions = collect($permissions)->map(function ($permission) use ($permissions) {
                if (! Str::endsWith($permission, ':edit')) {
                    return $permission;
                }

                $view = preg_replace('/:edit$/', ':view', $permission);

                // Make sure we don't double-add the view permission.
                if ($permissions->contains($view)) {
                    return $permission;
                }

                // Replace itself with an array purely so we can place
                // the new "view" permission before the "edit" one.
                return [$view, $permission];
            })->flatMap(function ($item) {
                return is_array($item) ? $item : [$item];
            });

            $role->permissions($permissions->all());
            $role->save();
        }
    }
}
