<?php

namespace App\Domain\Stripe\Actions;

use App\Payment;
use Spatie\Browsershot\Browsershot;
use Spatie\MediaLibrary\MediaCollections\Models\Media;
use Spatie\TemporaryDirectory\TemporaryDirectory;

class GeneratePaymentReceiptForPaymentAction
{
    public function execute(Payment $payment): Media
    {
        $temporaryDirectory = (new TemporaryDirectory)->create();

        $path = $temporaryDirectory->path($payment->created_at->format('Y-m-d-his').'.pdf');

        Browsershot::url($payment->receipt_url)
            ->width(610)
            ->height(850)
            ->showBackground()
            ->noSandbox()
            ->save($path);

        return $payment->addMedia($path)->toMediaCollection();
    }
}
