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
import axios from 'axios'
import App from './App'
//import Cube from 'cube-ui'
import Mint from 'mint-ui';
import 'mint-ui/lib/style.css'

import $ from 'jquery'

import VueAwesomeSwiper from 'vue-awesome-swiper'
import observer from './utils/observer.js'

import { setCookie, getCookie, delCookie } from '@/utils/holdno';
// require styles
import 'swiper/dist/css/swiper.css'
//视屏播放插件
import VideoPlayer from 'vue-video-player'
require('video.js/dist/video-js.css')
require('vue-video-player/src/custom-theme.css')

import vueTouch from 'vue-plugin-touch';
import echarts from 'echarts'
import VCharts from 'v-charts'
import './utils/filter'
Vue.prototype.$echarts = echarts;
//Vue.portotype.observer = new Vue()
Vue.use(VCharts)
Vue.use(vueTouch);

// import ECharts from 'vue-echarts/components/ECharts'
// import 'echarts/lib/chart/line'
// Vue.component('chart', ECharts)
//import holdno from './utils/holdno'

Vue.use(VideoPlayer)
// Vue.use(myCharts)

// Vue.prototype.$echarts = myCharts
// swiper4的vueAwesomeSwiper
Vue.use(VueAwesomeSwiper)
//把observer挂载到prototype上

//betterScroll已弃用
import BScroll from 'better-scroll';
//Vue.prototype.$BScroll = BScroll;

//Vue.use(Cube)
Vue.use(ElementUI)
Vue.use(iView);
Vue.use(Vuex);
Vue.use(Mint);

//将 holdno 挂载到 vue 的原型上
//Vue.prototype.holdno = holdno;

Vue.config.productionTip = false
/* eslint-disable no-new */
// holdno是我自己定义的一个工具集 里面有各种操作方法

new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>',

})
Vue.component('timerBtn', {
	template: '<button v-on:click="run" :disabled="disabled || time > 0">{{ text }}</button>',
	props: {
		second: {
			type: Number,
			default: 60
		},
		disabled: {
			type: Boolean,
			default: false
		}
	},
	data: function() {
		return {
			time: 0
		}
	},
	methods: {
		run: function() {
			this.$emit('run');
		},
		start: function() {
			this.time = this.second;
			this.timer();
		},
		stop: function() {
			this.time = 0;
			this.disabled = false;
		},
		setDisabled: function(val) {
			this.disabled = val;
		},
		timer: function() {
			if(this.time > 0) {
				this.time--;
				setTimeout(this.timer, 1000);
			} else {
				this.disabled = false;
			}
		}

	},
	computed: {
		text: function() {
			return this.time > 0 ? this.time + 's 后重获取' : '获取验证码';
		}
	}
});
router.beforeEach((to, from, next) => {
	//	console.log(store.state.user.id)
	if(!store.state.user.id && to.path != '/author') {
		// 第一次进入项目
		setCookie('beforeLoginUrl', to.fullPath) // 保存用户进入的url
		next('/loginChat/chatLogin')
		return true
	}
	next()
})