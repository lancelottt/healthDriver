<template>
	<div id="userInfo-identity">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>您的基本状况</span><span class="skip" @click="handleSkip()">跳过</span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>你的习惯是？</span>
				<span>平时的习惯决定运动量和饮食方案</span>
			</div>

			<div class="infoSelection">
				<button class="el-button-bigSelection" type="danger" round @click="">确认</button>
				<button class="el-button-bigSelection" type="danger" round @click="">确认</button>
				<button class="el-button-bigSelection" type="danger" round @click="">确认</button>
				<button class="el-button-bigSelection" type="danger" round @click="">确认</button>
				
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
				this.$router.push('/userInfo/sport')
			}
		}
	}
</script>

<style>
	@import '../../assets/userInfo/identity/indentity.css';
</style>