<template>
	<div class="handVioce">
		<div class="handBack">
			<div class="voiceHeader">
				<div class="voiceHeaderLeft">
					<img src="../../../../static/images/fanhui.png" />
				</div>
				<div class="voiceHeaderRight">语音定制</div>
			</div>
		</div>
		<div class="vioContent">
			<div class="vioceCon" @click="vioceCon()">
				<div class="vioceConVioce">
					<img src="../../../../static/images/vioce.png" alt="" />
				</div>
			</div>
			<div class="jiaose">
				<!--语音角色**-->
				<div class="yuyin">
					<div class="recording">
						<div class="yuyinLeft">
							语音角色
						</div>
						<div class="yuyinRight">
							<ul>
								<li v-for='(item,index) in familyList' :index='index' :class='{active:nowindex === index}' @click="toggleClick(index,item.sysVoiceRoleCode)">
									<label for="study">{{item.roleName}}</label><br>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<!--语音名称**-->
				<div class="mincheng">
					<div class="recording">
						<div class="voiceLeft">
							语音名称
						</div>
						<div class="voiceRigh">
							<el-input v-model="receodeValue" placeholder="请输入语音名称" class='voiceRighinput'></el-input>
						</div>
					</div>
				</div>
				<!--自定义**-->
				<div class="ziding">
					<div class="recording">
						<div class="recordLeft">
							自定义
						</div>
						<div id="dcontent" class="dcontent">
							<div class="recordRi">
								<div class="recordRiOne" @click="playRecode()">
									<div class="recodeImg"><img src="../../../../static/images/voice.png" /></div>
									<div class="recodeYuyin">录制语音</div>
								</div>
								<div class="recordRiTwo" @click="hanDdUpLoad()">
									<div class="recodeImg"><img src="../../../../static/images/luzhi.png" /></div>
									<div class="recodeYuyin">上传语音</div>
								</div>
							</div>
							<ul id="history" class="dlist" style="text-align:left;">
								<li id="empty" class="ditem-empty"></li>
							</ul>
							<button class="playButton" v-show='isPlayAudio' @click="playAudio"></button>
							<button class="stopButton" v-show='isStopAudio' @click="stopAudio"></button>
						</div>
					</div>
				</div>

			</div>
		</div>
		<div id="record" class="rpVal" v-show="luyin">
			<div style="width:100%;height:20%;"></div>
			<div class="rprogress">
				<div class="rschedule"></div>
			</div>
			<br/>
			<div id="rtime" class="rtime" ref='times'>{{ times }}</div><br/>
			<div class="stop" @click="stopRecord()">
				<img src="../../../../static/images/astop.png" />
			</div>
		</div>
		<el-upload
      action="http://bossdu-oss.oss-cn-beijing.aliyuncs.com"
      :data="dataObj"
      list-type="picture"
      :multiple="false" :show-file-list="showFileList"
      :file-list="isFile"
      :before-upload="beforeUpload"
      :on-remove="handleRemove"
      :on-success="handleUploadSuccess"
      :on-preview="handlePreview">
      <el-button size="small" type="primary">点击上传</el-button>
      <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过10MB</div>
    </el-upload>
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%" :src="isFile[0]" alt="">
    </el-dialog>
	</div>
</template>
<script>
	import './common.js'
	import './immersed.js'
	let r = null
	let t = 0
	let ri = null
	let rt = null
	let gentry = null
	let recorder = null
	let play = null
	import { get, post } from '../../../api/fetch.js'
	export default {
		data() {
			return {
				picked: 'study',
				receodeValue: '',
				nowindex: 0,
				familyList: [],
				valueA: '',
				popupVisible: false,
				luyin: false,
				times: '00:00:00',
				isPlayAudio: false,
				isStopAudio: false,
				isFile: ''
			}
		},
		methods: {
			vioceCon(){
				this.$router.push("/voiceList")
			},
			sysVoiceRole() {
				get('/health-web/modules/sysVoiceRole/list', {}).then((res) => {
					if(res.code == 0) {
						this.familyList = res.list
						this.valueA = this.familyList[0].sysVoiceRoleCode
					}
				})
			},
			toggleClick(i, value) {
				if ( this.nowindex !== i) {
					this.nowindex = i
				    this.valueA = value
				    this.isPlayAudio = false
				    this.isStopAudio = false
				    this.isFile = ''
				    ri = null;
					recorder.stop();
					recorder = null;
					t = 0;
				}
			},
			hanDdUpLoad() {
				const params = {
					sysVoiceRoleCode: this.valueA,
					voiceName: this.receodeValue,
					file:this.isFile
				}
				console.log(params);
				post('/health-web/modules/uservoicebank/save', params).then((res) => {
					console.log(res+'发送成功')
				})
			},
			playRecode() {
				if (  this.isPlayAudio === true || this.isStopAudio === true ) {
					alert('已有语音,无法再次录制，请重新选择语音角色')
					return;
				}
				this.luyin = true
				t = 0
				let _this = this
				ri = setInterval(function() {
					t++
					_this.times = timeToStr(t);
				}, 1000);
				recorder = plus.audio.getRecorder();
				if(recorder == null) {
					alert('录音对象未获取');
					return;
				}
				recorder.record({
					filename: '_doc/audio/',
					format: 'amr'
				}, function(p) {
					plus.io.resolveLocalFileSystemURL(p, function(entry) {
						entry.file( function(file){
			var fileReader = new plus.io.FileReader();
			alert("getFile:" + JSON.stringify(file));
			fileReader.readAsText(file, 'utf-8');
			fileReader.onloadend = function(evt) {
				alert("11" + evt);
				alert("evt.target" + evt.target);
				alert(evt.target.result);
			}
			alert(file.size + '--' + file.name);
		} );             
		            var render = new FileReader();
					_this.isFile =reader.readAsText(entry.fullPath);
					alert(this.isFile)
					}, function(e) {
						alert('读取录音文件错误：' + e.message)
					});
				}, function(e) {
					alert('录音失败：' + e.message)
				});
				
			},
			stopRecord() {
				clearInterval(ri);
				this.isPlayAudio = true
				this.isStopAudio = false
				this.luyin = false
				ri = null;
				recorder.stop();
				recorder = null;
				t = 0;
			},
			playAudio() {
				this.isPlayAudio = false
				this.isStopAudio = true
				let aaa = 'file://' + this.isFile.fullPath
				this.playAudioNow(aaa)
			},
			stopAudio() {
				this.isPlayAudio = true
				this.isStopAudio = false
				recorder.stop();
				recorder = null;
				play = null;
			},
			playAudioNow(path) {
				if(path == '' || path === null || path === 'null' || path === 'undefind') {
					alert('无录音文件')
					return
				}
				if(play == '' || play === null || play === 'null' || play === 'undefind') {
					play = plus.audio.createPlayer(path);
					play.play(function() {
						play = null;
					}, function() {
						this.isPlayAudio = true
						this.isStopAudio = false
					})
				} else {
					this.isPlayAudio = true
					this.isStopAudio = false
					play.stop();
					play = null;
				}
			}
		},
		created() {
			this.sysVoiceRole()
		},
		beforeCreate() {
			function plusReady() {
				// 获取音频目录对象
				plus.io.resolveLocalFileSystemURL('_doc/', function(entry) {
					entry.getDirectory('audio', {
						create: true
					}, function(dir) {
						gentry = dir;
						//					updateHistory();
					}, function(e) {});
				}, function(e) {});
			}
		}

	}
</script>
<style scoped="scoped">
	/*@import "./common.css";*/
	
	@import '../../../assets/me/voice.css';
	.nvbt {
		width: 15%;
		height: 100%;
		float: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.nvbt:active {
		background-color: rgba(170, 170, 170, 0.1);
	}
	
	.nvtt {
		width: 70%;
		height: 100%;
		color: #cccccc;
		float: left;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	
	.content {
		text-align: center;
		padding-top: 44px;
	}
	
	.scontent {
		width: 100%;
		position: fixed;
		top: 44px;
		bottom: 0px;
		text-align: center;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		-ms-touch-action: pan-y cross-slide-y;
		-ms-scroll-chaining: none;
		-ms-scroll-limit: 0 50 0 50;
	}
	.sdcontent {
		width: 100%;
		position: fixed;
		top: 44px;
		bottom: 80px;
		text-align: center;
		overflow-y: scroll;
		-webkit-overflow-scrolling: touch;
		-ms-touch-action: pan-y cross-slide-y;
		-ms-scroll-chaining: none;
		-ms-scroll-limit: 0 50 0 50;
	}
	
	.heading {
		margin: 0 1em;
		text-align: left;
	}
	
	.des {
		padding: 0 1em;
		text-align: left;
		text-indent: 2em;
		word-break: break-all;
	}
	
	.logo {
		width: 100%;
		text-align: center;
	}
	
	.button {
		font-size: 18px;
		font-weight: normal;
		text-decoration: none;
		display: block;
		text-align: center;
		overflow: hidden;
		text-overflow: ellipsis;
		white-space: nowrap;
		color: #FFF;
		background-color: #FFCC33;
		border: 1px solid #ECB100;
		padding: .5em 0em;
		margin: .5em .7em;
		-webkit-border-radius: 5px;
		border-radius: 5px;
	}
	
	.button:active {
		outline: 0;
		-webkit-box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
		box-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
	}
	
	.button-waring {
		color: #666;
		background-color: #ebebeb;
		border-color: #e0e0e0;
	}
	
	.button-select {
		font-size: 14px;
		background-color: #CCCCCC;
		border: 0;
		-webkit-border-radius: 2px;
		border-radius: 2px;
	}
	
	.dlist {
		padding: 0px;
		margin: 1em;
		background: #fff;
		-webkit-border-radius: 3px;
		border-radius: 3px;
	}
	
	.ditem {
		overflow: hidden;
		list-style-type: none;
		font-size: 1em;
		padding: 1em;
		border-bottom: inset 1px #ebebeb;
		vertical-align: middle;
	}
	
	.ditem:active {
		background: #f4f4f4;
	}
	
	.ditem:last-child {
		border-bottom: inset 0px #ebebeb;
	}
	
	.ditem-empty {
		overflow: hidden;
		list-style-type: none;
		font-size: 1em;
		padding: 1em;
		vertical-align: middle;
	}
	
	#output {
		height: 64px;
		position: fixed;
		left: 0;
		right: 0;
		bottom: 0;
		color: #f00;
		background: #FFF;
		font-size: 12px;
		line-height: 16px;
		word-break: break-all;
		z-index: 6666;
		padding: 8px 16px;
		overflow-x: hidden;
		overflow-y: scroll;
		border-top: 2px solid #AAA;
		-webkit-overflow-scrolling: touch;
	}
	
	.iback {
		background-size: 50px 44px;
	}
	
	.idoc {
		background-size: 50px 44px;
	}
	
	.rpVal {
		width: 100%;
		height: 100%;
		text-align: center;
		position: fixed;
		top: 0;
		background: rgba(0, 0, 0, 0.8);
		z-index: 9999;
		overflow: hidden;
	}
	
	.aname {
		font-size: 16px;
	}
	
	.ainf {
		font-size: 12px;
	}
	
	.rtime {
		font-size: 22px;
		color: #FF0000;
	}
	
	.ptime {
		margin-top: 40%;
		font-size: 22px;
		color: #FFFFFF;
	}
	
	.rprogress {
		background: url(../../../../static/images/arecord.png) no-repeat center;
		background-size: 32px 32px;
	}
	
	.rschedule {
		background-color: rgba(0, 0, 0, 0);
		border: 5px solid rgba(0, 183, 229, 0.9);
		opacity: .9;
		border-left: 5px solid rgba(0, 0, 0, 0);
		border-right: 5px solid rgba(0, 0, 0, 0);
		border-radius: 50px;
		box-shadow: 0 0 15px #2187e7;
		width: 36px;
		height: 36px;
		margin: 0 auto;
		-webkit-animation: spin 1s infinite linear;
		animation: spin 1s infinite linear;
	}
	
	@-webkit-keyframes spin {
		0% {
			-webkit-transform: rotate(0deg);
		}
		100% {
			-webkit-transform: rotate(360deg);
		}
	}
	
	@keyframes spin {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
	
	.progress {
		width: 90%;
		background-color: #666;
		margin: 0 5%;
		border: 1px solid #222;
		-webkit-border-radius: 5px;
		border-radius: 5px;
	}
	
	.schedule {
		width: 8px;
		height: 8px;
		margin: 1px 0;
		background-color: #FFCC33;
		-webkit-border-radius: 4px;
		border-radius: 4px;
		-webkit-transition: all 1s linear;
		transition: all 1s linear;
	}
	
	.stop {
		width: 72px;
		height: 72px;
		background: url(../../../../static/images/astop.png) no-repeat center;
		background-size: 72px 72px;
		margin: auto;
		-webkit-border-radius: 72px;
		border-radius: 72px;
	}
	
	.stop img {
		width: 100%;
		height: 100%;
	}
	
	.stop:active {
		-webkit-box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5) inset;
		box-shadow: 0 3px 8px rgba(0, 0, 0, 0.5) inset;
	}
	
	.iplay {
		display: block;
		/*background: no-repeat right center url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABYCAYAAAADWlKCAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAKwwAACsMBNCkkqwAAABZ0RVh0Q3JlYXRpb24gVGltZQAwOS8xMi8xM5w+I3MAAAAcdEVYdFNvZnR3YXJlAEFkb2JlIEZpcmV3b3JrcyBDUzVxteM2AAAD9UlEQVR4nO2b3XETMRRGDwzvoYOkg5hRAVkqiKmAdIA7wHSQVECoALsC1gXciV0BTge4gvCwgnHk9d/+WF8m97ztxrlXs8fS1Urym6enJxwd3uZugPMcFyKGCxHDhYjhQsRwIWK4EDFciBguRAwXIoYLEcOFiOFCxHAhYrgQMVyIGC5EDBcihgsRw4WI4ULEcCFiuBAx3uVuwDGY2XtgCBTAALjc8tEFMAdKYBJC+HOK9nXBm5dwUM7MCmAEXDcMMQVuQwhlV23qC2khZjYAboGrjkLOgFEIYd5RvM6RrSFmdgs80J0MYqyHGFsSuR4S60TJ9vrwCEziZ+YhhGXy/xdU9aWgqjfnW+IsgEKtvkgJiUPUPfUyZsD42DoQ68+Y+p62AG6UhjAZITt6xopq3L9vGf+Gqh6dJX+S6ilKNaRkU8YCGLSVARBjDGLMdS5jbgkkhMQiWyejSGtEG2KsghopKoU++5AV68ZDcrvXYWTH8Pghdz1R6CHpN3MFDPsc02PsYcy1qy0nJ6uQOANKZz+jfcOUmd3H6W1jYo5RcvsqtikbuXtI+kBmBxbwz8DczMZtksdcsz1tOinZhMRxPF2bGh8R4gz4amZLMxu2aEqa8zq2LQs5e0j6EB8bLv6dAz/NrGwyjMWcj3vadjJyCimS60nLeFfAbzO7bfANT3MXLdvSmJxCBsl12VHcL8AyvpkfSpo7bdvJyCkkfQfocv5/Bnw3s/mBs6Y097aFzd7JPcv6T5dv5GtcAr/2TZN7yt0IGSE908k0+RS8FiEvhhd1yKEFUw5YAVBApoe0XQrZwgL4GEIY7pLRU+5G5OwhC57PZgbAsqPYK6rdxUMXC9Npbro8fzJy9pB0qll0FPcOuDhCRl3ubEvwOYWUyXXb5YoZ1X7GqMHSfZq7bNmWxuQUki5XnDdc+n4EPoUQiiabSzFnejKl7TJOY7IJid/iaXJ7fESIFfCNas+9zQNMc05zHnjIPctKx/mrA9egflCJGLd5eDFXukGWdddQYU+95PlDWVE97GXPeS+oivf6saBZCKHoM+8+cvcQ2NyhOwMmfW4SxdgTNs9oZd0tBAEhsRDfJbcvgbIPKTtOnNzlPnECAkPWP8xsTv3ZrJ1v2UfmuKDqGRt5QgjZ9kDWyd5D1iioP1U4P3KzqZYYY5v0om38rpDpIeCHrUFMCPjPEeSE/COetf3SU/i7EEL2GVUdSjXkGfGBfWDzIFsb/q93dRizU2R7yDr+o09R/GfRzsmRrSGvFRcihgsRw4WI4ULEcCFiuBAxXIgYLkQMFyKGCxHDhYjhQsRwIWK4EDFciBguRAwXIoYLEcOFiOFCxHAhYrgQMf4CVuqCm+17t3sAAAAASUVORK5CYII=);*/
		background-size: 50px 44px;
		-ms-touch-action: auto;
	}
	
	.playButton {
		width: 125px;
        height: 32px;
		outline: none;
		border: none;
		background: #1599fa;
		position: relative;
		border-radius: 20px;
	}
	
	.playButton:after {
		content: '';
		position: absolute;
		width: 27px;
		height: 27px;
		background: url(../../../../static/images/icon-voice.png) no-repeat center;
		left: 10px;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	
	.stopButton {
		width: 150px;
		height: 40px;
		outline: none;
		border: none;
		background: #1599fa;
		position: relative;
		border-radius: 20px;
	}
	
	.stopButton:after {
		content: '';
		position: absolute;
		width: 27px;
		height: 27px;
		background: url(../../../../static/images/icon-voice.gif) no-repeat center;
		left: 10px;
		top: 0;
		bottom: 0;
		margin: auto;
	}
</style>