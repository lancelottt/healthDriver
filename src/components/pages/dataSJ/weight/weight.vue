<template>
	<div style="padding-bottom: 1.31rem">
		<div class="weight">
			<div class="danW">单位:kg</div>
			<div class="block">
				<div class="latestWeight">
					<p>{{value2}}</p>
					<p>最新体重</p>
				</div>
				<!--<span class="demonstration">自定义初始值</span>-->
				<el-slider v-model="value2"></el-slider>
				<div class="weightVal">
					<div class="weiInitial">
						<p>{{currWeight}}</p>
						<p class="chushi">初始值</p>

					</div>
					<div class="endValue">
						<p>{{targetWeight}}</p>
						<p class="chushi">目标体重</p>
					</div>
					<div class="jiLw" @click="recordWeight()">记录体重</div>
				</div>

			</div>
		</div>

		<!-- 按天查看** -->
		<div class="dataT">
			<!-- 选项卡内容** -->
			<div class="tab-con" ref="tabCon">
				<div class="dataC" v-if="curId==0">
					<div class="dataImg">
						<ve-line v-if="isShowEcharts" :data="chartData" :settings="chartSettings" :extend="extend" legend-position="right"></ve-line>
						<div v-else>无</div>
						<!--<img src="./img/mubiao.png" alt="">-->
					</div>
					<div class="dataCon">
						<!--<p>12月08日体重记录</p>-->
						<div class="xinW">
							<div class="xinWo">
								<div class="xinImg">
									<img src="./img/weight.png" alt="">
								</div>
								<div class="xinWei">
									<div>最新体重</div>
									<div class="xinP" >{{value2}}</div>
								</div>
							</div>
							<!--<div class="xinWt">69.1kg</div>-->
							<!--<div class="xinWs">
								<div class="eait">8</div>
								<div class="xinSub">
									<span style="font-size: .32rem;">kg</span>
									<span><img src="./img/Up.png" alt=""></span>
								</div>
							</div>-->
						</div>
					</div>

				</div>
				<div v-else="" class="dataC">vddddd</div>
				<!-- <div v-show="index===curId" v-for="(content,index) in contents" :key="index">{{content.content}}</div> -->
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import { get, put } from '../../../../api/fetch.js';
	import { Toast, MessageBox } from 'mint-ui';
	export default {
		name: 'Weight',
		data() {
			return {
				isShowEcharts: true,
				curId: 0,
				value2: 0,
				currWeight: '',
				targetWeight: '',
				chartSettings: '',
				chartData: {
					columns: ['orderKey', '体重'],
					rows: [

					]
				},
				orderKey: 'days',
				startCreateTime: '',
				endCreateTime: '',
			}
		},
		methods: {
			tab(index) {
				this.curId = index;
			},
			//       体重接口**
			getUserVal() {
				get('/health-web/modules/umsmember/getUser', {}).then((res) => {
					if(res.code == 0) {
						this.currWeight = res.user.currWeight
						this.targetWeight = res.user.targetWeight
					}
				})
			},
			//			新体重**
			weightValueuSer() {
				get('/health-web/modules/userDataRecord/latestInfo/weight_value', {}).then((res) => {
					if(res.code == 0) {
						this.value2 = res.userLatestRecord.weightValue
					}
				})
			},
			//			点击记录体重调接口**
			recordWeight() {
				const params = {
					weightValue: this.value2
				}
				get('/health-web/modules/userDataRecord/save', params).then((res) => {
					if(res.code == 0) {
						Toast({
							message: '记录体重成功',
							duration: 1500
						});
//						this.$router.go(0); /**刷新整个页面**/
					}
				})
			},
			userDataAvg() {
				const params = {
					userCode: this.$route.query.userCode,
					searchKey: 'weightValue',
					orderKey: this.orderKey,
					startCreateTime: this.startCreateTime,
					endCreateTime: this.endCreateTime
				};
				put('/health-web/modules/userDataRecord/userDataAvg', params).then((res) => {
					if(res.code == 0) {
						const arrayVal = []
						res.records.forEach(item => {
							let aaaVal = {}
							aaaVal.orderKey = item.orderKey
							aaaVal.体重 = item.weightValue
							arrayVal.push(aaaVal)
						})
						this.chartData.rows = arrayVal
					}
				})
			},
			handData(){
				let curData = new Date();
				this.startCreateTime = this.formatDate(curData);
				
				let parDate=new Date(curData.getTime()-24*60*60*60*1000);
				this.endCreateTime=this.formatDate(parDate);
				this.userDataAvg()
				
			},
			  formatDate(parDate) {
				 let y = parDate.getFullYear()
				 let m = parDate.getMonth() + 1
				 m = m < 10 ? '0' + m : m
				 let d = parDate.getDate()
				 d = d < 10 ? ('0' + d) : d
				 return y + '-' + m + '-' + d
				 
			},
		},
		created() {
			this.handData();
			this.getUserVal();
			//			新体重**
			this.weightValueuSer();
			this.chartSettings = {
					area: true,
					label: {
						show: false
					},
					labelLine: {
						show: false,
					},
					radius: [55, 72]
				},
				this.extend = {
					areaStyle: {
						opacity: .9,
						color: {
							type: 'linear',
							x: 0,
							y: 0,
							x2: 0,
							y2: 1,
							colorStops: [{
								offset: 0,
								color: '#FF9500' // 0% 处的颜色
							}, {
								offset: 1,
								color: '#FF5E3A' // 100% 处的颜色
							}],
							globalCoord: false // 缺省为 false
						}
					},
					series: {
						label: {
							normal: {
								show: true
							}
						},
						lineStyle: {
							normal: {
								color: "#FF9500",
							}
						}
					},
					legend: {
						left: 10,
						top: 20,
						textStyle: {
							color: '#4DDFA9',
							fontSize: 12,
						}
					}
				}
		}
	}
</script>
<style lang="" scoped>
	@import './style/weight.css';
	.box {
		width: 85%;
		height: .04rem;
		background: rgb(196, 188, 178);
		margin: .3rem auto;
		border-radius: .2rem;
		position: relative;
	}
	.weightVal {
		width: 100%;
		height: 1.0rem;
		position: relative;
	}
	.weiInitial {
		width: 40%;
		height: auto;
		float: left;
		text-align: left;
	}
	.xinP{
		font-size: .48rem;
	}
	.endValue {
		width: 60%;
		height: auto;
		float: right;
		text-align: right;
	}
	.latestWeight {
		width: 2rem;
		margin: auto;
	}
	.box-left {
		width: .15rem;
		height: .15rem;
		border-radius: 50%;
		background: #ff5e3a;
		position: absolute;
		left: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.latestWeight p:nth-of-type(1) {
		font-size: .72rem;
		font-family: HelveticaNeue;
		font-weight: 400;
		color: rgba(153, 153, 153, 1);
	}
	.latestWeight p:nth-of-type(2) {
		font-size: .2rem;
		font-family: PingFangSC-Light;
		font-weight: 300;
		color: rgba(153, 153, 153, 1);
		margin-top: .1rem;
	}
	.box-right {
		width: .15rem;
		height: .15rem;
		border-radius: 50%;
		background: #ff5e3a;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	.box1 {
		position: absolute;
		width: 60%;
		height: 100%;
		border-radius: 20px;
		top: 0;
		left: 0;
		background: #ff5e3a;
	}
	.boxquan {
		width: .15rem;
		height: .15rem;
		position: absolute;
		right: 0;
		top: 0;
		bottom: 0px;
		margin: auto;
		border-radius: 50%;
		background: #ff5e3a;
	}
	.boxquan:after {
		content: '';
		width: .03rem;
		height: .3rem;
		position: absolute;
		bottom: 8px;
		left: 0;
		right: 0;
		margin: auto;
		background: #ff5e3a;
	}
	.danT P:nth-of-type(1) {
		font-size: .72rem;
		color: #999999;
	}
	.danT P:nth-of-type(2) {
		font-size: .20rem;
		color: #999999;
		margin-top: .1rem;
	}
	.tiZ {
		zoom: 1;
		width: 90%;
		margin: auto;
	}
	.tiZ:after {
		clear: both;
		content: '';
		display: block;
		width: 0;
		height: 0;
		visibility: hidden;
	}
	.tiNei {
		text-align: left;
		float: left;
	}
	.muB {
		text-align: left;
		float: right
	}
	.block {
		width: 90%;
		margin: auto;
		height: auto;
	}
	.block>>>.el-slider__button {
		border: 1px solid #FF5E3A;
		width: .24rem;
		height: .24rem;
		background: rgba(255, 94, 58, 1);
		border-radius: 50%;
	}
	.block>>>.el-slider__bar {
		background-color: #FF5E3A;
		height: 4px;
	}
	.block>>>.el-slider__runway {
		height: 4px;
	}
</style>