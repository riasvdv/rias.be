@extends('layouts.main')

@section('content')
    <div class="prose prose-xl mx-auto">
        @include('partials.contents')

        @if (collect('blog')->count() > 0)
            <section class="mt-12">
                <h3 class="text-base tracking-widest font-bold uppercase mb-4">Blog</h3>
                @foreach (tag('collection:blog', ['limit' => 3]) as $entry)
                    @include('partials.blog.snippet')
                @endforeach

                <p class="mb-4 leading-normal">
                    <a href="/blog" class="no-shadow text-grey-darker no-underline shadow-teal-lighter hover:shadow-teal-lighter mb-4">
                        Read more
                    </a>
                </p>
            </section>
        @endif
    </div>
@endsection
