<figure class="my-8">
    <div class="flex justify-center mb-2 max-w-4xl mx-auto">
        @foreach ($image->value()->get() as $asset)
            @if ($asset->extension !== 'gif')
                <img src="{{ $asset->url }}" alt="{{ $asset->title }}" loading="lazy">
            @else
                <picture>
                    <img src="{{ $asset->url }}" alt="{{ $asset->title }}">
                </picture>
            @endif
        @endforeach
    </div>
    @if (isset($caption) && $caption->value())
        <figcaption class="block text-base text-gray-600 text-center max-w-sm mx-auto">{{ $caption }}</figcaption>
    @endif
</figure>
