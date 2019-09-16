@extends('layout')

@section('content')

    <div class="flexy mb-3">
        <h1 class="fill">{{ translate('cp.nav_updater') }}</h1>
        @if (version_compare($latest->tag_name, STATAMIC_VERSION, '>'))
            <a href="{{ route('updater.confirm', $latest->tag_name) }}" class="btn btn-primary">{{ translate('cp.upgrade_to_latest') }}</a>
        @else
            <a class="btn btn-primary" disabled href="">{{ translate('cp.up_to_date') }}</a>
        @endif
    </div>

    @foreach ($releases as $release)
        <div class="card tight update-release z-depth-1 mb-64">
            <div class="card-heading clearfix">
                @if (version_compare($release->tag_name, STATAMIC_VERSION, '>'))
                    <a class="btn pull-right" href="{{ route('updater.confirm', $release->tag_name) }}">{{ trans('cp.upgrade_to_version', ['version' => $release->tag_name]) }}</a>
                @elseif ($release->tag_name === STATAMIC_VERSION)
                    <a href="" class="btn disabled pull-right">{{ trans('cp.current_version') }}</a>
                @elseif ($release->tag_name < STATAMIC_VERSION)
                    <a class="btn pull-right" href="{{ route('updater.confirm', $release->tag_name) }}">{{ trans('cp.downgrade_to_version', ['version' => $release->tag_name]) }}</a>
                @endif

                <h1>{{ $release->tag_name }}</h1>
                <h5 class="date">{{ trans('cp.released_on_date', ['date' => Carbon::parse($release->created_at)->formatLocalized('%B %d, %Y')]) }}</h5>
            </div>
            <div class="card-body" v-pre>
                {!! format_update($release->body) !!}
            </div>

        </div>
       @endforeach
@endsection
