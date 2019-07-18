<?php

namespace Statamic\Outpost;

use Log;
use GuzzleHttp\Client;
use Statamic\API\Cache;
use Statamic\API\Config;
use Statamic\Extend\Addon;
use Illuminate\Http\Request;
use GuzzleHttp\Exception\RequestException;
use Statamic\Extend\Management\AddonRepository;

class Outpost
{
    /**
     * The URL of the Outpost
     */
    const ENDPOINT = 'https://outpost.statamic.com/v2/query';

    /**
     * Where the cached response will be stored
     */
    const RESPONSE_CACHE_KEY = 'outpost_response';

    /**
     * Where the previous payload will be stored
     */
    const PAYLOAD_CACHE_KEY = 'outpost_payload';

    /**
     * @var Illuminate\Http\Request
     */
    private $request;

    /**
     * @var array
     */
    private $response;

    /**
     * @var AddonRepository
     */
    private $addonRepo;

    private $message;
    private $licenses;

    /**
     * Create a new Outpost instance
     *
     * @param Request $request
     * @param AddonRepository $addonRepo
     */
    public function __construct(Request $request, AddonRepository $addonRepo)
    {
        $this->request = $request;
        $this->addonRepo = $addonRepo;
    }

    /**
     * Radio into the Outpost
     *
     * @return array
     */
    public function radio()
    {
        if ($this->payloadHasChanged()) {
            $this->clearCachedResponse();
        }

        if ($this->hasCachedResponse()) {
            return $this->response = $this->getCachedResponse();
        }

        $this->performRequest();

        $this->cacheResponse();

        return $this->response;
    }

    public function hasSuccessfulResponse()
    {
        return ! array_get($this->response, 'default_response');
    }

    public function getLicenseKey()
    {
        return Config::getLicenseKey();
    }

    public function hasLicenseKey()
    {
        return $this->getLicenseKey() != null;
    }

    /**
     * Is the site's license key valid?
     *
     * @return boolean
     */
    public function isLicenseValid()
    {
        return array_get($this->response, 'license_valid');
    }

    public function areAddonLicensesValid()
    {
        foreach ($this->addonRepo->thirdParty()->addons() as $addon) {
            if (! $this->isAddonLicenseValid($addon)) {
                return false;
            }
        }

        return true;
    }

    public function isAddonLicenseValid(Addon $addon)
    {
        if (!$this->isAddonCommercial($addon)) {
            return true;
        }

        return $this->doesAddonLicenseExist($addon)
            && $this->isAddonLicenseOnCorrectDomain($addon);
    }

    public function isAddonCommercial($addon)
    {
        $match = $this->getAddonFromPayload($addon);

        return $match['commercial'];
    }

    public function doesAddonLicenseExist($addon)
    {
        $match = $this->getAddonFromPayload($addon);

        return $match['licensed'];
    }

    public function isAddonLicenseOnCorrectDomain($addon)
    {
        $match = $this->getAddonFromPayload($addon);

        return $match['correct_domain'];
    }

    public function addonDomain($addon)
    {
        $match = $this->getAddonFromPayload($addon);

        return $match['domain'];
    }

    protected function getAddonFromPayload($addon)
    {
        $addons = collect(array_get($this->response, 'addons', []));

        return $addons->where('addon', $addon->id())->first();
    }

    /**
     * Is the site in trial mode?
     *
     * @return bool
     */
    public function isTrialMode()
    {
        return !$this->isOnPublicDomain();
    }

    public function isReadyForProduction()
    {
        return !$this->licenses()->missingKeys()
            && $this->licenses()->valid()
            && $this->licenses()->onCorrectDomain();
    }

    /**
     * Is the site on a publicly accessible domain?
     *
     * @return boolean
     */
    public function isOnPublicDomain()
    {
        return array_get($this->response, 'public_domain');
    }

    /**
     * Is the site on their designated licensed domain?
     *
     * @return boolean
     */
    public function isOnCorrectDomain()
    {
        return array_get($this->response, 'correct_domain');
    }

    public function getLicenseDomain()
    {
        return array_get($this->response, 'domain');
    }

    /**
     * Is there an update available?
     *
     * @return boolean
     */
    public function isUpdateAvailable()
    {
        return version_compare(STATAMIC_VERSION, $this->getLatestVersion(), '<');
    }

    /**
     * How many updates are between the installed version and the latest.
     *
     * @return int
     */
    public function getUpdateCount()
    {
        return $this->isUpdateAvailable() ? array_get($this->response, 'update_count') : 0;
    }

    /**
     * What's the latest version?
     *
     * @return string
     */
    public function getLatestVersion()
    {
        return array_get($this->response, 'latest_version');
    }

    /**
     * Perform the request to the Outpost
     *
     * @return void
     */
    private function performRequest()
    {
        // Set up a default response in case of a failed communication with the Outpost.
        $response = $this->getDefaultResponse();

        try {
            $client = new Client;
            $response = $client->request('POST', self::ENDPOINT, ['json' => $this->getPayload(), 'timeout' => 5]);
            $response = json_decode($response->getBody()->getContents(), true);
        } catch (RequestException $e) {
            Log::notice("Couldn't reach the Statamic Outpost.");
        } catch (Exception $e) {
            Log::error("Ran into an issue when contacting the Statamic Outpost.");
        }

        $this->response = $response;
    }

    /**
     * Cache the response. An hour feels about right.
     *
     * @return void
     */
    private function cacheResponse()
    {
        Cache::put(self::RESPONSE_CACHE_KEY, $this->response, 60);
        Cache::put(self::PAYLOAD_CACHE_KEY, $this->getPayload(), 60);
    }

    /**
     * Check if a response has been cached, and whether it should be used.
     *
     * @return boolean
     */
    private function hasCachedResponse()
    {
        // No cache? That was simple.
        if (! Cache::has(self::RESPONSE_CACHE_KEY) || ! Cache::has(self::PAYLOAD_CACHE_KEY)) {
            return false;
        }

        // Changing the license key essentially invalidates the cache
        if ($this->getLicenseKey() !== array_get($this->getCachedResponse(), 'license_key')) {
            return false;
        }

        return true;
    }

    /**
     * Get the cached response
     *
     * @return array
     */
    private function getCachedResponse()
    {
        return Cache::get(self::RESPONSE_CACHE_KEY);
    }

    public function clearCachedResponse()
    {
        Cache::forget(self::RESPONSE_CACHE_KEY);
        Cache::forget(self::PAYLOAD_CACHE_KEY);
    }

    /**
     * Get a default response to use if the request can't be made
     *
     * @return array
     */
    private function getDefaultResponse()
    {
        return [
            'default_response' => true,
            'license_key'      => $this->getLicenseKey(),
            'latest_version'   => STATAMIC_VERSION,
            'update_available' => false,
            'update_count'     => 0,
            'license_valid'    => false,
            'domain'           => null,
            'correct_domain'   => false,
            'addons'           => [],
        ];
    }

    /**
     * Get the payload to be sent to the Outpost
     *
     * @return array
     */
    private function getPayload()
    {
        return [
            'license_key' => $this->getLicenseKey(),
            'version'     => STATAMIC_VERSION,
            'php_version' => PHP_VERSION,
            'request'     => [
                'domain'  => request()->server('HTTP_HOST'),
                'ip'      => request()->ip(),
                'port'    => request()->getPort()
            ],
            'addons' => $this->getAddonsPayload()
        ];
    }

    private function getPreviousPayload()
    {
        return Cache::get(self::PAYLOAD_CACHE_KEY);
    }

    private function payloadHasChanged()
    {
        $prev = $this->getPreviousPayload();
        $current = $this->getPayload();

        // We don't want a different user's IP to be considered a change.
        unset($prev['request']['ip'], $current['request']['ip']);

        return $prev !== $current;
    }

    private function getAddonsPayload()
    {
        return $this->addonRepo->thirdParty()->addons()->map(function ($addon) {
             return [
                 'addon' => $addon->id(),
                 'version' => $addon->version(),
                 'license_key' => $addon->licenseKey(),
             ];
        })->all();
    }

    public function licensingMessage()
    {
        return $this->message()->get();
    }

    public function licensingMessageStatus()
    {
        return $this->message()->status();
    }

    protected function message()
    {
        if ($this->message) {
            return $this->message;
        }

        return $this->message = (new Message($this))->build();
    }

    public function licenses()
    {
        if ($this->licenses) {
            return $this->licenses;
        }

        return $this->licenses = new Licenses($this->response);
    }
}
