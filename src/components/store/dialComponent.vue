<template>
  <div>
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">{{headerText}}</div>
    </div>
    <div class="outerMain">
      <div class="heartMain">
        <div class="heartPlate" id="myChart">
        </div>
      </div>
	  </div>
 
       <div class="recordBloodBtn" @click="showDialog">{{recordBtnText}}</div>
	<!--用药和提醒**-->
		<div class="rugUse">
			<div class="rugUseContent">
				<ul>
					<li>
						<div class="medica"></div>
						<p>用药</p>
					</li>
					<li>
						<div class="remind"></div>
						<p>提醒</p>
					</li>
				</ul>
			</div>
		</div>

    </div>
  </div>
</template>

<script>
    import axios from 'axios';
    import {get
    } from '../../api/fetch.js'
    export default {
        props: {
            rateValue: {
                type: Number,
                default: 0
            },
            minVal: {
                type: Number,
                default: 0
            },
            maxVal: {
                type: Number,
                default: 0
            },
            headerText: {
                type: String,
                default: '记录心率'
            },
            recordBtnText: {
                type: String,
                default: '记录心率'
            },
            dialTopText: {
                type: String,
                default: '晚餐'
            },
            dialBottonText: {
                type: String,
                default: '健康指数'
            }
        },
        data() {
            return {
                isActive: true,
                value1: true,
                value2: true,
                num: 20
            }
        },
        methods: {
            handleBack() {
                this.$router.back()
            },
            showDialog() {
                this.$emit("showDialog");
            },
            drawLine() {
                console.log('子元素')
                    // 基于准备好的dom，初始化echarts实例
                let myChart = this.$echarts.init(document.getElementById('myChart'))
                    // 绘制图表
                myChart.setOption({
                    width: '100%',
                    tooltip: {
                        formatter: "{a} <br/>{c} {b}"
                    },
                    toolbox: {
                        show: true,
                        feature: {
                            restore: {
                                show: false
                            },
                            saveAsImage: {
                                show: false
                            }
                        }
                    },
                    series: [{
                        name: '速度',
                        type: 'gauge',
                        z: 3,
                        min: this.minVal,
                        max: this.maxVal,
                        splitNumber: 5,
                        radius: '70%',
                        axisLine: { // 坐标轴线
                            lineStyle: { // 属性lineStyle控制线条样式
                                width: 4,
                                color: [
                                    [0.2, '#3cc7c5'],
                                    [0.8, '#5cb3f1'],
                                    [1, '#d57b82']
                                ]
                            },
                        },
                        axisTick: { // 坐标轴小标记
                            length: 10, // 属性length控制线长
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: 'auto'
                            }
                        },
                        pointer: { //箭头
                            show: true,
                            width: 3,
                            length: '60%'
                        },
                        axisLabel: {
                            fontSize: 10,
                            padding: 3,
                        },
                        splitLine: { // 分隔线
                            length: 1, // 属性length控制线长
                            lineStyle: { // 属性lineStyle（详见lineStyle）控制线条样式
                                color: 'auto'
                            }
                        },
                        title: {
                            fontWeight: '',
                            fontSize: 12,
                            fontStyle: 'normal',
                            color: '#999'
                        },
                        detail: {
                            formatter: "{score|{value}}\n{name|" + this.dialBottonText + "}",
                            offsetCenter: [0, "50%"],
                            rich: {
                                score: {
                                    color: "#ff5e3a",
                                    fontFamily: "微软雅黑",
                                    fontSize: 15
                                },
                                name: {
                                    height: 25,
                                    color: "#999",
                                    fontFamily: "微软雅黑",
                                    fontSize: 12
                                }
                            }
                        },
                        data: [{
                            value: this.rateValue,
                            name: this.dialTopText,
                            label: {
                                textStyle: {
                                    fontSize: 14,
                                    color: '#000'
                                }
                            }
                        }]
                    }]
                });
            },

        },
        mounted() {
            window.addEventListener("resize", function() {
                myChart.resize();
                myChart.resize();
            });
            this.drawLine()
        },
        created() {

        },
        watch: {
            rateValue(newVal, oldVal) {
                if (newVal) this.drawLine()
            }
        }
    }
</script>
<style scoped>
    @import '../../assets/store/heartRate.css';
</style>