<template>
	<div id="invitation">
		<header>
			<!--<span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span>--></header>
		<!--iconfont icon-xiangzuojiantou-->
		<div class="invitation-content">
			<el-form label-position="left" :model="ruleForm" :rules="rules" ref="ruleForm" label-width="0px" class="demo-ruleForm varyfyInviteCode-container">
				<h3 class="title">请输入邀请码</h3>
				<el-form-item prop="varifyCode">
					<el-input type="varifyCode" v-model="ruleForm.varifyCode" auto-complete="off" placeholder="邀请码" maxlength=12 @keyup.native="provin1($event)"></el-input>
				</el-form-item>
			</el-form>
			<el-button type="danger" round class="inviteInfoRight" @click="invitationHandleSure()">确定</el-button>
			<h2 class="varifyCodeHint">“邀请码是健康驾校为会员用户提供的专属
					编码，普通用户需要有会员的推荐方可正
					常使用以及购买健康商品，快去找您身边
					的健康驾校会员吧”
			</h2>
		</div>
	</div>
</template>

<script>
	import { get, post } from '../../api/fetch.js'
	import axios from 'axios';
	import Vuex from 'vuex';
	import store from '@/store/index'
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
				},
				finalCode: '',
			}
		},
		computed: {
			...Vuex.mapState({
				userId: state => store.state.user.uid,
				token: state => store.state.user.token
			})
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			invitationHandleSure() {
				var _this = this
				console.log(store.state.myInfo.openid)
				post('/health-web/modules/umsdistribution/update?userId='+store.state.user.uid+'&promotionCode=' + this.finalCode)
					.then((res) => {
						console.log(this.finalCode)
						console.log(res)
						_this.sendProCode()
						get('/health-web/modules/umsdistribution/userInfoByPromotionCode?promotionCode='+this.finalCode, {
							//				promotionCode:store.state.promotionCode
						}).then((suc) => {
							console.log(suc)
							this.inviter = suc.user
							console.log(this.inviter)
							switch(suc.code){
								case 10000006:
								_this.$router.push({
									path: '/noInviter'
								})
								break;
								case 0:
								_this.$router.push({
									path: '/invitation/invitationInfo'
								})
								break;
								default:break;
							}
						}).catch((err) => {
							console.log(err)
						})
						
					})
			},
			getTokenUser() {
				//				axios({
				//					method: "get",
				//					url: 'http://192.168.1.164:8080/health-web/modules/umsmember/getUser',
				//					//      data: obj,
				//					headers: {
				//						'token': 'abcd123456'
				//					}
				//				}).then((res)=> {
				//					console.log(res);
				//				});
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
			sendProCode() {
				this.$store.dispatch("handlerProCodeAction", this.finalCode)
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