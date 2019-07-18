<?php

namespace Statamic\CP\Publish;

use Statamic\API\User;
use Statamic\API\Config;
use Statamic\API\Helper;
use Statamic\API\Fieldset;

class UserPublisher extends Publisher
{
    protected $login_type;

    /**
     * Prepare the content object
     *
     * Retrieve, update, and/or create an Entry, depending on the situation.
     */
    protected function prepare()
    {
        $this->login_type = Config::get('users.login_type');

        $username = array_get($this->fields, 'username');
        $email = array_get($this->fields, 'email');

        $groups   = array_get($this->fields, 'user_groups', []);

        unset($this->fields['username'], $this->fields['user_groups'], $this->fields['status']);

        if ($this->isNew()) {
            // Creating a brand new user
            $user = User::create()->email($email);

            if ($this->login_type === 'username') {
                $user->username($username);
            }

            $this->content = $user->get();

            // Set the ID now because the $user->groups() method relies on it
            $this->id = Helper::makeUuid();
            $this->content->id($this->id);

            // If user can't edit roles, ensure default roles are used.
            if (User::getCurrent()->cant('users:edit-roles')) {
                $this->fields['roles'] = Config::get('users.new_user_roles');
            }

            $this->addUserValidation('new');

        } else {
            // Updating an existing user
            $this->prepForExistingUser();

            $this->addUserValidation('existing');

            $this->content->username($username);
            $this->content->email($email);

            // If user can't edit roles, ensure existing roles are used.
            if (User::getCurrent()->cant('users:edit-roles')) {
                $this->fields['roles'] = $this->content->get('roles');
            }
        }

        $this->content->groups($groups);
    }

    /**
     * Prepare an existing user
     *
     * @throws \Exception
     */
    private function prepForExistingUser()
    {
        $this->id = $this->request->input('uuid');

        $this->content = User::find($this->id);
    }

    /**
     * Perform initial validation
     *
     * @throws \Statamic\Exceptions\PublishException
     */
    protected function initialValidation()
    {
        //
    }

    /**
     * Add validation rules to the fieldset.
     *
     * Since the fieldset is user-editable, we can't guarantee that they
     * would have added all the essential validation rules we require.
     *
     * @param string $type  Either "new" or "existing"
     */
    private function addUserValidation($type)
    {
        $fieldset = $this->content->fieldset();

        $fields = $fieldset->fields();

        $fields = ($type === 'new') ? $this->addNewUserValidation($fields) : $this->addExistingUserValidation($fields);

        $fields = $this->addBasicUserValidation($fields);

        $this->fieldset = Fieldset::create('user', ['fields' => $fields]);
    }

    /**
     * Add some basic validation to the fields array, and return it.
     *
     * @param array $fields
     * @return array
     */
    private function addBasicUserValidation($fields)
    {
        // Ensure the username field is required. We'll break it into an array and rejoin it so
        // we can avoid duplication if the fieldset already contained required validation.
        $username_rules = $this->appendRule('required', array_get($fields, 'username.validate'));
        array_set($fields, 'username.validate', $username_rules);

        // If the login type is email, we'll change the "username" field to "email".
        if ($this->login_type === 'email') {
            $fields['email'] = array_merge($fields['email'], $fields['username']);
            unset($fields['username']);
        }

        // If there's an email field, make sure it is validated as one.
        if (isset($fields['email'])) {
            $email_rules = $this->appendRule('email', array_get($fields, 'email.validate'));
            array_set($fields, 'email.validate', $email_rules);
        }

        return $fields;
    }

    /**
     * Add validation for creating new users, and return the fields
     *
     * @param array $fields
     * @return array
     */
    private function addNewUserValidation($fields)
    {
        return $this->addUniqueUserValidation($fields, User::all());
    }

    /**
     * Add validation for updating existing users, and return the fields
     *
     * @param array $fields
     * @return array
     */
    private function addExistingUserValidation($fields)
    {
        // Get all users, except for the user being edited.
        // Obviously it's okay for the user being edited to have the same username/email.
        $users = User::all()->reject(function ($user) {
            return $user->id() === $this->content->id();
        });

        return $this->addUniqueUserValidation($fields, $users);
    }

    /**
     * Add unique user validation to ensure no duplicate usernames or emails.
     *
     * @param array $fields
     * @param mixed $existingUsers
     * @return array
     */
    private function addUniqueUserValidation($fields, $existingUsers)
    {
        $existingUsers->transform(function ($user) {
            return $user->toArray();
        });

        if (isset($fields['username']) && ! $existingUsers->isEmpty()) {
            $rules = array_get($fields, 'username.validate');
            $rules = ltrim($rules . '|not_in:' . $existingUsers->pluck('username')->implode(','), '|');
            array_set($fields, 'username.validate', $rules);
        }

        if (isset($fields['email']) && ! $existingUsers->isEmpty()) {
            $rules = array_get($fields, 'email.validate');
            $rules = ltrim($rules . '|not_in:' . $existingUsers->pluck('email')->implode(','), '|');
            array_set($fields, 'email.validate', $rules);
        }

        return $fields;
    }

    /**
     * Append a validation rule to other validation rules
     *
     * @param string $rule
     * @param string $rules
     * @return string
     */
    private function appendRule($rule, $rules)
    {
        $rules = explode('|', $rules);
        $rules[] = $rule;
        $rules = join('|', array_values(array_filter(array_unique($rules))));

        return $rules;
    }
}
