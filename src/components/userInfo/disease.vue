<template>
	<div id="userInfo-disease">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>您的基本状况</span><span class="skip" @click="handleSkip()">跳过</span></header>

		<!--iconfont icon-xiangzuojiantou-->
		<section class="identity-con">
			<div class="infoHint">
				<span>{{myDiseaseList.navClassifyName}}</span>
				<span>{{myDiseaseList.describ}}</span>
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
				<div id="" v-for="(item,index) in myDiseaseList.children">
					<label :for="index" class='el-button-bigSelection modified-bigSelection  labelll' :class=""  type="danger" round @click="handlerVal(item.navValue)" @change="handlerChage($event)" ref = 'zxc'>
						{{item.navValue}}<input type="checkbox" class="inputtt" name="" :id="index" :value="item.navValue" v-model="diseaseValBox" ref='qwer'/>
					</label>

					<!--<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="handlerVal(item.navValue)">{{item.navValue}}</button>-->
				</div>

				<!--<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>
				<button class='el-button-bigSelection modified-bigSelection' type="danger" round @click="">高血压</button>-->
				<!--<el-button type="danger" round @click="handleIndentityConfirm()">确认</el-button>
				<el-button type="danger" round @click="handleIndentityConfirm()">确认</el-button>-->
			</div>
			<div>{{this.diseaseValBox}}</div>
			<button class="diseaseConfirmBtn" @click="handleNext()"><span>确认</span></button>
		</section>
		<!--<footer @click="handleNext()">下一步</footer>-->
	</div>
</template>

<script>
	import store from '@/store/index'
	import { get } from '../../api/fetch.js'
	import { getCookie, setCookie } from '@/utils/holdno.js'
	export default {
		data() {
			return {
				diseaseList: [],
				myDiseaseList: [],
				diseaseValBox: [],
				checkBox: false,
				stclass: 'checkedClass',
				isActive: false
			}
		},
		computed: {},
		created() {
			get('/health-web/sys/navDicWeb/navDicList', {}).then(
				(res) => {
					if(res.msg == 'success') {
						console.log(res)
						this.diseaseList = res.data
						//						console.log(this.diseaseList)
						this.turnDiseaseList()
					}
				}
			).catch(
				(err) => {
					console.log(err)
				}
			)
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
			turnDiseaseList() {
				for(let i in this.diseaseList) {
					if(this.diseaseList[i].navClassifyDicId == 1) {
						this.myDiseaseList = this.diseaseList[i]
						console.log(this.myDiseaseList)
					}

				}
			},
			handlerVal(params) {
//				console.log(this.checkBox)
			},
			handlerChage(e) {
				var _this = this
				var inputtt = []
				if(e.target.checked == true) {
					var kk = document.querySelectorAll('.labelll')
					 inputtt= document.querySelector('.inputtt')
					console.log(inputtt)
//					console.log(kk)
					for(var i in kk){
						var qq = kk[i].childNodes
//						console.log(qq)
						var ww = this.$refs.qwer
//						console.log(ww)
						for(var j in ww){
							var ee = ww[j].innerHTML
//							console.log(ee)
						}
//						kk[i].className =  kk[i].childNodes
					}
//					for(var i in kk){
//						console.log(kk[i].childNodes)
//						kk[i] = kk[i].childNodes
//					}
//					for(var i in kk){
////						kk[i].className = 
//						var  qq = kk[i].childNodes
//						for(var  j in qq){
//							console.log(qq[j])
//						}
//					}
					e.target.className =  'active'
				}
				else{
					e.target.className = ''
				}
				var asd = _this.$refs.qwer
//				console.log(asd)
				for(var i in asd){
					if(asd[i].class=='active'){
//						console.log(asd[i].parent().parent())
					}
				}
				

				//				var target = event.target;
				//				var index = Number(target.getAttribute("data-index"));
				//				this.navActive = index;
			},
		}
	}
</script>

<style>
	@import '../../assets/userInfo/disease/disease.css';
	/*input{
		width: 5rem;
		height: 2rem;
		background: pink;
	}
	.active {
		background: red;
		width: 5rem;
		height: 2rem;
	}*/
</style>