<?php

namespace App\Domain\Stripe\Actions;

use App\Domain\Stripe\Enums\PaymentType;
use App\Payment;
use Spatie\Browsershot\Browsershot;
use Spatie\TemporaryDirectory\TemporaryDirectory;
use Stripe\Charge;
use Stripe\StripeClient;

class CreatePaymentFromChargeAction
{
    private StripeClient $stripeClient;

    public function __construct(StripeClient $stripeClient)
    {
        $this->stripeClient = $stripeClient;
    }

    public function execute(Charge $charge): Payment
    {
        $balanceTransaction = $this->stripeClient->balanceTransactions->retrieve($charge->balance_transaction);

        return Payment::create([
            'type' => PaymentType::STATAMIC,
            'stripe_id' => $charge->id,
            'amount_usd' => $charge->amount,
            'amount_eur' => $balanceTransaction->amount,
            'receipt_url' => $charge->receipt_url,
            'created_at' => $charge->created,
            'updated_at' => $charge->created,
        ]);
    }
}
