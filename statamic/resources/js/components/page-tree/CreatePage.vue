<template>
    <div>
        <modal :show.sync="show" :saving="saving" :loading="loading" class="modal-small" :dismissible="true">
            <template slot="header">{{ translate('cp.choose_page_type') }}</template>

            <template slot="body">
                <ul class="chooser">
                    <li v-for="fieldset in fieldsets">
                        <a href='' @click.prevent="create(fieldset.value)">{{ fieldset.text }}</a>
                    </li>
                </ul>
            </template>

            <template slot="footer">
                <div class="pull-left">{{ translate('cp.parent_page') }}: <code>{{ parent }}</code></div>
                <button type="button" class="btn" @click="cancel">{{ translate('cp.cancel') }}</button>
            </template>
        </modal>
    </div>
</template>

<script>
export default {

    props: ['locale'],

    data: function() {
        return {
            parent: null,
            show: false,
            saving: false,
            loading: true,
            fieldsets: []
        }
    },

    events: {
        'pages.create': function(parent) {
            this.loading = true;
            this.parent = parent;
            this.getFieldsets();
        }
    },

    methods: {
        cancel: function() {
            this.show = false;
        },

        create: function(fieldset) {
            let parent = (this.parent === '/') ? '' : this.parent;

            let url = cp_url('pages/create' + parent + '?fieldset=' + fieldset);

            if (this.locale !== Object.keys(Statamic.locales)[0]) {
                url += '&locale=' + this.locale;
            }

            window.location = url;
        },

        getFieldsets: function() {
            var url = cp_url('fieldsets-json?url='+this.parent+'&hidden=false');

            this.$http.get(url, function(data) {
                var fieldsets = [];

                _.each(data.items, function(fieldset) {
                    fieldsets.push({
                        value: fieldset.uuid,
                        text: fieldset.title
                    });
                });

                this.fieldsets = fieldsets;
                this.loading = false;

                // If there's only one fieldset, don't make the user have to pick it.
                if (this.fieldsets.length <= 1) {
                    this.create(this.fieldsets[0].value);
                } else {
                    this.show = true;
                }
            });
        }
    }

};
</script>
