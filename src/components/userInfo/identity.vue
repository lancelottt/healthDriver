<template>
	<div id="userInfo-identity">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span class="skip" @click="handleSkip()">跳过</span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>{{myIdentityList.navClassifyName}}</span>
				<span>{{myIdentityList.describ}}</span>
			</div>

			<div class="infoSelection" >
				<div class="" v-for="(item,index) in myIdentityList.children">
					<button class='el-button-bigSelection' type="danger" round @click="handlerVal(item.navValue)">{{item.navValue}}</button>
				</div>
				<!--<button class='el-button-bigSelection' type="danger" round @click="">确认</button>
				<button class='el-button-bigSelection' type="danger" round @click="">确认</button>
				<button class='el-button-bigSelection' type="danger" round @click="">确认</button>-->
			</div>
			<button class="my-middle-el-button--danger" @click="handleNext()"><span>下一步</span></button>
		</section>

		<!--<footer @click="handleNext()">下一步</footer>-->
	</div>
</template>

<script>
	import { setCookie, getCookie, delCookie } from '@/utils/holdno';
	import { get } from '../../api/fetch.js'
	export default {
		data() {
			return {
				identityList: [],
				myIdentityList: [],
			}
		},
		created() {
			setCookie("hiCookie",123,30)
			var _this = this
			get('/health-web/sys/navDicWeb/navDicList', {}).then(
				(res) => {
					console.log(res)
					if(res.msg == 'success') {
						this.identityList = res.data
						console.log(this.identityList)
						_this.turnIdentityList()
					}
				}
			).catch(
				(err) => {
					console.log(err)
				}
			)
		},
		mounted(){
			var ko = getCookie('hiCookie')
			console.log(ko)
		},
		methods: {
			handleSkip() {
				this.$router.push('/healthPlan/makeHealthPlan')
			},
			handleBack() {
				this.$router.back()
			},
			handleNext() {
				this.$router.push('/userInfo/habit')
			},
			turnIdentityList() {
				for(let i in this.identityList) {
					if(this.identityList[i].navClassifyDicId == 1) {
						this.myIdentityList = this.identityList[i]
						console.log(this.myIdentityList)
					}
				}
			},
			handlerVal(params) {
				console.log(params)
			}
		}
	}
</script>

<style>
	@import '../../assets/userInfo/identity/indentity.css';
</style>