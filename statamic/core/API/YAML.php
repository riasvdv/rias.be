<?php

namespace Statamic\API;

use Spyc;
use Symfony\Component\Yaml\Yaml as SymfonyYaml;

/**
 * Parsing and dumping YAML
 */
class YAML
{
    /**
     * Parse a string of raw YAML into an array
     *
     * @param string $str  The YAML string
     * @return array
     */
    public static function parse($str)
    {
        if (empty($str)) {
            return [];
        }

        if (Pattern::startsWith($str, '---')) {
            $split = preg_split("/\n---/", $str, 2, PREG_SPLIT_NO_EMPTY);
            $yaml = $split[0];
            $content = ltrim(array_get($split, 1, ''));

            return self::parseYaml($yaml) + ['content' => $content];
        }

        return self::parseYaml($str);
    }

    private static function parseYaml($yaml)
    {
        return (Config::get('system.yaml_parser') === 'symfony')
            ? self::parseSymfony($yaml)
            : self::parseSpyc($yaml);
    }

    private static function parseSpyc($yaml)
    {
        return Spyc::YAMLLoadString($yaml);
    }

    private static function parseSymfony($yaml)
    {
        return SymfonyYaml::parse($yaml);
    }

    /**
     * Dump some YAML
     *
     * @param array        $data
     * @param string|bool  $content
     * @return string
     */
    public static function dump($data, $content = false)
    {
        $yaml = (Config::get('system.yaml_parser') === 'symfony')
            ? self::dumpSymfony($data)
            : self::dumpSpyc($data);

        if ($content) {
            $fenced = "---".PHP_EOL . $yaml . "---".PHP_EOL;
            $yaml = $fenced . $content;
        }

        return $yaml ?: '';
    }

    private static function dumpSymfony($data)
    {
        return SymfonyYaml::dump($data, 100, 2, SymfonyYaml::DUMP_MULTI_LINE_LITERAL_BLOCK);
    }

    private static function dumpSpyc($data)
    {
        $yaml = Spyc::YAMLDump($data, 2, 100);
        $yaml = substr($yaml, 4); // remove the initial fencing by spyc
        return $yaml;
    }
}
