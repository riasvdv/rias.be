<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Phiki\CommonMark\PhikiExtension;
use Statamic\Facades\Markdown;

class AppServiceProvider extends ServiceProvider
{
    public function boot()
    {
        // Statamic::script('app', 'cp');
    }

    public function register()
    {
        Markdown::addExtension(function () {
            return new PhikiExtension('one-light');
        });
    }
}
