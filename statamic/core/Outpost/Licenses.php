<?php

namespace Statamic\Outpost;

class Licenses
{
    protected $licenses;

    public function __construct($payload)
    {
        $this->licenses = $this->createLicenseCollection($payload);
    }

    protected function createLicenseCollection($payload)
    {
        $collection = collect();

        $collection[] = new License([
            'id' => 'statamic',
            'valid' => $payload['license_valid'],
            'key' => $payload['license_key'],
            'domain' => $payload['domain'],
            'correct_domain' => $payload['correct_domain'],
        ]);

        foreach ($payload['addons'] as $addon) {
            if (!$addon['commercial']) {
                continue;
            }

            $collection[] = new License([
                'id' => $addon['addon'],
                'key' => $addon['license_key'],
                'valid' => $addon['licensed'],
                'domain' => $addon['domain'],
                'correct_domain' => $addon['correct_domain'],
            ]);
        }

        return $collection;
    }

    public function get()
    {
        return $this->licenses;
    }

    /**
     * Checks whether all licenses are using a valid license key.
     * Although, not necessarily on the right domain.
     */
    public function valid()
    {
        return $this->licenses->filter(function ($license) {
            return ! $license->valid();
        })->isEmpty();
    }

    /**
     * Checks whether all licenses are on the correct domain.
     */
    public function onCorrectDomain()
    {
        return $this->licenses->filter(function ($license) {
            return ! $license->onCorrectDomain();
        })->isEmpty();
    }

    /**
     * Checks if any license keys are missing.
     */
    public function missingKeys()
    {
        return ! $this->licenses->filter(function ($license) {
            return ! $license->hasKey();
        })->isEmpty();
    }

    /**
     * Get all the unique domains
     */
    public function domains()
    {
        return $this->licenses->flatMap(function ($license) {
            return $license->domains()->all();
        })->unique()->values();
    }
}
