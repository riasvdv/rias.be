<?php

namespace App\Markdown;

use CraftCms\Cms\Markdown\MarkdownOptions;
use League\CommonMark\Environment\Environment;
use League\CommonMark\Extension\CommonMark\CommonMarkCoreExtension;
use League\CommonMark\Extension\InlinesOnly\InlinesOnlyExtension;
use League\CommonMark\MarkdownConverter;
use Phiki\Adapters\CommonMark\PhikiExtension;
use Phiki\Phiki;
use Phiki\Theme\Theme;

class PhikiCommonMarkFlavor
{
    public function __construct(
        private ?Phiki $phiki = null,
    ) {}

    public function __invoke(MarkdownOptions $options): MarkdownConverter
    {
        $environment = new Environment([
            'allow_unsafe_links' => $options->allowUnsafeLinks,
        ]);

        if ($options->inlineOnly) {
            $environment->addExtension(new InlinesOnlyExtension);

            return new MarkdownConverter($environment);
        }

        $environment
            ->addExtension(new CommonMarkCoreExtension)
            ->addExtension(new PhikiExtension(
                Theme::OneLight,
                $this->phiki ?? app(Phiki::class),
                withGutter: true,
            ));

        return new MarkdownConverter($environment);
    }
}
