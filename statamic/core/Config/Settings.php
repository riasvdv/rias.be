<?php

namespace Statamic\Config;

use Statamic\API\File;
use Statamic\API\YAML;

class Settings extends Config
{
    /**
     * Save the config
     *
     * @return void
     */
    public function save()
    {
        foreach ($this->config as $file => $data) {
            // Don't save if it hasn't changed.
            if (array_get($this->original, $file) === $data) {
                continue;
            }

            File::put(settings_path("$file.yaml"), YAML::dump($data));
        }
    }
}
