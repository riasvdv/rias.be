<?php

return [

    /**
     * The theme to be used for highlighting code, take a look at how
     * themes work with Shiki https://github.com/shikijs/shiki/blob/master/docs/themes.md#all-themes
     * you can also pass in an absolute path to a custom VS Code theme.
     */
    'theme' => 'github-light',

    /**
     * Whether the result should be cached, the cache key and invalidation
     * will be based on the contents of the markdown fieldtype, so changing
     * the text and/or the theme should invalidate the cache.
     */
    'cache' => true,

];
