<template>
	<div id="wechatloginTest">
		<header>
			<p @click="handlerBack()">
				<-------------------------------</p>
		</header>
		<div id="loginWx" class="iconfont icon-weixin" style="{font-size: 1rem;color: green;}" @click="wxLogin()">微信登录</div>
		<!--<div class="iconfont icon-weixin" style="{font-size: 1rem;color: orangered;}" @click="handlerLogout()">注销登录</div>-->
	</div>
</template>
<script type="text/javascript">
	import store from '@/store/index'
	import vue from 'vue'
	import { setCookie, getCookie, delCookie } from '@/utils/holdno';
	import axios from 'axios'
	export default {
		data() {
			return {
				weixinCode: '',
				weChatServices: {}
			}
		},

		mounted() {
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

			//			wxLogin() {
			//				var _this = this;
			//				// #ifdef APP-PLUS
			//				var weixinService = null;
			//				// http://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.getServices
			//				plus.oauth.getServices(function(services) {
			//					_this.weChatServices = services[0]
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
			//						// http://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthService.authorize
			//						weixinService.authorize(function(event) {
			//							_this.weixinCode = event.code;
			//							console.log(JSON.stringify(event))
			//							console.log(JSON.stringify(this))
			//							console.log(JSON.stringify(_this)) //用户换取 access_token 的 code
			//							console.log(JSON.stringify(weixinService))
			//							console.log(_this.weixinCode)
			//							_this.requestLogin();
			//							_this.sendWxCode();
			//							_this.wxLogOut();
			//						}, function(error) {
			//							console.log('authorize fail:' + JSON.stringify(error));
			//						}, {
			//							// http://www.html5plus.org/doc/zh_cn/oauth.html#plus.oauth.AuthOptions
			//							appid: 'wxb7a73ac2a23fe04b',
			//							appsecret: ' 189a61ba487957636b8c7ae796a0d237',
			//							scope: 'snsapi_userinfo'
			//							//开放平台的应用标识。暂时填个假的充数，仅做演示。
			//						});
			//					} else {
			//						console.log('无可用的登录授权服务');
			//					}
			//				}, function(error) {
			//					console.log('getServices fail:' + JSON.stringify(error));
			//				});
			//				// #endif
			//			},
			//			requestLogin() {
			//				// 这里请求服务端授权登录
			//				weixinService.login(function(e) {
			//					console.log("登陆成功" + JSON.stringify(e))
			//				}, function(e) {
			//					console.log("登录失败" + JSON.stringify(e))
			//				}, {
			//					scope: 'snsapi_userinfo',
			//					state: 'weChatLoginTest',
			//					appid: 'wxb7a73ac2a23fe04b',
			//					appsecret: '189a61ba487957636b8c7ae796a0d237',
			//					//					redirect_url:'redirect_url'
			//				})
			//				//				this.axios({
			//				//					url: 'xxxxxxx/login',
			//				//					data: {
			//				//						code: this.weixinCode
			//				//					},
			//				//				
			//				//				})
			//			},
			//			wxLogOut() {
			//				weixinService.logout(function(event) {
			//					console.log('注销成功 ' + JSON.stringify(event))
			//				}, function(error) {
			//					console.log('注销失败' + JSON.stringify(error));
			//				});
			//
			//			},
			//			sendWxCode() {
			//				//				axios.post(
			//				//
			//				//				).then(
			//				//					
			//				//				).catch()
			//			},

			//			handlerWxLogin() {
			//				var aweixin = null
			//				var auths = null;
			//				plus.oauth.getServices(function(services) {
			//					auths = services;
			//					aweixin = services[0]
			//					console.log(auths)
			//					console.log(aweixin)
			//				}, function(e) {
			//					console.log("获取分享服务列表失败：" + e.message + " - " + e.code);
			//				});
			//			},
			//			wxAuth() {
			//				function authorize() {
			//					if(!aweixin) {
			//						alert("当前环境不支持微信登录");
			//						return;
			//					}
			//					aweixin.authorize(function(e) {
			//						alert("授权成功：" + JSON.stringify(e));
			//					}, function(e) {
			//						alert("授权失败：" + JSON.stringify(e));
			//					}, {
			//						scope: 'snsapi_userinfo',
			//						state: 'authorize test',
			//						appid: 'wxb7a73ac2a23fe04b'
			//					});
			//				}
			//			},
			wxLogin() {
				var _this = this
				var k = null;
				var wxLoginObj = null;
				var weixinCode = null;
				document.getElementById('loginWx').addEventListener('click', function() {
					plus.oauth.getServices(
						function(s) {
							console.log('获取服务信息成功' + JSON.stringify(s));
							for(k in s) {
								if(s[k].id == 'weixin') {
									wxLoginObj = s[k];
								}
							}
							//检查微信登录模块
							if(wxLoginObj == null) {
								plus.nativeUI.toast('微信登录失败');
								return;
							}
							wxLoginObj.authorize(function(e) {
								plus.nativeUI.toast('授权成功' + JSON.stringify(e))
								console.log('授权成功' + JSON.stringify(e))
								weixinCode = e.code
								console.log('Code：' + weixinCode)
								if(!e.authResult) {
									wxLoginObj.login(function(e) {
										plus.nativeUI.toast('登陆成功 ' + JSON.stringify(e))
										console.log('登陆成功 ' + JSON.stringify(e))
										axios.get("http://192.168.1.170:8081/health-web/modules/wxThirdParty/login?code=" + weixinCode, {
											//											params: {
											//												code: _this.weixinCode
											//											}
										}).then(function(response) {
											switch(response.ompleteStatus){
												case 0:_this.$router.push('/')
												break;
												case 1:_this.$router.push({name:'Invitation'})
												break;
												case 2:_this.$router.push('/login/telLogin')
												break;
												case 3:_this.$router.push('/userInfo/confirmInfo')
												break;
												case 4:_this.$router.push('/userInfo/identity')
												break;
												case 5:_this.$router.push('/healthPlan/makeHealthPlan')
												break;
											}
											console.log('从服务器接收成功' + JSON.stringify(response))
											_this.$store.disptch(response.token)
										}).catch(function(response) {
											console.log('从服务器接收失败 ' + JSON.stringify(response))
										})
										setTimeout(function() {
											_this.$router.push({
												name: 'Invitation'
											})
										}, 2000)
									}, function(e) {
										plus.nativeUI.toast('登录失败' + JSON.stringify(e))
										console.log('登录失败' + JSON.stringify(e))
									}, {
										scope: 'snsapi_base,snsapi_userinfo',
										state: 'authorize test',
										appid: 'wxb7a73ac2a23fe04b',
										appsecret: '189a61ba487957636b8c7ae796a0d237'
									})
								}
							}, function(e) {
								plus.nativeUI.toast('授权失败' + JSON.stringify(e))
								console.log('授权失败' + JSON.stringify(e))
							}, {
								scope: 'snsapi_base,snsapi_userinfo',
								state: 'authorize test',
								appid: 'wxb7a73ac2a23fe04b',
								appsecret: '189a61ba487957636b8c7ae796a0d237'
							})
							//							wxLoginObj.login(
							//								function(res1) {
							//									var user = res1.target.userInfo;
							//									var gender = new Array('', '男', '女');
							//									axios.post(
							//										apiUrl + 'members&m=createUser&type=2', {
							//											openid: user.openid,
							//											name: user.nickname,
							//											face: user.headimgurl,
							//											gender: gender[user.sex]
							//										},
							//										function(res) {
							//											console.log(JSON.stringify(res));
							//											if(res.status == 'ok') {
							//												//注册成功记录关键值同时完成登录
							//												plus.storage.setItem('suid', res.data.u_id + '');
							//												plus.storage.setItem('srand', res.data.u_randnum + '');
							//												console.log('登录成功 ^_^');
							//												//延迟2秒登录界面
							//												setTimeout(function() {
							//													plus.webview.getWebviewById('login').close();
							//												}, 2000);
							//											}
							//										},
							//										'json'
							//									);
							//								},
							//								function(e) {
							//									plus.nativeUI.toast('微信登录失败');
							//									return;
							//								}
							//							);
						},
						function(e) {
							plus.nativeUI.toast('第三方登录插件获取失败');
							console.log(JSON.stringify(e));
						}
					);
				});

			},
			handlerBack() {
				this.$router.back()
			}

		}

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