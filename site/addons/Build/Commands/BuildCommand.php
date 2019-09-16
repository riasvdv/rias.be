<?php

namespace Statamic\Addons\Build\Commands;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\File;
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

    /** @var \Statamic\Http\Kernel */
    private $kernel;

    public function __construct(Kernel $kernel)
    {
        parent::__construct();

        Config::set('caching.static_caching_file_path', '/public');
        Config::set('caching.static_caching_enabled', true);
        $this->kernel = $kernel;
    }

    public function handle()
    {
        $this->cacheContent();
        $this->renameFilesForNetlify();
        $this->saveSitemap();
        $this->saveFeed();

        $this->info("Done.");
    }

    private function getContentRequests(): array
    {
        return Content::all()
            ->map(function ($content) {
                if ($content->url()) {
                    return Request::create($content->url(), 'GET');
                }

                return null;
            })
            ->filter()
            ->values()
            ->unique()
            ->toArray();
    }

    private function cacheContent()
    {
        $requests = $this->getContentRequests();

        $this->info("Caching pages...");

        $this->getOutput()->progressStart(count($requests));

        foreach ($requests as $request) {
            $response = $this->kernel->handle($request);
            $this->kernel->terminate($request, $response);
            $this->getOutput()->progressAdvance();
        }

        $this->getOutput()->progressFinish();
    }

    private function renameFilesForNetlify()
    {
        $this->info("Renaming files");

        /** @var \SplFileInfo[] $files */
        $files = File::allFiles(webroot_path('/public'));
        $files = array_filter($files, function (\SplFileInfo $file) {
            return $file->getExtension() === 'html';
        });

        foreach ($files as $file) {
            $filename = $file->getFilename() === '_.html'
                ? str_replace('_.html', 'index.html', $file->getRealPath())
                : str_replace('_.html', '.html', $file->getRealPath());

            File::move($file->getRealPath(), $filename);
        }
    }

    private function saveSitemap()
    {
        $this->info("Saving Sitemap");

        $response = $this->kernel->handle(Request::create('/sitemap.xml'));
        File::put(webroot_path('/public/sitemap.xml'), str_replace('http://localhost', 'https://rias.be', $response->getContent()));
    }

    private function saveFeed()
    {
        $this->info("Saving RSS Feed");

        $response = $this->kernel->handle(Request::create('/feed'));
        File::put(webroot_path('/public/feed.html'), str_replace('http://localhost', 'https://rias.be', $response->getContent()));
    }
}
