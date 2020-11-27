import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueRouter from 'vue-router'
import Vuelidate from 'vuelidate'
import {store} from './store'

Vue.use(VueRouter);
Vue.use(Vuelidate);

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
