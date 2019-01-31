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
				<el-input v-model="inputPhone" placeholder="请输入手机号"></el-input>
				<span>验证码</span>
				<el-row class='telLogin-getVarifyCode'>
					<el-input v-model="inputVarifyCode" placeholder="请输入验证码  "></el-input>
					<a href="javascript:;">获取验证码</a>
				</el-row>
			</div>
			<span>为了保证您的账户安全，请绑定手机号，绑定成功后即可获得新人专享礼券</span>
			<el-button type="danger" round @click="handleTelLoginConfirm()">确认</el-button>
		</section>

	</div>
</template>

<script>
	export default {
		data() {
			return {
				inputPhone: '',
				inputVarifyCode: ''
			}
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			handleTelLoginConfirm() {
				this.$router.push({
					path: '/userInfo/confirmInfo'
				})
			}
		}
	}
</script>

<style>
	@import "../../assets/login/telLogin.css";
</style>