<template>
	<div id="userInfo-identity">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>你的身份是？</span>
				<span>请根据您的身份，推荐最优计划</span>
			</div>

			<div class="infoSelection">
				<el-button type="danger" round @click="">确认</el-button>
				<el-button type="danger" round @click="">确认</el-button>
				<el-button type="danger" round @click="">确认</el-button>
				<el-button type="danger" round @click="">确认</el-button>
			</div>
		</section>
		<footer @click="handleNext()">下一步</footer>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			handleNext(){
				this.$router.push('/userInfo/habit')				
			}
		}
	}				

</script>

<style  scoped="scoped">
	@import '../../assets/common/scss/common.css';
	@import '../../assets/userInfo/identity/indentity.css';
</style>