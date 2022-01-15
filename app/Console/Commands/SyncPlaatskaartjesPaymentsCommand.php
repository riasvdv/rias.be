<?php

namespace App\Console\Commands;

use App\Domain\Stripe\Actions\CreatePaymentFromChargeAction;
use App\Domain\Stripe\Actions\GeneratePaymentReceiptForPaymentAction;
use App\Domain\Stripe\Enums\PaymentType;
use App\Payment;
use Exception;
use Facade\Ignition\Facades\Flare;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\Http;
use Psr\Log\LogLevel;
use Stripe\Charge;
use Stripe\StripeClient;

class SyncPlaatskaartjesPaymentsCommand extends Command
{
    protected $signature = 'stripe:sync-plaatskaartjes-payments';

    protected $description = 'Sync Plaatskaartjes Stripe payments';

    public function handle(
        CreatePaymentFromChargeAction $createPaymentFromChargeAction,
        GeneratePaymentReceiptForPaymentAction $generatePaymentReceiptForPaymentAction
    ) {
        $stripeClient = new StripeClient(config('services.stripe-plaatskaartjes.secret'));

        $latestPaymentTimestamp = optional(optional(Payment::where('type', PaymentType::PLAATSKAARTJES)->latest()->first())->created_at)->timestamp;

        $params = [
            'limit' => 20,
            'expand' => ['data.balance_transaction'],
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
                return $charge->status === 'succeeded';
            })
            ->filter(function (Charge $charge) {
                return !Payment::where('stripe_id', $charge->id)->exists();
            })
            ->each(function (Charge $charge) use ($stripeClient, $createPaymentFromChargeAction, $generatePaymentReceiptForPaymentAction) {
                if (! $charge->balance_transaction) {
                    $this->getOutput()->progressAdvance();

                    return;
                }

                $payment = Payment::create([
                    'type' => PaymentType::PLAATSKAARTJES,
                    'stripe_id' => $charge->id,
                    'amount_usd' => 0,
                    'amount_eur' => $charge->balance_transaction->net,
                    'receipt_url' => $charge->receipt_url,
                    'created_at' => $charge->created,
                    'updated_at' => $charge->created,
                ]);

                try {
                    $generatePaymentReceiptForPaymentAction->execute($payment);
                } catch (Exception $e) {
                    $payment->delete();
                    throw $e;
                }

                $formattedEur = number_format($payment->amount_eur / 100, 2, ',', '.');

                $payload = [
                    'username' => 'Plaatskaartjes',
                    'avatar_url' => 'https://plaatskaartjes.be/logo.png',
                    'content' => "💸  A new payment of €{$formattedEur} has been received!",
                ];

                $response = Http::post(config('services.discord.webhook_url'), $payload);

                if ($response->status() !== 204) {
                    Flare::reportMessage("Failed to send webhook to Discord: " . $response->body(), LogLevel::ERROR);
                }

                $this->getOutput()->progressAdvance();
            });

        $this->getOutput()->progressFinish();
    }
}
