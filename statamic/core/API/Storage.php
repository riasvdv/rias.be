<?php

namespace Statamic\API;

class Storage
{
    /**
     * Save a key to storage
     *
     * @param string $key   Key to save under
     * @param mixed  $data  Data to store
     */
    public static function put($key, $data)
    {
        File::disk('storage')->put(self::getPath($key), $data);
    }

    /**
     * Save a key to storage as YAML
     *
     * @param string $key   Key to save under
     * @param mixed  $data  Data to store
     */
    public static function putYAML($key, $data)
    {
        if ($content = array_get($data, 'content')) {
            unset($data['content']);
        }

        self::put(Str::ensureRight($key, '.yaml'), YAML::dump($data, $content));
    }

    /**
     * Save a key to storage as a serialized array
     *
     * @param string $key   Key to save under
     * @param mixed  $data  Data to store
     */
    public static function putSerialized($key, $data)
    {
        self::put(Str::ensureRight($key, '.php'), serialize($data));
    }

    /**
     * Save a key to storage as JSON
     *
     * @param string $key   Key to save under
     * @param mixed  $data  Data to store
     */
    public static function putJSON($key, $data)
    {
        self::put(Str::ensureRight($key, '.json'), json_encode($data));
    }

    /**
     * Check if a key exists in storage
     *
     * @param  string $key Key to check
     * @return bool
     */
    public static function exists($key)
    {
        return File::disk('storage')->exists(self::getPath($key));
    }

    /**
     * Check if a key exists in storage as YAML
     *
     * @param  string $key Key to check
     * @return bool
     */
    public static function existsYAML($key)
    {
        return self::exists(Str::ensureRight($key, '.yaml'));
    }

    /**
     * Check if a key exists in storage as a serialized array
     *
     * @param  string $key Key to check
     * @return bool
     */
    public static function existsSerialized($key)
    {
        return self::exists(Str::ensureRight($key, '.php'));
    }

    /**
     * Check if a key exists in storage as JSON
     *
     * @param  string $key Key to check
     * @return bool
     */
    public static function existsJSON($key)
    {
        return self::exists(Str::ensureRight($key, '.json'));
    }

    /**
     * Delete a key from storage
     *
     * @param string $key   Key to delete
     */
    public static function delete($key)
    {
        File::disk('storage')->delete(self::getPath($key));
    }

    /**
     * Delete a YAML key from storage
     *
     * @param string $key   Key to delete
     */
    public static function deleteYAML($key)
    {
        self::delete(Str::ensureRight($key, '.yaml'));
    }

    /**
     * Delete a serialized array key from storage
     *
     * @param string $key   Key to delete
     */
    public static function deleteSerialized($key)
    {
        self::delete(Str::ensureRight($key, '.php'));
    }

    /**
     * Delete a JSON key from storage
     *
     * @param string $key   Key to delete
     */
    public static function deleteJSON($key)
    {
        self::delete(Str::ensureRight($key, '.json'));
    }

    /**
     * Get a key from the cache
     *
     * @param string $key      Key to retrieve
     * @param null   $default  Fallback data if the value doesn't exist
     * @return mixed
     */
    public static function get($key, $default = null)
    {
        return File::disk('storage')->get(self::getPath($key), $default);
    }

    /**
     * Get YAML from storage
     *
     * @param string $key      Key to retrieve
     * @param null   $default  Fallback data if the value doesn't exist
     * @return mixed
     */
    public static function getYAML($key, $default = null)
    {
        if ($data = self::get(Str::ensureRight($key, '.yaml'))) {
            return YAML::parse($data);
        }

        return $default;
    }

    /**
     * Get a serialized array from storage
     *
     * @param string $key      Key to retrieve
     * @param null   $default  Fallback data if the value doesn't exist
     * @return mixed
     */
    public static function getSerialized($key, $default = null)
    {
        if ($data = self::get(Str::ensureRight($key, '.php'))) {
            return unserialize($data);
        }

        return $default;
    }

    /**
     * Get JSON from storage
     *
     * @param string $key      Key to retrieve
     * @param null   $default  Fallback data if the value doesn't exist
     * @return mixed
     */
    public static function getJSON($key, $default = null)
    {
        if ($data = self::get(Str::ensureRight($key, '.json'))) {
            return json_decode($data, true);
        }

        return $default;
    }

    /**
     * Get the path to be saved
     *
     * @param string $key
     * @return string
     */
    private static function getPath($key)
    {
        $namespace = explode(':', $key);
        $key = array_pop($namespace);

        return implode('/', $namespace) . '/' . $key;
    }
}
