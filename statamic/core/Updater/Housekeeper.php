<?php

namespace Statamic\Updater;

use Statamic\API\Cache;
use Statamic\API\Folder;
use Illuminate\Console\Command;
use Statamic\Events\StatamicUpdated;
use Illuminate\Support\Facades\Artisan;

class Housekeeper
{
    /**
     * The update class files
     *
     * @var array
     */
    private $updates = [
        Updates\MigrateAssets::class,
        Updates\MigrateTaxonomies::class,
        Updates\MigrateTaxonomyFields::class,
        Updates\AddViewPermissions::class,
        Updates\MigrateMetaFields::class,
        Updates\MoveTopLevelTaxonomiesIntoFields::class,
    ];

    /**
     * The console, if ran from the CLI.
     *
     * @var Command|NullConsole
     */
    public $console;

    /**
     * Housekeeper constructor.
     */
    public function __construct()
    {
        $this->console = new NullConsole;
    }

    /**
     * Perform the housekeeping.
     *
     * @param $version
     * @param string $previousVersion
     */
    public function clean($version, $previousVersion = '2.0.0')
    {
        foreach ($this->updates as $class) {
            $update = app($class);

            $update->console($this->console);

            if (! $update->shouldUpdate($version, $previousVersion)) {
                continue;
            }

            $this->console->getOutput()->newLine(2);
            $this->console->getOutput()->section('Running update: ' . $class);

            $update->update();
        }

        Folder::delete(temp_path('update-unzipped'));
        Cache::clear();
        Artisan::call('view:clear');

        // Fire an event for devs etc.
        event(new StatamicUpdated($version, $previousVersion));
        event('system.updated'); // @todo deprecated
    }
}
