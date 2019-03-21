<template>
	<div class="device">
		<mt-header fixed title="健康数据">
            <router-link to="/me" slot="left">
                 <mt-button icon=""><img class="deviceTopArrowImg"src="../../../static/images/ShareIcon.png" alt="" /></mt-button>
            </router-link>
            <mt-button icon="" slot="right" class="deviceBtn">智能设备</mt-button>
        </mt-header>
		<!--设备列表**-->
		<div class="DeviceList">
				<div class="DeviceCon">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">运动</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>{{healthData.athleticHeatValue || 0}}</span>
								<span>千卡</span>
							</div>
							<div class="dataTime">{{healthData.athleticHeatTime|dateFormat}}</div>
						</div>
						<div class="DeviceButton">
							<img  v-if="showId == 0 && show" :src="src" @click="DeviceUpButtonClick(0)"/>
							<img v-else :src="images" class="add" @click="DeviceButtonClick(0)"/>
						</div>
					</div>
					<div class="Kcal" v-if="showId == 0 && show">
						<ul>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/shebei.png" alt="" />
								</div>
								<p>设备0</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/GPS.png" alt="" />
								</div>
								<p>GPS</p>
							</li>
							<li>
								<div class="kcalImg"  @click="goVoice()">
									<img src="../../../static/images/yuyin.png" alt="" />
								</div>
								<p>语音</p>
							</li>
							<li @click="addSport">
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
							</li>
						</ul>
					</div>
				</div>
				<!--睡眠**-->
					<div class="DeviceCon">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">睡眠</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>{{healthData.sleepHourValue || 0}}</span>
								<span>小时</span>
								<span>{{healthData.sleepMinuteValue || 0}}</span>
								<span>分钟</span>
							</div>
							<div class="dataTime timer">{{healthData.sleepCreateTime|dateFormat}}</div>
						</div>
						<div class="DeviceButton" >
							<img  v-if="showId == 1 && show" :src="src" @click="DeviceUpButtonClick(1)"/>
						    <img  v-else :src="images"   class="add"  @click="DeviceButtonClick(1)"/>
						</div>
					</div>
					<div class="Kcal" v-if="showId == 1 && show" >
						<ul>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/shebei.png" alt="" />
								</div>
								<p>设备1</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/GPS.png" alt="" />
								</div>
								<p>GPS</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/yuyin.png" alt="" />
								</div>
								<p>语音</p>
							</li>
							<li @click="addTime()">
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
							</li>
						</ul>
					</div>
				</div>
				<!--血压**-->
					<div class="DeviceCon">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">血压</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>{{healthData.bloodPressureHigh || 0}}/{{healthData.bloodPressureLow || 0}}</span>
								<span>毫米汞柱</span>
							</div>
							<div class="dataTime timer">{{healthData.bloodPressureTime|dateFormat}}</div>
						</div>
					   <div class="DeviceButton">
							<img  v-if="showId == 2  && show" :src="src" @click="DeviceUpButtonClick(2)"/>
							<img v-else :src="images"   class="add"  @click="DeviceButtonClick(2)"/>
						</div>
					</div>
					<div class="Kcal"  v-if="showId == 2  && show" >
						<ul>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/shebei.png" alt="" />
								</div>
								<p>设备</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/GPS.png" alt="" />
								</div>
								<p>GPS</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/yuyin.png" alt="" />
								</div>
								<p>语音</p>
							</li>
							<li>
								<router-link to="/device/BloodPressure">
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<div class="DeviceCon">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">血糖</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>{{healthData.bloodGlucoseValue || 0}}</span>
								<span>mmol/L</span>
							</div>
							<div class="dataTime timer">{{healthData.bloodGlucoseTime|dateFormat}}</div>
						</div>
						 <div class="DeviceButton">
							<img  v-if="showId == 3  && show" :src="src" @click="DeviceUpButtonClick(3)"/>
							<img v-else :src="images"   class="add"  @click="DeviceButtonClick(3)"/>
						</div>
					</div>
					<div class="Kcal" v-if="showId == 3 && show" >
						<ul>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/shebei.png" alt="" />
								</div>
								<p>设备</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/GPS.png" alt="" />
								</div>
								<p>GPS</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/yuyin.png" alt="" />
								</div>
								<p>语音</p>
							</li>
							<li>
								<router-link to="/device/BloodGlucose">
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<!--</router-link>-->
				<!--心率**-->
					<div class="DeviceCon">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">心率</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>{{healthData.heartRateValue || 0 }}</span>
								<span>次/分</span>
							</div>
							<div class="dataTime timer">{{healthData.heartRateTime|dateFormat}}</div>
						</div>
						 <div class="DeviceButton">
							<img  v-if="showId == 4  && show" :src="src" @click="DeviceUpButtonClick(4)"/>
							<img v-else :src="images"   class="add"  @click="DeviceButtonClick(4)"/>
						</div>
					</div>
					<div class="Kcal"  v-if="showId == 4  && show">
						<ul>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/shebei.png" alt="" />
								</div>
								<p>设备</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/GPS.png" alt="" />
								</div>
								<p>GPS</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/yuyin.png" alt="" />
								</div>
								<p>语音</p>
							</li>
							<li >
								<router-link to="/device/HeartRate">
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p></router-link>
							</li>
						</ul>
					</div>
				</div>
				<!--体重**-->
					<div class="DeviceCon">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">体重</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>{{healthData.weightValue  || 0}}</span>
								<span>公斤</span>
							</div>
							<div class="dataTime timer">{{healthData.weightTime|dateFormat}}</div>
						</div>
						<div class="DeviceButton" >
							<img  v-if="showId == 5  && show" :src="src" @click="DeviceUpButtonClick(5)"/>
							<img v-else :src="images"   class="add"  @click="DeviceButtonClick(5)"/>
						</div>
					</div>
					<div class="Kcal" v-show="showId == 5  && show">
						<ul>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/shebei.png" alt="" />
								</div>
								<p>设备</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/GPS.png" alt="" />
								</div>
								<p>GPS</p>
							</li>
							<li >
								<div class="kcalImg">
									<img src="../../../static/images/yuyin.png" alt="" />
								</div>
								<p>语音</p>
							</li>
							<li @click="goSetWeight()">
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
							</li>
						</ul>
					</div>
				</div>
				<!--体脂**-->
					<div class="DeviceCon">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">体脂</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>{{healthData.fatRateValue || 0}}</span>
								<span>%</span>
							</div>
							<div class="dataTime timer">{{healthData.fatRateTime|dateFormat}}</div>
						</div>
						<div class="DeviceButton" >
							<img  v-if="showId == 6  && show" :src="src" @click="DeviceUpButtonClick(6)"/>
							<img v-else :src="images"   class="add"  @click="DeviceButtonClick(6)"/>
						</div>
					</div>
					<div class="Kcal"  v-if="showId == 6  && show" >
						<ul>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/shebei.png" alt="" />
								</div>
								<p>设备</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/GPS.png" alt="" />
								</div>
								<p>GPS</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/yuyin.png" alt="" />
								</div>
								<p>语音</p>
							</li>
							<li>
								<router-link to="/device/FatRate">
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
				<!--体温**-->
					<div class="DeviceCon">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">体温</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>{{healthData.animalHeatValue || 0}}</span>
								<span>摄氏度</span>
							</div>
							<div class="dataTime timer">{{healthData.animalHeatTime|dateFormat}}</div>
						</div>
						<div class="DeviceButton" >
							<img  v-if="showId == 7 && show" :src="src" @click="DeviceUpButtonClick(7)"/>
							<img v-else :src="images"   class="add"  @click="DeviceButtonClick(7)"/>
						</div>
					</div>
					<div class="Kcal" v-if="showId == 7 && show">
						<ul>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/shebei.png" alt="" />
								</div>
								<p>设备</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/GPS.png" alt="" />
								</div>
								<p>GPS</p>
							</li>
							<li>
								<div class="kcalImg">
									<img src="../../../static/images/yuyin.png" alt="" />
								</div>
								<p>语音</p>
							</li>
							<li>
								<router-link to="/device/AnimalHeat">
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
								</router-link>
							</li>
						</ul>
					</div>
				</div>
			</ul>
		</div>
       <el-dialog title="睡眠时长添加" :visible.sync="dialogFormVisible" width="80%" center >
		 <h3 id="el-dialog__body">小时- 分钟</h3>
		 <mt-picker :slots="slots" @change="onValuesChange" :visibleItemCount="3"></mt-picker>
         <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="dialogFormVisible = false" id="qxbtn">取 消</el-button>
            <el-button type="" @click="submitSleep" class="submitBTn">确 定</el-button>
           </div>
       </el-dialog>

     <el-dialog title="运动添加" :visible.sync="sportsFormVisible" width="80%" center >
          <el-form :model="sportForm">
            <el-form-item label="步数(千卡)" :label-width="formLabelWidth1">
                 <el-input v-model="sportForm.val" autocomplete="on"></el-input>
             </el-form-item> 
			 <el-form-item label="时长(分钟)" :label-width="formLabelWidth1">
                 <el-input v-model="sportForm.timeVal" autocomplete="on"></el-input>
             </el-form-item> 
         </el-form>
  
         <div slot="footer" class="dialog-footer">
            <el-button type="info" @click="sportsFormVisible = false" id="qxbtn">取 消</el-button>
            <el-button type="" @click="submitSports" class="submitBTn">确 定</el-button>
           </div>
       </el-dialog>
	</div>
</template>

<script>
    import axios from 'axios';
    import {get,
        post
    } from '../../api/fetch.js'
    export default {
        data() {
            return {
                show: false,
                images: '../../../static/images/deviceJia.png',
                src: '../../../static/images/DaviCha.png',
                showId: -1,
                showCloseId: -1,
                healthData: {
                    "weightValue": null, //体重
                    "weightTime": null,
                    "athleticPersistDay": null, //运动坚持天数
                    "athleticDurationValue": null, //运动时长
                    "athleticHeatValue": null, //运动热量值
                    "athleticHeatTime": null, // 运动记录时间
                    "athleticStepNum": null, //运动步数
                    "athleticDistance": null, //运动距离
                    "sleepHourValue": null, //睡眠时长 - 小时
                    "sleepCreateTime": null, // 睡眠记录时间
                    "sleepMinuteValue": null, //睡眠时长 - 分钟
                    "bloodPressureLow": null, //血压 - 低
                    "bloodPressureHigh": null, //血压 - 高 
                    "bloodPressureTime": null,
                    "bloodGlucoseValue": null, //血糖
                    "bloodGlucoseTime": null,
                    "heartRateValue": null, //心率
                    "heartRateTime": null,
                    "fatRateValue": null, // 体脂 
                    "fatRateTime": null,
                    "animalHeatValue": null, //体温
                    "animalHeatTime": null,
                },
                dialogFormVisible: false,
                sportsFormVisible: false,
                formLabelWidth: '45px',
                formLabelWidth1: '85px',
                slots: [{
                    flex: 1,
                    values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '12', '21', '22', '23', '24'],
                    className: 'slot1',
                    textAlign: 'right'
                }, {
                    divider: true,
                    content: '-',
                    className: 'slot2'
                }, {
                    flex: 1,
                    values: ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55', '56', '57', '58', '59', '60'],
                    className: 'slot3',
                    textAlign: 'left'
                }],
                hours: 0,
                minute: 0,
                sportForm: {
                    val: '',
                    timeVal: ''
                },
                booldForm: {
                    lowVal: '',
                    highVal: '',
                    name: '',
                    region: '',
                    resource: '',
                    desc: ''
                },
            }
        },
        created() {
            this.WeightData();
            this.athleticData();
            this.sleepData();
            this.bloodPressureData();
            this.bloodGlucoseData();
            this.heartRateData()
            this.fatRateData()
            this.animalHeatData()
        },
        methods: {
            addSport() {
                this.sportsFormVisible = true
            },
            addTime() {
                this.dialogFormVisible = true;
            },
            submitSports() {
                this.sportsFormVisible = false;
                if (this.sportForm.val >= 0) {
                    get('/health-web/modules/userDataRecord/save', {
                        athleticHeatValue: this.sportForm.val,
                        athleticStepNum: this.sportForm.timeVal
                    }).then((res) => {
                        if (res.code == 0) {
                            this.$message({
                                message: '提交成功 !',
                                type: 'success'
                            })
                            this.athleticData();
                        }
                    })
                }
            },
            submitSleep() {
                this.dialogFormVisible = false;
                get('/health-web/modules/userDataRecord/save', {
                    sleepHourValue: this.hours,
                    sleepMinuteValue: this.hours,
                }).then((res) => {
                    if (res.code == 0) {
                        this.$message({
                            message: '提交成功 !',
                            type: 'success'
                        })
                        this.sleepData();
                    }
                })
            },
            onValuesChange(picker, values) {
                if (values[0] > values[1]) {
                    picker.setSlotValue(1, values[0]);
                }
                this.hours = values[0],
                    this.minute = values[1];
            },
            DeviceButtonClick(id) {
                this.showId = id;
                this.show = true;
            },
            DeviceUpButtonClick(id) {
                this.showId = id;
                this.show = false;
            },
            goVoice() {
                this.$router.push('/KwnoFood/fruit/voiceInputs')
            },
            goSetWeight() {
                this.$router.push('/device/SetWeight')
            },
            WeightData() {
                get('/health-web/modules/userDataRecord/latestInfo/weight_value').then((res) => {
                    this.healthData.weightValue = res.userLatestRecord.weightValue;
                    this.healthData.weightTime = res.userLatestRecord.createTime;
                })
            },
            athleticData() {
                get('/health-web/modules/userDataRecord/latestInfo/athletic').then((res) => {
                    this.healthData.athleticHeatValue = res.userLatestRecord.athleticHeatValue;
                    this.healthData.athleticHeatTime = res.userLatestRecord.createTime;
                })
            },
            sleepData() {
                get('/health-web/modules/userDataRecord/latestInfo/sleep').then((res) => {
                    this.healthData.sleepHourValue = res.userLatestRecord.sleepHourValue;
                    this.healthData.sleepMinuteValue = res.userLatestRecord.sleepMinuteValue;
                    this.healthData.sleepCreateTime = res.userLatestRecord.createTime;
                })
            },
            bloodPressureData() {
                get('/health-web/modules/userDataRecord/latestInfo/blood_pressure').then((res) => {
                    this.healthData.bloodPressureLow = res.userLatestRecord.bloodPressureLow;
                    this.healthData.bloodPressureHigh = res.userLatestRecord.bloodPressureHigh;
                    this.healthData.bloodPressureTime = res.userLatestRecord.createTime;
                })
            },
            bloodGlucoseData() {
                get('/health-web/modules/userDataRecord/latestInfo/blood_glucose').then((res) => {
                    this.healthData.bloodGlucoseValue = res.userLatestRecord.bloodGlucoseValue;
                    this.healthData.bloodGlucoseTime = res.userLatestRecord.createTime;
                })
            },
            fatRateData() {
                get('/health-web/modules/userDataRecord/latestInfo/fat_rate').then((res) => {
                    this.healthData.fatRateValue = res.userLatestRecord.fatRateValue;
                    this.healthData.fatRateTime = res.userLatestRecord.createTime;
                })
            },
            heartRateData() {
                get('/health-web/modules/userDataRecord/latestInfo/heart_rate').then((res) => {
                    this.healthData.heartRateValue = res.userLatestRecord.heartRateValue;
                    this.healthData.heartRateTime = res.userLatestRecord.createTime;
                })
            },
            animalHeatData() {
                get('/health-web/modules/userDataRecord/latestInfo/animal_heat').then((res) => {
                    this.healthData.animalHeatValue = res.userLatestRecord.animalHeatValue;
                    this.healthData.animalHeatTime = res.userLatestRecord.createTime;

                })
            }
        }
    }
</script>

<style scoped="">
    @import '../../assets/device/device.css';
    .mint-header {
        background: #fff;
        color: #666;
    }
    
    .deviceBtn {
        color: #FF5E3A
    }
    
    .device {
        padding-top: 40px;
    }
    
    #el-dialog__body {
        text-align: center;
        margin: 3px 0;
    }
</style>