<?php

namespace App\Providers;

use App\Domain\Accountable\Api;
use App\HighlightExtension;
use Illuminate\Support\ServiceProvider;
use Statamic\Facades\Markdown;
use Stripe\StripeClient;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Statamic::script('app', 'cp');
    }

    public function register()
    {
        $this->app->singleton(StripeClient::class, function () {
            return new StripeClient(config('services.stripe.secret'));
        });

        $this->app->bind(Api::class, function () {
            return new Api('https://app.accountable.eu/api');
        });

        Markdown::addExtension(function () {
            return new HighlightExtension;
        });
    }
}
