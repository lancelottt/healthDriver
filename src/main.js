// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router'
import Vuex from "vuex";
import '../static/reset.css'
import '../static/border.css'
import './assets/styles/iconfont.css'
import '../static/rem.js'
import store from "@/store/index.js"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'swiper/dist/css/swiper.css'
import Vue from 'vue'
import Mint from 'mint-ui';
import App from './App'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'mint-ui/lib/style.css'
Vue.use(ElementUI)
Vue.use(iView);
Vue.use(Mint);
Vue.use(Vuex);
Vue.use(VueAwesomeSwiper);
// Vue.use(Swiper);

Vue.config.productionTip = false
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
