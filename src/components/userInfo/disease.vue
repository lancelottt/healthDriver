<template>
	<div id="userInfo-disease">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span class="skip" @click="handleSkip()">跳过</span></header>

		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>你有下列症状吗？</span>
				<span>请根据您的实际情况做选择</span>
			</div>

			<div class="infoSelection">
				<!--<input type="checkbox" name="" id="diseaseCheckBox1" value="高血压" v-model="disease" @activate="handleAct()"/>
				<label for="diseaseCheckBox1" >
					<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				</label>
				<input type="checkbox" name="" id="diseaseCheckBox2" value="搜索" v-model="disease" />
				<label for="diseaseCheckBox2">
					<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				</label>
				<input type="checkbox" name="" id="diseaseCheckBox3" value="1压" v-model="disease" />
				<label for="diseaseCheckBox3">
					<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				</label>

				<input type="checkbox" name="" id="diseaseCheckBox4" value="金坷垃" v-model="disease" />
				<label for="diseaseCheckBox4">
					<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				</label>
				<input type="checkbox" name="" id="diseaseCheckBox5" value="回家" v-model="disease" />
				<label for="diseaseCheckBox5">
					<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				</label>

				<span>{{disease}}</span>-->
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<!--<el-button type="danger" round @click="handleIndentityConfirm()">确认</el-button>
				<el-button type="danger" round @click="handleIndentityConfirm()">确认</el-button>-->
			</div>
			<button class="diseaseConfirmBtn" @click="handleNext()"><span>确认</span></button>
		</section>
		<!--<footer @click="handleNext()">下一步</footer>-->
	</div>
</template>

<script>
	export default {
		data() {
			return {
				disease: [],
			}
		},
		methods: {
			handleSkip() {
				this.$router.push('/healthPlan/makeHealthPlan')
			},
			handleBack() {
				this.$router.back()
			},
			handleNext() {
				this.$router.push('/healthPlan/makeHealthPlan')
			},

		}
	}
</script>

<style>

	@import '../../assets/userInfo/disease/disease.css';
</style>