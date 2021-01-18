<?php

namespace App\Domain\Accountable;

use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;

class Api
{
    private string $baseUrl;

    private string $token;

    public function __construct(string $baseUrl)
    {
        $this->baseUrl = $baseUrl;

        $response = Http::post($this->baseUrl . '/users/token', [
            'email' => config('services.accountable.user'),
            'password' => config('services.accountable.pass'),
            'grant_type' => 'password',
        ])->json();

        $this->token = $response['access_token'];
    }

    public function uploadInvoice(string $contents, string $fileName): string
    {
        $fileName = explode('/', Http::withToken($this->token)
            ->attach('file', $contents, $fileName)
            ->post($this->baseUrl . '/users/file')
            ->json())[1];

        return Http::withToken($this->token)
            ->post($this->baseUrl . '/v1/invoices/dropzone-import', [
                'filename' => $fileName,
            ])->json()['_id'];
    }

    public function getInvoices(): array
    {
        return Http::withToken($this->token)
            ->get($this->baseUrl . '/v1/invoices')
            ->json();
    }

    public function getInvoice(string $id): array
    {
        return Http::withToken($this->token)
            ->get($this->baseUrl . '/v1/invoices/' . $id)
            ->json();
    }

    public function updateInvoice(string $id, array $data): Response
    {
        return Http::withToken($this->token)
            ->put($this->baseUrl . '/v1/invoices/' . $id, $data);
    }
}
