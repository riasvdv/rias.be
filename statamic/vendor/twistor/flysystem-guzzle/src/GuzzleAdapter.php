<?php

namespace Twistor\Flysystem;

use GuzzleHttp\Client;
use GuzzleHttp\ClientInterface;
use GuzzleHttp\Exception\BadResponseException;
use GuzzleHttp\Exception\ClientException;
use League\Flysystem\AdapterInterface;
use League\Flysystem\Config;
use League\Flysystem\Util\MimeType;

/**
 * Uses Guzzle as a backend for HTTP URLs.
 */
class GuzzleAdapter implements AdapterInterface
{
    /**
     * Whether this endpoint supports head requests.
     *
     * @var bool
     */
    protected $supportsHead = true;

    /**
     * The base URL.
     *
     * @var string
     */
    protected $base;

    /**
     * The Guzzle HTTP client.
     *
     * @var \GuzzleHttp\ClientInterface
     */
    protected $client;

    /**
     * The visibility of this adapter.
     *
     * @var string
     */
    protected $visibility = AdapterInterface::VISIBILITY_PUBLIC;

    /**
     * Constructs a GuzzleAdapter object.
     *
     * @param string                      $base         The base URL.
     * @param \GuzzleHttp\ClientInterface $client       An optional Guzzle client.
     * @param bool                        $supportsHead Whether the client supports HEAD requests.
     */
    public function __construct($base, ClientInterface $client = null, $supportsHead = true)
    {
        $this->client = $client ?: new Client();
        $this->supportsHead = $supportsHead;

        $parsed = parse_url($base);
        $this->base = $parsed['scheme'] . '://';

        if (isset($parsed['user'])) {
            $this->visibility = AdapterInterface::VISIBILITY_PRIVATE;
            $this->base .= $parsed['user'];

            if (isset($parsed['pass']) && $parsed['pass'] !== '') {
                $this->base .= ':' . $parsed['pass'];
            }

            $this->base .= '@';
        };

        $this->base .= $parsed['host'] . '/';

        if (isset($parsed['path']) && $parsed['path'] !== '/') {
            $this->base .= trim($parsed['path'], '/') . '/';
        }
    }

    /**
     * Returns the base URL.
     *
     * @return string The base URL.
     */
    public function getBaseUrl()
    {
        return $this->base;
    }

    /**
     * @inheritdoc
     */
    public function copy($path, $newpath)
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function createDir($path, Config $config)
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function delete($path)
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function deleteDir($path)
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function getMetadata($path)
    {
        if (! $response = $this->head($path)) {
            return false;
        }

        if ($mimetype = $response->getHeader('Content-Type')) {
            list($mimetype) = explode(';', reset($mimetype), 2);
            $mimetype = trim($mimetype);
        } else {
            // Remove any query strings or fragments.
            list($path) = explode('#', $path, 2);
            list($path) = explode('?', $path, 2);
            $extension = pathinfo($path, PATHINFO_EXTENSION);
            $mimetype = $extension ? MimeType::detectByFileExtension($extension) : 'text/plain';
        }

        $last_modified = $response->getHeader('Last-Modified');
        $length = $response->getHeader('Content-Length');

        return [
            'type' => 'file',
            'path' => $path,
            'timestamp' => (int) strtotime(reset($last_modified)),
            'size' => (int) reset($length),
            'visibility' => $this->visibility,
            'mimetype' => $mimetype,
        ];
    }

    /**
     * @inheritdoc
     */
    public function getMimetype($path)
    {
        return $this->getMetadata($path);
    }

    /**
     * @inheritdoc
     */
    public function getSize($path)
    {
        return $this->getMetadata($path);
    }

    /**
     * @inheritdoc
     */
    public function getTimestamp($path)
    {
        return $this->getMetadata($path);
    }

    /**
     * @inheritdoc
     */
    public function getVisibility($path)
    {
        return [
            'path' => $path,
            'visibility' => $this->visibility,
        ];
    }

    /**
     * @inheritdoc
     */
    public function has($path)
    {
        return (bool) $this->head($path);
    }

    /**
     * @inheritdoc
     */
    public function listContents($directory = '', $recursive = false)
    {
        return [];
    }

    /**
     * @inheritdoc
     */
    public function read($path)
    {
        if (! $response = $this->get($path)) {
            return false;
        }

        return [
            'path' => $path,
            'contents' => (string) $response->getBody(),
        ];
    }

    /**
     * @inheritdoc
     */
    public function readStream($path)
    {
        if (! $response = $this->get($path)) {
            return false;
        }

        return [
            'path' => $path,
            'stream' => $response->getBody()->detach(),
        ];
    }

    /**
     * @inheritdoc
     */
    public function rename($path, $newpath)
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function setVisibility($path, $visibility)
    {
        if ($visibility === $this->visibility) {
            return $this->getVisibility($path);
        }

        return false;
    }

    /**
     * @inheritdoc
     */
    public function update($path, $contents, Config $conf)
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function updateStream($path, $resource, Config $config)
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function write($path, $contents, Config $config)
    {
        return false;
    }

    /**
     * @inheritdoc
     */
    public function writeStream($path, $resource, Config $config)
    {
        return false;
    }

    /**
     * Performs a GET request.
     *
     * @param string $path The path to GET.
     *
     * @return \GuzzleHttp\Psr7\Response|false The response or false if failed.
     */
    protected function get($path)
    {
        try {
            $response = $this->client->get($this->base . $path);
        } catch (BadResponseException $e) {
            return false;
        }

        if ($response->getStatusCode() !== 200) {
            return false;
        }

        return $response;
    }

    /**
     * Performs a HEAD request.
     *
     * @param string $path The path to HEAD.
     *
     * @return \GuzzleHttp\Psr7\Response|false The response or false if failed.
     */
    protected function head($path)
    {
        if (! $this->supportsHead) {
            return $this->get($path);
        }

        try {
            $response = $this->client->head($this->base . $path);
        } catch (ClientException $e) {
            if ($e->getResponse()->getStatusCode() === 405) {
                $this->supportsHead = false;

                return $this->get($path);
            }

            return false;
        } catch (BadResponseException $e) {
            return false;
        }

        if ($response->getStatusCode() !== 200) {
            return false;
        }

        return $response;
    }
}
