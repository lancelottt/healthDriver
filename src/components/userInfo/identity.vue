<template>
	<div id="userInfo-identity">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>您的基本状况</span><span class="skip" @click="handleSkip()">跳过</span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>{{identityList.navClassifyName}}</span>
				<span>{{identityList.describ}}</span>
			</div>

			<div class="infoSelection">
				<div class="" v-for="(item,index) in identityList.children">
					<!--<input type="checkbox" name="" id="diseaseCheckbox" value="item.navValue"/>
					<label for="diseaseCheckbox">
						<p>{{item.navValue}}</p>
					</label>-->
					<button class='el-button-bigSelection' type="danger" round @click="handlerVal(item.navValue)">{{item.navValue}}</button>
				</div>
				<!--<button class='el-button-bigSelection' type="danger" round @click="">确认</button>
				<button class='el-button-bigSelection' type="danger" round @click="">确认</button>
				<button class='el-button-bigSelection' type="danger" round @click="">确认</button>-->
			</div>
			<button class="my-middle-el-button--danger" @click="handleNext();handlerIdentityInfo(identitySelected)"><span>下一步</span></button>
			<div>{{userInfoList}}</div>
		</section>

		<!--<footer @click="handleNext()">下一步</footer>-->
	</div>
</template>

<script>
	import Store from '@/store/index.js'
	import Vuex from 'vuex'
	import { setCookie, getCookie, delCookie } from '@/utils/holdno';
	import { get } from '../../api/fetch.js'
	export default {
		data() {
			return {
				identityList: [],
				myIdentityList: [],
				identitySelected:'',
			}
		},
		computed:{
			...Vuex.mapState({
				userInfoList:state=>state.userInfoStore.userInfoList
			})
		},
		created() {
			setCookie("hiCookie", "hiCookie", 30)
			var _this = this
			get('/health-web/sys/navDicWeb/navDicList', {}).then(
				(res) => {
					console.log(res)
					if(res.msg == 'success') {
						this.identityList = res.data[1]
//						console.log(this.identityList)
//						_this.turnIdentityList()
					}
				}
			).catch(
				(err) => {
					console.log(err)
				}
			)
		},
		mounted() {
//				var ko = getCookie('hiCookie')
//				console.log(ko)
		},
		methods: {
			...Vuex.mapActions({
				handlerIdentityInfo:'handlerIdentityInfo'
			}),
			handleSkip() {
				this.$router.push('/healthPlan/makeHealthPlan')
			},
			handleBack() {
				this.$router.back()
			},
			handleNext() {
				var identitySelectedCookie = setCookie('identitySelectedCookie')
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
				this.identitySelected = params
			}
		}
	}
</script>

<style>
	@import '../../assets/userInfo/identity/indentity.css';
</style>