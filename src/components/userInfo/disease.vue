<template>
	<div id="userInfo-disease">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>你有下列症状吗？</span>
				<span>请根据您的实际情况做选择</span>
			</div>

			<div class="infoSelection">
				<el-button type="danger" round @click="">高血压</el-button>
				<el-button type="danger" round @click="">糖尿病</el-button>
				<el-button type="danger" round @click="">糖尿病</el-button>
				<el-button type="danger" round @click="">糖尿病</el-button>
				<el-button type="danger" round @click="">糖尿病</el-button>
				<el-button type="danger" round @click="">糖尿病</el-button>
				<el-button type="danger" round @click="">糖尿病</el-button>
				<el-button type="danger" round @click="">脑梗 </el-button>
				
				
				<el-button type="danger" round @click="">糖尿病</el-button>
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
						disease:[]
			}
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			handleNext(){
				this.$router.push('/healthPlan/makeHealthPlan')
			}
		}
	}
</script>

<style>
	@import '../../assets/common/scss/common.css';
	@import '../../assets/userInfo/disease/disease.css';
</style>