@extends('layout')

@section('content')

    <addon-listing inline-template v-cloak>
        <div>

            <div class="flexy mb-3">
                <h1 class="fill">{{ t('manage_addons') }}</h1>
                <div class="controls">
                    <button @click="refresh" class="btn btn-primary">{{ trans('cp.refresh') }}</button>
                </div>
            </div>

            <div class="card flush dossier-for-mobile">
                <template v-if="noItems">
                    <div class="no-results">
                        <span class="icon icon-power-plug"></span>
                        <h2>{{ trans('cp.addons_empty_heading') }}</h2>
                        <h3>{{ trans('cp.addons_empty') }}</h3>
                    </div>
                </template>
                <dossier-table v-if="hasItems" :items="items" :keyword.sync="keyword" :options="tableOptions"></dossier-table>
            </div>
            
        </div>
    </addon-listing>

@endsection
