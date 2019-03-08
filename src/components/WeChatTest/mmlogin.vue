<template>
	<div id="111q">
		<header class="mui-bar mui-bar-nav">
			<a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a>
			<h1 class="mui-title">第三方登录</h1>
		</header>
		<div class="mui-content">
			<div class="head">
			</div>
			<div class="top" id="testLogin">
				<span class="mui-icon weixin" id="weixin"></span>
				<span class="mui-icon qq" id="qq"></span>
				<span class="mui-icon sinaweibo" id="sinaweibo"></span>
			</div>
		</div>

	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		beforCreated() {
			mui.plusReady(function() {
				plus.oauth.getServices(function(services) {
					auths = services;
				}, function(e) {
					alert("获取登录服务列表失败：" + e.message + " - " + e.code);
				});
			})

			document.getElementById('weixin').addEventListener('tap', function() {
				console.log("微信");
				authLogin('weixin');
			})
			document.getElementById('qq').addEventListener('tap', function() {
				console.log("QQ");
				authLogin('qq');
			})
			document.getElementById('sinaweibo').addEventListener('tap', function() {
				console.log("微博");
				authLogin('sinaweibo');
			})

			// 登录操作
			function authLogin(type) {
				var s;
				for(var i = 0; i < auths.length; i++) {
					if(auths[i].id == type) {
						s = auths[i];
						break;
					}
				}
				if(!s.authResult) {
					s.login(function(e) {
						mui.toast("登录认证成功！");
						authUserInfo(type);
					}, function(e) {
						mui.toast("登录认证失败！");
					});
				} else {
					mui.toast("已经登录认证！");
				}
			}
			//注销
			function authLogout() {
				for(var i in auths) {
					var s = auths[i];
					if(s.authResult) {
						s.logout(function(e) {
							console.log("注销登录认证成功！");
						}, function(e) {
							console.log("注销登录认证失败！");
						});
					}
				}
			}
			// 微信登录认证信息
			function authUserInfo(type) {
				var s;
				for(var i = 0; i < auths.length; i++) {
					if(auths[i].id == type) {
						s = auths[i];
						break;
					}
				}
				if(!s.authResult) {
					mui.toast("未授权登录！");
				} else {
					s.getUserInfo(function(e) {
						var josnStr = JSON.stringify(s.userInfo);
						var jsonObj = s.userInfo;
						console.log("获取用户信息成功：" + josnStr);
						showData(type, jsonObj);
						authLogout();
					}, function(e) {
						alert("获取用户信息失败：" + e.message + " - " + e.code);
					});
				}
			}
			// 显示用户头像信息
			function showData(type, data) {
				switch(type) {
					case 'weixin':
						headImage.src = data.headimgurl;
						break;
					case 'qq':
						headImage.src = data.figureurl_qq_2;
						break;
					case 'sinaweibo':
						headImage.src = data.avatar_large;
						break;
					default:
						break;
				}
			}

		},
		created() {
			// 登录操作
			function authLogin(type) {
				var s = null;
				for(var i = 0; i < auths.length; i++) {
					if(auths[i].id == type) {
						s = auths[i];
						break;
					}
				}
				if(!s.authResult) {
					s.login(function(e) {
						console.log("登录认证成功！");
						authUserInfo(type);
					}, function(e) {
						console.log("登录认证失败！");
					});
				} else {
					console.log("已经登录认证！");
				}
			}
		},
		beforeMount() {
			//注销
			function authLogout() {
				for(var i in auths) {
					var s = auths[i];
					if(s.authResult) {
						s.logout(function(e) {
							console.log("注销登录认证成功！");
						}, function(e) {
							console.log("注销登录认证失败！");
						});
					}
				}
			}
		},
		mounted() {
			function authUserInfo(type) {
				var s;
				for(var i = 0; i < auths.length; i++) {
					if(auths[i].id == type) {
						s = auths[i];
						break;
					}
				}
				if(!s.authResult) {
					console.log("未授权登录！");
				} else {
					s.getUserInfo(function(e) {
						var josnStr = JSON.stringify(s.userInfo);
						var jsonObj = s.userInfo;
						console.log("获取用户信息成功：" + josnStr);
						showData(type, jsonObj);
						authLogout();
					}, function(e) {
						alert("获取用户信息失败：" + e.message + " - " + e.code);
					});
				}
			}
		},

		beforeUpdate() {
			function showData(type, data) {
				switch(type) {
					case 'weixin':
						headImage.src = data.headimgurl;
						break;
					case 'qq':
						headImage.src = data.figureurl_qq_2;
						break;
					case 'sinaweibo':
						headImage.src = data.avatar_large;
						break;
					default:
						break;
				}

			}
		},
		// 微信登录认证信息

		// 显示用户头像信息

		//		beforeCreate() {
		//			var auths = {};
		//
		//			function plusReady() {
		//				console.log(plus)
		//				// 获取登录认证通道
		//				plus.oauth.getServices(function(services) {
		//					console.log(services)
		//					var content = document.getElementById('dcontent');
		//					var info = this.$refs.info
		//					var txt = "登录认证通道信息：";
		//					for(var i in services) {
		//						var service = services[i];
		//						console.log(service.id + ": " + service.authResult + ", " + service.userInfo);
		//						auths[service.id] = service;
		//						txt += "id:" + service.id + ", ";
		//						txt += "description:" + service.description + ", ";
		//						var de = document.createElement('div');
		//						de.setAttribute('class', 'button');
		//						de.setAttribute('onclick', 'login(this.id)');
		//						de.id = service.id;
		//						de.innerText = service.description + "登录";
		//						oauth.appendChild(de);
		//					}
		//					info.innerText = txt;
		//				}, function(e) {
		//					console.log("获取登录认证失败：" + e.message);
		//				});
		//			}
		//			document.addEventListener('plusready', plusReady, false);
		//			// 登录认证
		//			function login(id) {
		//				console.log("----- 登录认证 -----");
		//				var auth = auths[id];
		//				if(auth) {
		//					var w = null;
		//					if(plus.os.name == "Android") {
		//						w = plus.nativeUI.showWaiting();
		//					}
		//					this.$watch("pause", function() {
		//						setTimeout(function() {
		//							w && w.close();
		//							w = null;
		//						}, 2000);
		//					}, false);
		//					auth.login(function() {
		//						w && w.close();
		//						w = null;
		//						console.log("登录认证成功：");
		//						console.log(JSON.stringify(auth.authResult));
		//						userinfo(auth);
		//					}, function(e) {
		//						w && w.close();
		//						w = null;
		//						console.log("登录认证失败：");
		//						console.log("[" + e.code + "]：" + e.message);
		//						plus.nativeUI.alert("详情错误信息请参考授权登录(OAuth)规范文档：http://www.html5plus.org/#specification#/specification/OAuth.html", null, "登录失败[" + e.code + "]：" + e.message);
		//					});
		//				} else {
		//					console.log("无效的登录认证通道！");
		//					plus.nativeUI.alert("无效的登录认证通道！", null, "登录");
		//				}
		//			}
		//			// 获取用户信息
		//			function userinfo(a) {
		//				console.log("----- 获取用户信息 -----");
		//				a.getUserInfo(function() {
		//					console.log("获取用户信息成功：");
		//					console.log(JSON.stringify(a.userInfo));
		//					var nickname = a.userInfo.nickname || a.userInfo.name || a.userInfo.miliaoNick;
		//					plus.nativeUI.alert("欢迎“" + nickname + "”登录！");
		//				}, function(e) {
		//					console.log("获取用户信息失败：");
		//					console.log("[" + e.code + "]：" + e.message);
		//					plus.nativeUI.alert("获取用户信息失败！", null, "登录");
		//				});
		//			}
		//			// 注销登录
		//			function logoutAll() {
		//				outSet("----- 注销登录认证 -----");
		//				for(var i in auths) {
		//					logout(auths[i]);
		//				}
		//			}
		//
		//			function logout(auth) {
		//				auth.logout(function() {
		//					outLine("注销\"" + auth.description + "\"成功");
		//				}, function(e) {
		//					outLine("注销\"" + auth.description + "\"失败：" + e.message);
		//				});
		//			}
		//		},
		//		methods:{
		//			logoutAll(){
		//				outSet("----- 注销登录认证 -----");
		//				for(var i in auths) {
		//					logout(auths[i]);
		//				}
		//			}
		//		}
		//	}

	}
</script>

<style>
	@import '../../utils/common.css';
	#total {
		-webkit-user-select: text;
		text-align: right;
		padding: 0 1em;
		border: 0px;
		border-bottom: 1px solid #ECB100;
		border-radius: 0;
		font-size: 16px;
		width: 30%;
		outline: none;
	}
</style>