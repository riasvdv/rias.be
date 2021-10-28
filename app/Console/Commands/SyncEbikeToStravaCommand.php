<?php

namespace App\Console\Commands;

use App\Domain\Ebike\Api;
use Illuminate\Console\Command;
use Illuminate\Support\Facades\DB;

class SyncEbikeToStravaCommand extends Command
{
    protected $signature = 'sync:ebike';

    protected $description = 'Syncs Bosch eBike Connect data to Strava';

    public function handle(Api $api)
    {
        $latest = DB::table('synced_rides')->latest('id')->first();

        $activityResponse = $api->getActivityHeaders($latest?->ride_id);

        if (! $activityResponse->successful()) {
            $this->getOutput()->error($activityResponse->body());
            return;
        }

        $rideIds = collect($activityResponse->json())
            ->flatMap(function ($activityHeader) {
                return $activityHeader['header_rides_ids'] ?? [];
            });

        $this->getOutput()->progressStart($rideIds->count());

        foreach ($rideIds as $rideId) {
            $this->getOutput()->progressAdvance();

            if (DB::table('synced_rides')->where('ride_id', $rideId)->exists()) {
                continue;
            }

            $response = $api->syncRideToStrava($rideId);
            $json = $response->json();

            if ($response->successful()) {
                DB::table('synced_rides')->insert(['ride_id' => $rideId]);
            } elseif ($json['errors'][0]['code'] ?? null === 9) {
                $this->getOutput()->error($json['errors'][0]['message']);

                DB::table('synced_rides')->insert(['ride_id' => $rideId]);
            }
        }

        $this->getOutput()->progressFinish();
    }
}
