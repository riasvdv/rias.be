<?php

use Illuminate\Cache\CacheServiceProvider;
use Illuminate\Foundation\Application;
use Illuminate\Foundation\Configuration\Exceptions;
use Illuminate\Foundation\Configuration\Middleware;
use Illuminate\Redis\RedisServiceProvider;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(
        web: __DIR__.'/../routes/web.php',
        commands: __DIR__.'/../routes/console.php',
        health: '/up',
    )
    ->withCommands()
    ->withMiddleware(function (Middleware $middleware): void {
        // HTTPS terminates at a proxy (Cloudflare in production, the portal in
        // Amp orbs); trust its X-Forwarded-* headers so generated URLs use https.
        $middleware->trustProxies(at: '*');
    })
    ->withExceptions(function (Exceptions $exceptions): void {
        //
    })->create();

$app->register(RedisServiceProvider::class);
$app->register(CacheServiceProvider::class);

return $app;
