// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuetify from 'vuetify'
import {sync} from 'vuex-router-sync'
import store from '@/store/store'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import 'vuetify/dist/vuetify.min.css'
import 'material-design-icons-iconfont-only/iconfont/material-icons.css'
import VueYouTubeEmbed from 'vue-youtube-embed'
Vue.config.productionTip = false

Vue.use(BootstrapVue);
Vue.use(Vuetify);
Vue.use(VueYouTubeEmbed)
sync(store,router);
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
