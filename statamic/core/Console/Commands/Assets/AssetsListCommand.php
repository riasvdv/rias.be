<?php

namespace Statamic\Console\Commands\Assets;

use Statamic\API\Asset;
use Illuminate\Console\Command;

class AssetsListCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'assets:list';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'List all assets.';

    /**
     * Execute the console command.
     *
     * @return void
     */
    public function fire()
    {
        $assets = Asset::all()->map(function ($asset) {
            return [$asset->id(), $asset->resolvedPath()];
        });

        $this->table(['ID', 'Path'], $assets->all());
    }
}
