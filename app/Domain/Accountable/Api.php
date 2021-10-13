<?php

namespace App\Domain\Accountable;

use Illuminate\Http\Client\Response;
use Illuminate\Support\Facades\Http;

class Api
{
    public const REVENUE_OTHER = 'other-revenue';
    public const REVENUE_INVOICE = 'invoice';

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

    public function getNextRevenueNumber(string $type): string
    {
        return Http::withToken($this->token)
            ->get($this->baseUrl . "/v2/revenues/next-number?type={$type}")
            ->json('nextRevenueNumber');
    }

    public function uploadFile(string $contents, string $fileName): string
    {
        return Http::withToken($this->token)
            ->attach('file', $contents, $fileName)
            ->post($this->baseUrl . '/users/file?s3=true')
            ->json('s3FilePath');
    }

    public function createRevenue(array $data): Response
    {
        return Http::withToken($this->token)
            ->post($this->baseUrl . '/v2/revenues', $data);
    }

    public function updateRevenue(string $id, array $data): Response
    {
        return Http::withToken($this->token)
            ->put($this->baseUrl . '/v2/revenues/' . $id, $data);
    }

    public function getRevenues(): array
    {
        return Http::withToken($this->token)
            ->get($this->baseUrl . '/v2/revenues?page=1&perPage=10000')
            ->json()['data'] ?? [];
    }

    public function getTransactions(): array
    {
        return Http::withToken($this->token)
                ->get($this->baseUrl . '/v1/transactions')
                ->json()['data'] ?? [];
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
