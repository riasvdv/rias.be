<?php

namespace Statamic\Updater;

use Exception;
use Statamic\API\Folder;
use Statamic\Extend\Management\AddonManager;

class DependencyUpdater
{
    /**
     * @var AddonManager
     */
    private $addonManager;

    /**
     * @var string
     */
    private $addonsPath;

    public function __construct(AddonManager $addonManager)
    {
        $this->addonManager = $addonManager;
        $this->addonsPath = temp_path('update-unzipped/statamic/site/addons/');
    }

    public function update()
    {
        $this->copyAddons();
        $this->runComposer();
    }

    private function copyAddons()
    {
        try {
            Folder::delete($this->addonsPath);
            Folder::copy(addons_path(), $this->addonsPath);
        } catch (Exception $e) {
            throw new Exception("Couldn't copy addons folder.", 0, $e);
        }
    }

    private function runComposer()
    {
        $this->addonManager->composer()
            ->path(temp_path('update-unzipped/statamic/statamic/composer.json'));

        try {
            $this->addonManager->updateDependencies();
        } catch (Exception $e) {
            throw new Exception("Couldn't install dependencies.", 0, $e);
        }
    }
}
