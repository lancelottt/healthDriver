<template>
	<div id="userInfo-sport">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>你有运动基础吗？</span>
				<span>运动基础决定课程表难度</span>
			</div>

			<div class="infoSelection">
				<el-button type="danger" round @click="">运动基础较弱</el-button>
				<span class="infoHint-info">我想从简单的训练开始</span>
				<el-button type="danger" round @click="">有一定运动基础</el-button>
				<span class="infoHint-info">可以给我有难度一点的训练</span>
				<!--<el-button type="danger" round @click="handleIndentityConfirm()">确认</el-button>
				<el-button type="danger" round @click="handleIndentityConfirm()">确认</el-button>-->
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
				this.$router.push('/userInfo/disease')
			}
		}
	}
</script>

<style  scoped="scoped">
	@import '../../assets/common/scss/common.css';
	@import '../../assets/userInfo/sport/sport.css';
</style>