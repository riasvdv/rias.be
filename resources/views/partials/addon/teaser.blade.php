<x-card
    :color="$entry['color']['label'] ?? ''"
    :title="$entry['title']"
    :external="true"
    :href="$entry['link']"
>
    <x-slot:description>
        {!! \Statamic\Statamic::modify($entry['description'])->smartypants() !!}
    </x-slot:description>

    <x-slot:footer>
        <span class="flex items-center group-hover:gap-4 mt-auto">
            <span class="mr-2">More info</span>
            <span class="w-4 h-4 inline-block">{!! \Statamic\Statamic::tag('svg')->params(['src' => '/assets/svg/external-link.svg']) !!}</span>
        </span>
    </x-slot:footer>
</x-card>
