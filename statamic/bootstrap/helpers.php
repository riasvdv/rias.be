<?php

use Carbon\Carbon;
use Statamic\API\Str;
use Statamic\API\URL;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\User;
use Statamic\API\Config;
use Michelf\SmartyPants;
use Statamic\Extend\API;
use Statamic\Extend\Addon;
use Michelf\MarkdownExtra;
use Illuminate\Support\Arr;
use Statamic\Data\DataCollection;
use Illuminate\Support\Debug\Dumper;
use Stringy\StaticStringy as Stringy;
use Statamic\View\Blade\Modifier as BladeModifier;
use Symfony\Component\HttpFoundation\File\UploadedFile;

if (! function_exists('array_get')) {
    /**
     * Get an item from an array using "dot" or "colon" notation.
     *
     * @param  array  $array
     * @param  string $key
     * @param  mixed  $default
     * @return mixed
     */
    function array_get($array, $key, $default = null)
    {
        if ($key) {
            $key = str_replace(':', '.', $key);
        }

        return Arr::get($array, $key, $default);
    }
}

/**
 * Reindex an array so unnamed keys are named
 *
 * @param array $array
 * @return mixed
 */
function array_reindex($array)
{
    if (array_values($array) === $array) {
        $array = array_flip($array);
    }

    return $array;
}

/**
 * Filtering a array by its keys using a callback.
 *
 * @param $array array The array to filter
 * @param $callback Callback The filter callback, that will get the key as first argument.
 *
 * @return array The remaining key => value combinations from $array.
 */
function array_filter_key(array $array, $callback)
{
    $matchedKeys = array_filter(array_keys($array), $callback);

    return array_intersect_key($array, array_flip($matchedKeys));
}

function translate($id, array $parameters = [])
{
    return trans($id, $parameters);
}

function translate_choice($id, $number, array $parameters = [])
{
    return trans_choice($id, $number, $parameters);
}

function bool_str($bool)
{
    return ((bool) $bool) ? 'true' : 'false';
}

/**
 * Casts strings "true" and "false" as proper bools
 *
 * @param string $string
 * @return mixed
 */
function str_bool($string) {
    if (strtolower($string) === 'true') {
        return true;
    } elseif (strtolower($string) === 'false') {
        return false;
    }

    return $string;
}

/**
 * Gets or sets the site locale
 *
 * @param string|null $locale
 * @return string
 */
function site_locale($locale = null)
{
    if ($locale) {
        return config(['app.locale' => $locale]);
    }

    return config('app.locale');
}

/**
 * Gets the site's default locale
 *
 * @return string
 */
function default_locale()
{
    return Config::getDefaultLocale();
}

/**
 * @return string
 */
function cp_route($route, $params = [])
{
    if (! CP_ROUTE) {
        return null;
    }

    return route($route, $params);
}

/**
 * @return string
 */
function cp_resource_url($url)
{
    return resource_url('cp/' . $url);
}

/**
 * @return string
 */
function resource_url($url)
{
    return URL::assemble(SITE_ROOT, pathinfo(request()->getScriptName())['basename'], RESOURCES_ROUTE, $url);
}

/**
 * @return string
 */
function path($from, $extra = null)
{
    return Path::tidy($from . '/' . $extra);
}

/**
 * Path to the statamic application directory
 *
 * @param string|null $path
 * @return string
 */
function statamic_path($path = null)
{
    return path(APP, $path);
}

/**
 * Path from the root filesystem location
 * (ie. the folder above `statamic`)
 *
 * @param string|null $path
 * @return string
 */
function root_path($path = null)
{
    return statamic_path('../' . $path);
}

/**
 * Path from webroot
 *
 * @param string|null $path
 * @return string
 */
function webroot_path($path = null)
{
    return path(realpath(STATAMIC_ROOT), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function site_path($path = null)
{
    return path(statamic_path('../site'), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function local_path($path = null)
{
    return path(statamic_path('../local'), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function bundles_path($path = null)
{
    return path(statamic_path('bundles'), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function addons_path($path = null)
{
    return path(site_path('addons'), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function settings_path($path = null)
{
    return path(site_path('settings'), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function site_storage_path($path = null)
{
    return path(site_path('storage'), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function cache_path($path = null)
{
    return path(local_path('cache'), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function logs_path($path = null)
{
    return path(local_path('logs'), $path);
}

/**
 * @param string|null $path
 * @return string
 */
function temp_path($path = null)
{
    return path(local_path('temp'), $path);
}

/**
 * @param string $value
 * @return \Carbon\Carbon
 */
function carbon($value)
{
    if (! $value instanceof Carbon) {
        $value = (is_numeric($value)) ? Carbon::createFromTimestamp($value) : Carbon::parse($value);
    }

    return $value;
}

/**
 * @return \Statamic\DataStore
 */
function datastore()
{
    return app('Statamic\DataStore');
}

/**
 * @param array $value
 * @return \Statamic\Assets\AssetCollection
 */
function collect_assets($value = [])
{
    return new \Statamic\Assets\AssetCollection($value);
}

/**
 * @param array $value
 * @return \Statamic\FileCollection;
 */
function collect_files($value = [])
{
    return new \Statamic\FileCollection($value);
}

/**
 * @param array $value
 * @return \Statamic\Data\Content\ContentCollection
 */
function collect_content($value = [])
{
    return new \Statamic\Data\Content\ContentCollection($value);
}

/**
 * @param array $value
 * @return \Statamic\Data\Pages\PageCollection
 */
function collect_pages($value = [])
{
    return new \Statamic\Data\Pages\PageCollection($value);
}

/**
 * @param array $value
 * @return \Statamic\Data\Entries\EntryCollection
 */
function collect_entries($value = [])
{
    return new \Statamic\Data\Entries\EntryCollection($value);
}

/**
 * @param array $value
 * @return \Statamic\Data\Taxonomies\TermCollection
 */
function collect_terms($value = [])
{
    return new \Statamic\Data\Taxonomies\TermCollection($value);
}

/**
 * @param array $value
 * @return \Statamic\Data\Globals\GlobalCollection
 */
function collect_globals($value = [])
{
    return new \Statamic\Data\Globals\GlobalCollection($value);
}

/**
 * @param array $value
 * @return \Statamic\Data\Users\UserCollection
 */
function collect_users($value = [])
{
    return new \Statamic\Data\Users\UserCollection($value);
}

/**
 * @return \Statamic\Data\Users\User
 */
function me()
{
    return User::getCurrent();
}

/**
 * Gets an addon's API class if it exists, or creates a temporary generic addon class.
 *
 * @param string $addon
 * @return Addon|API
 */
function addon($addon)
{
    try {
        $addon = app("Statamic\\Addons\\{$addon}\\{$addon}API");
    } catch (ReflectionException $e) {
        $addon = new Addon($addon);
    }

    return $addon;
}

/**
 * @return \Statamic\CP\Navigation\Navigation
 */
function nav()
{
    return app('Statamic\CP\Navigation\Nav');
}

/**
 * Convert a width to a bootstrap column class
 *
 * @param int $width Percentage as a width
 * @return string
 */
function col_class($width)
{
    return 'col-md-' . round($width / 8.333);
}

/**
 * SVG helper
 *
 * @param string $name Name of svg
 * @return string
 */
function svg($name)
{
    return inline_svg($name);
}

/**
 * Inline SVG helper
 *
 * Outputs the contents of an svg file
 *
 * @param string $src Name of svg
 * @return string
 */
function inline_svg($src)
{
    return Stringy::collapseWhitespace(
        File::get(statamic_path("resources/dist/svg/{$src}.svg"))
    );
}

/**
 * Check if a string is a UUID4, which are used as content IDs
 *
 * @param string $src string
 * @return bool
 */
function is_id($str)
{
    $regex = "/([a-f0-9]{8}\-[a-f0-9]{4}\-4[a-f0-9]{3}\-[8|9|a|b][a-f0-9]{3}\-[a-f0-9]{12})/";

    return preg_match($regex, $str) === 1;
}

/**
 * Output an "active" class if a url matches
 *
 * @param string $url
 * @return string
 */
function active_for($url)
{
    $url = ltrim(URL::makeRelative($url), '/');

    return app()->request->is($url) ? 'selected' : '';
}

/**
 * Check whether the nav link is active
 *
 * @param string $url
 * @return string
 */
function nav_is($url)
{
    $current = URL::makeAbsolute(URL::getCurrentWithQueryString());

    return $url === $current || Str::startsWith($current, $url . '/');
}

/**
 * Make sure a URL /looks/like/this
 *
 * @param string $url Any given URL
 * @return string
 */
function format_url($url)
{
    return '/' . trim($url, '/');
}

/**
 * Parse string with basic Markdown
 *
 * @param $content
 * @return mixed
 */
function markdown($content)
{
    $parser = new MarkdownExtra;

    if (Config::get('theming.markdown_hard_wrap')) {
        $parser->hard_wrap = true;
    }

    return $parser->transform($content);
}

/**
 * Parse string with basic Textile
 *
 * @param $content
 * @return string
 */
function textile($content)
{
    $parser = new \Netcarver\Textile\Parser();

    return $parser
        ->setDocumentType('html5')
        ->parse($content);
}

/**
 * Shorthand for translate()
 *
 * @param string $var
 * @param array  $params
 * @return string
 */
function t($var, $params = [])
{
    return translate('cp.'.$var, $params);
}

/**
 * Turns a string into a slug
 *
 * @param string $var
 * @return string
 */
function slugify($value)
{
    return Stringy::slugify($value);
}

/**
 * Parse string with SmartyPants
 *
 * @param $content
 * @param int $behavior
 * @return mixed
 */
function smartypants($content, $behavior = null)
{
    if ($behavior) {
        return SmartyPants::defaultTransform($content, $behavior);
    }

    return SmartyPants::defaultTransform($content);
}

/**
 * Returns a real boolean from a string based boolean
 *
 * @param string $value
 * @return bool
 */
function bool($value)
{
    return ! in_array(strtolower($value), ['no', 'false', '0', '', '-1']);
}

/**
 * Return a real integer from a string based integer
 *
 * @param string $value
 * @return int
 */
function int($value)
{
    return intval($value);
}

/**
 * Dump and don't die
 * @return void
 */
function d()
{
    array_map(function ($x) {
        (new Dumper)->dump($x);
    }, func_get_args());

}

/**
 * Return a gravatar image
 *
 * @param  string  $email
 * @param  integer $size
 * @return string
 */
function gravatar($email, $size = null)
{
    $url = "https://www.gravatar.com/avatar/" . e(md5(strtolower($email)));

    if ($size) {
        $url .= '?s=' . $size;
    }

    return $url;
}

/**
 * Format select options
 *
 * @param  array  $options
 * @return array
 */
function format_input_options($options)
{
    $formatted_options = [];

    foreach ($options as $key => $text) {
        if ($options === array_values($options)) {
            $formatted_options[] = ['value' => $text, 'text' => $text];
        } else {
            $formatted_options[] = ['value' => $key, 'text' => $text];
        }
    }

    return $formatted_options;
}

/**
 * Format a changelog release, parsing the [new], [fix], and [break] tags
 *
 * @param  string  $string
 * @return string
 */

function format_update($string)
{
    $string = markdown($string);
    $string = Str::replace($string, '[new]', '<span class="label label-info">New</span>');
    $string = Str::replace($string, '[fix]', '<span class="label label-success">Fix</span>');
    $string = Str::replace($string, '[break]', '<span class="label label-danger">Break</span>');

    return $string;
}

/**
 * Start modifying a value within a Blade template
 *
 * @param  mixed $value
 * @return Statamic\View\Blade\Modifier
 */
function modify($value)
{
    return \Statamic\View\Modify::value($value);
}

/**
 * Detect whether we're running `php please addons:refresh` in the console
 *
 * @return bool
 */
function refreshing_addons()
{
    return app()->runningInConsole() && array_get($_SERVER, 'argv.1') === 'addons:refresh';
}

/**
 * The middleware names applied to CP routes.
 *
 * @return array
 */
function cp_middleware()
{
    return ['cp-enabled', 'add-cp-headers', 'enforce-default-cp-locale', 'set-cp-locale', 'outpost'];
}

/**
 * Sanitizes a string
 *
 * @param bool $antlers  Whether Antlers (curly braces) should be escaped.
 * @return string
 */

function sanitize($value, $antlers = true)
{
    if (is_array($value)) {
        return sanitize_array($value, $antlers);
    }

    if ($value instanceof UploadedFile) {
        return $value;
    }

    $value = htmlentities($value);

    if ($antlers) {
        $value = str_replace(['{', '}'], ['&lbrace;', '&rbrace;'], $value);
    }

    return $value;
}

/**
 * Recusive friendly method of sanitizing an array.
 *
 * @param bool $antlers  Whether Antlers (curly braces) should be escaped.
 * @return array
 */
function sanitize_array($array, $antlers = true)
{
    $result = array();

    foreach ($array as $key => $value) {
        $key = htmlentities($key);
        $result[$key] = sanitize($value, $antlers);
    }

    return $result;
}

/**
 * Recusive friendly method of filtering an array
 *
 * @return array
 */
 function array_filter_recursive(array $array, callable $callback = null)
 {
     $array = is_callable($callback) ? array_filter($array, $callback) : array_filter($array);

     foreach ($array as &$value) {
         if (is_array($value)) {
             $value = call_user_func(__FUNCTION__, $value, $callback);
         }
     }

     return $array;
 }

if (! function_exists('array_filter_use_both')) {
    /**
     * Polyfill for the array_filter constant ARRAY_FILTER_USE_BOTH.
     *
     * This filters the array passing the key as the second parameter
     * for more complex filtering.
     *
     * BC for `array_filter($array, $callback, ARRAY_FILTER_USE_BOTH);`
     *
     * @param  array  $array
     * @param  Closure  $callback
     * @return array
     */
    function array_filter_use_both($array, $callback)
    {
        $items = [];

        foreach ($array as $key => $value) {
            if (! $callback($value, $key)) {
                continue;
            }

            $items[$key] = $value;
        }

        return $items;
    }
}

if (! function_exists('tap')) {
    /**
     * Call the given Closure with the given value then return the value.
     *
     * @param  mixed  $value
     * @param  callable  $callback
     * @return mixed
     */
    function tap($value, $callback)
    {
        $callback($value);
        return $value;
    }
}

if (! function_exists('mb_str_word_count')) {
    /**
     * Multibyte version of str_word_count
     *
     * @param string $string
     * @param int $format
     * @param string $charlist
     *
     * @link https://stackoverflow.com/a/17725577/1569621
     */
    function mb_str_word_count($string, $format = 0, $charlist = '[]')
    {
        $words = empty($string = trim($string)) ? [] : preg_split('~[^\p{L}\p{N}\']+~u', $string);

        switch ($format) {
            case 0:
                return count($words);
                break;
            case 1:
            case 2:
                return $words;
                break;
            default:
                return $words;
                break;
        }
    };
}

/**
 * Convert a PHP date format into one suitable for moment.js
 * Adapted from https://stackoverflow.com/a/30192680/1569621
 *
 * @param string $format
 * @return string
 **/
function to_moment_js_date_format($format)
{
    return strtr($format, [
        'd' => 'DD',
        'D' => 'ddd',
        'j' => 'D',
        'l' => 'dddd',
        'N' => 'E',
        'S' => 'o',
        'w' => 'e',
        'z' => 'DDD',
        'W' => 'W',
        'F' => 'MMMM',
        'm' => 'MM',
        'M' => 'MMM',
        'n' => 'M',
        't' => '', // no equivalent
        'L' => '', // no equivalent
        'o' => 'YYYY',
        'Y' => 'YYYY',
        'y' => 'YY',
        'a' => 'a',
        'A' => 'A',
        'B' => '', // no equivalent
        'g' => 'h',
        'G' => 'H',
        'h' => 'hh',
        'H' => 'HH',
        'i' => 'mm',
        's' => 'ss',
        'u' => 'SSS',
        'e' => 'zz', // deprecated since version 1.6.0 of moment.js
        'I' => '', // no equivalent
        'O' => '', // no equivalent
        'P' => '', // no equivalent
        'T' => '', // no equivalent
        'Z' => '', // no equivalent
        'c' => '', // no equivalent
        'r' => '', // no equivalent
        'U' => 'X',
    ]);
}
