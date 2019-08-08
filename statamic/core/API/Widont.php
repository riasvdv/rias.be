<?php

namespace Statamic\API;

/**
 * Prevent widows in strings
 *
 * Thanks to Shaun Inman for inspiration here!
 * http://www.shauninman.com/archive/2008/08/25/widont_2_1_1
 */
class Widont
{
    /**
     * Attempts to prevent widows by adding a &nbsp; between the final words in a string.
     *
     * @param string $value
     * @param int $numberOfWords
     * @return string
     */
    public static function preventWidows($value, $numberOfWords = 2)
    {
        // tags regex
        $tagsRegex = "p|li|h1|h2|h3|h4|h5|h6|div|figcaption";

        // if there are content tags
        if (preg_match("/<\/(?:{$tagsRegex})>/ism", $value)) {

            // step 1, replace spaces in HTML tags with a code
            $value = preg_replace_callback("/<.*?>/ism", function($matches) {
                return str_replace(' ', '%###%##%', $matches[0]);
            }, $value);

            // step 2, replace last space with &nbsp;
            $numberOfWords = self::safeNumberOfWords($value, $numberOfWords);
            $dynamicRegex = str_repeat("([^\s]+)[ \t]+", $numberOfWords - 1);
            $value = preg_replace("/(?<!<[{$tagsRegex}]){$dynamicRegex}([^\s]+(?:[\s]*<\/(?:{$tagsRegex})>))$/im", self::dynamicReplacement($numberOfWords), rtrim($value));

            // step 3, re-replace the code from step 1 with spaces
            return str_replace("%###%##%", " ", $value);

        // otherwise prevent widows on whole string
        } else {
            $numberOfWords = self::safeNumberOfWords($value, $numberOfWords);
            $dynamicRegex = str_repeat("([^\s]+)\s+", $numberOfWords - 1);

            return preg_replace("/{$dynamicRegex}([^\s]+)\s*$/im", self::dynamicReplacement($numberOfWords), rtrim($value));
        }
    }

    /**
     * Get safe number of words on which to prevent widows, based on param and number of words in value itself.
     *
     * @param string $value
     * @param int $numberOfWords
     * @return int
     */
    private static function safeNumberOfWords($value, $numberOfWords)
    {
        $paramNumberOfWords = $numberOfWords ?: 2;
        $actualNumberOfWords = count(explode(' ', trim($value)));

        return collect([$paramNumberOfWords, $actualNumberOfWords])->min();
    }

    /**
     * Create dynamic replacement expression.
     *
     * @param int $numberOfWords
     * @return string
     */
    private static function dynamicReplacement($numberOfWords)
    {
        return collect(range(1, $numberOfWords))->map(function ($wordMatch) {
            return '$' . $wordMatch;
        })->implode('&nbsp;');
    }
}
