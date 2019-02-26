// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import iView from 'iview';
import 'iview/dist/styles/iview.css';
import router from './router'
import Vuex from "vuex";
import '../static/reset.css'
//import '../static/border.css'
import './assets/styles/iconfont.css'
import '../static/rem.js'
import store from "@/store/index.js"
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import 'jquery'
import Vue from 'vue'
import App from './App'
//import Cube from 'cube-ui'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'
import VueAwesomeSwiper from 'vue-awesome-swiper'

// require styles
import 'swiper/dist/css/swiper.css'
//视屏播放插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')
Vue.use(VideoPlayer)

//swiper4的vueAwesomeSwiper
Vue.use(VueAwesomeSwiper)

//betterScroll已弃用
//import BScroll from 'better-scroll';
//Vue.prototype.$BScroll = BScroll;

//Vue.use(Cube)
Vue.use(ElementUI)
Vue.use(iView);
Vue.use(Vuex);
Vue.use(Mint);

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
