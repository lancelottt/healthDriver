<template>
	<div id="">
		<div class="hitCard">
			<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>我的提醒</span><span></span></header>
			<h1>健康自律养成计划</h1>
			<h2>1/28天</h2>
			<div class="myPlan" v-for="(item,index) in this.memberRemindList">
				<div class="healthPlan-mask">
					<div class="mask-left">
						<h1>{{item.remindItemName}}</h1>
						<h2>现在开始你的打卡计划</h2>
					</div>
					<div class="mask-right">
						<span @click="handlerModifyRemind(item)">设置</span>
						<i>删除</i>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import store from '@/store/index'
	import remindStore from '@/store/remindStore'
	import {get,post} from '../../api/fetch.js'
	export default{
		data(){
			return{
				memberRemindList:[]
			}
		},
		created(){
			get('/health-web/frontMemberScheme/healthCorona',{}).then((res)=>{
//				/health-web/frontMemberScheme/memberRemindList
				console.log(res)
				this.memberRemindList = res.memberRemindScheme.memberRemindSchemeItemList
			})
		},
		methods:{
			handleBack(){
				this.$router.back()
			},
			handlerModifyRemind(item){
				console.log(item)
				this.$store.dispatch('handlerRemindDispatch',item)
				this.$router.push('/myReminder/myRemindDetail')
			}
		}
	}
</script>

<style>
	@import url("../../assets/healthPlan/myReminder/myReminder.css");
</style>