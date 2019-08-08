@extends('layout')

@section('content')

    <user-listing inline-template v-cloak>
        <div>
            <div class="flex items-center mb-3">
                <h1 class="flex-1">{{ t('manage_users') }}</h1>
                <div class="controls flex items-center">
                    <search :keyword.sync="searchTerm" class="w-full lg_w-auto"></search>
                    @can('users:create')
                        <a href="{{ route('user.create') }}" class="ml-1 btn btn-primary">{{ translate('cp.create_user_button') }}</a>
                    @endcan
                </div>
            </div>
            <div class="card flush dossier-for-mobile">
                <div class="loading" v-if="loading">
                    <span class="icon icon-circular-graph animation-spin"></span> {{ translate('cp.loading') }}
                </div>
                <dossier-table v-if="hasItems" :items="items" :keyword.sync="keyword" :is-searching="isSearching" :options="tableOptions"></dossier-table>
                <template v-if="noItems">
                    <div class="info-block">
                        <template v-if="isSearching">
                            <span class="icon icon-magnifying-glass"></span>
                            <h2>{{ translate('cp.no_search_results') }}</h2>
                        </template>
                    </div>
                </template>
            </div>
        </div>
    </user-listing>

@endsection
