<?php

namespace Statamic\Data\Users;

use Carbon\Carbon;
use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Hash;
use Statamic\API\YAML;
use Statamic\Data\Data;
use Statamic\API\Config;
use Statamic\API\Fieldset;
use Statamic\Events\Data\UserSaved;
use Statamic\Events\Data\UserDeleted;
use Statamic\Permissions\Permissible;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Foundation\Auth\Access\Authorizable;
use Statamic\Contracts\Data\Users\User as UserContract;
use Statamic\Contracts\Permissions\Permissible as PermissibleContract;

/**
 * A user
 */
class User extends Data implements UserContract, Authenticatable, PermissibleContract
{
    use Authorizable;
    use Permissible;

    /**
     * Array of OAuth IDs stored in the YAML file
     *
     * @var array
     */
    private static $oauth_ids;

    /**
     * Get or set a user's username
     *
     * @param string|null $username
     * @return mixed
     */
    public function username($username = null)
    {
        if (is_null($username)) {
            return $this->attributes['username'];
        }

        $this->attributes['username'] = $username;
    }

    public function userInitials()
    {
        return strtoupper(substr($this->username(), 0, 1));
    }

    /**
     * Get or set a user's email address
     *
     * @param string|null $email
     * @return string
     */
    public function email($email = null)
    {
        $login = Config::get('users.login_type');

        if (is_null($email)) {
            return ($login === 'email')
                ? $this->username()
                : $this->get('email');
        }

        if ($login === 'email') {
            $this->username($email);
        } else {
            $this->set('email', $email);
        }
    }

    /**
     * Get or set a user's password
     *
     * @param string|null $password
     * @return string
     */
    public function password($password = null)
    {
        if (is_null($password)) {
            $this->ensureSecured();

            return $this->get('password_hash');
        }

        $this->set('password', $password);
        $this->remove('password_hash');

        $this->securePassword(false);
    }

    /**
     * Get or set the path to the file
     *
     * @param string|null $path
     * @return string
     * @throws \Exception
     */
    public function path($path = null)
    {
        if ($path) {
            throw new \Exception('You cant set the path of a file.');
        }

        if (Config::get('users.login_type') === 'email') {
            if (! $path = $this->email()) {
                throw new \Exception('Cannot get the path of a user without an email.');
            }
        } else {
            if (! $path = $this->username()) {
                throw new \Exception('Cannot get the path of a user without a username.');
            }
        }

        return $path . '.yaml';
    }

    /**
     * Get the path to a localized version
     *
     * @param string $locale
     * @return string
     */
    public function localizedPath($locale)
    {
        return $this->path();
    }

    /**
     * Save a user to file.
     *
     * @return $this
     */
    public function save()
    {
        $this->ensureSecured();
        $this->ensureId();

        $data = [];
        $oldPath = null;

        if ($this->shouldWriteFile()) {
            $data = $this->toSavableArray();
            $content = array_pull($data, 'content');
            $contents = YAML::dump($data, $content);

            File::disk('users')->put($this->path(), $contents);

            // Has this been renamed?
            if ($this->path() !== $this->originalPath()) {
                $oldPath = $this->originalPath();
                File::disk('users')->delete($oldPath);
            }
        }

        $this->syncOriginal();

        // Whoever wants to know about it can do so now.
        event('user.saved', $this); // Deprecated! Please listen on UserSaved event instead!
        event(new UserSaved($this, $data, $oldPath));

        return $this;
    }

    /**
     * Get an array of data that should be persisted.
     *
     * @return array
     */
    protected function toSavableArray()
    {
        return tap($this->data(), function (&$data) {
            if (Config::get('users.login_type') === 'email') {
                unset($data['email']);
            }
        });
    }

    /**
     * Whether a file should be written to disk when saving.
     *
     * @return bool
     */
    protected function shouldWriteFile()
    {
        return true;
    }

    /**
     * Ensure's this user's password is secured
     *
     * @param bool $save Whether the save after securing
     * @throws \Exception
     */
    public function ensureSecured($save = true)
    {
        // If they don't have a password set, their status is pending.
        // It's not "secured" but there's also nothing *to* secure.
        if ($this->status() == 'pending') {
            return;
        }

        if (! $this->isSecured()) {
            $this->securePassword($save);
        }
    }

    /**
     * Check if the password is secured
     *
     * @return bool
     */
    public function isSecured()
    {
        return (bool) $this->get('password_hash', false);
    }

    /**
     * Secure the password
     *
     * @param bool $save  Whether to save the user
     * @param bool $false  Whether to secure it again
     */
    public function securePassword($save = true, $force = false)
    {
        if (!$force && $this->isSecured()) {
            return;
        }

        if ($password = $this->get('password')) {
            $password = Hash::make($password);

            $this->set('password_hash', $password);
            $this->remove('password');
        }

        if ($save) {
            $this->save();
        }
    }

    /**
     * Get the user's status
     *
     * @return string
     */
    public function status()
    {
        if (! $this->get('password') && ! $this->get('password_hash')) {
            return 'pending';
        }

        return 'active';
    }

    /**
     * The timestamp of the last modification date.
     *
     * @return \Carbon\Carbon
     */
    public function lastModified()
    {
        // Users with no files have been created programmatically and haven't
        // been saved yet. We'll use the current time in that case.
        $timestamp = File::disk('users')->exists($path = $this->path())
            ? File::disk('users')->lastModified($path)
            : time();

        return Carbon::createFromTimestamp($timestamp);
    }

    /**
     * Add supplemental data to the attributes
     */
    public function supplement()
    {
        $this->setSupplement('last_modified', $this->lastModified()->timestamp);
        $this->setSupplement('username', $this->username());
        $this->setSupplement('email', $this->email());
        $this->setSupplement('status', $this->status());
        $this->setSupplement('edit_url', $this->editUrl());
        $this->setSupplement('edit_password_url', $this->editPasswordUrl());

        if ($first_name = $this->get('first_name')) {
            $name = $first_name;

            if ($last_name = $this->get('last_name')) {
                $name .= ' ' . $last_name;
            }

            $this->setSupplement('name', $name);
        }

        foreach ($this->roles() as $role) {
            $this->setSupplement('is_'.Str::slug($role->title(), '_'), true);
        }

        foreach ($this->groups() as $group) {
            $this->setSupplement('in_'.Str::slug($group->title(), '_'), true);
        }

        if ($this->supplement_taxonomies) {
            $this->addTaxonomySupplements();
        }
    }

    /**
     * Get the unique identifier for the user.
     *
     * @return mixed
     */
    public function getAuthIdentifier()
    {
        return $this->id();
    }

    /**
     * Get the password for the user.
     *
     * @return string
     */
    public function getAuthPassword()
    {
        return $this->password();
    }

    /**
     * Get the avatar for the user.
     *
     * @return string
     */
    public function getAvatar($size = 64)
    {
        return Config::get('users.enable_gravatar') ? gravatar($this->email(), $size) : null;
    }

    /**
     * Get the token value for the "remember me" session.
     *
     * @return string
     */
    public function getRememberToken()
    {
        $yaml = YAML::parse(File::get($this->rememberPath(), ''));

        return array_get($yaml, $this->id());
    }

    /**
     * Set the token value for the "remember me" session.
     *
     * @param  string $value
     * @return void
     */
    public function setRememberToken($token)
    {
        $yaml = YAML::parse(File::get($this->rememberPath(), ''));

        $yaml[$this->id()] = $token;

        File::put($this->rememberPath(), YAML::dump($yaml));
    }

    /**
     * Get the column name for the "remember me" token.
     *
     * @return string
     */
    public function getRememberTokenName()
    {
        return 'remember_token';
    }

    /**
     * Get the path to the remember me tokens file
     *
     * @return string
     */
    private function rememberPath()
    {
        return cache_path('remember_me.yaml');
    }

    /**
     * Set the reset token/code for a password reset
     *
     * @param  string $token
     * @return void
     */
    public function setPasswordResetToken($token)
    {
        $yaml = YAML::parse(File::get($this->passwordResetPath(), ''));

        $yaml[$this->id()] = $token;

        $yaml = array_filter($yaml);

        File::put($this->passwordResetPath(), YAML::dump($yaml));
    }

    /**
     * Get the reset token/code for a password reset
     *
     * @return string
     */
    public function getPasswordResetToken()
    {
        $yaml = YAML::parse(File::get($this->passwordResetPath(), ''));

        return array_get($yaml, $this->id());
    }

    /**
     * Get the path to the password reset file
     */
    private function passwordResetPath()
    {
        return cache_path('password_resets.yaml');
    }

    /**
     * Get the user's OAuth ID for the requested provider
     *
     * @return string
     */
    public function getOAuthId($provider)
    {
        if (! self::$oauth_ids) {
            self::$oauth_ids = YAML::parse(File::get($this->oAuthIdsPath(), ''));
        }

        return array_get(self::$oauth_ids, $provider.'.'.$this->id());
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
        $yaml = YAML::parse(File::get($this->oAuthIdsPath(), ''));

        $yaml[$provider][$this->id()] = $id;

        File::put($this->oAuthIdsPath(), YAML::dump($yaml));
    }

    /**
     * Get the path to the oauth IDs file
     *
     * @return string
     */
    private function oAuthIdsPath()
    {
        return cache_path('oauth_ids.yaml');
    }

    /**
     * Get the path before the object was modified.
     *
     * @return string
     * @throws \Exception
     */
    public function originalPath()
    {
        if (! $path = $this->original['attributes']['username']) {
            if (Config::get('users.login_type') === 'email') {
                throw new \Exception('Cannot get the path of a user without an email.');
            } else {
                throw new \Exception('Cannot get the path of a user without a username.');
            }
        }

        return $path . '.yaml';
    }

    /**
     * Get the path to a localized version before the object was modified.
     *
     * @param string $locale
     * @return string
     */
    public function originalLocalizedPath($locale)
    {
        // @todo
        dd('todo: extend data@localizedPath');
    }

    /**
     * Delete the user.
     */
    public function delete()
    {
        File::disk('users')->delete($this->path());

        // Whoever wants to know about it can do so now.
        event(new UserDeleted($this->id(), [$this->path()]));
    }

    /**
     * The URL to edit the user in the CP
     *
     * @return mixed
     */
    public function editUrl()
    {
        return cp_route('user.edit', $this->username());
    }

    /**
     * The URL to edit the user's password in the CP
     *
     * @return mixed
     */
    public function editPasswordUrl()
    {
        return cp_route('user.password.edit', $this->username());
    }

    /**
     * Get or set the fieldset
     *
     * @param string|null|bool
     * @return \Statamic\Contracts\CP\Fieldset
     */
    public function fieldset($fieldset = null)
    {
        if (is_null($fieldset)) {
            $fieldset = Fieldset::get('user');
            event(new \Statamic\Events\Data\FindingFieldset($fieldset, 'user', $this));
            return $fieldset;
        }

        $this->set('fieldset', $fieldset);
    }

    /**
     * Whether the data can be taxonomized
     *
     * @return bool
     */
    public function isTaxonomizable()
    {
        return true;
    }

}
