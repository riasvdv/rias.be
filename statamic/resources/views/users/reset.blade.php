@extends('outside')

@section('title')
    <h1>{{ $title }}</h1>
    <hr>
@endsection

@section('content')

    @if (session()->has('success'))

    @elseif (!$code)

        <div class="alert alert-danger">
            <p>{{ t('reset_code_missing') }}</p>
        </div>

    @elseif (! $valid)

        <div class="alert alert-danger">
            <p>{{ t('reset_code_invalid') }}</p>
        </div>

    @else

        <form method="post">
            {!! csrf_field() !!}
            <input type="hidden" name="redirect" value="{{ request('redirect') }}" />

            <div class="mb-4">
                <label>{{ t('new_password') }}</label>
                <input type="password" class="form-control" name="password" id="password">
            </div>

            <div class="mb-4">
                <label>{{ t('confirm_password') }}</label>
                <input type="password" class="form-control" name="password_confirmation" id="password_confirmation">
            </div>

            <div>
                <button type="submit" class="btn btn-primary btn-block">{{ trans('cp.submit') }}</button>
            </div>

        </form>

    @endif

@endsection
