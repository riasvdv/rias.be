<?php

namespace App\Providers;

use App\Domain\Accountable\Api;
use Illuminate\Support\ServiceProvider;
use Spatie\CpuLoadHealthCheck\CpuLoadCheck;
use Spatie\Health\Checks\Checks\DatabaseCheck;
use Spatie\Health\Checks\Checks\DebugModeCheck;
use Spatie\Health\Checks\Checks\EnvironmentCheck;
use Spatie\Health\Checks\Checks\RedisCheck;
use Spatie\Health\Checks\Checks\UsedDiskSpaceCheck;
use Spatie\Health\Facades\Health;
use Stripe\StripeClient;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        //Statamic::script('app', 'cp');

        Health::checks([
            CpuLoadCheck::new()->failWhenLoadIsHigherInTheLast15Minutes(4.0),
            DebugModeCheck::new(),
            EnvironmentCheck::new(),
            DatabaseCheck::new(),
            RedisCheck::new(),
            UsedDiskSpaceCheck::new()
                ->warnWhenUsedSpaceIsAbovePercentage(90)
                ->failWhenUsedSpaceIsAbovePercentage(95),
        ]);
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
