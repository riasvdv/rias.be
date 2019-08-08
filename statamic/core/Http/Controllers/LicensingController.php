<?php

namespace Statamic\Http\Controllers;

use Statamic\API\File;
use Statamic\API\YAML;
use Statamic\API\Addon;
use Statamic\API\Config;
use Illuminate\Http\Request;
use Statamic\Outpost\Outpost;

class LicensingController extends CpController
{
    /**
     * @var Outpost
     */
    private $outpost;

    public function index(Outpost $outpost)
    {
        $this->outpost = $outpost;

        return view('licensing.index', [
            'title' => t('license_keys'),
            'licenses' => $this->outpost->licenses()->get(),
        ]);
    }

    public function refresh(Outpost $outpost)
    {
        $outpost->clearCachedResponse();

        return redirect()->route('licensing');
    }

    public function update(Outpost $outpost, Request $request)
    {
        $this->setStatamicLicenseKey($request->statamic);

        $this->setAddonLicenseKeys($request->except(['_token', 'statamic']));

        $outpost->clearCachedResponse();

        return back()->with('success', t('settings_updated'));
    }

    private function setStatamicLicenseKey($key)
    {
        Config::set('system.license_key', $key);
        Config::save();
    }

    private function setAddonLicenseKeys($keys)
    {
        foreach ($keys as $addon => $licenseKey) {
            $addon = Addon::create($addon);

            $config = $addon->config();
            $config['license_key'] = $licenseKey;

            File::put(settings_path('addons/'.$addon->handle().'.yaml'), YAML::dump($config));
        }
    }
}
