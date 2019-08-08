<!doctype html>
<html lang="{{ site_locale() }}">
<head>
      @include('partials.head')
</head>

<body id="statamic" :class="{ 'nav-visible': navVisible, 'overflow-hidden': modalOpen }">

      @if (!$outpost->isReadyForProduction())
            <div class="site-warning-stripe {{ $outpost->isTrialMode() ? 'status-trial' : '' }} flexy">
                  <div class="fill">
                        @if ($outpost->hasSuccessfulResponse() && $outpost->isTrialMode())
                              <span class="mr-2">{{ t('trial_mode') }}</span>
                        @endif
                        <span class="{{ $outpost->isTrialMode() ? 'text-grey' : '' }}">
                        @if ($outpost->licensingMessage())
                              {!! $outpost->licensingMessage() !!}
                        @endif
                        </span>
                  </div>
                  <div class="buttons">
                        @if (request()->route()->getName() !== 'licensing')
                              <a href="{{ route('licensing') }}" class="btn btn-small mr-1">{{ t('manage') }}</a>
                        @endif
                        <a href="https://statamic.com/buy" class="btn btn-primary btn-small" target="_blank">{{ t('buy_now')  }}</a>
                  </div>
            </div>
      @endif

      <nav class="nav-mobile">
          <a href="{{ route('cp') }}" class="logo">
              {!! svg('statamic-logo') !!}
          </a>
          <a @click.prevent="toggleNav" class="toggle">
              <span class="icon icon-menu"></span>
          </a>
      </nav>

      <div class="sneak-peek-wrapper">
            <div class="sneak-peek-viewport">
                  <i class="icon icon-circular-graph animation-spin"></i>
                  <div class="sneak-peek-resizer" @mousedown="sneakPeekResizeStart"></div>
                  <div class="sneak-peek-iframe-wrap" id="sneak-peek"></div>
            </div>
      </div>

      @include('partials.shortcuts')
      @include('partials.alerts')
      @include('partials.global-header')

      <div class="application-grid @yield('content-class')">
            @include('partials.nav-main')

            <div class="content">
                  <div class="page-wrapper">
                        <div class="sneak-peek-header flexy">
                              <h1 class="fill">{{ trans('cp.sneak_peeking') }}</h1>
                              <button class="btn btn-primary" @click="stopPreviewing">{{ trans('cp.done') }}</button>
                        </div>
                        @yield('content')
                  </div>
            </div>

            <login-modal
                  v-if="showLoginModal"
                  username="{{ \Statamic\API\User::getCurrent()->username() }}"
                  @closed="showLoginModal = false"
            ></login-modal>

            <vue-toast v-ref:toast></vue-toast>
      </div>

      <script>
            Statamic.translations = {!! $translations !!};
            Statamic.permissions = '{!! $permissions !!}';
            Statamic.version = '{!! STATAMIC_VERSION !!}';

            @if(session()->has('success'))
                Statamic.flash = [{
                    type:    'success',
                    message: '{{ session()->get('success') }}',
                }];
            @endif
      </script>
      @include('partials.scripts')
      @yield('scripts')
</body>
</html>
