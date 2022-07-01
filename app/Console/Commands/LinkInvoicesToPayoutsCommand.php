<?php

namespace App\Console\Commands;

use App\Domain\Accountable\Api;
use Illuminate\Console\Command;
use Illuminate\Support\Arr;
use Illuminate\Support\Facades\Date;

class LinkInvoicesToPayoutsCommand extends Command
{
    protected $signature = 'accountable:link-invoices';

    protected $description = 'Links invoices without a payment to their payout.';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(Api $accountable)
    {
        // Get all invoices without a payment attached
        $invoices = collect($accountable->getRevenues())
            ->filter(fn ($invoice) => count($invoice['transactions']) === 0);

        $transactions = collect($accountable->getTransactions())
            ->filter(fn ($transaction) => count($transaction['matchedItems']) === 0);

        $linkedInvoices = 0;

        $invoices->each(function (array $invoice) use ($accountable, $transactions, &$linkedInvoices) {
            $possibleTransactions = $transactions->filter(function ($transaction) use ($invoice) {
                return Date::parse($transaction['executionDate'])->between(
                    Date::parse($invoice['invoiceDate']),
                    Date::parse($invoice['invoiceDate'])->addDays(6),
                );
            });

            if (! $possibleTransactions->count()) {
                return;
            }

            foreach ($possibleTransactions as $possibleTransaction) {
                if ((int) $invoice['totalAmountInclVAT'] === (int) ($possibleTransaction['amount'] * 1000)) {
                    $invoice['transactions'] = [$possibleTransaction['_id']];

                    $data = Arr::only($invoice, [
                        'client',
                        'currency',
                        'filePath',
                        'fileType',
                        'invoiceDate',
                        'items',
                        'paymentDate',
                        'paymentType',
                        'period',
                        'revenueNumber',
                        'status',
                        'transactions',
                        'type',
                        'user',
                        '_id',
                    ]);

                    $data['items'] = array_map(function ($item) {
                        return Arr::only($item, [
                            'VATRate',
                            'category',
                            'categoryId',
                            'quantity',
                            'unit',
                            'unitAmountExclVAT',
                            'whyZeroVAT',
                            '_id',
                        ]);
                    }, $data['items']);

                    $data['user'] = ['VATType' => 'franchisee'];

                    $response = $accountable->updateRevenue($invoice['_id'], $data);

                    if (! $response->successful()) {
                        $this->warn('Error with a transaction: ');
                        $this->warn($response->json());
                    }

                    $linkedInvoices++;
                }
            }

            // It's possible that a payout includes more than one transaction, we won't match these.
        });

        $this->info("All done! Successfully linked {$linkedInvoices} invoices.");
    }
}
