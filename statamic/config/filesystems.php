<?php

return [

    'default' => 'local',

    'cloud' => 'local',

    'disks'   => [
        'local' => [
            'driver' => 'local',
            'root'   => realpath(statamic_path('../')),
            'visibility' => 'public',
            'links' => 'skip',
            'permissions' => [
                'file' => [
                    'public' => 0777,
                    'private' => 0700,
                ],
                'dir' => [
                    'public' => 0777,
                    'private' => 0700,
                ]
            ]
        ]
    ]

];
