<x-card
    :color="$entry['color']['label'] ?? ''"
    :title="$entry['title']"
    :date="$entry['date']"
    :href="$entry['url']"
>
    <x-slot:description>
        @if($header = collect($entry['contents'])->where('type', 'header')->first())
            <p>{!! \Statamic\Statamic::modify(\Illuminate\Support\Str::limit(\Statamic\Statamic::modify($header['header'])->striptags(), 150))->smartypants() !!}</p>
        @endif
    </x-slot:description>

    <x-slot:footer>
        <span class="flex items-center transition-all group-hover:gap-4 mt-auto">
            <span class="mr-2">Continue reading</span>
            <span class="w-4 h-4 inline-block">{!! \Statamic\Statamic::tag('svg')->params(['src' => '/assets/svg/long-arrow-right.svg']) !!}</span>
        </span>
    </x-slot:footer>
</x-card>
