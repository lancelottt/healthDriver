<template>
	<div id="userInfo-sport">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span class="skip" @click="handleSkip()">跳过</span></header>

		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>你有运动基础吗？</span>
				<span>运动基础决定课程表难度</span>
			</div>

			<div class="infoSelection">
				<button class='sportSelectionBtn' type="button" @click="">运动基础较弱</button>
				<span class="infoHint-info">我想从简单的训练开始</span>
				<button class='sportSelectionBtn' type="button" @click="">有一定运动基础</button>
				<span class="infoHint-info">可以给我有难度一点的训练</span>
				<!--<el-button type="danger" round @click="handleIndentityConfirm()">确认</el-button>
				<el-button type="danger" round @click="handleIndentityConfirm()">确认</el-button>-->

			</div>
			<button class="sportConfirmBtn" @click="handleNext()"><span>下一步</span></button>
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
			handleNext() {
				this.$router.push('/userInfo/disease')
			}
		}
	}
</script>

<style>
	@import '../../assets/userInfo/sport/sport.css';
</style>