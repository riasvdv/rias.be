<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Third Party Services
    |--------------------------------------------------------------------------
    |
    | This file is for storing the credentials for third party services such
    | as Stripe, Mailgun, SparkPost and others. This file provides a sane
    | default location for this type of information, allowing packages
    | to have a conventional place to find your various credentials.
    |
    */

    'mailgun' => [
        'domain' => env('MAILGUN_DOMAIN'),
        'secret' => env('MAILGUN_SECRET'),
    ],

    'ses' => [
        'key' => env('SES_KEY'),
        'secret' => env('SES_SECRET'),
        'region' => 'us-east-1',
    ],

    'sparkpost' => [
        'secret' => env('SPARKPOST_SECRET'),
    ],

    'stripe' => [
        'model' => App\User::class,
        'key' => env('STRIPE_KEY'),
        'secret' => env('STRIPE_SECRET'),
    ],

    'stripe-plaatskaartjes' => [
        'key' => env('STRIPE_PLAATSKAARTJES_KEY'),
        'secret' => env('STRIPE_PLAATSKAARTJES_SECRET'),
    ],

    'accountable' => [
        'user' => env('ACCOUNTABLE_USER'),
        'pass' => env('ACCOUNTABLE_PASS'),
        'clientId' => env('ACCOUNTABLE_CLIENT_ID'),
    ],

    'telegram' => [
        'token' => env('TELEGRAM_TOKEN'),
        'chat_id' => env('TELEGRAM_CHAT_ID'),
    ],

    'ebike' => [
        'remember' => env('EBIKE_REMEMBER'),
        'session_id' => env('EBIKE_SESSION_ID'),
    ],

    'discord' => [
        'webhook_url' => env('DISCORD_WEBHOOK_URL'),
    ],
];
