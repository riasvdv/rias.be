<?php

namespace Statamic\Data\Users\Eloquent;

use Statamic\API\Str;
use Statamic\API\Arr;
use Statamic\API\Hash;
use Statamic\API\Role;
use Statamic\Data\Users\User as FileUser;
use Statamic\Data\Users\Eloquent\Model as UserModel;
use Statamic\Events\Data\UserDeleted;
use Statamic\Events\Data\UserSaved;

class User extends FileUser
{
    private $model;

    public function model(UserModel $model = null)
    {
        if (is_null($model)) {
            if (! $this->model) {
                $this->model = new UserModel;
            }

            $this->model->mergeCastsFromFieldset($this->fieldset());

            return $this->model;
        }

        $this->model = $model;
    }

    /**
     * Save the user.
     *
     * @return $this
     */
    public function save()
    {
        $this->updateRoles();

        $this->model()->save();

        event('user.saved', $this); // Deprecated! Please listen on UserSaved event instead!
        event(new UserSaved($this, []));

        return $this;
    }

    /**
     * Delete the user.
     */
    public function delete()
    {
        $this->model()->delete();

        event(new UserDeleted($this->id(), []));
    }

    private function updateRoles()
    {
        $roles = $this->roles()->map(function ($role) {
            return $role->uuid();
        });

        (new Roles($this))->sync($roles);
    }

    /**
     * Get or set the data for a locale
     *
     * @param string $locale
     * @param array|null   $data
     * @return $this|array
     */
    public function dataForLocale($locale, $data = null)
    {
        if (is_null($data)) {
            return $this->model()->toArray();
        }

        foreach ($data as $key => $value) {
            $this->set($key, $value);
        }
    }

    /**
     * Get or set the ID
     *
     * @param mixed $id
     * @return mixed
     * @throws \Statamic\Exceptions\UuidExistsException
     */
    public function id($id = null)
    {
        return $this->model()->id;
    }

    /**
     * Get a key from the data
     *
     * @param string     $key     Key to retrieve
     * @param mixed|null $default Fallback value
     * @return mixed
     */
    public function get($key, $default = null)
    {
        $value = $this->model()->$key;

        return is_null($value) ? $default : $value;
    }

    public function set($key, $value)
    {
        if ($key === 'roles') {
            return $this->setRoles($value);
        }

        $columns = \Schema::getColumnListing($this->model()->getTable());

        if (array_has(array_flip($columns), $key)) {
            $this->model()->$key = $value;
        }
    }

    public function remove($key)
    {
        unset($this->model()[$key]);
    }

    /**
     * Get data from the default locale
     *
     * @return array
     */
    public function defaultData()
    {
        return $this->model()->attributesToArray();
    }

    /**
     * Get or set all the data for the current locale
     *
     * @param array|null $data
     * @return $this|array
     */
    public function data($data = null)
    {
        if (is_null($data)) {
            return $this->defaultData();
        }

        foreach ($data as $key => $value) {
            $this->set($key, $value);
        }

        return $this;
    }

    /**
     * Get or set a user's username
     *
     * @param string|null $username
     * @return mixed
     */
    public function username($username = null)
    {
        return $this->getOrSet('username', $username);
    }

    private function getOrSet($key, $value = null)
    {
        if (is_null($value)) {
            return $this->get($key);
        }

        $this->set($key, $value);
    }

    /**
     * Get or set a user's password
     *
     * @param string|null $password
     * @return string
     */
    public function password($password = null)
    {
        return $this->getOrSet(
            'password',
            is_null($password) ? null : Hash::make($password)
        );
    }

    /**
     * Ensure's this user's password is secured
     *
     * @param bool $save Whether the save after securing
     * @throws \Exception
     */
    public function ensureSecured($save = true)
    {
        //
    }

    /**
     * Check if the password is secured
     *
     * @return bool
     */
    public function isSecured()
    {
        return true;
    }

    /**
     * Get the user's status
     *
     * @return string
     */
    public function status()
    {
        return $this->password() === null ? 'pending' : 'active';
    }

    /**
     * Get or set the roles for the user
     *
     * @param null|array $roles
     * @return \Illuminate\Support\Collection
     */
    public function roles($roles = null)
    {
        if ($roles) {
            return $this->set('roles', $roles);
        }

        if ($this->roles) {
            return $this->roles;
        }

        $roles = (new Roles($this))->all()->map(function ($row) {
            return Role::find($row->role_id);
        });

        return $this->roles = $roles;
    }

    protected function setRoles($roles)
    {
        $this->roles = collect($roles)->map(function ($role) {
            return Role::find($role);
        });
    }

    public function lastModified()
    {
        return $this->model()->updated_at;
    }

    /**
     * Get the user's OAuth ID for the requested provider
     *
     * @return string
     */
    public function getOAuthId($provider)
    {
        return (new OAuth)->getId($this, $provider);
    }

    /**
     * Set a user's oauth ID
     *
     * @param string $provider
     * @param string $id
     * @return void
     */
    public function setOAuthId($provider, $id)
    {
        return (new OAuth)->setId($this, $provider, $id);
    }

    /**
     * Get the token value for the "remember me" session.
     *
     * @return string
     */
    public function getRememberToken()
    {
        return $this->get('remember_token');
    }

    /**
     * Set the token value for the "remember me" session.
     *
     * @param  string  $value
     * @return void
     */
    public function setRememberToken($value)
    {
        $this->set('remember_token', $value);
    }

    /**
     * Set the reset token/code for a password reset
     *
     * @param  string $token
     * @return void
     */
    public function setPasswordResetToken($token)
    {
        $this->set('password_reset_token', $token);
    }

    /**
     * Get the reset token/code for a password reset
     *
     * @return string
     */
    public function getPasswordResetToken()
    {
        return $this->get('password_reset_token');
    }
}
