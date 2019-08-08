<?php

namespace Statamic\Outpost;

use Statamic\API\Addon;

class License
{
    private $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function id()
    {
        return $this->data['id'];
    }

    public function key()
    {
        return $this->data['key'];
    }

    public function name()
    {
        $id = $this->data['id'];

        return ($id === 'statamic') ? 'Statamic' : Addon::create($id)->name();
    }

    public function valid()
    {
        return $this->data['valid'] === true;
    }

    public function onCorrectDomain()
    {
        return $this->data['correct_domain'] === true;
    }

    public function hasKey()
    {
        return $this->key() !== null;
    }

    public function domain()
    {
        return $this->data['domain'];
    }

    public function domains()
    {
        return collect(explode(',', $this->domain()))
            ->map(function ($domain) {
                $domain = trim($domain);
                return ($domain == '') ? '(empty)' : $domain;
            });
    }

    public function status()
    {
        if (! $this->hasKey()) {
            return ['status' => 'negative', 'message' => t('license_missing')];
        }

        if (! $this->valid()) {
            return ['status' => 'negative', 'message' => t('license_invalid')];
        }

        if (! $this->onCorrectDomain()) {
            return $this->domain()
                ? ['status' => 'negative', 'message' => t('license_wrong_domain', ['domain' => $this->domain()])]
                : ['status' => 'negative', 'message' => t('license_no_domain')];
        }

        return ['status' => 'positive', 'message' => 'OK'];
    }
}
