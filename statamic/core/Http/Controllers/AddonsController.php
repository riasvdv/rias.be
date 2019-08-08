<?php

namespace Statamic\Http\Controllers;

use Statamic\API\URL;
use Statamic\API\Path;
use Statamic\API\YAML;
use Statamic\API\File;
use Statamic\API\Folder;
use Statamic\API\Helper;
use Statamic\API\Fieldset;
use Statamic\API\Str;
use Statamic\API\Cache;
use Statamic\API\Stache;
use Statamic\Events\Data\AddonSettingsSaved;
use Statamic\Extend\Addon;
use Statamic\Config\Addons;
use Illuminate\Http\Request;
use Statamic\CP\Publish\ProcessesFields;
use Statamic\CP\Publish\ValidationBuilder;
use Statamic\Extend\Management\AddonRepository;

/**
 * Controller for the addon area
 */
class AddonsController extends CpController
{
    use ProcessesFields;

    /**
     * @var AddonRepository
     */
    private $addonRepo;

    public function __construct(AddonRepository $addonRepo)
    {
        $this->addonRepo = $addonRepo;
    }

    public function index()
    {
        return view('addons.index', [
            'title' => 'Addons'
        ]);
    }

    public function get()
    {
        $addons = $this->addonRepo->thirdParty()->addons()->map(function ($addon) {
            return [
                'id'            => $addon->id(),
                'name'          => $addon->name(),
                'addon_url'     => $addon->url(),
                'version'       => $addon->version(),
                'developer'     => $addon->developer(),
                'developer_url' => $addon->developerUrl(),
                'description'   => $addon->description(),
                'settings_url'  => $addon->hasSettings() ? $addon->settingsUrl() : null,
                'installed'     => $addon->isInstalled()
            ];
        })->values();

        return [
            'columns' => ['name', 'version', 'developer', 'description', 'installed'],
            'items' => $addons,
            'pagination' => ['totalPages' => 1]
        ];
    }

    public function delete(Request $request)
    {
        $this->authorize('super');

        foreach (Helper::ensureArray($request->ids) as $id) {
            \Statamic\API\Addon::create($id)->delete();
        }

        return ['success' => true];
    }

    public function refresh()
    {
        \Artisan::call('update:addons');

        return back()->with('success', 'Addons refreshed.');
    }

    public function settings($addon)
    {
        $addon = new Addon(Str::studly($addon));

        if (! $addon->hasSettings()) {
            return redirect()->route('addons')->withErrors(['The requested addon does not have settings.']);
        }

        return view('addons.settings', [
            'title' => $addon->name() . ' ' . trans_choice('cp.settings', 2),
            'slug'  => $addon->slug(),
            'extra' => [
                'addon' => $addon->id(),
                'env' => array_get(app(Addons::class)->env(), $addon->handle()),
            ],
            'content_data' => $this->getAddonData($addon),
            'content_type' => 'addon',
            'fieldset' => $addon->settingsFieldset()->toPublishArray()
        ]);
    }

    private function getAddonData(Addon $addon)
    {
        return $this->preProcessWithBlankFields(
            $addon->settingsFieldset(),
            $addon->config()
        );
    }

    public function saveSettings(Request $request, $addon)
    {
        $addon = new Addon(Str::studly($addon));

        if ($response = $this->validateSubmission($request, $fieldset = $addon->settingsFieldset())) {
            return $response;
        }

        $data = $this->processFields($fieldset, $request->fields);

        $file = settings_path('addons/' . $addon->handle() . '.yaml');

        // Remove environment managed vars from what was submitted, and replace them with their current values.
        // They aren't editable in the CP but will be submitted (possibly incorrectly) anyway.
        $environmentVars = array_keys(request()->input('extra.env') ?: []);
        $data = array_except($data, $environmentVars);
        $environmentValues = array_only(YAML::parse(File::get($file)), $environmentVars);
        $data = array_merge($data, $environmentValues);

        $contents = YAML::dump($data);

        File::put($file, $contents);

        Cache::clear();
        Stache::clear();

        // Whoever wants to know about it can do so now.
        event(new AddonSettingsSaved($file, $data));

        return ['success' => true, 'message' => t('settings_updated')];
    }

    private function validateSubmission(Request $request, $fieldset)
    {
        $fields = $request->all();

        $validation = (new ValidationBuilder($fields, $fieldset))->build();

        $validator = app('validator')->make($fields, $validation->rules(), [], $validation->attributes());

        if ($validator->fails()) {
            return [
                'success' => false,
                'errors'  => $validator->errors()->toArray()
            ];
        }
    }
}
