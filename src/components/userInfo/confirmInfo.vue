<template>
	<div id="userInfo-confirmInfo">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="confirmInfo-main">
			<!--<i-switch style='{width: 6rem!important;}' name="slider">
				<span slot="open">男士</span>
				<span slot="close">女士</span>
			</i-Switch>-->
			<!--<div class="testswitch">
				<input class="testswitch-checkbox" id="onoffswitch" type="checkbox" @change="handleGenderChange()" ref='qwer' v-model="checkBoxVal">
				<label class="testswitch-label" for="onoffswitch">
					<span :class="checkBoxVal?'yess testswitch-inner':'noo testswitch-inner'" data-on="男士" data-off="女士"  ></span>
					<span class="testswitch-switch"></span>
				</label>
			</div>-->
			<div class="genderSelect">
				<input class="genderCheckBox" type="checkbox" name="" id="genderCheckBox" value="" v-model="isGirl" />
				<label for="genderCheckBox" v-model="isGirl">
					<div v-model="isGirl"  :class="isGirl?'girl':''">
						<i class="iconfont icon-girl"></i>
						<span>我是女生</span>
					</div>
					<div v-model="isGirl" :class="isGirl?'':'boy'">
						<i class="iconfont icon-boy"></i>
						<span>我是男生</span>
					</div>
				</label>
			</div>
			<div class="confirmInfo-info  onlyBottomBorder">
				<span>生日</span>
				<el-input v-model="inputBirth" placeholder="请输入生日"></el-input>
				<span>身高</span>
				<el-input v-model="inputHeight" placeholder="请输入身高(cm) "></el-input>
				<span>当前体重</span>
				<el-input v-model="inputCurrentWeight" placeholder="请输入当前体重(kg)"></el-input>
				<span>目标体重</span>
				<el-input v-model="inputTargetWeight" placeholder="请输入目标体重 (kg)"></el-input>
				<div class="confirmInfo-hint">
					请如实填写，将根据您的信息推荐适合您的瘦身方法
				</div>
				<!--				<h2>你选的是：<br />身高：<i>{{inputHeight}}</i><br />生日：<i>{{inputBirth}}</i><br />性别：<i>{{gender}}</i><br />当前体重 ：<i>{{inputCurrentWeight}}</i><br />目标体重：<i>{{inputTargetWeight}}</i></h2>
--></div>
			<h2>userId:{{userId}}</h2>
			<button class="my-big-el-button--danger" @click="handleGo()"><span>确认</span></button>
		</section>
		<!--<footer><span @click="handleGo()">下一步</span></footer>-->

		<!--<div class="block">
				<span class="demonstration">显示间断点</span>
				<el-slider v-model="value7" :step="100" show-stops>
					
				</el-slider>
			</div>-->

	</div>

</template>

<script>
	import { setCookie, getCookie, delCookie } from '@/utils/holdno';
	import bus from '@/utils/bus.js'
	import { get, post } from '../../api/fetch'
	//	import Vuex from 'Vuex'
	//	import userInfoStore from '@/store/userInfoStore'
	export default {
		data() {
			return {
				isGirl: false,
				gender: '',
				checkBoxVal: false,
				inputBirth: '',
				inputHeight: '',
				inputCurrentWeight: '',
				inputTargetWeight: '',
				checkbox: true,
				userId:''
			}
		},
//		created() {
//			var newIdCookie = getCookie('idCookie')
//			this.userId = newIdCookie
//			console.log(newIdCookie)
//			console.log(this.userId)
//		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			handleGo() {
				this.judgeGender()
				console.log(this.gender)
				console.log(parseInt(this.inputBirth))
				console.log(this.inputHeight)
				console.log(this.inputCurrentWeight)
				console.log(this.inputTargetWeight)
				post('/health-web/modules/umsmember/update', {
					contentType: "application/json",
					data: JSON.stringify({
						"gender": parseInt(this.gender),
						"birthday": this.inputBirth,
						'stature': parseInt(this.inputHeight),
						'currWeight': parseInt(this.inputCurrentWeight),
						'targetWeight': parseInt(this.inputTargetWeight),
						'omplete_status': 3,
					})
				}).then(
					(res) => {
						console.log(res)
						this.$router.push({
							path: '/userInfo/identity'
						})
					}
				).catch()

			},
			judgeGender() {
				if(this.isGirl) {
					this.gender = 2
				} else {
					this.gender = 1
				}
			},
			//			handlerUpdate(){
			//				this.$store.dispatch("handlerInfo",111)
			//			}
		},
		created(){
			bus.$on('txt',function(val){
				console.log(val)
				this.userId = val
				console.log(JSON.stringify(val))
			})
		}

	}
</script>

<style>
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