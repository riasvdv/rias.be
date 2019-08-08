<?php

namespace Statamic\Http\Controllers\Auth;

use Log;
use Auth;
use Socialite;
use Statamic\API\Event;
use Statamic\API\URL;
use Statamic\API\Str;
use Statamic\API\User;
use Statamic\API\Config;
use Statamic\API\Helper;
use Illuminate\Http\Request;
use Statamic\Events\OAuth\FindingUser;
use Statamic\Http\Controllers\Controller;
use Statamic\Events\OAuth\GeneratingUserData;
use Statamic\Events\OAuth\GeneratingUsername;
use Laravel\Socialite\Two\InvalidStateException;

class OAuthController extends Controller
{
    /**
     * @var \Illuminate\Http\Request
     */
    private $request;

    /**
     * @param \Illuminate\Http\Request $request
     */
    public function __construct(Request $request)
    {
        $this->request = $request;
    }

    /**
     * Redirect to OAuth provider
     *
     * When a user visits /oauth/{provider} they will get prompted by their
     * provider's login/oauth screen. If they're already authorized, they
     * will simply be redirected back to the callback URL on this site.
     *
     * @param string $provider
     * @return mixed
     */
    public function redirectToProvider($provider)
    {
        return Socialite::driver($provider)->redirect();
    }

    /**
     * Handle the OAuth provider callback
     *
     * When a user returns from their service's OAuth screen, we'll retrieve
     * either an existing user that matches the OAuth ID, or create a new
     * user account automatically. Then we'll authenticate as the user.
     *
     * @param string $provider
     * @return mixed
     */
    public function handleProviderCallback($provider)
    {
        try {
            $provider_user = Socialite::driver($provider)->user();
        } catch (InvalidStateException $e) {
            throw new InvalidStateException('State is required but was not provided.');
        }

        $user = $this->findOrCreateUser($provider, $provider_user);

        Auth::login($user, true);

        return redirect(
            $this->getOAuthRedirect()
        );
    }

    /**
     * Get the URL to redirect to once authenticated
     *
     * @return string
     */
    private function getOAuthRedirect()
    {
        $default = '/';

        $previous = $this->request->session()->get('_previous.url');

        if (! $query = array_get(parse_url($previous), 'query')) {
            return $default;
        }

        parse_str($query, $query);

        return URL::makeAbsolute(
            array_get($query, 'redirect', $default)
        );
    }

    /**
     * Find or create a user
     *
     * @param string $provider
     * @param \Laravel\Socialite\Contracts\User $provider_user
     * @return \Statamic\Contracts\Data\User|\Statamic\Contracts\Data\Users\User
     */
    private function findOrCreateUser($provider, $provider_user)
    {
        // Allow an addon to provide a custom implementation of finding and creating
        // a user. If the return value isn't a User instance, we'll log it and
        // simply move on with the regular implementation.
        if ($user = Event::fireFirst(new FindingUser($provider, $provider_user))) {
            if ($user instanceof \Statamic\Contracts\Data\Users\User) {
                return $user;
            }

            Log::debug('The value returned by the [Statamic\Events\OAuth\FindingUser] event was not a User instance.');
        }

        // Attempt to find a user matching the provider's OAuth ID
        if ($user = User::whereOAuth($provider, $provider_user->getId())) {
            return $user;
        }

        // If a user is logged in anyway, we'll add the OAuth ID to their account
        if (User::loggedIn()) {
            $user = User::getCurrent();
            $user->setOAuthId($provider, $provider_user->getId());
            return $user;
        }

        return $this->createNewUser($provider, $provider_user);
    }

    /**
     * Create a new user
     *
     * @param string $provider
     * @param \Laravel\Socialite\Contracts\User $provider_user
     * @return \Statamic\Contracts\Data\Users\User
     */
    private function createNewUser($provider, $provider_user)
    {
        $user = User::create()
            ->username($this->oAuthUsername($provider_user, $provider))
            ->with($this->oAuthUserData($provider_user, $provider))
            ->get();

        $user->ensureId();

        $user->save();

        $user->setOAuthId($provider, $provider_user->getId());

        $user->save();

        return $user;
    }

    /**
     * Define the username
     *
     * @param \Laravel\Socialite\Contracts\User $user
     * @return string
     */
    private function oAuthUsername($user, $provider)
    {
        // Allow an addon to provide a customized OAuth username generator.
        // If nothing is returned we will simply move on with the default.
        if ($username = Event::fireFirst(new GeneratingUsername($user, $provider))) {
            return $username;
        }

        return Str::slug($user->getEmail()) . '-' . time();
    }

    /**
     * Define the user data
     *
     * @param \Laravel\Socialite\Contracts\User $user
     * @return array
     */
    private function oAuthUserData($user, $provider)
    {
        // Allow an addon to provide the array of data to be saved to a user.
        // If nothing is returned we will simply move on with the default.
        if ($data = Event::fireFirst(new GeneratingUserData($user, $provider))) {
            if (is_array($data)) {
                return $data;
            }
        }

        $data = [
            'name' => $user->getName(),
            'email' => $user->getEmail()
        ];

        if ($roles = Config::get('users.new_user_roles')) {
            $data['roles'] = Helper::ensureArray($roles);
        }

        return $data;
    }
}
