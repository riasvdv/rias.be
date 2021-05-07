<header class="mb-4 flex items-center justify-between">
    <div class="prose prose {{ $url === '/' ? 'prose-xl md:prose-2xl max-w-3xl' : 'prose-xl mx-auto'}}">{!! $header !!}</div>

    @isset($image)
        <div class="hidden lg:block flex-shrink-0 mx-auto">
            @responsive($image['url'], [
                'class' => 'rounded-full h-72 w-72',
            ])
        </div>
    @endisset
</header>
