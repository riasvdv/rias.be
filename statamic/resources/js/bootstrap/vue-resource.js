import Vue from 'vue';
Vue.use(require('vue-resource'));

Vue.http.headers.common['X-CSRF-TOKEN'] = document.querySelector('#csrf-token').getAttribute('value');

Vue.http.interceptors.push({
    response: function (response) {
        if (response.status === 401) {
            this.$root.showLoginModal = true;
        }

        return response;
    }
});
