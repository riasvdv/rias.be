<?php

namespace Statamic\Providers;

use Illuminate\Support\ServiceProvider;
use Statamic\Email\Builder;
use Statamic\Email\Message;
use Statamic\Email\Sender;

class EmailServiceProvider extends ServiceProvider
{
    public function register()
    {
        $this->app->bind('Statamic\Email\Sender', function() {
            return new Sender(app('mailer'));
        });

        $this->app->bind('Statamic\Email\Message', function() {
            return new Message(app('Statamic\Email\Sender'));
        });

        $this->app->bind('Statamic\Email\Builder', function() {
            return new Builder(app('Statamic\Email\Message'));
        });
    }
}
