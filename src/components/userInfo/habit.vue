<template>
	<div id="userInfo-identity">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>你的习惯是？</span>
				<span>平时的习惯决定运动量和饮食方案</span>
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
				this.$router.push('/userInfo/sport')
			}
		}
	}
</script>

<style  scoped="scoped">
	@import '../../assets/common/scss/common.css';
	@import '../../assets/userInfo/identity/indentity.css';
</style>