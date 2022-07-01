<figure class="my-8">
    <div class="flex justify-center mb-2 max-w-4xl mx-auto">
        {!! Statamic\Statamic::tag('responsive:art_image')->params(\Statamic\Support\Arr::except($art_image->value(), ['src']))->context(['art_image' => $art_image->value()['src']]) !!}
    </div>
    @if (isset($caption) && $caption)
        <figcaption class="block text-base text-gray-600 text-center max-w-sm mx-auto">{{ $caption }}</figcaption>
    @endif
</figure>
