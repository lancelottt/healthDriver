<template>
	<div id="wechatloginTest">
		<header @click="handlerBack()">
			<p>
				<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<</p>
		</header>
		<div type="primary" @click="handlerWxLogin()">获取微信服务</div>
		<div @click="wxAuth()">微信授权</div>
		<div @click="wxLogin()">微信登录</div>
	</div>
</template>
<script type="text/javascript">
	import store from '@/store/index'
	import vue from 'vue'
	import { setCookie, getCookie, delCookie } from '@/utils/holdno';
	export default {

		data() {
			return {
				weixinCode: ''
			}
		},
		beforeCreate() {
			function plusReady() {
				// 在这里调用plus api
				void plus.push.createMessage('success', {
					"MessageOptions": [{
						"sound": "none"
					}, {
						title: 'mafia'
					}]

				});
				plus.audio.createPlayer('http://demo.dcloud.net.cn/test/audio/apple.mp3').play()
				plus.device.beep();
			}
			// 监听plusready事件  
		},
		mounted() {
			//			var auths = null;
			//			var aweixin = null;
			//			// 监听plusready事件  
			//			document.addEventListener('plusready', function() {
			//				// 扩展API加载完毕，现在可以正常调用扩展API
			//				plus.oauth.getServices(function(services) {
			//					auths = services;
			//					aweixin = services['weixin'];
			//				}, function(e) {
			//					alert("获取分享服务列表失败：" + e.message + " - " + e.code);
			//				});
			//			}, false);
			//			// 授权操作
			//			function authorize() {
			//				if(!aweixin) {
			//					alert("当前环境不支持微信登录");
			//					return;
			//				}
			//				aweixin.authorize(function(e) {
			//					alert("授权成功：" + JSON.stringify(e));
			//				}, function(e) {
			//					alert("授权失败：" + JSON.stringify(e));
			//				}, {
			//					scope: 'snsapi_userinfo',
			//					state: 'authorize test',
			//					appid: 'wxb7a73ac2a23fe04b',
			//					appsecret:' 189a61ba487957636b8c7ae796a0d237',
			//					redirect_url:'http%3a%2f%2f192.168.1.151%3a8080'
			//				});
			//			}
			//		}
			//		beforeCreate() {
			//			function plusReady() {
			//				plus.oauth.AuthService.login()
			//
			//				if(plus.runtime.isApplicationExist({
			//						pname: 'com.tencent.mm',
			//						action: 'weixin://'
			//					})) {
			//					console.log("微信已安装");
			//				} else {
			//					console.log("微信未安装");
			//				}
			//
			//				var auths = null;
			//				plus.oauth.getServices(function(services) {
			//					auths = services;
			//				}, function(e) {
			//					this.alert("获取登录服务列表失败：" + e.message + " - " + e.code);
			//				});
			//
			//				// 在这里调用plus api
			//				this.weixinLogin()
			//				void plus.push.createMessage('success', {
			//					"MessageOptions": [{
			//						"sound": "none"
			//					}, {
			//						title: 'mafia'
			//					}]
			//
			//				});
			//				plus.audio.createPlayer('http://demo.dcloud.net.cn/test/audio/apple.mp3').play()
			//				plus.device.beep();
			//
			//
			//			}

			//			var auths = null;
			//			// 监听plusready事件  
			//			function plusReady() {
			//				// 扩展API加载完毕，现在可以正常调用扩展API
			//				this.authLogin()
			//				plus.oauth.getServices(function(services) {
			//					auths = services;
			//				}, function(e) {
			//					alert("获取分享服务列表失败：" + e.message + " - " + e.code);
			//				});
			//			};
			// 登录操作

			//		},

			//		created() {
			//			var auths = null;
			//			var aweixin = null;
			//			// 监听plusready事件  
			//			function plusReady() {
			//				plus.oauth.getServices(function(services) {
			//					var  auths = services;
			//					var aweixin = services['weixin'];
			//				}, function(e) {
			//					alert("获取分享服务列表失败：" + e.message + " - " + e.code);
			//				});
			//			};

			// 授权操作
			//			function authorize() {
			//				if(!aweixin) {
			//					alert("当前环境不支持微信登录");
			//					return;
			//				}
			//				aweixin.authorize(function(e) {
			//					alert("授权成功：" + JSON.stringify(e));
			//				}, function(e) {
			//					alert("授权失败：" + JSON.stringify(e));
			//				}, {
			//					scope: 'snsapi_userinfo',
			//					state: 'authorize test',
			//					appid: ' wxb7a73ac2a23fe04b',
			//					response_type: 'code'
			//				});
			//			}
			//		},
			//
			//		beforeMount() {
			//
			//		},
			//		methods: {
			//			authLogin() {
			//				var s = auths[0];
			//				if(!s.authResult) {
			//					s.login(function(e) {
			//							alert("登录认证成功！");
			//						}, function(e) {
			//							alert("登录认证失败！");
			//						}, {
			//							appid: "wx0411fa6a39d61297" // 微信应用的appid
			//								,
			//							scope: "snsapi_userinfo"
			//						}
			//					);
			//				}
			//			},
			//			weixinLogin() {
			//
			//				var _this = this;
			//				var weixinService = null;
			//				plus.oauth.getServices(function(services) {
			//					console.log(services)
			//					if(services && services.length) {
			//						for(var i = 0, len = services.length; i < len; i++) {
			//							if(services[i].id === 'weixin') {
			//								weixinService = services[i];
			//								break;
			//							}
			//						}
			//						if(!weixinService) {
			//							console.log('没有微信登录授权服务');
			//							return;
			//						}
			//						weixinService.authorize(function(event) {
			//							_this.weixinCode = event.code; //用户换取 access_token 的 code
			//							_this.requestLogin();
			//						}, function(error) {
			//							console.log('authorize fail:' + JSON.stringify(error));
			//						}, {
			//							appid: 'wxb7a73ac2a23fe04b',
			//							scope: 'snsapi_login',
			//							redirect_uri: 'www.baidu.com',
			//							response_type: 'code'
			//						});
			//					} else {
			//						console.log('无可用的登录授权服务');
			//					}
			//				}, function(error) {
			//					console.log('getServices fail:' + JSON.stringify(error));
			//				});
			//			},
			//			requestLogin() {
			//				uni.request({
			//					url: 'xxxxxxx/login',
			//					data: {
			//						code: this.weixinCode
			//					},
			//				})
			//			}
			//
		},
		methods: {
			handlerWxLogin() {
				var aweixin = null
				var auths = null;
				plus.oauth.getServices(function(services) {
					auths = services;
					aweixin = services[0]
					console.log(auths)
					console.log(aweixin)
				}, function(e) {
					console.log("获取分享服务列表失败：" + e.message + " - " + e.code);
				});
			},
			wxAuth() {
				function authorize() {
					if(!aweixin) {
						alert("当前环境不支持微信登录");
						return;
					}
					aweixin.authorize(function(e) {
						alert("授权成功：" + JSON.stringify(e));
					}, function(e) {
						alert("授权失败：" + JSON.stringify(e));
					}, {
						scope: 'snsapi_userinfo',
						state: 'authorize test',
						appid: 'wxb7a73ac2a23fe04b'
					});
				}
			},
			wxLogin() {
				var aweixin = null
				var auths = null;
				plus.oauth.getServices(function(services) {
					auths = services;
					aweixin = services[0]
					console.log(auths)
					console.log(aweixin)
				}, function(e) {
					console.log("获取分享服务列表失败：" + e.message + " - " + e.code);
				});
				plus.oauth.AuthService.login()

				if(plus.runtime.isApplicationExist({
						pname: 'com.tencent.mm',
						action: 'weixin://'
					})) {
					console.log("微信已安装");
				} else {
					console.log("微信未安装");
				}
				//				aweixin.login(function(e) {
				//						console.log("1！");
				//						alert("1！");
				//					},
				//					function(e) {
				//						console.log("0");
				//						alert("0！");
				//					}, {
				//						// 微信应用的appid
				//						appid: "wxb7a73ac2a23fe04b",
				//						scope: "snsapi_userinfo",
				//						appsecret: '189a61ba487957636b8c7ae796a0d237',
				//						response_type: 'code',
				//						redirect_uri: 'http%3a%2f%2f192.168.1.151%3a8081'
				//					} // 授权获取用户信息
				//				);
			},

			handlerBack() {
				this.$router.back()
			}

		},

	}
</script>
<style type="text/css">
	#wechatloginTest {
		width: 100%;
		height: 100%;
	}
	
	#wechatloginTest>p {
		display: block;
		width: 3rem;
		height: 3rem;
		background: pink;
		border-radius: 50%;
	}
</style>