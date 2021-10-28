<?php

namespace App\Domain\Ebike;

use GuzzleHttp\Promise\PromiseInterface;
use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;

class Api
{
    public function getActivityHeaders(string $latest = '1635405048712')
    {
        return Http::withCookies([
            'REMEMBER' => config('services.ebike.remember'),
            'JSESSIONID' => config('services.ebike.session_id'),
        ], 'www.ebike-connect.com')
            ->withHeaders([
                'Protect-from' => 'CSRF',
                'Referer' => 'https://www.ebike-connect.com/activities',
                'Sec-Fetch-Dest' => 'empty',
                'Sec-Fetch-Mode' => 'cors',
                'Sec-Fetch-Site' => 'same-origin',
                'Sec-GPC' => '1',
            ])
            ->get("https://www.ebike-connect.com/ebikeconnect/api/portal/activities/trip/headers?max=20&offset={$latest}")
            ->json() ?? [];
    }

    public function syncRideToStrava(string $rideId): PromiseInterface|Response
    {
        return Http::withCookies([
                'REMEMBER' => config('services.ebike.remember'),
                'JSESSIONID' => config('services.ebike.session_id'),
            ], 'www.ebike-connect.com')
                ->withHeaders([
                    'Protect-from' => 'CSRF',
                    'Referer' => 'https://www.ebike-connect.com/activities',
                    'Sec-Fetch-Dest' => 'empty',
                    'Sec-Fetch-Mode' => 'cors',
                    'Sec-Fetch-Site' => 'same-origin',
                    'Sec-GPC' => '1',
                ])
                ->post("https://www.ebike-connect.com/ebikeconnect/api/portal/strava/upload/ride/{$rideId}?timezone=120");
    }
}
