@extends('layouts.main')

@section('content')
<div class="container mx-auto">
    <div class="grid grid-cols-3 gap-8">
        @foreach (tag('collection:blog') as $entry)
            @include('partials.blog.teaser')
        @endforeach
    </div>
</div>
@endsection
