<?php

namespace Statamic\Http\Controllers;

use Statamic\API\Config;
use Statamic\API\Folder;
use Statamic\API\Fieldset;
use Statamic\API\File;
use Statamic\API\YAML;
use Statamic\API\Helper;
use Statamic\API\Cache;
use Statamic\API\Stache;
use Statamic\API\Search;
use Statamic\Config\Settings;
use Statamic\CP\Publish\ProcessesFields;
use Statamic\Events\Data\SettingsSaved;

class SettingsController extends CpController
{
    use ProcessesFields;

    protected $name;

    public function index()
    {
        return redirect()->route('settings.edit', 'system');
    }

    public function edit($name)
    {
        $fieldset = Fieldset::get($name, 'settings');

        $data = $this->preProcessWithBlankFields(
            $fieldset,
            Config::get($name)
        );

        return view('settings.edit', [
            'title' => t('settings_'.$name),
            'extra' => [
                'env' => array_get(app(Settings::class)->env(), $name)
            ],
            'slug' => $name,
            'content_data' => $data,
            'content_type' => 'settings',
            'fieldset' => $fieldset->toPublishArray(),
        ]);
    }

    public function update($name)
    {
        $this->name = $name;

        $data = $this->processFields(Fieldset::get($this->name, 'settings'), $this->request->input('fields'));

        $file = settings_path($name . '.yaml');

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

        // If the search settings change, let's reindex.
        if ($name == 'search') {
            Search::update();
            $message = t('settings_updated_and_indexed');
        } else {
            $message = t('settings_updated');
        }

        // Whoever wants to know about it can do so now.
        event(new SettingsSaved($file, $data));

        return ['success' => true, 'message' => $message];
    }

    public function licenseKey()
    {
        Config::set('system.license_key', $this->request->input('key'));

        return back();
    }
}
