import Vue from 'vue'
import App from './App.vue'
import router from './config/router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Bootstrap configuration
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
