<template>
	<div>
		<mt-popup class='mt-popup' v-model="isshow" position="bottom" popup-transition="popup-fade">
			<div class="dialog_content">
				<div class="dislog_img" @click="startRecord" v-show="isimgshow">
				</div>
				<div class="dislog_gif" @click="stopRecord" v-show="!isimgshow"></div>
			</div>
		</mt-popup>
	</div>
</template>

<script>
	import { Popup } from 'mint-ui';
	import './immersed.js'
	let r = null
	let t = 0
	let ri = null
	let rt = null
	let gentry = null
	//	let hl =document.getElementById('history');
	export default {
		props: {
			isshow: {
				type: Boolean,
				default: false
			}
		},
		name: 'dialog',
		data() {
			return {
				isimgshow: true
			}
		},
		methods: {
			startRecord() {
				this.isimgshow = !this.isimgshow
				r = plus.audio.getRecorder();
				if(r == null) {
					alert('录音对象未获取');
					return;
				}
				r.record({
					filename: '_doc/audio/',
					format: 'amr'
				}, function(p) {
					alert('录音完成' + p);
					plus.io.resolveLocalFileSystemURL(p, function(entry) {
						this.createItem(entry);
					}, function(e) {
						alert('读取录音文件错误：' + e.message);
					});
				}, function(e) {
					alert('录音失败：' + e.message);
				});
				t = 0;
				ri = setInterval(function() {
					t++;
					//					rt.innerText = timeToStr(t);
				}, 1000);
			},
			stopRecord() {
				this.isimgshow = !this.isimgshow
				//			er.style.display = 'none';
				//			rt.innerText = '00:00:00';
				clearInterval(ri);
				ri = null;
				r.stop();
				r = null;
				t = 0;
			},
			createItem(entry) {
				var li = document.createElement('li');
				li.className = 'ditem';
				li.innerHTML = '<span class="iplay"><font class="aname"></font><br/><font class="ainf"></font></span>';
				li.setAttribute('onclick', 'playAudio(this)');
				//			hl.insertBefore(li, le.nextSibling);
				//			li.querySelector('.aname').innerText = entry.name;
				//			li.querySelector('.ainf').innerText = '...';
				li.entry = entry;
				this.updateInformation(li);
				// 设置空项不可见
				//			le.style.display = 'none';
			},
			// 获取录音文件信息
			updateInformation(li) {
				if(!li || !li.entry) {
					return;
				}
				var entry = li.entry;
				entry.getMetadata(function(metadata) {
					//				li.querySelector('.ainf').innerText = dateToStr(metadata.modificationTime);
				}, function(e) {
					alert('获取文件"' + entry.name + '"信息失败：' + e.message);
				});
			}
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
	.mt-popup {
		width: 100%;
		height: 200px;
	}
	
	.dialog_content {
		width: 100%;
		height: 200px;
		position: fixed;
		bottom: 0;
		z-index: 999999999;
	}
	
	.dislog_img,
	.dislog_gif {
		width: 100px;
		height: 100px;
		background: url(../../static/image/timg.jpg) no-repeat center;
		background-size: 100% 100%;
		position: absolute;
		left: 0;
		right: 0;
		top: 0;
		bottom: 0;
		margin: auto;
	}
	
	.dislog_gif {
		background: url(../../static/image/timg.gif) no-repeat center;
	}
</style>