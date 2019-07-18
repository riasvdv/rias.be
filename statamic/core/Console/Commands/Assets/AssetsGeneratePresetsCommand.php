<?php

namespace Statamic\Console\Commands\Assets;

use Statamic\API\Asset;
use Statamic\API\Image;
use Statamic\API\Config;
use Statamic\Imaging\ImageGenerator;
use Statamic\Imaging\PresetGenerator;
use Statamic\Console\Commands\AbstractCommand;

class AssetsGeneratePresetsCommand extends AbstractCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'assets:generate-presets';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Generate asset preset manipulations.';

    /**
     * @var ImageGenerator
     */
    protected $imageGenerator;

    /**
     * @var \Statamic\Assets\AssetCollection
     */
    protected $imageAssets;

    /**
     * Execute the console command.
     *
     * @param ImageGenerator $imageGenerator
     */
    public function fire(ImageGenerator $imageGenerator)
    {
        $this->imageGenerator = $imageGenerator;

        $this->imageAssets = Asset::all()->filter(function ($asset) {
            return $asset->isImage();
        });

        $this->generateUserPresets();

        $this->generateCpThumbnails();
    }

    /**
     * Generate user provided presets
     *
     * @return void
     */
    protected function generateUserPresets()
    {
        $presets = Config::get('assets.image_manipulation_presets', []);

        if (empty($presets)) {
            return $this->crossLine('No user defined presets.');
        }

        $this->generatePresets($presets);
    }

    /**
     * Generate thumbnails required by the control panel
     *
     * @return void
     */
    private function generateCpThumbnails()
    {
        if (CP_ROUTE === false) {
            return;
        }

        $this->generatePresets(Image::getCpImageManipulationPresets());
    }

    /**
     * Generate supplied presets
     *
     * @param array $presets
     * @return void
     */
    private function generatePresets($presets)
    {
        $generator = new PresetGenerator($this->imageGenerator, $presets);

        foreach ($presets as $preset => $params) {
            $bar = $this->output->createProgressBar($this->imageAssets->count());
            $bar->setFormat("[%current%/%max%] Generating <comment>$preset</comment>... %filename%");

            foreach ($this->imageAssets as $asset) {
                $bar->setMessage($asset->basename(), 'filename');
                $generator->generate($asset, $preset);
                $bar->advance();
            }

            $bar->setFormat("<info>[✓] Images generated for <comment>$preset</comment>.</info>");
            $bar->finish();

            $this->output->newLine();
        }
    }
}
