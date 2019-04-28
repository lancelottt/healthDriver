<template>
	<div id="telLogin">
		<header>
			<!--<span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span>--></header>
		<!--iconfont icon-xiangzuojiantou-->

		<section class="telLogin">
			<div class="headImg">
				<img src="../../../static/img/telLogin2.png" />
			</div>
			<div class="slogan"><img src="../../../static/img/telLogin.png" /></div>
			<div class="telLogin-con">
				<span>手机号</span>
				<el-input v-model="inputPhone" placeholder="请输入手机号" maxlength=11 clearable autofocus @keyup.native="provin($event)"></el-input>
				<h2>{{inputPhone|verifyPhone}}</h2>
				<span>验证码</span>
				<el-row class='telLogin-getVarifyCode'>
					<el-input v-model="inputVarifyCode" placeholder="请输入验证码  " maxlength=4 @keyup.native="provin1($event)"></el-input>
					<a v-show="sendAuthCode" class="btn btn-default" @click="getAuthCode">获取验证码</a>
					<a v-show="!sendAuthCode" class="btn btn-default">{{auth_time}} 秒之后重新发送验证码</a>

				</el-row>
			</div>
			<span>为了保证您的账户安全，请绑定手机号<!--，绑定成功后即可获得新人专享礼券--></span>
			<el-button type="danger" round @click="handleTelLoginConfirm()">确认</el-button>

		</section>

	</div>
</template>

<script>
	import { get, post } from '@/api/fetch'
	export default {
		data() {
			return {
				inputPhone: '',
				inputVarifyCode: '',
				finalTel: '',
				finalCode: '',
				sendAuthCode:true,/*布尔值，通过v-show控制显示‘获取按钮’还是‘倒计时’ */
        		auth_time: 0, /*倒计时 计数器*/
			}
		},
		filters: {
			verifyPhone: function(inputPhone) {
				if(!(/^1[34578]\d{9}$/.test(inputPhone))) {
					console.log("手机号码有误，请重填");
					return "手机号码有误，请检查";
				}
			}
		},
		methods: {
			sendCode: function() {
				get("/health-web/smsVerify/" + this.finalTel, {
					//              if(data.status){
					//                  this.$refs.timerbtn.start(); //启动倒计时
					//              }else{
					//                  this.$refs.timerbtn.stop(); //停止倒计时
					//              }
				}).then((res) => {
					if(res.code == 10000016){
						plus.nativeUI.toast(res.msg)
					}
					console.log(typeof(this.finalTel))
					console.log(res)
				}).catch((err) => {
					console.log(err)
				})
			},
			getAuthCode(){
				var _this = this
				this.sendAuthCode = false;
				this.auth_time = 60;
				var auth_timetimer = setInterval(() => {
					this.auth_time--;
					if(this.auth_time <= 0) {
						this.sendAuthCode = true;
						clearInterval(auth_timetimer);
					}
				}, 1000);
				_this.sendCode()
			},
			handleBack() {
				this.$router.back()
			},
			handleTelLoginConfirm() {
				get('/health-web/smsVerify/captcha/check?', {
					mobile: this.finalTel,
					captcha: this.finalCode
				}).then((res) => {
					console.log(res)
					switch(res.code) {
						case 10000011:
							plus.nativeUI.toast('验证码错误')
							break;
						case 0:
							plus.nativeUI.toast('验证码正确')
							this.$router.push({
								path: '/userInfo/confirmInfo'
							})
							break;
						default:
							break;
					}
				}).catch((err) => {
					console.log(err)
				})

			},
			provin(e) {
				var keynum = window.event ? e.keyCode : e.which;
				var keychar = String.fromCharCode(keynum)
				if(keynum == 189 || keynum == 190 || keynum == 110 || keynum == 109) {
					this.$message.warning('禁止输入小数及负数')
					e.target.value = ''
				} else {
					this.finalTel = e.target.value
					console.log(this.finalTel)
				}
			},
			provin1(e) {
				var keynum = window.event ? e.keyCode : e.which;
				var keychar = String.fromCharCode(keynum)
				if(keynum == 189 || keynum == 190 || keynum == 110 || keynum == 109) {
					this.$message.warning('禁止输入小数及负数')
					e.target.value = ''
				} else {
					this.finalCode = e.target.value
					console.log(this.finalCode)
				}
			},
		}
	}
</script>

<style>
	@import "../../assets/login/telLogin.css";
</style>