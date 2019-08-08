<?php

namespace Statamic\Outpost;

class Message
{
    private $outpost;
    private $licenses;
    private $message;

    public function __construct(Outpost $outpost)
    {
        $this->outpost = $outpost;
        $this->licenses = $outpost->licenses();
    }

    public function build()
    {
        $this->message = $this->buildMessage();

        return $this;
    }

    public function get()
    {
        return $this->message;
    }

    protected function buildMessage()
    {
        if (! $this->outpost->hasSuccessfulResponse()) {
            return t('couldnt_connect_to_outpost');
        }

        return $this->outpost->isTrialMode() ? $this->buildTrialModeMessage() : $this->buildPublicMessage();
    }

    protected function buildTrialModeMessage()
    {
        if ($this->licenses->missingKeys()) {
            return t('trial_mode_missing_license_keys');
        }

        if (! $this->licenses->valid()) {
            return t('trial_mode_invalid_license_keys');
        }

        if (! $this->licenses->onCorrectDomain()) {
            return t('trial_mode_license_keys_for_domains', ['domains' => $this->licenses->domains()->implode(', ')]);
        }
    }

    protected function buildPublicMessage()
    {
        if ($this->licenses->missingKeys() || ! $this->licenses->valid()) {
            return t('invalid_license_keys');
        }

        if (! $this->licenses->onCorrectDomain()) {
            return t('license_keys_incorrect_domain');
        }
    }
}
