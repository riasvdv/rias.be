<?php

namespace Statamic\Console\Commands\Generators;

use Statamic\API\User;
use Statamic\API\Config;
use Statamic\API\Stache;
use Statamic\API\Fieldset;
use Illuminate\Console\Command;

class UserMakeCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'make:user';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate a user.';

    /**
     * The user's chosen username.
     *
     * @var string
     */
    protected $username;

    /**
     * The user's data.
     *
     * @var \Illuminate\Support\Collection
     */
    protected $userData;

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->userData = collect();

        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $this
            ->promptUsername()
            ->promptPassword()
            ->promptEmail()
            ->promptName()
            ->promptSuper()
            ->createUser();

        Stache::update();

        $this->info('User created.');
    }

    /**
     * Prompt for an available username.
     *
     * @return self
     */
    private function promptUsername()
    {
        $username = $this->ask('Username');

        if ($this->usernameExists($username)) {
            $this->error('Username exists.');
            return $this->promptUsername();
        }

        $this->username = $username;

        return $this;
    }

    /**
     * Prompt for an available email address.
     *
     * @return self
     */
    private function promptEmail()
    {
        if (! $email = $this->ask('Email address', $this->isEmailRequired() ? null : false)) {
            return $this;
        }

        if ($this->emailExists($email)) {
            $this->error('Email exists.');
            return $this->promptEmail();
        }

        $this->userData->put('email', $email);

        return $this;
    }

    /**
     * Prompt for a password.
     *
     * @return self
     */
    private function promptPassword()
    {
        $this->userData->put('password', $this->secret('Password (Your input will be hidden)'));

        return $this;
    }

    /**
     * Prompt for a name.
     *
     * @return self
     */
    private function promptName()
    {
        if ($this->hasSeparateNameFields()) {
            $this->userData->put('first_name', $this->ask('First Name', false));
            $this->userData->put('last_name', $this->ask('Last Name', false));
        } else {
            $this->userData->put('name', $this->ask('Name', false));
        }

        return $this;
    }

    /**
     * Prompt for super permissions.
     *
     * @return self
     */
    private function promptSuper()
    {
        $this->userData->put('super', $this->confirm('Super user'));

        return $this;
    }

    /**
     * Create the user.
     *
     * @return self
     */
    private function createUser()
    {
        $user = User::create()
            ->username($this->username)
            ->with($this->userData->filter()->all())
            ->save();

        return $this;
    }

    /**
     * Check if a user exists by username
     *
     * @param  string $username
     * @return boolean
     */
    private function usernameExists($username)
    {
        return User::whereUsername($username) !== null;
    }

    /**
     * Check if a user exists by email
     *
     * @param  string $email
     * @return boolean
     */
    private function emailExists($username)
    {
        return User::whereEmail($username) !== null;
    }

    /**
     * Check if the user fieldset contains separate first_name and last_name fields.
     *
     * @return bool
     */
    private function hasSeparateNameFields()
    {
        $fieldset = Fieldset::get('user');
        $fields = collect($fieldset->fields());
        return $fields->has('first_name') && $fields->has('last_name');
    }

    /**
     * Check if an email address is required.
     *
     * @return bool
     */
    private function isEmailRequired()
    {
        if (Config::get('users.driver') === 'eloquent') {
            return true;
        }

        if (! $email = collect(Fieldset::get('user')->fields())->get('email')) {
            return false;
        }

        if (! $validation = array_get($email, 'validate')) {
            return false;
        }

        return collect(explode('|', $validation))->contains('required');
    }
}
