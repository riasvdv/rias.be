<figure class="my-8">
    <div class="flex justify-center mb-2 max-w-4xl mx-auto">
        {!! statamic_tag('responsive:art_image', \Statamic\Support\Arr::except($art_image, ['src']), ['art_image' => $art_image['src']]) !!}
    </div>
    @if (isset($caption) && $caption)
        <figcaption class="block text-base text-gray-600 text-center max-w-sm mx-auto">{{ $caption }}</figcaption>
    @endif
</figure>
