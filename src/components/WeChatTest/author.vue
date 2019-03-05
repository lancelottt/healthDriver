<template>
	<div id="author">
		<p class="iconfont icon-weixin">微信登录</p>
	</div>
</template>
<script type="text/javascript">
	import { setCookie, getCookie, delCookie } from '@/utils/holdno';
	export default {
		data() {
			return {

			}
		},
		created() {
			// 检测会员有没有登录
			if(!getCookie('user')) {
				let ua = window.navigator.userAgent.toLowerCase()
				if(ua.match(/MicroMessenger/i) == 'micromessenger') {
					// 跳转到微信授权页面
					var wxUri = '/test'
					window.location.href = 'https://open.weixin.qq.com/connect/oauth2/authorize?appid=wxb7a73ac2a23fe04b&redirect_uri=https%3a%2f%2fwww.baidu.com%2f&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect'
//					this.webUrl + '/Wap/User/getOpenid'
				}
			} else {
				// 如果有token 但是vuex中没有用户登录信息则做登录操作
				this.login()
			}
		},
		methods: {
			login() {
				let url = this.webUrl + '/Wap/User/info'
				// 通过cookie中保存的token 获取用户信息
				this.$http.get(url).then(response => {
					response = response.body
					console.log(response)
					if(response) {
						// 保存用户登录状态(Vuex)
						this.$store.commit('user', response)
						setTimeout(() => {
							this.goBeforeLoginUrl() // 页面恢复(进入用户一开始请求的页面)
						}, 2000)
					} else {
						this.$alert('服务器撸猫去惹 :(', 'wrong')
						if(getCookie('user')) {
							// 跳转到微信授权页面
							window.location.href = this.webUrl + '/Wap/User/getOpenid'
						}
					}
				})
			}, // 登录后跳转方法
			goBeforeLoginUrl() {
				let url = holdno.cookie.get('beforeLoginUrl')
				if(!url || url.indexOf('/author') != -1) {
					router.push('/index')
				} else {
					if(url == '/') {
						url = '/index'
					}
					router.push(url)
					setCookie('beforeLoginUrl', '')
				}
			}

		}
	}
</script>
<style type="text/css">
	#author {
		width: 100%;
		height: 100%;
	}
	
	#author>p {
		font-size: 0.5rem;
		color: red;
	}
</style>