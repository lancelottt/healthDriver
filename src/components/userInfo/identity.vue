<template>
	<div id="userInfo-identity">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span class="skip"  @click="handleSkip()">跳过</span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>你的身份是？</span>
				<span>请根据您的身份，推荐最优计划</span>
			</div>

			<div class="infoSelection">
				<button class='el-button-bigSelection' type="danger" round @click="">确认</button>
				<button class='el-button-bigSelection' type="danger" round @click="">确认</button>
				<button class='el-button-bigSelection' type="danger" round @click="">确认</button>
				<button class='el-button-bigSelection' type="danger" round @click="">确认</button>
			</div>
			<button class="my-middle-el-button--danger" @click="handleNext()"><span>下一步</span></button>
		</section>
		
		<!--<footer @click="handleNext()">下一步</footer>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleSkip(){
				this.$router.push('/healthPlan/makeHealthPlan')
			},
			handleBack() {
				this.$router.back()
			},
			handleNext(){
				this.$router.push('/userInfo/habit')				
			}
		}
	}				

</script>

<style>
	@import '../../assets/userInfo/identity/indentity.css';
</style>