<?php

namespace App\Console\Commands;

use App\Domain\Accountable\Api;
use App\Payment;
use Illuminate\Console\Command;
use Illuminate\Support\Carbon;

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

                $invoiceId = $accountable->uploadInvoice(
                    $contents,
                    $payment->created_at->format('Y-m-d-his') . '.pdf'
                );

                $invoice = $accountable->getInvoice($invoiceId);
                $invoices = $accountable->getInvoices();

                $latestInvoice = collect($invoices)->filter(function ($invoice) {
                    return !is_null($invoice['invoiceNumber']);
                })->sortByDesc(function ($invoice) {
                    return Carbon::create($invoice['invoiceDate']);
                })->first();

                $latestInvoiceNumber = (int) $latestInvoice['invoiceNumber'];

                $data = [
                    'invoice' => [
                        '_id' => $invoice['_id'],
                        'isDraft' => false,
                        'paid' => true,
                        'sent' => true,
                        'invoiceNumber' => $latestInvoiceNumber + 1,
                        'invoiceDate' => $payment->created_at->timestamp * 1000,
                        'dueDate' => $payment->created_at->timestamp * 1000,
                        'period' => [
                            'quarter' => round(ceil($payment->created_at->format('n') / 3)),
                            'year' => (int) $payment->created_at->format('Y'),
                        ],
                        'invoiceTo' => [
                            '_id' => '5e7c6d029af96e0008190927',
                            'name' => 'Statamic Marketplace',
                            'countryCode' => 'US',
                            'zipcode' => null,
                            'city' => null,
                            'street' => null,
                            'isCompany' => true,
                            'clientType' => 'extra-EU',
                            'VAT' => null,
                        ],
                        'items' => [
                            [
                                "qty" => 1,
                                "type" => "service",
                                "name" => "Addon Sale",
                                "vat" => 0,
                                "VATStatus" => "normal",
                                "netPrice" => $payment->amount_eur / 100,
                            ],
                        ],
                        'filename' => $invoice['filename'],
                        'fileType' => 'imported',
                        'transactions' => [],
                        'accountantReview' => [
                            'reviewStatus' => 'not_reviewed',
                            'comments' => null,
                        ],
                        'isCreditNote' => false,
                    ]
                ];

                $response = $accountable->updateInvoice($invoiceId, $data);

                if ($response->successful()) {
                    $payment->update(['sent_to_accountable' => true]);
                }

                $this->getOutput()->progressAdvance();
            });

        $this->getOutput()->progressFinish();
    }
}
