<?php

namespace Statamic\API;

use Statamic\View\Antlers\Template as Antlers;

/**
 * Parsing things. Templates, Markdown, YAML, etc.
 */
class Parse
{
    /**
     * Parse a string/template
     *
     * @param       $str        String to parse
     * @param array $variables  Variables to use
     * @param array $context    Contextual variables to also use
     * @return string
     */
    public static function template($str, $variables = [], $context = [])
    {
        return Antlers::parse($str, $variables, $context);
    }

    /**
     * Iterate over an array and parse the string/template for each
     *
     * @param string  $content     String to parse
     * @param array   $data        Variables to use, in a multidimensional array
     * @param bool    $supplement  Whether to supplement with contextual values
     * @param array   $context     Contextual variables to also use
     * @return string
     */
    public static function templateLoop($content, $data, $supplement = true, $context = [])
    {
        return Antlers::parseLoop($content, $data, $supplement, $context);
    }

    /**
     * Parse a string of raw YAML into an array
     *
     * @param string $str  The YAML string
     * @return array
     */
    public static function YAML($str)
    {
        return YAML::parse($str);
    }

    /**
     * Checks for and parses front matter
     *
     * @param string  $string  Content to parse
     * @return array
     */
    public static function frontMatter($string)
    {
        $data = [];
        $content = $string;

        if (preg_match('/^---(?>\r\n|\n|\r)/', $string)) {
            $data = self::YAML($string);
            $content = $data['content'];
            unset($data['content']);
        }

        return compact('data', 'content');
    }

    /**
     * Parse environment variable placeholders with the actual values
     *
     * @param   mixed  $val  The value to parse
     * @return  mixed
     */
    public static function env($val)
    {
        if (! Str::contains($val, '{env:')) {
            return $val;
        }

        // If the value is *only* the environment variable, then just use that instead
        // of interpolating it within a string. This lets people use boolean values.
        preg_match($pattern = '/{env:([^\s]*)}/', $val, $matches);
        if ($val === $matches[0]) {
            return env($matches[1]);
        }

        // Otherwise, loop over them and replace each instance.
        return preg_replace_callback($pattern, function ($matches) {
            return env($matches[1]);
        }, $val);
    }
}
