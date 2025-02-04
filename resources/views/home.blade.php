@extends('layouts.main')

@section('content')
    <div class="container mx-auto">
        @include('partials.contents')

        @if (\Statamic\Statamic::tag('collection:count')->params(['in' => 'blog'])->fetch() > 0)
            <section class="my-24">
                <div class="text-center my-8">
                    <h3 class="text-base text-2xl text-gray-500 tracking-widest uppercase mb-4">Blog</h3>
                </div>
                <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                    @foreach (\Statamic\Statamic::tag('collection:blog')->params(['limit' => 6]) as $entry)
                        @include('partials.blog.teaser')
                    @endforeach
                </div>

                <div class="mb-4 leading-normal my-8 text-center">
                    <a href="/blog" class="inline-block transition-all bg-teal-100 hover:bg-teal-200 text-gray-700 px-6 py-3 rounded-sm no-underline no-shadow hover:-translate-y-1 hover:shadow-sm">
                        More blogposts
                    </a>
                </div>
            </section>
        @endif
    </div>
@endsection
