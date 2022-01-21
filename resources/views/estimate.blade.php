<!doctype html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>{{ $title }}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        rias: 'rgb(77,192,181)',
                    }
                }
            }
        }
    </script>
    <style>
        body {
            width: 210mm;
            min-height: 297mm;
        }

        @page {
            size: A4;
            margin: 0;
        }
    </style>
</head>
<body class="leading-normal">
    <div class="bg-rias text-white flex justify-between p-8">
        <div>
            <div class="mb-3">
                <p>Van:</p>
                <p class="font-bold">RIAS.BE</p>
            </div>
            <address class="not-italic mb-3">
                Parijse Weg 33<br>
                2940 Stabroek<br>
                België
            </address>
            <div class="mb-3">
                <p>BE80 0637 0802 6677</p>
                <p>GKCC BE BB</p>
            </div>
            <div class="mb-3">
                <p>Btw: BE 0598.843.356</p>
            </div>
        </div>
        <div class="text-right">
            <div class="mb-3">
                <p>Aan:</p>
                <p class="font-bold">{{ $client_name }}</p>
            </div>
            <address class="mb-3 not-italic">
                {{ $client_street }} {{ $client_number }}<br>
                {{ $client_postcode }} {{ $client_city }}<br>
                {{ $client_country }}
            </address>
            @if ((string) $client_vat)
                <div class="mb-3">
                    <p>Btw: {{ $client_vat }}</p>
                </div>
            @endif
        </div>
    </div>
    <div class="p-8 flex justify-between">
        <h1 class="text-rias uppercase text-4xl font-medium">Offerte</h1>
        <div class="text-right uppercase text-sm">
            <p class="font-bold mb-1">Offerte 202201</p>
            <p>Aangemaakt: {{ $date->format('d/m/Y') }}</p>
            <p>Vervaldatum: {{ $date->addDays(2)->format('d/m/Y') }}</p>
        </div>
    </div>
    <div class="flex flex-col p-8">
        <table class="w-full">
            <thead>
                <tr>
                    <th class="px-2 py-3 font-medium text-left"></th>
                    <th class="px-2 py-3 font-medium text-left">Eenheidsprijs</th>
                    <th class="px-2 py-3 font-medium text-right">Aantal</th>
                    <th class="px-2 py-3 font-medium text-left">Btw</th>
                    <th class="px-2 py-3 font-medium text-right">Totaal</th>
                </tr>
            </thead>
            <tbody>
                @php($runningTotal = 0)
                @foreach($items as $item)
                    <tr>
                        <td class="px-2 py-3 border-b-2 border-t-2 border-slate-200 ">{!! $item['item_description'] !!}</td>
                        <td class="px-2 py-3 border-b-2 border-t-2 border-slate-200 w-32">€ {{ number_format($item['item_price']?->value(), 2, ',', '.') }}</td>
                        <td class="px-2 py-3 border-b-2 border-t-2 border-slate-200 w-24 text-right">{{ $item['item_quantity'] }}</td>
                        <td class="px-2 py-3 border-b-2 border-t-2 border-slate-200 w-32">€ 0,00 (0%)</td>
                        <td class="px-2 py-3 border-b-2 border-t-2 border-slate-200 w-24 text-right">€ {{ number_format($item['item_price']?->value() * $item['item_quantity']?->value(), 2, ',', '.') }}</td>
                    </tr>
                    @php($runningTotal += $item['item_price']?->value() * $item['item_quantity']?->value())
                @endforeach
            </tbody>
        </table>
        <div class="mt-4 ml-auto flex">
            <p class="mr-24">Subtotaal excl. btw</p>
            <p class="pr-2">€ {{ number_format($runningTotal, 2, ',', '.') }}</p>
        </div>
        <div class="mt-4 ml-auto flex">
            <p class="mr-24">Totaalbedrag</p>
            <p class="bg-rias px-2 py-1 text-white font-bold rounded">€ {{ number_format($runningTotal, 2, ',', '.') }}</p>
        </div>
    </div>
    <div class="pt-8 px-8">
        {!! nl2br($remarks) !!}
    </div>
</body>
</html>
