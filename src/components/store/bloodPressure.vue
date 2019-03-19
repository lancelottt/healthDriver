<template>
    <div>
         <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">血压记录</div>
    </div>
    <div class="outerMain">
      <div class="heartMain">
        <div class="heartPlate" id="myChart">
        </div>
      </div>
	  </div>


        <div class="recordBloodBtn" @click="showDialog">记录高压</div>
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

       <el-dialog title="血压添加" :visible.sync="dialogFormVisible" width="80%" center >
          <el-form :model="booldForm">
            <el-form-item label="高压" :label-width="formLabelWidth">
                 <el-input v-model="booldForm.lowVal" autocomplete="on"></el-input>
             </el-form-item> 
             <el-form-item label="低压" :label-width="formLabelWidth">
                 <el-input v-model="booldForm.highVal" autocomplete="on"></el-input>
             </el-form-item> 
         </el-form>
  
         <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible = false" id="qxbtn">取 消</el-button>
            <el-button type="" @click="submit" class="submitBTn">确 定</el-button>
           </div>
       </el-dialog>
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
                default: ''
            }

        },
        data() {
            return {
                isActive: true,
                value1: true,
                value2: true,
                num: 20,
                lowMin: 0,
                lowMax: 100,
                highMin: 60,
                highMax: 260,
                bloodLow: 0,
                bloodhigh: 0,
                dialogFormVisible: false,
                booldForm: {
                    lowVal: '',
                    highVal: '',
                    name: '',
                    region: '',
                    resource: '',
                    desc: ''
                },
                formLabelWidth: '45px'
            }
        },

        methods: {
            handleBack() {
                this.$router.back()
            },
            showDialog() {
                this.dialogFormVisible = true
            },
            getPressure() {
                get('/health-web/modules/userDataRecord/latestInfo/blood_pressure').then((res) => {
                    this.bloodLow = res.userLatestRecord.bloodPressureLow;
                    this.bloodhigh = res.userLatestRecord.bloodPressureHigh;
                    console.log(this.bloodLow, this.bloodhigh)
                    if (this.bloodLow == null) {
                        this.bloodLow = 0;
                    }
                    if (this.bloodhigh == null) {
                        this.bloodhigh = 60;
                    }
                })
            },
            submit() {
                this.dialogFormVisible = false;
                var _this = this;
                if (this.lowMax >= this.booldForm.lowVal >= this.lowMin && this.highMin <= this.booldForm.highVal <= this.highMax) {
                    this.upData(_this.booldForm.lowVal, _this.booldForm.highVal)
                }
            },
            upData(val1, val2) {
                get('/health-web/modules/userDataRecord/save', {
                    bloodPressureLow: val1,
                    bloodPressureHigh: val2,
                }).then((res) => {
                    if (res.code == 0) {
                        this.$message({
                            message: '提交成功 !',
                            type: 'success'
                        })
                        this.getPressure();
                    }
                })
            },
            drawLine() {
                let myChart = this.$echarts.init(document.getElementById('myChart'))
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
                        name: '血压表',
                        type: 'gauge',
                        center: ['50%', '50%'], // 默认全局居中
                        radius: '25%',
                        min: this.highMin,
                        max: this.highMax,
                        startAngle: 160,
                        endAngle: 20,
                        splitNumber: 2,
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
                            splitNumber: 5,
                            length: 10, // 属性length控制线长
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: 'auto'
                            }
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
                        pointer: { //箭头
                            show: true,
                            width: 3,
                            length: '60%'
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        data: [{
                            value: this.bloodhigh,
                            name: 'gssdsas',
                            label: {
                                textStyle: {
                                    fontSize: 0,
                                    color: '#333'
                                }
                            }
                        }],
                        detail: {
                            formatter: "{score|{value}}\n{name|" + '低压(mmHg)' + "}",
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
                    }, {
                        name: '水表',
                        type: 'gauge',
                        center: ['50%', '50%'], // 默认全局居中
                        radius: '25%',
                        min: this.lowMin,
                        max: this.lowMax,
                        startAngle: 340,
                        endAngle: 200,
                        splitNumber: 2,
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
                            splitNumber: 5,
                            length: 10, // 属性length控制线长
                            lineStyle: { // 属性lineStyle控制线条样式
                                color: 'auto'
                            }
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
                        pointer: { //箭头
                            show: true,
                            width: 3,
                            length: '60%'
                        },
                        title: {
                            show: false
                        },
                        detail: {
                            show: false
                        },
                        data: [{
                            value: this.bloodLow,
                            name: 'gas'
                        }],
                        detail: {
                            formatter: "{score|{value}}\n{name|" + '高压(mmHg)' + "}",
                            offsetCenter: [0, "-45%"],
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
                        }
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
            this.getPressure()
        },
        watch: {
            bloodhigh(newVal, oldVal) {
                if (newVal) this.drawLine()
            },
            bloodLow(newVal, oldVal) {
                if (newVal) this.drawLine()
            }
        }
    }
</script>
<style scoped>
    @import '../../assets/store/heartRate.css';
</style>