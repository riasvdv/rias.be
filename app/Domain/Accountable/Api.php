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

        $response = Http::post($this->baseUrl.'/v2/users/login', [
            'email' => config('services.accountable.user'),
            'password' => config('services.accountable.pass'),
            'clientId' => config('services.accountable.clientId'),
        ])->json();

        $this->token = $response['access_token'];
    }

    public function getNextRevenueNumber(string $type): string
    {
        return Http::withToken($this->token)
            ->get($this->baseUrl."/v2/revenues/next-number?type={$type}")
            ->json('nextRevenueNumber');
    }

    public function uploadFile(string $contents, string $fileName): string
    {
        // First get the upload url
        $response = Http::withToken($this->token)
            ->post($this->baseUrl.'/v2/users/upload-url?category=document&contentType=application%2fpdf&n=1')
            ->json('url');

        $url = $response['url'];
        $fields = $response['fields'];

        // Upload the file
        Http::withToken($this->token)
            ->attach('file', $contents, $fileName)
            ->post($url, $fields)
            ->json('s3FilePath');

        // Get the url
        return Http::withToken($this->token)
            ->get($this->baseUrl."/v2/users/file-url?filePath=" . $fields['key'])
            ->json('url');
    }

    public function createRevenue(array $data): Response
    {
        return Http::withToken($this->token)
            ->post($this->baseUrl.'/v2/revenues', $data);
    }

    public function updateRevenue(string $id, array $data): Response
    {
        return Http::withToken($this->token)
            ->put($this->baseUrl.'/v2/revenues/'.$id, $data);
    }

    public function getRevenues(): array
    {
        return Http::withToken($this->token)
            ->get($this->baseUrl.'/v2/revenues?page=1&perPage=10000')
            ->json()['data'] ?? [];
    }

    public function getTransactions(): array
    {
        return Http::withToken($this->token)
                ->get($this->baseUrl.'/v1/transactions')
                ->json()['data'] ?? [];
    }
}
