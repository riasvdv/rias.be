@extends('layouts.main')

@section('content')
    <div class="container mx-auto">
        @include('partials.contents')

        @if (tag('collection:count', ['in' => 'blog']) > 0)
            <section class="my-24">
                <div class="text-center my-8">
                    <h3 class="text-base text-2xl text-gray-400 tracking-widest uppercase mb-4">Blog</h3>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    @foreach (tag('collection:blog', ['limit' => 3]) as $entry)
                        @include('partials.blog.teaser')
                    @endforeach
                </div>

                <div class="mb-4 leading-normal my-8 text-center">
                    <a href="/blog" class="inline-block transition-all bg-teal-100 hover:bg-teal-200 text-gray-700 px-6 py-3 rounded no-underline no-shadow transform hover:-translate-y-1 hover:shadow">
                        Read more
                    </a>
                </div>
            </section>
        @endif

        @if (tag('collection:count', ['in' => 'addons']) > 0)
            <section class="my-24">
                <div class="text-center my-8">
                    <h3 class="text-base text-2xl text-gray-400 tracking-widest uppercase mb-4">Addons / Packages</h3>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    @foreach (tag('collection:addons') as $entry)
                        @include('partials.addon.teaser')
                    @endforeach
                </div>
            </section>
        @endif
    </div>
@endsection
