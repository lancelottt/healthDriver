<template>
	<div class="weiZ">
		<div class="wei">
			<div class="had">
				<div>
					<div class="componentHeader-header">
						<div class="Tp" @click="Tp()">
							<i class="iconfont Tpi icon-jiantou-left"></i>
						</div>
						<div class="headerAmic">血压</div>
					</div>
				</div>
			</div>
			<div class="bloodValueTz">
				<span>高:{{bloodPressureHigh}} mmHg / 低:{{bloodPressureLow}}mmHg</span>
			</div>
		</div>
		<!-- 解读与建议** -->
		<div class="unscr">
			<div class="unscrC">
				<div class="unkn">未知</div>
				<div class="unF">家人上传数据后，会给出专业的解读与建议</div>
				<div class="unImg">
					<button class="sult">
                                <div class="butL"></div>
                                <div class="butR">立即咨询</div>
                            </button>
				</div>
			</div>
		</div>
		<!-- 体重趋势** -->
		<div class="trend">
			<div class="trZ">
				<div class="reCon">高低血压趋势</div>
				<div class="yfBlood">
					<div class="yF">
						<div class="yFdata">{{bloodPressureHigh}} / {{bloodPressureLow}}</div>
						<div class="kgZ">
							<p>mmHg</p>
							<!-- <span class="kgImg"></span> -->
							<p>血压值</p>
						</div>
						<div class="tuR">

						</div>
					</div>
					<div class="yfRi">
						<div class="yfTop">
							<div class="fatY"></div>
							<div class="fasting">低血压</div>
						</div>
						<div class="yfBott">
							<div class="BottY"></div>
							<div class="Botting">高血压</div>
						</div>
					</div>
				</div>
				<div class="moZu">
					<div class="moLeft"></div>
					<div class="mound">
						<div class="container">
							<div class="block">
								<data-pick @aaaa="selectdata('bbb',$event)"></data-pick>
							</div>
						</div>
						<!-- 月份 -->
					</div>
				</div>
			</div>
			<!-- 图片** -->
			<div class="trZimg">
				<ve-line v-if="isShowEcharts" :data="chartData" :settings="chartSettings" :extend="extend" legend-position="right"></ve-line>
				<div v-else>无</div>
			</div>
		</div>
	</div>
</template>
<script>
	import { get, put, post } from '../../api/fetch.js';
	import dataPick from './dataPick.vue'
	import VeLine from 'v-charts/lib/line.common'
	export default {
		components: {
			VeLine,
			dataPick
		},
		data() {
			return {
				isShowEcharts: true,
				val: 0,
				value4: '',
				bloodPressureLow: '',
				bloodPressureHigh: '',
				chartSettings: '',
				chartData: {
					columns: ['orderKey', 'bloodPressureHigh', 'bloodPressureLow'],
					rows: [

					]
				},
				orderKey: 'days',
				startCreateTime: '',
				endCreateTime: '',
			}
		},
		mounted() {
			//     血糖中的最新数据**
			this.bloodPressure()
			this.otherDataAvg();
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
		},
		methods: {
			Tp() {
				this.$router.back()
			},
			selectdata(attr, val) {
				this[attr] = val
				this.orderKey = this[attr].orderKey
				this.startCreateTime = this[attr].startCreateTime
				this.endCreateTime = this[attr].endCreateTime
				this.otherDataAvg();
			},
			bloodPressure() {
				const params = {
					userCode: this.$route.query.userCode
				}
				get('/health-web/modules/userDataRecord/latestInfo/blood_pressure', params).then((res) => {
					if(res.code == 0) {
						this.bloodPressureLow = res.userLatestRecord.bloodPressureLow
						this.bloodPressureHigh = res.userLatestRecord.bloodPressureHigh
					}
				})
			},
			otherDataAvg() {
				const params = {
					userCode: this.$route.query.userCode,
					searchKey: 'bloodPressureHigh',
					orderKey: this.orderKey,
					startCreateTime: this.startCreateTime,
					endCreateTime: this.endCreateTime
				};
				put('/health-web/modules/userDataRecord/otherDataAvg', params).then((res) => {
					if(res.code == 0) {
						const arrayVal = []
						if(res.records.length == 0) {
							this.isShowEcharts = false
						} else {
							this.otherDataAvgLow(res.records)
						}
					}
				})
			},
			otherDataAvgLow(abc) {
				const params = {
					userCode: this.$route.query.userCode,
					searchKey: 'bloodPressureLow',
					orderKey: this.orderKey,
					startCreateTime: this.startCreateTime,
					endCreateTime: this.endCreateTime
				};
				put('/health-web/modules/userDataRecord/otherDataAvg', params).then((res) => {
					if(res.code == 0) {
						 const dataList = []
					      abc.forEach(item => {
					      	res.records.forEach(itema => {
					      		 if (item.orderKey === itema.orderKey) {
					      		 	     const aaa = {}
					      		 	     aaa.orderKey = itema.orderKey
					      		 	     aaa.bloodPressureLow = itema.bloodPressureLow
					      		 	     aaa.bloodPressureHigh= item.bloodPressureHigh
					      		 	     dataList.push(aaa)
					      		 }
					      	})
					      })
					       this.chartData.rows = dataList
					}
				})
			}
		}
	}
</script>
<style lang="" scoped>
	@import '../../assets/familyBlood/familyBlood.css';
	.wei {
		position: relative;
	}
	
	.bloodValueTz {
		position: absolute;
		left: 0;
		right: 0;
		top: 2.3rem;
		margin: auto;
	}
	
	.bloodValueTz span:nth-of-type(2) {
		font-size: .3rem;
		color: #FFFBFB;
	}
	
	.bloodValueTz span:nth-of-type(1) {
		font-size: .4rem;
		color: #FFFFFF;
	}
	
	.mound>>>.el-date-editor.el-input,
	.el-date-editor.el-input__inner {
		width: 114px;
	}
	
	#aaa>>>canvas {
		position: absolute;
		left: -9px;
		top: 0px;
		width: 320px;
		height: 400px;
		user-select: none;
		-webkit-tap-highlight-color: rgba(0, 0, 0, 0);
		padding: 0px;
		margin: 0px;
		border-width: 0px;
	}
</style>