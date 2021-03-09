import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import vuetify from './plugins/vuetify';
import mixin from "@/mixin";

Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    const localToken = localStorage.getItem('token');
    if (to.name === 'Home' && !localToken) {
        next({name: 'Login'})
    }
    if (to.name !== 'Home' && localToken) {
        next({name: 'Home'})
    }
    return next();
})

new Vue({
    data: function () {
        return {
            selectedLeaf: {}
        }
    },
    router,
    vuetify,
    mixins: [mixin],
    render: h => h(App)
}).$mount('#app')
