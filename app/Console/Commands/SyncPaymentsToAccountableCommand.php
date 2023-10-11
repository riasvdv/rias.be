<?php

namespace App\Console\Commands;

use App\Domain\Accountable\Api;
use App\Domain\Stripe\Enums\PaymentType;
use App\Payment;
use Illuminate\Console\Command;

class SyncPaymentsToAccountableCommand extends Command
{
    protected $signature = 'accountable:sync';

    protected $description = 'Command description';

    public function handle(Api $accountable)
    {
        $this->getOutput()->progressStart(
            Payment::query()
                ->whereHas('media')
                ->where('sent_to_accountable', false)
                ->count()
        );

        Payment::query()
            ->whereHas('media')
            ->where('sent_to_accountable', false)
            ->orderBy('created_at')
            ->cursor()
            ->each(function (Payment $payment) use ($accountable) {
                $contents = file_get_contents($payment->getFirstMediaPath());

                $filePath = $accountable->uploadFile($contents, $payment->created_at->format('Y-m-d-his').'.pdf');
                $nextRevenueNumber = $accountable->getNextRevenueNumber(Api::REVENUE_OTHER);

                $client = ['location' => 'local'];
                if ($payment->type === PaymentType::STATAMIC) {
                    $client['name'] = 'Statamic Marketplace';
                    $client['location'] = 'extra-eu';
                    $client['type'] = 'business';
                    $client['address'] = [
                        'street' => '260 Williamson Blvd',
                        'city' => 'Ormond Beach',
                        'zip' => 'FL 32174',
                        'country' => 'us',
                    ];
                }

                $response = $accountable->createRevenue([
                    'client' => $client,
                    'currency' => 'USD',
                    'filePath' => $filePath, // TODO: Filepath
                    'fileType' => 'imported',
                    'invoiceDate' => $payment->created_at->format('Y-m-d'),
                    'items' => [
                        [
                            'category' => [
                                'accountingCode' => 700000,
                                'admitsVAT' => true,
                                'icon' => 'goods',
                                'id' => 'be.revenue.sales_goods',
                                'revenueType' => [
                                    'invoice',
                                    'credit-note',
                                    'other-revenue',
                                ],
                                'separatelyTaxable' => false,
                                'type' => 'good',
                            ],
                            'categoryId' => 'be.revenue.sales_goods',
                            'quantity' => 1000, // 1?
                            'unit' => 'items',
                            'unitAmountExclVAT' => $payment->amount_usd * 10,
                            'totalAmountExclVAT' => $payment->amount_usd * 10,
                            'totalVATAmount' => 0,
                            'totalAmountInclVAT' => $payment->amount_usd * 10,
                            'baseCurrencyTotalAmountExclVAT' => $payment->amount_eur * 10,
                            'baseCurrencyTotalVATAmount' => 0,
                            'baseCurrencyUnitAmountExclVAT' => $payment->amount_eur * 10,
                            'baseCurrencyTotalAmountInclVAT' => $payment->amount_eur * 10,
                            'VATRate' => 0,
                            'whyZeroVAT' => 'user-franchisee',
                            'name' => $payment->type === PaymentType::STATAMIC
                                ? 'Addon sale'
                                : 'Plaatskaartjes premium',
                        ],
                    ],
                    'paymentDate' => $payment->created_at->format('Y-m-d'),
                    'period' => [
                        'quarter' => round(ceil($payment->created_at->format('n') / 3)),
                        'year' => (int) $payment->created_at->format('Y'),
                    ],
                    'revenueNumber' => $nextRevenueNumber,
                    'status' => 'paid',
                    'transactions' => [],
                    'type' => 'invoice',
                    'user' => [
                        'VATType' => 'franchisee',
                    ],
                ]);

                if ($response->successful()) {
                    $payment->update(['sent_to_accountable' => true]);
                } else {
                    $this->getOutput()->error($response->reason());
                }

                $this->getOutput()->progressAdvance();
            });

        $this->getOutput()->progressFinish();
    }
}
