<?php

namespace Statamic\Console\Commands\Assets;

use Statamic\API\Asset;
use Illuminate\Console\Command;

class AssetsFindCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'assets:find {path : Complete or partial path to the asset}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Find an asset ID by path.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $path = $this->argument('path');

        $assets = Asset::all()->filter(function ($asset) use ($path) {
            return str_contains($asset->resolvedPath(), $path);
        });

        if ($assets->isEmpty()) {
            return $this->error('No asset found with this path.');
        }

        $assets = $assets->map(function ($asset) {
            return [$asset->id(), $asset->path()];
        });

        $this->table(['ID', 'Path'], $assets->all());
    }
}
