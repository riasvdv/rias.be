@extends('layouts.main')

@section('content')
<div class="container mx-auto">
    <div class="max-w-2xl mx-auto">
        @foreach (tag('collection:blog') as $entry)
            @include('partials.blog.teaser')
        @endforeach
    </div>
</div>
@endsection
