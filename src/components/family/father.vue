<template>
	<div class="conZ">
		<div class="conclu">
			<div class="conHea">
				<div class="hadHeader">
					<div>
						<div class="componentHeader-header">
							<div class="Tp" @click="handlerBack()">
								<i class="iconfont Tpi icon-jiantou-left"></i>
							</div>
							<div class="headerAmic">{{this.$route.query.nameValue}}</div>
						</div>
					</div>
				</div>
			</div>
			<!-- 结论** -->
			<div class="sion">
				<div class="faMoImg">
					<img :src='umsMember.icon' alt="" />
				</div>
				<div class="siCon">
					<p v-for="item in pVal">
						{{item.Val}}
					</p>
					<div class="dPhone" @click="handPhone(umsMember.phone)">
						<div class="statusCircl">
							<ul>
								<li>
									<img :src='img' alt="" />
								</li>
								<li>给爸爸打个电话吧</li>
							</ul>
						</div>
					</div>
				</div>
				<div class="jieL"></div>
			</div>
		</div>
		<!-- 最新数据** -->
		<div class="shujuZ">
			<div class="newData">
				<div class="shuJ">
					<div class="shuJl">最新数据</div>
					<div class="shuJr">绑定设备
						<i class="iconfont icon-fanhui1"></i>
					</div>
				</div>
				<div class="shuJul">
					<ul>
						<li @click="handBloodVal(userLatestRecord.userCode)">
							<div class="press">
								<div class="pressL">
									<div class="preSp">
										<span class="preSpan">
									</span>
									</div>
									<div class="preS" :class="xueya">
										<span>血压</span>
										<span>mmHg</span>
									</div>
								</div>
								<div class="pressR">
									{{dayVal}}
								</div>
							</div>
							<div class="press">
								<div class="pressL">
									<div class="preSpWu">
									</div>

								</div>
							</div>
						</li>
						<!--血糖**-->
						<li :style="liPro" @click="handsugar(userLatestRecord.userCode)">
							<div class="press" :style="pressObject">
								<div class="pressL">
									<div class="preSp">
										<span class="preSpanXutan"></span>
									</div>
									<div class="preS" :style="styleXuObject">
										<span>血糖</span>
										<span>mmol/L</span>
									</div>

								</div>
								<div class="pressR" :style="styleXuObject">
									{{bloor}}
								</div>
							</div>
							<div class="press">
								<div class="preSpWuXuya">
								</div>
							</div>
						</li>
						<!--睡眠**-->
						<!--<li @click="handSleep(userLatestRecord.userCode)">
							<div class="press">
								<div class="pressL">
									<div class="preSp">
										<span class="sleep"></span>
									</div>
									<div class="preS" :style="sleepObject">
										<span>睡眠</span>
										<span>小时/分</span>
									</div>

								</div>
								<div class="pressR" :style="sleepObject">
									{{sleepVal}}
								</div>
							</div>
							<div class="press">
								<div class="preWight"></div>
							</div>
						</li>-->
						<!--体重**-->
						<li :style="liProWeight" @click="handWeight(userLatestRecord.userCode)">
							<div class="press">
								<div class="pressL">
									<div class="preSp">
										<span class="preSpanWeight"></span>
									</div>
									<div class="preS" :style="styleXuWeight">
										<span>体重</span>
										<span>kg</span>
									</div>

								</div>
								<div class="pressR" :style="styleXuWeight">
									{{weight}}
								</div>
							</div>
							<div class="press">
								<div class="preWight"></div>
							</div>
						</li>

					</ul>
				</div>
			</div>
		</div>
	</div>
</template>
<style lang="" scoped>
	@import './cssFami/father.css';
	.classA {
		color: #c895d8;
	}
</style>
<script>
	import { get } from '../../api/fetch.js';
	export default {
		data() {
			return {
				pVal: [{
						Val: '爸爸最近偷懒了哦，并没有记录任何健康数据，小妙也无'
					},
					{
						Val: '无法告诉你爸爸需要注意些什么呢～'
					},
					{
						Val: '买的智能设备要记得用，很简单的操作就能记录家人的健'
					},
					{
						Val: '康数据，小妙还能给出精准的解读。快快提醒家人测量数'
					},
					{
						Val: '据吧～'
					}
				],
				img: '../../../static/images/phoneF.png',
				umsMember: '',
				userLatestRecord: '',
				dayVal: '',
				weight: '',
				//				血糖**
				bloor: '',
				//				睡眠**
				sleepVal: '',
				sleepObject: {
					color: '#7EB4E5'
				},
				xueya: 'classA',
				liPro: {
					background: '#FFF6E6',
					marginTop: '.09rem'
				},
				liProWeight: {
					background: '#F3FBF0',
					marginTop: '.09rem'
				},
				styleXuObject: {
					color: '#F2A840'
				},
				styleXuWeight: {
					color: '#70B454'
				},
				pressObject: {
					marginTop: '.1rem'
				}

			}
		},
		methods: {
			handlerBack() {
				this.$router.back()
			},
//			体重跳转**
            handWeight(userCode){
            	this.$router.push({
            		path:'/wei',
            		query:{
            			userCode:userCode
            		}
            	})
            	
            },
//          血糖跳转**
            handsugar(userCode){
            	this.$router.push({
            		path:'/bloodSu',
            		query:{
            			userCode:userCode
            		}
            	})
            },
//          血压**
             handBloodVal(userCode){
             	this.$router.push({
            		path:'/familyBlood',
            		query:{
            			userCode:userCode
            		}
            	})
             },
//           睡眠跳转                                                                                                                         **
            handSleep(userCode) {
//          	this.$router.push({
//          		path:'/familyBlood',
//          		query:{
//          			userCode:userCode
//          		}
//          	})
            },
			userInfo() {
				const paramsa = {
					code: this.$route.query.buserCode
				};
				get('/health-web/modules/umsmember/userInfo', paramsa).then((res) => {
					if(res.code == 0) {
						this.umsMember = res.umsMember
					}
				})
			},
			//			打电话**
			handPhone(phoneNumber) {
				// 调用拨号功能
				window.location.href = 'tel://' + phoneNumber
			},
			bloodPressure() {
				get('/health-web/modules/userDataRecord/otherLatestInfo/' + this.$route.query.buserCode + "/blood_pressure").then((res) => {
					if(res.code == 0) {
						this.userLatestRecord = res.userLatestRecord;
						let s2 = res.userLatestRecord.createTime
						let newDate = new Date();
						let s1 = newDate.getTime();
						let total = (s1 - s2) / 1000;
						let day = parseInt(total / (24 * 60 * 60))
						if(day > 7) {
							this.dayVal = '近7天无数据'
						} else {
							if(res.userLatestRecord.bloodPressureLow == null && res.userLatestRecord.bloodPressureHigh == null) {
								this.dayVal = '近7天无数据'
							} else if(res.userLatestRecord.bloodPressureLow != null && res.userLatestRecord.bloodPressureHigh == null) {
								this.dayVal = res.userLatestRecord.bloodPressureLow + 'mmHg'
							} else if(res.userLatestRecord.bloodPressureLow == null && res.userLatestRecord.bloodPressureHigh != null) {
								this.dayVal = res.res.userLatestRecord.bloodPressureHigh + 'mmHg'
							} else {
								this.dayVal = res.userLatestRecord.bloodPressureLow + 'mmHg~' + res.userLatestRecord.bloodPressureHigh + 'mmHg'
							}
						}
					}
				})
			},
			bloodGlucose() {
				get('/health-web/modules/userDataRecord/otherLatestInfo/' + this.$route.query.buserCode + "/blood_glucose").then((res) => {
					if(res.code == 0) {
						this.userLatestRecord = res.userLatestRecord;
						let s2 = res.userLatestRecord.createTime
						let newDate = new Date();
						let s1 = newDate.getTime();
						let total = (s1 - s2) / 1000;
						let day = parseInt(total / (24 * 60 * 60))
						if(day > 7) {
							this.bloor = '近7天无数据'
						} else {
							if(res.userLatestRecord.bloodPressureLow == null && res.userLatestRecord.bloodPressureHigh == null) {
								this.bloor = '近7天无数据'
							} else if(res.userLatestRecord.bloodPressureLow == null && res.userLatestRecord.bloodPressureHigh != null) {
								this.bloor = res.userLatestRecord.bloodPressureHigh + 'mmol/L'
							} else if(res.userLatestRecord.bloodPressureLow != null && res.userLatestRecord.bloodPressureHigh == null) {
								this.bloor = res.userLatestRecord.bloodPressureLow + 'mmol/L'
							} else {
								this.bloor = res.userLatestRecord.bloodPressureLow + 'mmol/L~' + res.userLatestRecord.bloodPressureHigh + 'mmol/L'
							}
						}
					}
				})
			},
			//			         体重**
			weightValue() {
				get('/health-web/modules/userDataRecord/otherLatestInfo/' + this.$route.query.buserCode + "/weight_value").then((res) => {
					if(res.code == 0) {
						this.userLatestRecord = res.userLatestRecord;
						let s2 = res.userLatestRecord.createTime
						let newDate = new Date();
						let s1 = newDate.getTime();
						let total = (s1 - s2) / 1000;
						let day = parseInt(total / (24 * 60 * 60))
						if(day > 7) {
							this.weight = '近7天无数据'
						} else {
							if(res.userLatestRecord.bloodPressureLow == null && res.userLatestRecord.bloodPressureHigh == null) {
								this.weight = '近7天无数据'
							} else if(res.userLatestRecord.bloodPressureLow == null && res.userLatestRecord.bloodPressureHigh != null) {
								this.weight = res.userLatestRecord.bloodPressureHigh + 'kg'
							} else if(res.userLatestRecord.bloodPressureLow != null && res.userLatestRecord.bloodPressureHigh == null) {
								this.weight = res.userLatestRecord.bloodPressureLow + 'kg'
							} else {
								this.weight = res.userLatestRecord.bloodPressureLow + 'kg~' + res.userLatestRecord.bloodPressureHigh + 'kg'
							}
						}
					}
				})
			},
			//			睡眠**
			sleep() {
				get('/health-web/modules/userDataRecord/otherLatestInfo/' + this.$route.query.buserCode + "/sleep").then((res) => {
					if(res.code == 0) {
						this.userLatestRecord = res.userLatestRecord;
						let s2 = res.userLatestRecord.createTime
						let newDate = new Date();
						let s1 = newDate.getTime();
						let total = (s1 - s2) / 1000;
						let day = parseInt(total / (24 * 60 * 60))
						if(day > 7) {
							this.sleepVal = '近7天无数据'
						} else {
							if(res.userLatestRecord.bloodPressureLow == null && res.userLatestRecord.bloodPressureHigh == null) {
								this.sleepVal = '近7天无数据'
							} else if(res.userLatestRecord.bloodPressureLow == null && res.userLatestRecord.bloodPressureHigh != null) {
								this.sleepVal = res.userLatestRecord.bloodPressureHigh + '小时/分'
							} else if(res.userLatestRecord.bloodPressureLow != null && res.userLatestRecord.bloodPressureHigh == null) {
								this.sleepVal = res.userLatestRecord.bloodPressureLow + '小时/分'
							} else {
								this.sleepVal = res.userLatestRecord.bloodPressureLow + '小时/分~' + res.userLatestRecord.bloodPressureHigh + '小时/分'
							}
						}
					}
				})
			}
		},
		created() {
			this.userInfo();
			//			血压**
			this.bloodPressure();
			//			血糖**
			this.bloodGlucose();
			//			体重**
			this.weightValue();
			//			睡眠**
			this.sleep();
		}
	}
</script>
