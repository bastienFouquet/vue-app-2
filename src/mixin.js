import Vue from 'vue'

export default Vue.mixin({
    data: function () {
        return {
            token: null
        }
    },
    watch: {
        token: 'setToken'
    },
    created: function () {
        this.restoreToken();
    },
    methods: {
        backAddress: function () {
            return 'https://salty-earth-36065.herokuapp.com/';
        },
        getHeaders: function () {
            return {
                headers: {
                    'Content-type': 'application/json',
                    'Authorization': this.token
                }
            };
        },
        restoreToken: function () {
            if (localStorage.token) {
                this.token = localStorage.token;
            }
        },
        setToken: function () {
            localStorage.setItem('token', this.token);
        },
        logout: function () {
            localStorage.removeItem('token');
            setTimeout(() => {
                this.$router.push({name: 'Login'});
            }, 100)
        }
    }
})
