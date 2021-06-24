@extends('layouts.main')

@section('content')
    <div class="max-w-xl mx-auto">
        <div class="text-center mb-6 prose">
            <h1 class="mb-0 leading-tight">{!! modify($title)->widont() !!}</h1>
            @if ($collection['handle'] === 'blog')
                <small class="text-base font-normal">{{ $date }}</small>
            @endif
        </div>
    </div>

    @include('partials.contents')

    @if ($collection['handle'] === 'blog')
        @if ($twitter_url)
            <div class="max-w-2xl mx-auto my-6 p-3 bg-orange-200 flex items-center justify-center">
                You can like or retweet <a class="no-shadow text-black font-bold ml-1" target="_blank" href="{{ $twitter_url }}">this Tweet</a>
            </div>
        @endif
        <div class="max-w-xl mx-auto mt-6">
            <div class="text-center">
                <div data-webmentions="https://www.rias.be{{ $url }}/"></div>

                <template id="webmention-template">
                    <li class="mb-8 last:mb-0 text-left">
                        <div data-header class="mb-1">
                            <a class="no-shadow" data-author>
                                <img data-author-avatar loading="lazy" width="38" height="38" class="inline-block w-8 h-8 rounded-full mr-1 mb-1" />
                                <span data-author-name class="font-bold"></span>
                            </a>
                            <span data-type></span>
                            <a data-date class="no-shadow text-gray-600 text-sm ml-1"></a>
                        </div>
                        <div data-content></div>
                    </li>
                </template>

                <template id="webmention-like-template">
                    <li class="inline-block -mb-4 mt-0 text-left -ml-4">
                        <a class="no-shadow" data-author>
                            <img data-author-avatar loading="lazy" width="38" height="38" class="border-white border-2 inline-block w-8 h-8 rounded-full mr-1 mb-1" />
                            <span data-author-name class="font-bold"></span>
                        </a>
                    </li>
                </template>
            </div>
        </div>

        <script src="https://giscus.app/client.js"
            data-repo="riasvdv/rias.be"
            data-repo-id="MDEwOlJlcG9zaXRvcnkxODMwNzA4MTg="
            data-category="General"
            data-category-id="MDE4OkRpc2N1c3Npb25DYXRlZ29yeTMzMDU0MzYz"
            data-mapping="title"
            data-reactions-enabled="1"
            data-theme="light"
            crossorigin="anonymous"
            async>
        </script>
    @endif
@endsection
