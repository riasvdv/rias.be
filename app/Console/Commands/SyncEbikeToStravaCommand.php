<?php

namespace App\Console\Commands;

use App\Domain\Ebike\Api;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SyncEbikeToStravaCommand extends Command
{
    protected $signature = 'sync:ebike';

    protected $description = 'Syncs Bosch eBike Connect data to Strava';

    /**
     * Execute the console command.
     *
     * @return int
     */
    public function handle(Api $api)
    {
        $rideIds = collect($api->getActivityHeaders())
            ->flatMap(function ($activityHeader) {
                return $activityHeader['header_rides_ids'] ?? [];
            });

        $this->getOutput()->progressStart($rideIds->count());

        foreach ($rideIds as $rideId) {
            $this->getOutput()->progressAdvance();

            if (DB::table('synced_rides')->where('ride_id', $rideId)->exists()) {
                continue;
            }

            if ($api->syncRideToStrava($rideId)) {
                DB::table('synced_rides')->insert(['ride_id' => $rideId]);
            }
        }

        $this->getOutput()->progressFinish();
    }
}
