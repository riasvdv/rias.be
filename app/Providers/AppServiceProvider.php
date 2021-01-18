<?php

namespace App\Providers;

use App\Domain\Accountable\Api;
use Illuminate\Support\ServiceProvider;
use Stripe\StripeClient;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
    }

    public function register()
    {
        $this->app->singleton(StripeClient::class, function () {
            return new StripeClient(config('services.stripe.secret'));
        });

        $this->app->bind(Api::class, function () {
            return new Api('https://app.accountable.eu/api');
        });
    }
}
