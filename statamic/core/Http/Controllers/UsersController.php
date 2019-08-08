<?php

namespace Statamic\Http\Controllers;

use Statamic\API\Str;
use Statamic\API\URL;
use Statamic\API\User;
use Statamic\API\Email;
use Statamic\API\Config;
use Statamic\API\Helper;
use Statamic\API\Fieldset;
use Statamic\Addons\User\PasswordReset;
use Statamic\CP\Publish\ProcessesFields;
use Statamic\Events\Data\PublishFieldsetFound;
use Statamic\CP\Publish\PreloadsSuggestions;
use Statamic\Presenters\PaginationPresenter;
use Illuminate\Pagination\LengthAwarePaginator;

class UsersController extends CpController
{
    use ProcessesFields, PreloadsSuggestions;

    /**
     * @var \Statamic\Contracts\Data\Users\User|\Statamic\Contracts\Permissions\Permissible
     */
    private $user;

    /**
     * Redirect to the current user's edit page
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function account()
    {
        return redirect()->route('user.edit', User::getCurrent()->username());
    }

    /**
     * Redirect to the current user's password edit page
     *
     * @return \Illuminate\Http\RedirectResponse
     */
    public function accountPassword()
    {
        return redirect()->route('user.password.edit', User::getCurrent()->username());
    }

    /**
     * List users
     *
     * @return \Illuminate\View\View
     */
    public function index()
    {
        $this->access('users:view');

        $data = [
            'title' => 'Users'
        ];

        return view('users.index', $data);
    }

    /**
     * Get users as JSON
     *
     * @return array
     */
    public function get()
    {
        $users = User::all()->supplement('checked', function () {
            return false;
        });

        /**
         * Since the `name` field is a computed value, sorting doesn't seem
         * trigger a change on it. So it's better to sort it with the first
         * name when the name is being used.
         */
        if ($sort = request('sort')) {
            $sort = ($sort == 'name') ? 'first_name' : $sort;

            $users = $users->multisort($sort . ':' . request('order'));
        }

        // Set up the paginator, since we don't want to display all the users.
        $totalUserCount = $users->count();
        $perPage = Config::get('cp.pagination_size');
        $currentPage = (int) $this->request->page ?: 1;
        $offset = ($currentPage - 1) * $perPage;
        $users = $users->slice($offset, $perPage);
        $paginator = new LengthAwarePaginator($users, $totalUserCount, $perPage, $currentPage);

        return [
            'items'   => $users->toArray(),
            'columns' => Config::get('users.columns', ['name', 'username', 'email']),
            'pagination' => [
                'totalItems' => $totalUserCount,
                'itemsPerPage' => $perPage,
                'totalPages'    => $paginator->lastPage(),
                'currentPage'   => $paginator->currentPage(),
                'prevPage'      => $paginator->previousPageUrl(),
                'nextPage'      => $paginator->nextPageUrl(),
                'segments'      => array_get($paginator->render(new PaginationPresenter($paginator)), 'segments')
            ]
        ];
    }

    /**
     * Simple users search
     *
     * @return array
     */
    public function search()
    {
        $this->access('users:view');

        $query = strtolower(request('q'));

        $columns = Config::get('users.columns', ['name', 'username', 'email']);

        $users = User::all()->supplement('checked', function () {
            return false;
        })->toArray();

        $filtered = [];

        foreach($users as $user) {
            foreach ($columns as $key => $column) {
                if (Str::contains(strtolower(array_get($user, $column)), $query)) {
                    $filtered[] = $user;
                    break;
                }
            }
        };

        return $filtered;
    }

    /**
     * Create a new user
     *
     * @return \Illuminate\View\View
     */
    public function create()
    {
        $this->authorize('users:create');

        $fieldset = Fieldset::get('user');
        event(new PublishFieldsetFound($fieldset, 'user'));

        $data = $this->addBlankFields($fieldset);

        return view('publish', [
            'extra'             => [],
            'is_new'            => true,
            'content_data'      => $data,
            'content_type'      => 'user',
            'fieldset'          => $fieldset->toPublishArray(),
            'title'             => trans('cp.create_a_user'),
            'uuid'              => null,
            'url'               => null,
            'parent_url'        => null,
            'slug'              => null,
            'status'            => null,
            'uri'               =>  null,
            'locale'            => default_locale(),
            'is_default_locale' => true,
            'locales'           => [],
            'suggestions'       => $this->getSuggestions($fieldset),
        ]);
    }

    /**
     * Edit a user
     *
     * @param string $username
     * @return \Illuminate\View\View
     */
    public function edit($username)
    {
        $this->user = User::whereUsername($username);

        // Users can always manage their data
        if ($this->user !== User::getCurrent()) {
            $this->authorize('users:view');
        }

        $fieldset = $this->user->fieldset();
        event(new PublishFieldsetFound($fieldset, 'user', $this->user));

        $data = $this->addBlankFields($fieldset, $this->user->processedData());

        if (Config::get('users.login_type') === 'email') {
            $data['email'] = $this->user->email();
        } else {
            $data['username'] = $this->user->username();
        }

        $data['roles'] = $this->user->roles()->map(function ($role) {
            return $role->uuid();
        });
        $data['user_groups'] = $this->user->groups()->keys();
        $data['status'] = $this->user->status();

        return view('publish', [
            'extra'             => [],
            'is_new'            => false,
            'content_data'      => $data,
            'content_type'      => 'user',
            'fieldset'          => $fieldset->toPublishArray(),
            'title'             => $this->user->username(),
            'uuid'              => $this->user->id(),
            'url'               => null,
            'uri'               => null,
            'parent_url'        => null,
            'slug'              => $this->user->username(),
            'status'            => $this->user->status(),
            'locale'            => default_locale(),
            'is_default_locale' => true,
            'locales'           => [],
            'suggestions'       => $this->getSuggestions($fieldset),
        ]);
    }

    /**
     * Edit a user's password.
     *
     * @param string $username
     * @return \Illuminate\View\View
     */
    public function editPassword($username)
    {
        $user = User::whereUsername($username);
        $notEditingOwnPassword = $user !== User::getCurrent();

        // Determine whether user change change password
        if ($notEditingOwnPassword) {
            $this->authorize('users:edit-passwords');
        }

        return view('users.edit-password', compact('user', 'notEditingOwnPassword'));
    }

    /**
     * Update a user's password.
     *
     * @param string $username
     * @return \Illuminate\Http\RedirectResponse
     */
    public function updatePassword($username)
    {
        $user = User::whereUsername($username);

        // Determine whether user change change password
        if ($user !== User::getCurrent()) {
            $this->authorize('users:edit-passwords');
        }

        $this->validate($this->request, [
            'password' => 'required|confirmed'
        ]);

        $resetter = new PasswordReset;
        $resetter->user($user);
        $resetter->updatePassword($this->request->input('password'));

        $this->success(t('saved_success'));

        return back();
    }

    /**
     * Delete a user
     *
     * @return array
     */
    public function delete()
    {
        $this->authorize('users:delete');

        $ids = Helper::ensureArray($this->request->input('ids'));

        foreach ($ids as $id) {
            User::find($id)->delete();
        }

        return ['success' => true];
    }

    public function getResetUrl($username)
    {
        $user = User::whereUsername($username);

        // Users can reset their own password
        if ($user !== User::getCurrent()) {
            $this->authorize('super');
        }

        $resetter = new PasswordReset;

        $resetter->user($user);

        if ($user->can('cp:access')) {
            $resetter->redirect(route('login'));
        }

        return [
            'success' => true,
            'url' => $resetter->url()
        ];
    }

    public function sendResetEmail($username)
    {
        $user = User::whereUsername($username);

        if (! $user->email()) {
            return ['success' => false];
        }

        $resetter = new PasswordReset;

        $resetter->user($user);

        $resetter->send();

        return ['success' => true];
    }
}
