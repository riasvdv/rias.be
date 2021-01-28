<?php

namespace App\Console\Commands;

use App\Domain\Stripe\Actions\CreatePaymentFromChargeAction;
use App\Domain\Stripe\Actions\GeneratePaymentReceiptForPaymentAction;
use App\Payment;
use Illuminate\Console\Command;
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
                $generatePaymentReceiptForPaymentAction->execute($payment);

                $this->getOutput()->progressAdvance();
            });

        $this->getOutput()->progressFinish();
    }
}
