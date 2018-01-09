<?php
/**
 * Scout plugin for Craft CMS 3.x
 *
 * Craft Scout provides a simple solution for adding full-text search to your entries.
 * Scout will automatically keep your search indexes in sync with your entries.
 *
 * @link      https://rias.be
 * @copyright Copyright (c) 2017 Rias
 */

/**
 * Scout config.php
 *
 * This file exists only as a template for the Scout settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as 'scout.php'
 * and make your changes there to override default settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just as
 * you do for 'general.php'
 */

return [
    // These can both be found in your Algolia Account:  https://www.algolia.com/api-keys
    "application_id" => "4IHRMEBBNQ",
    "admin_api_key" => "20f2982b03e070bf57c007b070733df5",
    "mappings" => [
        [
            'indexName' => 'blog',
            'elementType' => \craft\elements\Entry::class,
            'criteria' => [
                'section' => 'blog'
            ],
        ],
    ],
];
