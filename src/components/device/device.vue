<template>
	<div class="device">
		<div class="deviceTop">
			<div class="deviceTopArrow">
				<div class="deviceTopArrowImg">
				<img src="../../../static/images/ShareIcon.png" alt="" />
				</div>
			</div>
			<div class="deviceTipArrowData">健康数据</div>
			<div class="intelLigent">智能设备</div>
		</div>
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
								<span>1472</span>
								<span>千卡</span>
							</div>
							<div class="dataTime">111/14 18:49</div>
						</div>
						<div class="DeviceButton" @click="DeviceButtonClick()">
							<img v-if="isImg" :src="images" />
							<img v-else :src="src" alt="" />
						</div>
					</div>
					<div class="Kcal" v-show="show">
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
								<span>8</span>
								<span>小时</span>
								<span>30</span>
								<span>分钟</span>
							</div>
							<div class="dataTime timer">今天 09:10</div>
						</div>
						<div class="DeviceButton" @click="DeviceButtonClick()">
							<img v-if="isImg" :src="images" />
							<img v-else :src="src" alt="" />
						</div>
					</div>
					<div class="Kcal" v-show="show">
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
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
							</li>
						</ul>
					</div>
				</div>
				<!--血压**-->
				<!--<router-link to="/pressure.vue">-->
					<div class="DeviceCon" @click="handDeviceCon()">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">血压</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>120/80</span>
								<span>毫米汞柱</span>
							</div>
							<div class="dataTime timer">今天 09:10</div>
						</div>
						<div class="DeviceButton" @click="DeviceButtonClick()">
							<img v-if="isImg" :src="images" />
							<img v-else :src="src" alt="" />
						</div>
					</div>
					<div class="Kcal" v-show="show">
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
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
							</li>
						</ul>
					</div>
				</div>
				<div class="DeviceCon" @click="handsugar()">
					<div class="LiInter">
						<div class="DeviceImg">
							<div class="DeviceImgMotion"></div>
						</div>
						<div class="Devicefonts">血糖</div>
						<div class="DeviceContent">
							<div class="DeviceZt">
								<span>120/80</span>
								<span>毫米汞柱</span>
							</div>
							<div class="dataTime timer">今天 09:10</div>
						</div>
						<div class="DeviceButton" @click="DeviceButtonClick()">
							<img v-if="isImg" :src="images" />
							<img v-else :src="src" alt="" />
						</div>
					</div>
					<div class="Kcal" v-show="show">
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
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
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
								<span>65</span>
								<span>次/分</span>
							</div>
							<div class="dataTime timer">今天 09:10</div>
						</div>
						<div class="DeviceButton" @click="DeviceButtonClick()">
							<img v-if="isImg" :src="images" />
							<img v-else :src="src" alt="" />
						</div>
					</div>
					<div class="Kcal" v-show="show">
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
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
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
								<span>60</span>
								<span>公斤</span>
							</div>
							<div class="dataTime timer">今天 09:10</div>
						</div>
						<div class="DeviceButton" @click="DeviceButtonClick()">
							<img v-if="isImg" :src="images" />
							<img v-else :src="src" alt="" />
						</div>
					</div>
					<div class="Kcal" v-show="show">
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
								<span>60</span>
								<span>%</span>
							</div>
							<div class="dataTime timer">今天 09:10</div>
						</div>
						<div class="DeviceButton" @click="DeviceButtonClick()">
							<img v-if="isImg" :src="images" />
							<img v-else :src="src" alt="" />
						</div>
					</div>
					<div class="Kcal" v-show="show">
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
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
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
								<span>36.2</span>
								<span>摄氏度</span>
							</div>
							<div class="dataTime timer">今天 09:10</div>
						</div>
						<div class="DeviceButton" @click="DeviceButtonClick()">
							<img v-if="isImg" :src="images" />
							<img v-else :src="src" alt="" />
						</div>
					</div>
					<div class="Kcal" v-show="show">
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
								<div class="kcalImg">
									<img src="../../../static/images/shoudong.png" alt="" />
								</div>
								<p>手动</p>
							</li>
						</ul>
					</div>
				</div>
			</ul>
		</div>
	</div>
</template>

<script>
	export default {
		data () {
			return {
				show:false,
				isImg:true,
                images:'../../../static/images/deviceJia.png',
                src:'../../../static/images/DaviCha.png'
			}
		},
		methods:{
			DeviceButtonClick(){
				this.isImg=!this.isImg
				this.show=!this.show
			},
			handDeviceCon () {
				this.$router.push({name:'pressure'})
			},
			handsugar () {
				this.$router.push({name:'presugar'})
			}
		}
	}
</script>

<style scoped="">
@import '../../assets/device/device.css';	
	
</style>