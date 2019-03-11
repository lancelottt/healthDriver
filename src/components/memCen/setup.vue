<template>
	<div class="setup">
		<div class="setupHeader">
			<div class="fanhui" @click="handFanhui()">
				<img src="../../../static/images/fanhui.png"/>
			</div>
			<div class="content">通用设置</div>
		</div>
		<!--语音开关**-->
		<div class="switch">
			<!--语音开关**-->
			<div class="voice">
				<div class="voiceCon">
					语音开关
				</div>
				<div class="voicekong">
					  <div class="page-switch">
					    <mt-cell>
					      <mt-switch v-model="value2" @change="handleChange"></mt-switch>
					    </mt-cell>
					  </div>
				</div>
			</div>
			<!--推送通知**-->
			<div class="notifica">
				<div class="notificaCon">
					推送通知
				</div>
				<div class="notifikong">
					  <div class="page-switch">
					    <mt-cell>
					      <mt-switch v-model="value1" @change="handleChange"></mt-switch>
					    </mt-cell>
					  </div>
				</div>
			</div>
		</div>
		<!--消息推送信息**-->
		<div class="news">关闭通知后，您不会再收到通知栏当消息推送</div>
	<!--健康设备蓝牙**-->
	<div class="bluetooth">
		<div class="bluetoothfica">
				<div class="bluetoothCon">
					健康设备蓝牙
				</div>
				<div class="bluetoothkong">
					  <div class="page-switch">
					    <mt-cell>
					      <mt-switch v-model="value3" @change="handleChange"></mt-switch>
					    </mt-cell>
					  </div>
				</div>
			</div>
	</div>
	<div class="bluetooContent">如果您当前当健康设备蓝牙连接不稳定，请切换健康设备蓝牙连接方式，可选择蓝牙2.1货蓝牙4.0连接</div>
	<!--开启手势锁**-->
	<div class="lock">
		<div class="lockLeft">开启手势锁</div>
		<div class="lockRi">
			<img src="../../../static/images/sanjiao.png" alt="" />
		</div>
	</div>
	<!--创建手势锁**-->
	<div class="shoushi">您可以创建一个手势锁，他人再借用您当手机时，将无法打开健康驾校APP</div>
	</div>
</template>

<script>
export default {
  name: 'page-switch',
  data() {
    return {
        value2: true,
        value1:false,
        value3: true,
    };
  },
  methods: {
    handleChange(event) {
      console.log(event);
    },
    handFanhui(){
    	this.$router.go(-1);
    }
  }
};
</script>

<style scoped="scoped">
@import '../../assets/revenue/setup.css';	
	
</style>