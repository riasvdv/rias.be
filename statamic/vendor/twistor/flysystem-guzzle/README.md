# Flysystem Guzzle adapter

An HTTP adapter for Flysystem that uses Guzzle.

[![Author](https://img.shields.io/badge/author-@chrisleppanen-blue.svg?style=flat-square)](https://twitter.com/chrisleppanen)
[![Build Status](https://img.shields.io/travis/twistor/flysystem-guzzle/guzzle-6.svg?style=flat-square)](https://travis-ci.org/twistor/flysystem-guzzle)
[![Coverage Status](https://img.shields.io/scrutinizer/coverage/g/twistor/flysystem-guzzle/guzzle-6.svg?style=flat-square)](https://scrutinizer-ci.com/g/twistor/flysystem-guzzle/?branch=guzzle-6)
[![Software License](https://img.shields.io/badge/license-MIT-brightgreen.svg?style=flat-square)](LICENSE)
[![Packagist Version](https://img.shields.io/packagist/v/twistor/flysystem-guzzle.svg?style=flat-square)](https://packagist.org/packages/twistor/flysystem-guzzle)

## Installation

```bash
composer require twistor/flysystem-guzzle
```

## Usage

```php
<?php

use GuzzleHttp\Client;
use Twistor\Flysystem\GuzzleAdapter;

$adapter = new GuzzleAdapter('http://example.com');

// Optionally, you can add a configured client.
$client = new Client();
$adapter = new GuzzleAdapter('http://example.com', $client);
```
