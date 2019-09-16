<?php

namespace Statamic\Updater;

use GuzzleHttp\Client;

class Releases
{
    public function all()
    {
        $client = new Client();

        $response = $client->get('https://outpost.statamic.com/v2/changelog');

        return json_decode($response->getBody(), true);
    }

    public function latest()
    {
        $releases = $this->all();

        return $releases[0];
    }
}
