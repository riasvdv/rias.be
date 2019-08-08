<?php

namespace Statamic\Console;

use Illuminate\Console\Scheduling\Schedule;
use Statamic\Extend\Management\AddonRepository;
use Illuminate\Foundation\Console\Kernel as ConsoleKernel;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
       'Statamic\Console\Commands\ShowCommand',
       'Statamic\Console\Commands\ListCommand',
       'Statamic\Console\Commands\VersionCommand',
       'Statamic\Console\Commands\JokeCommand',
       'Statamic\Console\Commands\GlobetrottersCommand',
       'Statamic\Console\Commands\Assets\AssetsListCommand',
       'Statamic\Console\Commands\Assets\AssetsFindCommand',
       'Statamic\Console\Commands\Assets\AssetsGeneratePresetsCommand',
       'Statamic\Console\Commands\Clear\ClearCacheCommand',
       'Statamic\Console\Commands\Clear\ClearStacheCommand',
       'Statamic\Console\Commands\Clear\ClearGlideCommand',
       'Statamic\Console\Commands\Clear\ClearSiteCommand',
       'Statamic\Console\Commands\Generators\Theme\ThemeMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\AddonMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\ListenerMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\ApiMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\TagsMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\TasksMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\FieldtypeMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\FilterMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\CommandMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\ModifierMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\ProviderMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\ComposerMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\WidgetMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\ControllerMakeCommand',
       'Statamic\Console\Commands\Generators\Addon\SuggestMakeCommand',
       'Statamic\Console\Commands\Generators\UserMakeCommand',
       'Statamic\Console\Commands\Generators\FieldsetMakeCommand',
       'Statamic\Console\Commands\Generators\AssetContainerMakeCommand',
       'Statamic\Console\Commands\Generators\SiteHelpers\TagsMakeCommand',
       'Statamic\Console\Commands\Generators\SiteHelpers\ModifiersMakeCommand',
       'Statamic\Console\Commands\Generators\SiteHelpers\FiltersMakeCommand',
       'Statamic\Console\Commands\Generators\SiteHelpers\ControllerMakeCommand',
       'Statamic\Console\Commands\RefreshAddonsCommand',
       'Statamic\Console\Commands\Config\ConfigSetCommand',
       'Statamic\Console\Commands\Convert\ConvertEmailLoginCommand',
       'Statamic\Console\Commands\SetCommand',
       'Statamic\Console\Commands\Update\UpdateCommand',
       'Statamic\Console\Commands\Update\UpdateAddonsCommand',
       'Statamic\Console\Commands\Update\UpdateStatamicCommand',
       'Statamic\Console\Commands\Update\UpdateHousekeepingCommand',
       'Statamic\Console\Commands\Test\TestCommand',
       'Statamic\Console\Commands\Test\TestSiteCommand',
       'Statamic\Console\Commands\Test\TestAddonsCommand',
       'Statamic\Console\Commands\Test\TestMakeCommand',
       'Statamic\Console\Commands\UserMigrationCommand',
    ];

    /**
     * @var array
     */
    protected $addon_commands = [];

    /**
     * Override the bootstrapper
     */
    public function bootstrap()
    {
        parent::bootstrap();

        $this->registerAddonCommands();
    }

    public function bootstrappers()
    {
        array_splice($this->bootstrappers, 2, 0, [
            'Statamic\Bootstrap\UpdateConfiguration'
        ]);

        return $this->bootstrappers;
    }

    /**
     * Register any commands in addons
     */
    private function registerAddonCommands()
    {
        $commands = $this->getCommands();

        $this->getArtisan()->addCommands($commands);
    }

    /**
     * Gather all the addon's commands from the filesystem
     *
     * @return \Symfony\Component\Console\Command\Command[]
     */
    private function getCommands()
    {
        foreach ($this->repo()->commands()->classes() as $class) {
            $this->addon_commands[] = $this->app->make($class);
        }

        return $this->addon_commands;
    }

    /**
     * Define the application's command schedule.
     *
     * @param  \Illuminate\Console\Scheduling\Schedule  $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        // In each addon's task class, we'll pass along the scheduler
        // instance and let the class define its own schedule.
        foreach ($this->repo()->tasks()->installed()->classes() as $class) {
            app($class)->schedule($schedule);
        }
    }

    private function repo()
    {
        return $this->app->make(AddonRepository::class);
    }
}
