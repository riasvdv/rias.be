<figure class="my-8">
    <div class="flex justify-center mb-2 max-w-4xl mx-auto">
        @foreach ($image as $asset)
            @if ($asset['extension'] !== 'gif')
                @responsive($asset['url'], ['webp' => false, 'loading' => 'lazy', 'alt' => $asset['title']])
            @else
                <picture>
                    <img src="{{ $asset->url() }}" alt="{{ $asset->title() }}">
                </picture>
            @endif
        @endforeach
    </div>
    @if (isset($caption) && $caption->value())
        <figcaption class="block text-base text-gray-600 text-center max-w-sm mx-auto">{{ $caption->value() }}</figcaption>
    @endif
</figure>
