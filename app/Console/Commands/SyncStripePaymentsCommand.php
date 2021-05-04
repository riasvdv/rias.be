<?php

namespace App\Console\Commands;

use App\Domain\Stripe\Actions\CreatePaymentFromChargeAction;
use App\Domain\Stripe\Actions\GeneratePaymentReceiptForPaymentAction;
use App\Payment;
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

        $token = config('services.telegram.token');
        $chat = config('services.telegram.chat_id');

        collect($charges->getIterator())
            ->filter(function (Charge $charge) {
                return is_null(Payment::where('stripe_id', $charge->id)->first());
            })
            ->each(function (Charge $charge) use ($chat, $token, $createPaymentFromChargeAction, $generatePaymentReceiptForPaymentAction) {
                $payment = $createPaymentFromChargeAction->execute($charge);
                $generatePaymentReceiptForPaymentAction->execute($payment);

                $formattedUSD = number_format($charge->amount / 100, 2);
                $formattedEur = number_format($payment->amount_eur / 100, 2, ',', '.');

                $message = "💸 A new payment of €{$formattedEur} (\${$formattedUSD}) has been received!";

                $reply_markup = json_encode([
                    'inline_keyboard' => [[
                        ['text' => 'View Receipt', 'url' => $charge->receipt_url],
                        ['text' => 'View in Stripe', 'url' => "https://dashboard.stripe.com/payments/{$payment->stripe_id}"],
                        ['text' => 'Open Accountable', 'url' => "https://web.accountable.eu"],
                    ]]
                ]);

                Http::post("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat}&parse_mode=HTML&text={$message}&reply_markup={$reply_markup}");

                $this->getOutput()->progressAdvance();
            });

        $this->getOutput()->progressFinish();
    }
}
