<?php
/**
 * ImageOptimize plugin for Craft CMS 3.x
 *
 * Automatically optimize images after they've been transformed
 *
 * @link      https://nystudio107.com
 * @copyright Copyright (c) 2017 nystudio107
 */
/**
 * ImageOptimize config.php
 *
 * This file exists only as a template for the ImageOptimize settings.
 * It does nothing on its own.
 *
 * Don't edit this file, instead copy it to 'craft/config' as
 * 'image-optimize.php' and make your changes there to override default
 * settings.
 *
 * Once copied to 'craft/config', this file will be multi-environment aware as
 * well, so you can have different settings groups for each environment, just
 * as
 * you do for 'general.php'
 */
return [
    // Active image processors
    'activeImageProcessors'      => [
        'jpg' => [
            'jpegoptim',
        ],
        'png' => [
            'optipng',
        ],
        'svg' => [
            'svgo',
        ],
        'gif' => [
            'gifsicle',
        ],
    ],
    // Active image variant creators
    'activeImageVariantCreators' => [
        'jpg' => [
            'cwebp',
        ],
        'png' => [
            'cwebp',
        ],
        'gif' => [
            'cwebp',
        ],
    ],
    // Preset image processors
    'imageProcessors'            => [
        // jpeg optimizers
        'jpegoptim' => [
            'commandPath'           => getenv('OPT_JPEGOPTIM_PATH'),
            'commandOptions'        => '-s',
            'commandOutputFileFlag' => '',
        ],
        'mozjpeg'   => [
            'commandPath'           => getenv('OPT_MOZJPEG_PATH'),
            'commandOptions'        => '-optimize -copy none',
            'commandOutputFileFlag' => '-outfile',
        ],
        'jpegtran'  => [
            'commandPath'           => getenv('OPT_JPEGTRAN_PATH'),
            'commandOptions'        => '-optimize -copy none',
            'commandOutputFileFlag' => '',
        ],
        // png optimizers
        'optipng'   => [
            'commandPath'           => getenv('OPT_OPTIPNG_PATH'),
            'commandOptions'        => '-o7 -strip all',
            'commandOutputFileFlag' => '',
        ],
        'pngcrush'  => [
            'commandPath'           => getenv('OPT_PNGCRUSH_PATH'),
            'commandOptions'        => '-brute -ow',
            'commandOutputFileFlag' => '',
        ],
        'pngquant'  => [
            'commandPath'           => getenv('OPT_PNGQUANT_PATH'),
            'commandOptions'        => '--strip --skip-if-larger',
            'commandOutputFileFlag' => '',
        ],
        // svg optimizers
        'svgo'      => [
            'commandPath'           => getenv('OPT_SVGO_PATH'),
            'commandOptions'        => '',
            'commandOutputFileFlag' => '',
        ],
        // gif optimizers
        'gifsicle'  => [
            'commandPath'           => getenv('OPT_GIFSICLE_PATH'),
            'commandOptions'        => '-O3 -k 256',
            'commandOutputFileFlag' => '',
        ],
    ],
    'imageVariantCreators' => [
        // webp variant creator
        'cwebp' => [
            'commandPath'           => getenv('OPT_CWEBP_PATH'),
            'commandOptions'        => '',
            'commandOutputFileFlag' => '-o',
            'commandQualityFlag'    => '-q',
            'imageVariantExtension' => 'webp',
        ],
    ],
];