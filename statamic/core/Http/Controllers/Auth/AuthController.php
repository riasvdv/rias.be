<?php

namespace Statamic\Http\Controllers\Auth;

use Statamic\API\User;
use Statamic\API\OAuth;
use Illuminate\Auth\Guard;
use Illuminate\Http\Request;
use Statamic\Addons\User\PasswordReset;
use Statamic\Http\Controllers\CpController;
use Illuminate\Foundation\Auth\ThrottlesLogins;
use Illuminate\Validation\Factory as Validator;

class AuthController extends CpController
{
    use ThrottlesLogins;

    /**
     * @var \Illuminate\Auth\Guard
     */
    private $auth;

    /**
     * @var \Illuminate\Validation\Factory
     */
    private $validator;

    /**
     * @param \Illuminate\Http\Request           $request
     * @param \Illuminate\Auth\Guard             $auth
     * @param \Illuminate\Validation\Factory     $validator
     */
    public function __construct(Request $request, Guard $auth, Validator $validator)
    {
        parent::__construct($request);

        $this->auth = $auth;
        $this->validator = $validator;
    }

    /**
     * Show the login page
     *
     * @return \Illuminate\View\View
     */
    public function getLogin()
    {
        $data = [
            'title' => translate('cp.login'),
            'oauth' => OAuth::enabled() && !empty(OAuth::providers()),
            'referer' => $this->request->referer
        ];

        $view = view('auth.login', $data);

        if ($this->request->expired) {
            return $view->withErrors(t('session_expired'));
        }

        return $view;
    }

    /**
     * Handle a login request to the application.
     *
     * @return \Illuminate\Http\Response
     */
    public function postLogin()
    {
        $this->validate($this->request, [
            'username' => 'required',
            'password' => 'required',
        ]);

        if ($this->hasTooManyLoginAttempts($this->request)) {
            return $this->sendLockoutResponse($this->request);
        }

        $credentials = $this->request->only('username', 'password');

        if ($this->auth->attempt($credentials, $this->request->has('remember'))) {
            return ($this->request->ajax())
                ? response()->json(['success' => true])
                : redirect()->intended($this->redirectPath());
        }

        $this->incrementLoginAttempts($this->request);

        $errors = ['username' => t('invalid_creds')];

        if ($this->request->ajax()) {
            return response()->json(['username' => [t('invalid_creds')]], 422);
        }

        return redirect($this->loginPath())
            ->withInput($this->request->only('username', 'remember'))
            ->withErrors([
                'username' => t('invalid_creds'),
            ]);
    }

    /**
     * Show the logged out password reset page
     *
     * @return \Illuminate\View\View
     */
    public function getPasswordReset()
    {
        $data = [
            'title' => translate('cp.reset_password')
        ];

        return view('auth.reset', $data);
    }

    /**
     * Handle a password reset request.
     *
     * @return \Illuminate\Http\Response
     */
    public function postPasswordReset()
    {
        $this->validate($this->request, [
            'email' => 'required'
        ]);

        $user = User::whereEmail($this->request->email);

        // If an invalid username has been entered we'll tell a white lie and say
        // that the email has been sent. This is a security measure to prevent
        // spamming of the form until a valid username is discovered.
        if ($user) {
            $resetter = new PasswordReset;
            $resetter->user($user);
            $resetter->redirect(route('login'));
            $resetter->send();
        }

        return back()->with('success', t('password_reset_sent'));
    }

    /**
     * Log the user out of the CP.
     *
     * @return \Illuminate\Http\Response
     */
    public function getLogout()
    {
        $this->auth->logout();

        return redirect(route('login'));
    }

    /**
     * Get the path to the login route
     *
     * @return string
     */
    public function loginPath()
    {
        return route('login');
    }

    /**
     * Get the location users will be taken here when they log in or register
     *
     * @return string
     */
    public function redirectPath()
    {
        if ($referer = $this->request->referer) {
            return $referer;
        }

        return route('cp');
    }

    /**
     * Get the login username to be used by the controller.
     *
     * @return string
     */
    public function loginUsername()
    {
        return 'username';
    }
}
