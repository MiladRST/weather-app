import Vue from 'vue'
import App from './App.vue'

// vue router
import VueRouter from 'vue-router'
import { routes } from './routes'

// bootstrap-vue 
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// css section
import './assets/css/main.css'
import './assets/fonts/font-awesome/css/font-awesome.min.css'



Vue.use(VueRouter)
const router = new VueRouter({ routes, mode: 'history' });

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
