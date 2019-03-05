<template>
	<div id="invitation">
		<header>
			<!--<span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span>--></header>
		<!--iconfont icon-xiangzuojiantou-->
		<div class="invitation-content">
			<el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm varyfyInviteCode-container">
				<h3 class="title">请输入邀请码</h3>
				<el-form-item prop="varifyCode">
					<el-input type="varifyCode" v-model="ruleForm.varifyCode" auto-complete="off" placeholder="邀请码"></el-input>
				</el-form-item>
			</el-form>
			<el-button type="danger" round class="inviteInfoRight" @click="invitationHandleSure()">确定</el-button>
			<h2 class="varifyCodeHint">“邀请码是健康驾校为会员用户提供的专属
					编码，普通用户需要有会员的推荐方可正
					常使用以及购买健康商品，快去找您身边
					的健康驾校会员吧”
			</h2>
		</div>
		<!--<footer @click="invitationHandleSure()">确定 </footer>-->
	</div>
</template>

<script>
	import axios from 'axios'
	export default {
		data() {
			return {
				ruleForm: {
					//username和password默认为空
					varifyCode: '',
				},
				rules: {
					varifyCode: [{
						required: true,
						message: '请输入邀请码',
						trigger: 'blur'
					}]
				}
			}
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			invitationHandleSure() {
				this.$router.push({
					path: '/invitation/invitationInfo'
				})
			},
			getTokenUser() {
				axios({
					method: "get",
					url: 'http://192.168.1.164:8080/health-web/modules/umsmember/getUser',
					//      data: obj,
					headers: {
						'token': 'abcd123456'
					}
				}).then((res)=> {
					console.log(res);
				});
			}
		},
		mounted() {
			this.getTokenUser()
		},
		created() {

		},
		befoteUpdated() {
			this.$message({
				message: '验证码不为空即可',
				type: 'success'
			})
		}
	}
</script>
<style>
	@import '../../assets/invite/inviteCode/invite.css';
</style>