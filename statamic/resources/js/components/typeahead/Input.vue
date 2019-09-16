<template>
    <input type="text"
        autocomplete="off"
        v-model="query"
        @keydown.prevent.up="up"
        @keydown.prevent.down="down"
        @keydown.prevent.enter="hit"
        @keydown.prevent.esc="reset"
        @blur="blur"
        :placeholder="placeholder"
    />
</template>


<script>
export default {

    props: {
        query: {},
        onUp: {},
        onDown: {},
        onHit: {},
        onReset: {},
        resetOnBlur: Boolean,
        placeholder: { default: `${translate('cp.search')}...` }
    },

    methods: {

        up: function() {
            this.onUp();
        },

        down: function() {
            this.onDown();
        },

        hit: function() {
            this.onHit();
        },

        reset: function() {
            this.onReset();
        },

        select: function () {
            this.$el.select();
        },

        blur: function () {
            if (this.resetOnBlur) {
                this.reset();
            }
        }
    }

};
</script>
