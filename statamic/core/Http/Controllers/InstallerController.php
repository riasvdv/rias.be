<?php

namespace Statamic\Http\Controllers;

use Auth;
use Statamic\API\Str;
use GuzzleHttp\Client;
use Statamic\API\File;
use Statamic\API\User;
use Statamic\API\YAML;
use Statamic\API\Cache;
use Statamic\API\Config;
use Statamic\API\Helper;
use Statamic\API\Fieldset;
use Illuminate\Http\Request;
use Illuminate\Filesystem\Filesystem;
use Statamic\Http\Controllers\Controller;

class InstallerController extends Controller
{
    /**
     * @var Filesystem
     */
    protected $filesystem;

    /**
     * Create a new controller instance
     *
     * @param Filesystem $filesystem
     */
    public function __construct(Filesystem $filesystem)
    {
        $this->middleware('installer');

        $this->filesystem = $filesystem;
    }

    /**
     * Show the installer
     *
     * @return \Illuminate\View\View
     */
    public function getIndex(Request $request)
    {
        // Redirect to the basic installer check page if we hit this directly.
        if (! Str::endsWith($request->header('referer'), 'installer.php')) {
            return redirect('/installer.php');
        }

        $data = [
            'title' => translate('cp.installer')
        ];

        return view('installer', $data);
    }

    /**
     * Check that permissions are correct
     *
     * @return array
     */
    public function getPermissions()
    {
        $success = true;

        $unwritable = [];

        $paths = [
            'local',
            'local/cache',
            'local/storage',
            'local/storage/framework',
            'local/storage/framework/cache',
            'local/storage/framework/sessions',
            'local/storage/framework/views',
            'local/storage/logs',
            'local/temp',
            'site',
            'site/content',
            'site/content/collections',
            'site/content/globals',
            'site/content/pages',
            'site/content/taxonomies',
            'site/settings',
            'site/settings/addons',
            'site/settings/fieldsets',
            'site/settings/users',
            'site/storage',
            'site/users',
            'statamic'
        ];

        foreach ($paths as $path) {
            if (! $this->filesystem->isWritable($path)) {
                $success = false;
                $unwritable[] = $path;
            }
        }

        return compact('success', 'unwritable');
    }

    /**
     * Retrieve the license key
     *
     * @param Request $request
     * @return array
     */
    public function postLicense(Request $request)
    {
        $key = $request->input('key') ?: Config::getLicenseKey();

        if (! $key) {
            return ['success' => false];
        }

        $this->saveLicense($key);

        $client = new Client();

        try {
            $response = $client->get('https://outpost.statamic.com/v2/validate/' . $key);
        } catch (\Exception $e) {
            return ['success' => false, 'key' => $key];
        }

        return ['success' => true, 'key' => $key];
    }

    /**
     * Save a license key
     */
    private function saveLicense($key)
    {
        $path = settings_path('system.yaml');

        $settings = YAML::parse(File::get($path));

        $settings['license_key'] = $key;

        File::put($path, YAML::dump($settings));
    }

    /**
     * Save settings
     *
     * @param  Request $request
     * @return array
     */
    public function postSettings(Request $request)
    {
        // The fields we're expecting, organized by their respective files.
        $fields = [
            'system' => ['locales', 'timezone'],
            'debug' => ['debug'],
        ];

        foreach ($fields as $section => $fields) {
            $existing = $this->loadSettingsFor($section);

            $submission = $this->processSettingsFields($section, $fields, $request);

            $settings = array_merge($existing, $submission);

            $this->saveSettingsFor($section, $settings);
        }

        return ['success' => true];
    }

    /**
     * Load the settings for a specific section
     *
     * @param  string $section Name of the section/file
     * @return array
     */
    private function loadSettingsFor($section)
    {
        $path = settings_path($section.'.yaml');

        return YAML::parse(File::get($path));
    }

    /**
     * Save settings for a specific section
     *
     * @param  string $section  Name of the section/file
     * @param  array $settings  Array of settings
     */
    private function saveSettingsFor($section, $settings)
    {
        $yaml = YAML::dump($settings);

        $path = settings_path($section.'.yaml');

        File::put($path, $yaml);
    }

    /**
     * Process the fields according to their fieldtypes
     *
     * @param  string  $section Name of the section/file
     * @param  array  $fields  Array of field names
     * @param  Request $request
     * @return array
     */
    private function processSettingsFields($section, $fields, Request $request)
    {
        $fieldset = Fieldset::get($section, 'settings');

        $data = [];

        foreach ($fieldset->fieldtypes() as $field) {
            if (! in_array($field->getName(), $fields)) {
                continue;
            }

            $data[$field->getName()] = $field->process($request->input($field->getName()));
        }

        return $data;
    }

    /**
     * Create a user account
     *
     * @param  Request $request
     * @return array
     */
    public function postUser(Request $request)
    {
        $id = Helper::makeUuid();

        if (User::whereUsername($request->input('username'))) {
            return ['success' => false, 'message' => 'User exists.'];
        }

        $user = User::create()->username($request->input('username'))
                              ->email($request->input('email'))
                              ->with([
                                  'id' => $id,
                                  'password' => $request->input('password'),
                                  'super' => true,
                                  'first_name' => $request->input('first_name'),
                                  'last_name' => $request->input('last_name'),
                                  'content' => $request->input('bio')
                              ])
                              ->get();

        $user->save();

        Cache::clear();

        return ['success' => true, 'id' => $id];
    }

    /**
     * Log in
     *
     * @param  Request $request
     * @return array
     */
    public function postLogin(Request $request)
    {
        $user = User::find($request->input('id'));

        Auth::login($user);

        return ['success' => true];
    }

    /**
     * Complete the installation
     *
     * @return array
     */
    public function getComplete()
    {
        $success = true;

        try {
            File::delete(webroot_path('installer.php'));
        } catch (\ErrorException $e) {
            $success = false;
        }

        return ['success' => $success];
    }
}
