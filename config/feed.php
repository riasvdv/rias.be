<?php

$title = 'Rias.be';
$description = 'I\'m Rias, a full stack web developer from Antwerp specialized in Laravel, Livewire, Statamic & React';
$image = '/assets/social.png';

return [
    'feeds' => [
        'main' => [
            'items' => [\App\Feed::class, 'getAllItems'],
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
            'items' => [\App\Feed::class, 'getAllItems'],
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
