<?php

namespace Statamic\Addons\Highlight;

use Highlight\Highlighter;
use Statamic\Extend\Modifier;
use Statamic\Extend\Tags;
use function HighlightUtilities\getAvailableStyleSheets;
use function HighlightUtilities\getStyleSheet;

class HighlightTags extends Tags
{
    public function css()
    {
        $styleSheet = getStyleSheet($this->getParam("style", "github-gist"));

        return $this->minifyCss("<style>{$styleSheet}</style>");
    }

    private function minifyCss($css) {
        $css = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css);
        preg_match_all('/(\'[^\']*?\'|"[^"]*?")/ims', $css, $hit, PREG_PATTERN_ORDER);
        for ($i=0; $i < count($hit[1]); $i++) {
            $css = str_replace($hit[1][$i], '##########' . $i . '##########', $css);
        }
        $css = preg_replace('/;[\s\r\n\t]*?}[\s\r\n\t]*/ims', "}\r\n", $css);
        $css = preg_replace('/;[\s\r\n\t]*?([\r\n]?[^\s\r\n\t])/ims', ';$1', $css);
        $css = preg_replace('/[\s\r\n\t]*:[\s\r\n\t]*?([^\s\r\n\t])/ims', ':$1', $css);
        $css = preg_replace('/[\s\r\n\t]*,[\s\r\n\t]*?([^\s\r\n\t])/ims', ',$1', $css);
        $css = preg_replace('/[\s\r\n\t]*{[\s\r\n\t]*?([^\s\r\n\t])/ims', '{$1', $css);
        $css = preg_replace('/([\d\.]+)[\s\r\n\t]+(px|em|pt|%)/ims', '$1$2', $css);
        $css = preg_replace('/([^\d\.]0)(px|em|pt|%)/ims', '$1', $css);
        $css = preg_replace('/\p{Zs}+/ims',' ', $css);
        $css = str_replace(array("\r\n", "\r", "\n"), '', $css);
        for ($i=0; $i < count($hit[1]); $i++) {
            $css = str_replace('##########' . $i . '##########', $hit[1][$i], $css);
        }
        return $css;
    }
}
