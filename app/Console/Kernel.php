<?php

namespace App\Console;

use App\Console\Commands\LinkInvoicesToPayoutsCommand;
use App\Console\Commands\SyncEbikeToStravaCommand;
use App\Console\Commands\SyncPaymentsToAccountableCommand;
use App\Console\Commands\SyncStripePaymentsCommand;
use Illuminate\Console\Scheduling\Schedule;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    protected function schedule(Schedule $schedule)
    {
        $schedule->command(SyncStripePaymentsCommand::class)->hourly();
        $schedule->command(SyncPaymentsToAccountableCommand::class)->hourly();
        $schedule->command(LinkInvoicesToPayoutsCommand::class)->hourly();
        $schedule->command(SyncEbikeToStravaCommand::class)->hourly();
    }

    protected function commands()
    {
        $this->load(__DIR__.'/Commands');

        require base_path('routes/console.php');
    }
}
