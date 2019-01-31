<template>
	<div id="userInfo-confirmInfo">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="confirmInfo-main">
			<!--<i-switch style='{width: 6rem!important;}' name="slider">
				<span slot="open">男士</span>
				<span slot="close">女士</span>
			</i-Switch>-->
			<div class="testswitch">
				<input class="testswitch-checkbox" id="onoffswitch" type="checkbox" @change="handleGenderChange()" ref='qwer' v-model="checkBoxVal">
				<label class="testswitch-label" for="onoffswitch">
					<span :class="checkBoxVal?'yess testswitch-inner':'noo testswitch-inner'" data-on="男士" data-off="女士"  ></span><!--testswitch-inner-->
					<span class="testswitch-switch"></span>
				</label>
			</div>
			<div class="confirmInfo-info  onlyBottomBorder">
				<span>生日</span>
				<el-input v-model="inputPhone" placeholder="请输入生日"></el-input>
				<span>身高</span>
				<el-input v-model="inputVarifyCode" placeholder="请输入身高 "></el-input>
				<span>当前体重</span>
				<el-input v-model="inputCurrentWeight" placeholder="请输入当前体重"></el-input>
				<span>目标体重</span>
				<el-input v-model="inputTargetWeight" placeholder="请输入目标体重 "></el-input>
				<div class="confirmInfo-hint">
					请如实填写，将根据您的信息推荐适合您的瘦身方法
				</div>
			</div>

		</section>
		<footer><span @click="handleGo()">下一步</span>

			<!--<div class="block">
				<span class="demonstration">显示间断点</span>
				<el-slider v-model="value7" :step="100" show-stops>
					
				</el-slider>
			</div>-->

		</footer>
	</div>

</template>

<script>
	export default {
		data() {
			return {
				checkBoxVal: false,
				inputPhone: '',
				inputVarifyCode: '',
				inputCurrentWeight: '',
				inputTargetWeight: '',
				gender: true,
				checkbox: true
			}
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			handleGo() {
				this.$router.push({
					path: '/userInfo/identity'
				})
			},
			handleGenderChange() {
				if(this.$refs.qwer.checked) {
					this.$refs.qwer.style.color = 'red'
				}
			}

		},

	}
</script>

<style>
	@import '../../assets/common/scss/common.css';
	@import '../../assets/userInfo/confirmInfo.css';
	.yess::before {
		color: rgba(255, 94, 58, 1);
		transition: color ease-in-out 1s;
	}
	
	.noo::after {
		color: rgba(255, 94, 58, 1);
		transition: color ease-in-out 1s;
	}
</style>