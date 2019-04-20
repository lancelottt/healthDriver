<template>
	<div style="padding-bottom:2.31rem">
		<div class="dyna">
			<div class="report">
				<div class="follow">
					<ul>
						<li>
							<p>{{athleticPersistDay}}</p>
							<p>天</p>
							<p>坚持运动</p>
						</li>
						<li>
							<p>{{totalAthleticDurationValue}}</p>
							<p>分钟</p>
							<p>累计运动</p>
						</li>
						<li id="followLi">
							<p>{{totalAthleticHeatValue}}</p>
							<p>千卡</p>
							<p>累计消耗</p>
						</li>
					</ul>
				</div>
			</div>
		</div>
		<!-- 选项卡** -->
		<div style="height: auto;">
			<div class="page-navbar">
				<div class="tab_header">
					<ul>
						<li v-for="(item,index) in List" :class="{active:nowIndex===index}" @click="qiehuan(index)">{{item.item}}</li>
					</ul>
				</div>
			</div>
			<div class="consume">
				<p>{{nowyear}}年共消耗能量</p>
				<p>{{totalAthleticHeatValue}}
					<span>kcal</span>
				</p>
			</div>
			<div class="echartsVal">
				<eacharts-lin :chartData="chartData"></eacharts-lin>
			</div>
		</div>
		<div class="walk">
			<div class="walkZ">
				<div class="walkImg"></div>
				<div class="walkP">
					<p>步行{{totalAthleticStepNum}}步</p>
				</div>
				<div class="xiaoH">消耗{{totalAthleticHeatValue}}千卡</div>
			</div>
		</div>
		<!-- 选项卡结束** -->
	</div>
</template>
<script>
	import axios from 'axios';
	import { get, put } from '../../../../api/fetch.js';
	import EachartsLin from '../echartsLine';
	export default {
		components: {
			EachartsLin
		},
		name: 'page-navbar',
		data() {
			return {
				nowIndex: 0,
				totalAthleticStepNum: '', //运动步数
				totalAthleticDistance: '', //运动距离
				totalAthleticDurationValue: '', //运动时长
				totalAthleticHeatValue: '', //总运动热量值
				athleticPersistDay: '', //坚持天数
				chartData: {},
				endCreateTime: '',
				startCreateTime: '',
				List: [{
						index: 0,
						item: '日'
					},
					{
						index: 1,
						item: '月'
					},
					{
						index: 2,
						item: '年'
					}
				],
				nowyear:''
			}
		},
		methods: {
			qiehuan(index) {
				this.nowIndex = index
				if(this.nowIndex == 0) {
					this.userDataSumDays()
				} else if(this.nowIndex == 1) {
					this.handMonths();
				} else {
					this.handYears();
				}
			},
			chart() {
				this.$router.push('/history/fat')
			},
			athleticCount() {
				const params = {
					startCreateTime: this.startCreateTime,
					endCreateTime: this.endCreateTime
				}
				put('/health-web/modules/userDataRecord/athleticCount', params).then((res) => {
					if(res.code == 0) {
						this.totalAthleticStepNum = res.userAthleticCount.totalAthleticStepNum
						this.totalAthleticDistance = res.userAthleticCount.totalAthleticDistance
						this.totalAthleticDurationValue = res.userAthleticCount.totalAthleticDurationValue
						this.totalAthleticHeatValue = res.userAthleticCount.totalAthleticHeatValue
					}
				})
			},
			athletic() {
				get('/health-web/modules/userDataRecord/latestInfo/athletic', {}).then((res) => {
					if(res.code == 0) {
						this.athleticPersistDay = res.userLatestRecord.athleticPersistDay
					}
				})
			},
			handData() {
				let curData = new Date();
				this.startCreateTime = this.formatDate(curData);
				let parDate = new Date(curData.getTime() - 24 * 60 * 60 * 60 * 1000);
				this.endCreateTime = this.formatDate(parDate);
				this.userDataSumDays()
			},
			//			获取当前年和年初**
			handYearsVal() {
				let yearData = new Date();
				this.endCreateTime = this.formatDate(yearData)
				let year = yearData.getFullYear()
				this.nowyear=year
				this.startCreateTime = year + '-01-01'
				this.athleticCount();
			},
			formatDate(parDate) {
				let y = parDate.getFullYear()
				let m = parDate.getMonth() + 1
				m = m < 10 ? '0' + m : m
				let d = parDate.getDate()
				d = d < 10 ? ('0' + d) : d
				return y + '-' + m + '-' + d
			},
			//    调日**
			userDataSumDays() {
				const params = {
					searchKey: 'athleticHeatValue',
					orderKey: 'days',
					startCreateTime: this.startCreateTime,
					endCreateTime: this.endCreateTime
				}
				put('/health-web/modules/userDataRecord/userDataSum', params).then((res) => {
					if(res.code == 0) {
						const arrayVal = []
						res.records.forEach(item => {
							let aaaVal = {}
							aaaVal.运动 = item.athleticHeatValue
							aaaVal.orderKey = item.orderKey
							arrayVal.push(aaaVal)
						})
						this.chartData = {
							columns: ['orderKey', '运动'],
							rows: arrayVal
						}
					}
				})
			},
			//			月**
			handMonths() {
				const params = {
					searchKey: 'athleticHeatValue',
					orderKey: 'months',
				}
				put('/health-web/modules/userDataRecord/userDataSum', params).then((res) => {
					if(res.code == 0) {
						const arrayVal = []
						res.records.forEach(item => {
							let aaaVal = {}
							aaaVal.运动 = item.athleticHeatValue
							aaaVal.orderKey = item.orderKey
							arrayVal.push(aaaVal)
						})
						this.chartData = {
							columns: ['orderKey', '运动'],
							rows: arrayVal
						}
					}
				})
			},
			//			    按年**
			handYears() {
				const params = {
					searchKey: 'athleticHeatValue',
					orderKey: 'years',
				}
				put('/health-web/modules/userDataRecord/userDataSum', params).then((res) => {
					if(res.code == 0) {
						const arrayVal = []
						res.records.forEach(item => {
							let aaaVal = {}
							aaaVal.运动 = item.athleticHeatValue
							aaaVal.orderKey = item.orderKey
							arrayVal.push(aaaVal)
						})
						this.chartData = {
							columns: ['orderKey', '运动'],
							rows: arrayVal
						}
					}
				})
			}
		},
		created() {
			//			this.athleticCount();/
			this.athletic();
			this.handData();
			this.handYearsVal();

		}
	};
</script>
<style scoped>
	@import './style/motion.css';
	.active {
		color: #ffffff;
		background: #ff5e3a;
		border-bottom: none;
		background: #ff5e3a;
		margin-bottom: 0;
	}
	
	.page-navbar {
		color: #FF5E3A;
		width: 72%;
		height: .65rem;
		line-height: .65rem;
		margin: auto;
		border: 1px solid #FF5E3A;
		margin-top: .2rem;
	}
	
	.tab_header {
		position: relative;
		z-index: 9999999999;
	}
	
	.tab_header ul li {
		width: 33%;
		float: left;
		height: 100%;
	}
	
	.tab_header ul li:nth-of-type(3) {
		width: 34%;
	}
	
	.consume {
		margin-top: .7rem;
	}
</style>