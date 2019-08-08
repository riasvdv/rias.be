<template>
    <div>
        <div class="typeahead" v-cloak :class="{'dirty': isDirty}">
            <div class="state-container">
                <i class="icon icon-magnifying-glass" @click="focus"></i>
            </div>

            <typeahead-input class="search alt"
                            v-ref:input
                            :placeholder="placeholder"
                            :query.sync="query"
                            :on-up="up"
                            :on-down="down"
                            :on-hit="hit"
                            :on-reset="reset"
                            :reset-on-blur="resetOnBlur"
                            @keyup.esc="reset"
            ></typeahead-input>

            <i class="icon icon-cross" v-show="isDirty || loading" @click="reset"></i>

            <ul v-show="hasResults">
                <li v-for="item in results" :class="{'active': isActive($index)}" @mousedown="hit" @mousemove="setActive($index)">
                    <span class="title" v-html="item.title"></span>
                    <span class="url" v-html="item.url"></span>
                </li>
            </ul>
        </div>
    </div>
</template>


<script>
export default {

    props: {
        limit: Number,
        src: String,
        options: Array,
        initialQuery: String,
        placeholder: String,
        resetOnBlur: Boolean
    },

    data: function () {
        return {
            items: [],
            query: this.initialQuery,
            current: -1,
            loading: false
        }
    },

    components: {
        'typeahead-input': require('./Input.vue')
    },

    computed: {
        results() {
            if (! this.query) return [];

            if (! this.options) return this.items;

            return this.options.filter(option => option.text.toLowerCase().includes(this.query.toLowerCase()));
        },

        hasResults: function () {
            return this.results.length > 0;
        },

        isEmpty: function () {
            return !this.query && !this.loading;
        },

        isDirty: function () {
            return !!this.query && !this.loading;
        }
    },

    methods: {
        update: function () {
            if (this.options) {
                this.current = -1;
            } else {
                this.performRequest();
            }

            this.$emit('query-changed', this.query);
        },

        performRequest() {
            if (!this.query) return;

            this.loading = true;

            this.$http.get(this.src, Object.assign({q:this.query}, this.data)).success(function (data) {
                if (this.query) {
                    this.items = !!this.limit ? data.slice(0, this.limit) : data;
                    this.current = -1;
                    this.loading = false;
                }
            }.bind(this));
        },

        reset: function () {
            this.items = [];
            this.query = '';
            this.loading = false;
        },

        setActive: function (index) {
            this.current = index;
        },

        isActive: function (index) {
            return this.current == index;
        },

        focus: function() {
            this.select()
        },

        select: function () {
            this.$refs.input.select();
        },

        hit: function () {
            this.$emit('selected', this.results[this.current]);
        },

        up: function () {
            if (this.current > 0) this.current--;
        },

        down: function () {
            if (this.current < this.results.length-1) this.current++;
        }
    },

    watch: {

        query() {
            this.update();
        },

        initialQuery(val) {
            this.query = val;
        }

    }
};
</script>
