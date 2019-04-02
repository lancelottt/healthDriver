<template>
	<div class="weiZ">
		<div class="wei">
			<div class="had">
				<div>
					<div class="componentHeader-header">
						<div class="Tp" @click="Tp()">
							<i class="iconfont Tpi icon-jiantou-left"></i>
						</div>
						<div class="headerAmic">体重</div>
					</div>
				</div>
			</div>
			<div class="bloodValueTz">
				<span>{{weightValue}}</span>
				<span>kg</span>
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
				<div class="reCon">体重趋势</div>
				<div class="yF">
					<div class="yFdata">{{weightValue}}</div>
					<div class="kgZ">
						<span>kg</span>
						<span class="kgImg"></span>
					</div>
				</div>
				<div class="moZu">
					<div class="moLeft"></div>
					<div class="mound">
						<!--<select name="" id="" v-model="val">
							<option :value="item.val" v-for="item in lists" :key="item.val">{{item.name}}</option>
						</select>-->
						<div class="container">
							<div class="block">
								<data-pick @aaaa="selectdata('bbb',$event)"></data-pick>
								<!--<el-date-picker v-model="value4" type="month" placeholder="选择月">
								</el-date-picker>-->
							</div>
						</div>
						<!-- 月份 -->
					</div>
				</div>
			</div>
			<!-- 图片** -->
			<div class="trZimg" id="aaa">
				<ve-line v-if="isShowEcharts" :data="chartData" :settings="chartSettings" :extend="extend" legend-position="right"></ve-line>
			    <div v-else>无</div>
			</div>
		</div>
		<!-- 锻炼天数** -->
		<!--<div class="physic">
                    <div class="phyCon">锻炼天数</div>
                    <div class="phyData">
                        <div class="phyL">248</div>
                        <div class="phyC">
                            <div class="phyCen">
                                <div class="phyEe">8</div>
                                <div class="kgR">
                                    <span>kg</span>
                                    <span></span>
                                </div>
                            </div>
                        </div>
                        <div class="phyR"></div>
                    </div>
                </div>-->
	</div>
</template>
<script>
	import { get, put, post } from '../../api/fetch.js';
	import VeLine from 'v-charts/lib/line.common'
	import dataPick from './dataPick.vue'
	export default {
		components: {
			VeLine,dataPick
		},
		data() {
			return {
				isShowEcharts:true,
				bbb:{},
				val: 0,
				value4: '',
				weightValue: '',
				chartSettings: '',
				chartData: {
					columns: ['orderKey', 'weightValue'],
					rows: [

					]
				},
				orderKey: 'days',
				startCreateTime: '',
				endCreateTime: '',
			}
		},
		methods: {
			Tp() {
				this.$router.back();
			},
			selectdata(attr,val){
				this[attr] = val
				this.orderKey = this[attr].orderKey
				this.startCreateTime = this[attr].startCreateTime
				this.endCreateTime = this[attr].endCreateTime
				this.otherDataAvg();
			},
			otherDataAvg() {
				const params = {
					userCode: this.$route.query.userCode,
					searchKey: 'weightValue',
					orderKey: this.orderKey,
					startCreateTime: this.startCreateTime,
					endCreateTime: this.endCreateTime
				};
				put('/health-web/modules/userDataRecord/otherDataAvg', params).then((res) => {
					if(res.code == 0) {
						const arrayVal = []
						if(res.records.length == 0){
							this.isShowEcharts=false
						}else{
							this.isShowEcharts=true
							res.records.forEach(item => {
								let aaaVal = {}
								aaaVal.orderKey = item.orderKey
								aaaVal.weightValue = item.weightValue
								arrayVal.push(aaaVal)
						    })
						this.chartData.rows = arrayVal
						}
					
					}
				})
			},
			weightValueInfo() {
				const params = {
					userCode: this.$route.query.userCode
				}
				get('/health-web/modules/userDataRecord/latestInfo/weight_value', params).then((res) => {
					if(res.code == 0) {
						this.weightValue = res.userLatestRecord.weightValue
					}

				})
			}
		},
		mounted() {
			this.otherDataAvg();
			//  	最新数据**
			this.weightValueInfo();
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
	@import './cssFami/wei.css';
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
	
	#aaa div:nth-of-type(3) {
		width: 100%;
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