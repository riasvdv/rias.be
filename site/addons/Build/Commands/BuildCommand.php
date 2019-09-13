<?php

namespace Statamic\Addons\Build\Commands;

use GuzzleHttp\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
use Illuminate\Support\Facades\Storage;
use Statamic\API\Config;
use Statamic\API\Content;
use Statamic\Extend\Command;
use Statamic\Http\Kernel;

class BuildCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'build';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Builds the site.';

    /** @var \GuzzleHttp\Client */
    private $client;

    public function __construct(Client $client)
    {
        parent::__construct();

        $this->client = $client;
    }

    public function handle()
    {
        Config::set('caching.static_caching_file_path', '/public');
        Config::set('caching.static_caching_enabled', true);

        $requests = Content::all()
            ->map(function ($content) {
                if ($content->url()) {
                    return Request::create($content->url(), 'GET');
                }

                return null;
            })->filter()->values()->unique()->toArray();

        /** @var \Statamic\Http\Kernel $kernel */
        $kernel = app()->make(Kernel::class);

        $this->info("Caching pages...");
        $this->getOutput()->progressStart(count($requests));
        foreach ($requests as $request) {
            $response = $kernel->handle($request);
            if ($response->getStatusCode() !== 200) {
                throw new \Exception($response->getContent());
            }
            $kernel->terminate($request, $response);
            $this->getOutput()->progressAdvance();
        }
        $this->getOutput()->progressFinish();

        $this->info("Renaming files");

        /** @var \SplFileInfo[] $files */
        $files = File::allFiles(webroot_path('/public'));
        $files = array_filter($files, function (\SplFileInfo $file) {
            return $file->getExtension() === 'html';
        });

        foreach ($files as $file) {
            if ($file->getFilename() === '_.html') {
                File::move($file->getRealPath(), str_replace('_.html', 'index.html', $file->getRealPath()));
                continue;
            }
            File::move($file->getRealPath(), str_replace('_.html', '.html', $file->getRealPath()));
        }

        $this->info("Done.");
    }
}
