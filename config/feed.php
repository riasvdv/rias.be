<?php

use App\Feed;

$title = 'Rias.be';
$description = 'I\'m Rias, a full stack software engineer from Antwerp specialized in Laravel, Livewire, Craft CMS, and React.';
$image = '/assets/social.png';

return [
    'feeds' => [
        'main' => [
            'items' => [Feed::class, 'getAllItems'],
            'url' => '/feed',

            'title' => $title,
            'description' => $description,
            'language' => 'en-BE',
            'image' => $image,
            'format' => 'atom',
            'view' => 'feed::atom',
            'type' => '',
            'contentType' => '',
        ],
        'json' => [
            'items' => [Feed::class, 'getAllItems'],
            'url' => '/feed.json',

            'title' => $title,
            'description' => $description,
            'language' => 'en-BE',
            'image' => $image,
            'format' => 'json',
            'view' => 'feed::json',
            'type' => '',
            'contentType' => '',
        ],
    ],
];
