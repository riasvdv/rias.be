<figure class="my-8">
    <div class="flex justify-center mb-2 max-w-4xl mx-auto">
        {!! tag('responsive:art_image', [], ['art_image' => $art_image]) !!}
    </div>
    @if (isset($caption) && $caption->value())
        <figcaption class="block text-base text-gray-600 text-center max-w-sm mx-auto">{{ $caption->value() }}</figcaption>
    @endif
</figure>
