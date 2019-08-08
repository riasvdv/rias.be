module.exports = {

    props: {
        showEmailLogin: {
            default: false
        },
        hasError: {
            default: false
        }
    },

    ready() {
        if (this.hasError) {
            this.$el.parentElement.parentElement.classList.add('shake');
        }
    }

};
