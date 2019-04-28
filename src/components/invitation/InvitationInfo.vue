<template>
	<div id="invitationInfo">
		<header><!--<span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span>--></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="inviter">
			<div class="confirmInviteInfo">
				请确认邀请人信息
			</div>
			<div class="inviterInfo">
				<div><img :src="inviter.icon" /></div>
				<div>推荐人</div>
				<div>{{inviter.nickname}}</div>
			</div>
			<el-row>
				<el-button type="danger" round class="inviteInfoRight" @click="handleInviteInfoRight()">确认</el-button>
			</el-row>
			<el-row>
				<el-button type="danger" round class="inviteInfoWrong" @click="handleInviteWrong()" style="border: 1px  solid;">取消</el-button>
			</el-row>

			<h2 class="varifyCodeHint">“邀请码是健康驾校为会员用户提供的专属
					编码，普通用户需要有会员的推荐方可正
					常使用以及购买健康商品，快去找您身边
					的健康驾校会员吧”
			</h2>
		</section>
	</div>
</template>

<script>
	import {get,post} from '@/api/fetch';
	import Vuex from 'vuex';
	import store from '@/store/index';
	export default {
		data() {
			return {
				inviter:null,
			}
		},
		created(){
			get('/health-web/modules/umsdistribution/userInfoByPromotionCode?promotionCode=fn5m3zpisfk2',{
//				promotionCode:store.state.promotionCode
			}).then((suc)=>{
				console.log(suc)
				this.inviter=suc.user
				console.log(this.inviter)
			}).catch((err)=>{
				console.log(err)
			})
		},
		methods: {
			handleBack(){
				this.$router.back()
			},
			handleInviteInfoRight() {
				this.$router.push({
					path: '/login/telLogin'
				})
			},
			handleInviteWrong() {
				this.$router.push({
					name:'Invitation'
				})
			}
		}
	}
</script>

<style>
	@import '../../assets/invite/inviteInfo/inviteInfo.css';
	.is-round {
		background: none;
	}
</style>