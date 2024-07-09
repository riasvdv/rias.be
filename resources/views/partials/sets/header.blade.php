<header class="mb-4 flex items-center justify-between">
    <div class="prose prose {{ $url === '/' ? 'prose-xl md:prose-2xl max-w-3xl' : 'prose-xl'}}">{!! $header !!}</div>

    @isset($image)
        <div class="hidden lg:block shrink-0">
            <img class="rounded-full h-72 w-72" src="{{ $image }}" alt="">
        </div>
    @endisset
</header>
