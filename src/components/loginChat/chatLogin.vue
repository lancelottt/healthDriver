<template>
	<div class="chatLogin">
		<div class="imgZ">
			<img src="../../../static/img/bJ.png" />
		</div>
		<div class="content">
			<p>哈喽！</p>
			<p>欢迎登录健康驾校</p>
			<div class="conTu">
				<img src="../../../static/img/chatLogin.png" alt="">
				<div class="phone">
					<img src="../../../static/img/phone.png" alt="">
				</div>
				<!-- 快捷登录** -->
				<div class="weChat">
					<div id="loginWx" @click="wxLogin()">
						<img src="../../../static/img/weixin.png" alt="">
					</div>
					<span>微信登录</span>
<!--					<span @click="next1()">1<i>{{ids}}</i></span>
-->					<!--<p>{{userid}}</p>
					<p>{{usernick}}</p>
					<p>{{usercode}}</p>-->
				</div>
			</div>
			<div class="imgT">
				<div class="imgTleft"><img src="../../../static/img/jY.png" alt=""></div>
				<div class="imgTright"><img src="../../../static/img/home.png" alt=""></div>
			</div>
		</div>
	</div>
</template>
<script>
	//	import bus from '@/utils/bus.js'、
	import { get, post } from "../../api/fetch";
	import axios from 'axios'
	import store from '@/store/index'
	import vue from 'vue'
	import Vuex from 'vuex'
	import { setCookie, getCookie, delCookie } from '@/utils/holdno';
	export default {
		name: 'loginChat',
		data() {
			return {
				weixinCode: '',
				weChatServices: {},
				id: '',
				responseDataUser: [],
				userInfo: [],
				targetInfo:null,
			}
		},
		beforeCreate() {
			function plusReady() {
				void plus.push.createMessage('success', {
					"MessageOptions": [{
						"sound": "none"
					}, {
						title: 'mafia'
					}]

				});
				plus.audio.createPlayer('http://m10.music.126.net/20190309164554/0f2e61523df4fde1282c1043fd8f3eca/ymusic/4848/dc50/3355/62726df9ee5a0d1a95fe0950271cebbc.mp3').play()
				plus.device.beep();
			}
			// 监听plusready事件  
		},
		computed: {
			...Vuex.mapState({
				userid:state=>store.state.user.uid,
				usernick: state => store.state.myInfo.nickname,
				usercode:state=>store.state.user.userCode,
				userav:state=>store.state.myInfo.headimgurl,
			})
		},
		methods: {
			wxLogin() {
				var _this = this
				var k = null;
				var wxLoginObj = null;
				var weixinCode = null;
				var maccessToken = null;
				var mopenid = null;
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
								plus.nativeUI.toast('授权成功')
								console.log('授权成功' + JSON.stringify(e))
								weixinCode = e.code
								console.log('Code：' + weixinCode)
								if(!e.authResult) {
									wxLoginObj.login(function(suc) {
										mopenid = suc.target.authResult.openid
										maccessToken = suc.target.authResult.access_token
//										plus.nativeUI.toast('登陆成功 ')
										console.log('登陆成功 ' + JSON.stringify(suc))
										_this.userInfo = suc.target.userInfo
										get("/health-web/modules/wxThirdParty/login?openid=" + mopenid+'&accessToken='+maccessToken, {
											//											params: {
											//												code: _this.weixinCode
											//											}
										}).then(function(response) {
											localStorage.setItem('tokenCookie',response.user.token)
											console.log(response.user.token)
											console.log('从服务器接收成功 '+JSON.stringify(response))
//											plus.nativeUI.toast('从服务器接收成功 ')
											_this.responseDataUser = response.user
											console.log(JSON.stringify(_this.responseDataUser))
											_this.sendInfo()
											_this.id = response.user.id
											setTimeout(function(){
												switch(response.user.ompleteStatus) {
												case 0:
													_this.$router.push({
														name: 'payment'
													})
													break;
												case 1:
													_this.$router.push({
														name: 'Invitation'
													})
													break;
												case 2:
													_this.$router.push('/login/telLogin')
													break;
												case 3:
													_this.$router.push('/userInfo/confirmInfo')
													break;
												case 4:
													_this.$router.push('/userInfo/identity')
													break;
												case 5:
													_this.$router.push('/healthPlan/makeHealthPlan')
													break;
												default:
													break;
											}
											},3000)
											//											_this.saveUserInfo()
											//											_this.saveCookie(response.data.user.id)
										}).catch(function(fail) {
											console.log('从服务器接收失败 ' + JSON.stringify(fail))
										})
									}, function(e) {
										plus.nativeUI.toast('登录失败')
										console.log('登录失败' + JSON.stringify(e))
									}, {
										scope: 'snsapi_base,snsapi_userinfo',
										state: 'authorize test',
										appid: 'wxb7a73ac2a23fe04b',
										appsecret: '189a61ba487957636b8c7ae796a0d237'
									})
								}
								setTimeout(function() {
									wxLoginObj.logout(function(e) {
										console.log("注销成功 " + JSON.stringify(e))
									}, function(e) {
										console.log("注销失败" + JSON.stringify(e))
									})
								}, 5000)
							}, function(e) {
								plus.nativeUI.toast('授权失败')
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
//							plus.nativeUI.toast('第三方登录插件获取失败');
							console.log('第三方登录插件获取失败' + JSON.stringify(e));
						}
					);
				});
			},
			next1() {
				this.$router.push({
					name: 'payment'
				})
			},
			sendInfo() {
				console.log(this.responseDataUser)
				//				this.observer.$emit('change',this.id)
				
				this.$store.dispatch("handlerDispatchUserInfo", this.responseDataUser)
				this.$store.dispatch("handlerMyInfo", this.userInfo)
				this.$store.dispatch("handlerDispatch", this.id)
			},
			//			saveUserInfo(){
			//				console.log(_this.$store)
			////				_this.$store.dispatch("handlerModify",response.data.user.id)
			//				_this.store.commit('implement',response.data.user.id)
			//				console.log(store.state)
			//			},
			//			saveCookie(sad){
			//				console.log(_this.id)
			//				console.log(this.id)
			//				console.log(sad)
			//				console.log(response.data)
			//				console.log(response.data.user.id)
			//				setCookie('idCookie',response.data.user.id,30)
			//				setCookie('idCookie',sad,30)
			//				setCookie('idCookie',_this.id,30)
			//				setCookie('idCookie',this.id,30)
			//			}
		}
	}
</script>

<style scoped>
	@import '../../assets/chatLogin/chatLogin.css';
</style>