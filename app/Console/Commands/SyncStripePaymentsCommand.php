<?php

namespace App\Console\Commands;

use App\Domain\Stripe\Actions\CreatePaymentFromChargeAction;
use App\Domain\Stripe\Actions\GeneratePaymentReceiptForPaymentAction;
use App\Payment;
use Exception;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Stripe\Charge;
use Stripe\StripeClient;

class SyncStripePaymentsCommand extends Command
{
    protected $signature = 'stripe:sync-payments';

    protected $description = 'Sync Stripe payments';

    public function handle(
        StripeClient $stripeClient,
        CreatePaymentFromChargeAction $createPaymentFromChargeAction,
        GeneratePaymentReceiptForPaymentAction $generatePaymentReceiptForPaymentAction
    ) {
        $latestPaymentTimestamp = optional(optional(Payment::latest()->first())->created_at)->timestamp;

        $params = [
            'limit' => 20,
        ];

        if ($latestPaymentTimestamp) {
            $params['created'] = [
                'gt' => $latestPaymentTimestamp
            ];
        }

        $charges = $stripeClient->charges->all($params);

        $this->getOutput()->progressStart(count($charges));


        collect($charges->getIterator())
            ->filter(function (Charge $charge) {
                return is_null(Payment::where('stripe_id', $charge->id)->first());
            })
            ->each(function (Charge $charge) use ($createPaymentFromChargeAction, $generatePaymentReceiptForPaymentAction) {
                $payment = $createPaymentFromChargeAction->execute($charge);

                try {
                    $generatePaymentReceiptForPaymentAction->execute($payment);
                } catch (Exception $e) {
                    $payment->delete();
                    throw $e;
                }

                $formattedUSD = number_format($charge->amount / 100, 2);
                $formattedEur = number_format($payment->amount_eur / 100, 2, ',', '.');

                $payload = [
                    'username' => 'Statamic',
                    'avatar_url' => 'https://statamic.com/img/favicons/favicon-196x196.png',
                    'content' => "💸  A new payment of €{$formattedEur} (\${$formattedUSD}) has been received!",
                    'components' => [
                        [
                            'type' => 1,
                            'components' => [
                                [
                                    'type' => 2,
                                    'style' => 5,
                                    'label' => 'View receipt',
                                    'url' => $charge->receipt_url,
                                ],
                                [
                                    'type' => 2,
                                    'style' => 5,
                                    'label' => 'View in Stripe',
                                    'url' => "https://dashboard.stripe.com/payments/{$charge->id}",
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

                Http::post(config('services.discord.webhook_url'), []); // An empty post to "wake up" the webhook
                $response = Http::post(config('services.discord.webhook_url'), $payload);

                if (! $response->successful()) {
                    report(new Exception(json_encode($response->json())));
                }

                $this->getOutput()->progressAdvance();
            });

        $this->getOutput()->progressFinish();
    }
}
