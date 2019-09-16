<?php

namespace Statamic\Exceptions;

use Exception;
use RuntimeException;
use Statamic\API\Str;
use Statamic\API\File;
use Statamic\API\Path;
use Statamic\API\Config;
use Statamic\API\Request;
use Illuminate\Http\Response;
use Statamic\Routing\ExceptionRoute;
use Illuminate\Session\TokenMismatchException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;

class Handler extends ExceptionHandler
{
    protected $request;

    /**
     * A list of the exception types that should not be reported.
     *
     * @var array
     */
    protected $dontReport = [
        'Symfony\Component\HttpKernel\Exception\HttpException',
        'Statamic\Exceptions\RedirectException',
        'Statamic\Exceptions\UrlNotFoundException',
        TokenMismatchException::class,
    ];

    /**
     * Has the app key exception already been handled?
     * It may be fired more than once in a request.
     *
     * @var bool
     */
    static protected $appKeyExceptionHandled = false;

    /**
     * Report or log an exception.
     *
     * This is a great spot to send exceptions to Sentry, Bugsnag, etc.
     *
     * @param  \Exception  $e
     */
    public function report(Exception $e)
    {
        parent::report($e);
    }

    /**
     * Render an exception into an HTTP response.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \Exception  $e
     * @return Response
     */
    public function render($request, Exception $e)
    {
        $this->request = $request;

        // If there's an encrypter not found exception - Statamic will attempt
        // to generate an app_key in system.yaml.
        if ($this->isEncryptionException($e)) {
            $system = \Statamic\API\YAML::parse(File::get(settings_path('system.yaml')));

            // The app key exists in the yaml. Good to give it another shot!
            if (array_key_exists('app_key', $system)) {
                return redirect($request->url());
            }

            // The app key wasn't there. Bummer. Let's show something more helpful.
            return $this->appKeyResponse();
        }

        if ($e instanceof UnauthorizedHttpException) {
            if (! $request->header('referer')) {
                return $this->renderHttpException($e);
            }

            return back()->withErrors('Access denied.');
        }

        if ($e instanceof TokenMismatchException) {
            return $this->tokenMismatchResponse();
        }

        if ($this->isHttpException($e)) {
            return $this->renderHttpException($e);
        }

        if ($e instanceof RedirectException) {
            return redirect($e->getUrl(), $e->getCode());
        }

        if ($e instanceof UrlNotFoundException) {
            // @todo: dry this up and load key vars

            datastore()->merge([
                'response_code' => 404
            ]);

            $template = Str::removeLeft(Path::assemble(Config::get('theming.error_template_folder'), '404'), '/');

            return response(
                app('Statamic\Http\View')->render(new ExceptionRoute($request->getPathInfo(), []), $template),
                404
            );
        }

        // Change the exception into an HttpException so we can display a custom view, if desired.
        // We'll only do this if debug mode is disabled, since we'll need to see the errors.
        if (! Config::get('debug.debug')) {
            $e = new HttpException(500, $e->getMessage());
        }

        return parent::render($request, $e);
    }

    private function isEncryptionException($e)
    {
        return $e instanceof RuntimeException
               && $e->getMessage() === 'No supported encrypter found. The cipher and / or key length are invalid.';
    }

    private function appKeyResponse()
    {
        $key = str_random(32);

        $response = "
            <style>body{font:normal 16px/2 arial, sans-serif;}code{font:bold 14px/2 consolas,monospace;
            background:#eee;padding:3px 5px;}</style>
            Your app key is missing and unfortunately we weren't able to save one automagically for you.<br />
            Open up <code>site/settings/system.yaml</code> and add this: <code>app_key: $key</code>";

        $response = (self::$appKeyExceptionHandled) ? '' : $response;

        self::$appKeyExceptionHandled = true;

        return response($response, 500);
    }

    /**
     * Render the given HttpException.
     *
     * @param  \Symfony\Component\HttpKernel\Exception\HttpException  $e
     * @return \Symfony\Component\HttpFoundation\Response
     */
    protected function renderHttpException(HttpException $e)
    {
        $status = $e->getStatusCode();

        // If it's *not* a control panel request, we'll attempt to load a template named
        // by it's error code. eg. For a 500 error, we'll load a 500.html template.
        if (! Request::isCp()) {
            $path = Path::assemble('templates', Config::get('theming.error_template_folder'), $status.'.html');
            if (File::disk('theme')->exists($path)) {
                $template = join('.', [Config::get('theming.error_template_folder'), $status]);

                $route = new ExceptionRoute('/'.request()->path(), [
                    'layout' => ['error', Config::get('theming.default_layout')],
                    'response_code' => $status,
                    'exception_message' => $e->getMessage()
                ]);

                return response(app('Statamic\Http\View')->render($route, $template), $status);
            }
        }

        // Then we'll render a corresponding Blade view, or display a standard exception response.
        if (view()->exists("errors.{$status}")) {
            return response()->view("errors.{$status}", ['exception' => $e, 'title' => $status], $status);
        } else {
            return $this->convertExceptionToResponse($e);
        }
    }

    private function tokenMismatchResponse()
    {
        $params = ['expired' => true];

        if ($referer = $this->request->header('referer')) {
            $params['referer'] = parse_url($referer)['path'];
        }

        $redirect = route('login', $params);

        if ($this->request->ajax()) {
            return response([
                'exception' => 'TokenMismatchException',
                'redirect' => $redirect
            ], 401);
        }

        return redirect($redirect);
    }
}
