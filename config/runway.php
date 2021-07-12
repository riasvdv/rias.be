<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Resources
    |--------------------------------------------------------------------------
    |
    | Configure the resources (models) you'd like to be available in Runway.
    |
    */

    'resources' => [
        \App\Payment::class => [
            'name' => 'Payments',
            'listing' => [
                'cp_icon' => 'performance-increase',
            ],
            'blueprint' => [
                'fields' => [
                    [
                        'handle' => 'stripe_id',
                        'field' => [
                            'type' => 'text',
                            'read_only' => true,
                            'listable' => true,
                        ]
                    ],
                    [
                        'handle' => 'amount_usd',
                        'field' => [
                            'type' => 'currency',
                            'html_type' => 'number',
                            'read_only' => true,
                            'listable' => true,
                            'prepend' => '$',
                        ]
                    ],
                    [
                        'handle' => 'amount_eur',
                        'field' => [
                            'type' => 'currency',
                            'html_type' => 'number',
                            'read_only' => true,
                            'listable' => true,
                            'prepend' => '€',
                        ]
                    ],
                    [
                        'handle' => 'receipt_url',
                        'field' => [
                            'type' => 'url',
                            'read_only' => true,
                            'listable' => true,
                            'html_type' => 'url',
                            'url_label' => 'View receipt',
                        ]
                    ],
                    [
                        'handle' => 'sent_to_accountable',
                        'field' => [
                            'type' => 'toggle',
                            'read_only' => true,
                            'listable' => true,
                        ]
                    ],
                    [
                        'handle' => 'created_at',
                        'field' => [
                            'type' => 'date',
                            'time_enabled' => true,
                            'read_only' => true,
                            'listable' => true,
                        ]
                    ],
                ]
            ]
        ],
    ],

    /*
    |--------------------------------------------------------------------------
    | Disable Migrations?
    |--------------------------------------------------------------------------
    |
    | Should Runway's migrations be disabled?
    | (eg. not automatically run when you next vendor:publish)
    |
    */

    'disable_migrations' => false,

];
