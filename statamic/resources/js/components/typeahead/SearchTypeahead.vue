<template>

    <typeahead
        class="global-search flex-1"
        :src="cp_url('search/perform')"
        :limit="10"
        :reset-on-blur="true"
        @selected="selected"
    ></typeahead>

</template>

<script>
export default {

    methods: {

        selected(result) {
            window.location = result.edit_url;
        }

    }

}
</script>
