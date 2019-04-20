<template>
	<div>
		<ve-line v-if="isShowEcharts" :data="chartData" :settings="chartSettings" :extend="extend" legend-position="right"></ve-line>
         <div v-else>无</div>
	</div>
</template>

<script>
	export default{
		props:['chartData'],
		data(){
			return{
	        	isShowEcharts:true,
			}
		},
		created(){
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
					}
					,
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

<style>
</style>