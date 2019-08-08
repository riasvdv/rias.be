<?php

namespace Statamic\Config;

use Statamic\API\Str;
use Statamic\API\Parse;
use Statamic\API\Helper;
use Statamic\Contracts\Config\Config as ConfigContract;

abstract class Config implements ConfigContract
{
    /**
     * @var array
     */
    protected $original;

    /**
     * @var array
     */
    protected $config;

    /**
     * An array of any interpolated environment values
     *
     * @var array
     */
    protected $env = [];

    /**
     * Populate the config object with data
     *
     * @param array $config
     * @var array
     */
    public function hydrate(array $config)
    {
        $this->original = $this->config = $this->parseEnv($config);
    }

    /**
     * Get a config value
     *
     * @param string $key
     * @param bool   $default
     * @return mixed
     */
    public function get($key, $default = false)
    {
        return array_get($this->config, $key, $default);
    }

    /**
     * Set a config value
     *
     * @param string $key
     * @param mixed $value
     * @return void
     */
    public function set($key, $value)
    {
        array_set($this->config, $key, $this->parseEnv($value, $key));
    }

    /**
     * Get all config values
     *
     * @return array
     */
    public function all()
    {
        return $this->config;
    }

    /**
     * Get all the environment variable based values
     *
     * @return array
     */
    public function env()
    {
        return $this->env;
    }

    /**
     * Parse environment variable placeholders with the actual values
     *
     * @param   mixed  $value  The value to parse
     * @param   mixed  $scope  Where the value is being added
     * @return  mixed
     */
    private function parseEnv($value, $scope = null)
    {
        // Keep track of whether we started with an array
        $is_array = (is_array($value));

        // Make it into an array so we can keep things consistent
        $array = Helper::ensureArray($value);

        foreach ($array as $key => $val) {
            if (is_array($val)) {
                // An array? Recursion please.
                $array[$key] = $this->parseEnv($val, ltrim(implode('.', [$scope, $key]), '.'));
            } else {
                if (is_string($val) && Str::contains($val, '{env:')) {
                    $parsed = Parse::env($val);

                    // Keep track of it
                    array_set($this->env, ltrim(implode('.', [$scope, $key]), '.'), [
                        'raw' => $val,
                        'parsed' => $parsed
                    ]);
                } else {
                    // No environment variable
                    $parsed = $val;
                }

                $array[$key] = $parsed;
            }
        }

        // Return the array if we want one, or just a value.
        return ($is_array) ? $array : reset($array);
    }
}
