<?php

namespace Statamic\Addons\Warm\Commands;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Statamic\API\Config;
use Statamic\API\Content;
use Statamic\Extend\Command;
use Statamic\Http\Kernel;

class SiteCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'warm:site';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Warms the site cache.';

    /** @var \GuzzleHttp\Client */
    private $client;

    public function __construct(Client $client)
    {
        parent::__construct();

        $this->client = $client;
    }

    public function handle()
    {
        $staticFolder = Config::get('caching.static_caching_file_path');
        File::deleteDirectory(webroot_path("{$staticFolder}"));

        $requests = Content::all()
            ->map(function ($content) {
                if ($content->url()) {
                    return Request::create($content->url(), 'GET');
                }

                return null;
            })->filter()->values()->unique()->toArray();

        /** @var \Statamic\Http\Kernel $kernel */
        $kernel = app()->make(Kernel::class);
        foreach ($requests as $request) {
            $response = $kernel->handle($request);
            if ($response->getStatusCode() !== 200) {
                throw new \Exception($response->getContent());
            }
            $kernel->terminate($request, $response);
        }

        $this->info("Done.");
    }
}
