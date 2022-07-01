<?php

namespace App\Console\Commands;

use App\Domain\Stripe\Actions\CreatePaymentFromChargeAction;
use App\Domain\Stripe\Actions\GeneratePaymentReceiptForPaymentAction;
use App\Domain\Stripe\Enums\PaymentType;
use App\Payment;
use Exception;
use Illuminate\Console\Command;
use Spatie\DiscordAlerts\Facades\DiscordAlert;
use Stripe\Charge;
use Stripe\StripeClient;

class SyncStatamicPaymentsCommand extends Command
{
    protected $signature = 'stripe:sync-statamic-payments';

    protected $description = 'Sync Statamic Stripe payments';

    public function handle(
        StripeClient $stripeClient,
        CreatePaymentFromChargeAction $createPaymentFromChargeAction,
        GeneratePaymentReceiptForPaymentAction $generatePaymentReceiptForPaymentAction
    ) {
        $latestPaymentTimestamp = optional(optional(Payment::where('type', PaymentType::STATAMIC)->latest()->first())->created_at)->timestamp;

        $params = [
            'limit' => 20,
        ];

        if ($latestPaymentTimestamp) {
            $params['created'] = [
                'gt' => $latestPaymentTimestamp,
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

                DiscordAlert::to('statamic')->message("💸  A new payment of €{$formattedEur} (\${$formattedUSD}) has been received!");

                $this->getOutput()->progressAdvance();
            });

        $this->getOutput()->progressFinish();
    }
}
