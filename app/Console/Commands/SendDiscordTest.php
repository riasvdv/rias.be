<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;

class SendDiscordTest extends Command
{
    protected $signature = 'send-discord-test';

    protected $description = 'Send a test notification to Discord';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle()
    {
        $payload = [
            'username' => 'Statamic',
            'avatar_url' => 'https://statamic.com/img/favicons/favicon-196x196.png',
            'content' => "💸  A new payment of €123 ($123) has been received!",
            'components' => [
                [
                    'type' => 1,
                    'components' => [
                        [
                            'type' => 2,
                            'style' => 5,
                            'label' => 'View receipt',
                            'url' => 'https://example.com',
                        ],
                        [
                            'type' => 2,
                            'style' => 5,
                            'label' => 'View in Stripe',
                            'url' => "https://dashboard.stripe.com/payments/1234",
                        ],
                        [
                            'type' => 2,
                            'style' => 5,
                            'label' => 'Open Accountable',
                            'url' => "https://web.accountable.eu",
                        ],
                    ]
                ]
            ]
        ];

        $response = Http::post(config('services.discord.webhook_url'), $payload);

        $this->getOutput()->comment($response->body());

        return self::SUCCESS;
    }
}
