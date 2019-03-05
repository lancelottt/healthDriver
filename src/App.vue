<template>
	<div id="app">
		<!--<div v-show="show">
			<tab-com></tab-com>
		</div>-->
		<!--    <img src="./assets/logo.png">-->
		<transition name="fadeToBlack">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	import axios from 'axios'
	import Vuex from "vuex"
	export default {
		beforeCreate() {
			document.addEventListener('plusready', function() {
				let uuid = plus.device.uuid
			}, false)
		},
		created() {
			var NotifyID = 1;
			var main = plus.android.runtimeMainActivity();
			var Context = plus.android.importClass("android.content.Context");
			var Noti = plus.android.importClass("android.app.Notification");
			var NotificationManager = plus.android.importClass("android.app.NotificationManager");
			var nm = main.getSystemService(Context.NOTIFICATION_SERVICE)
			var Notification = plus.android.importClass("android.app.Notification");
			var mNotification = new Notification.Builder(main);
			// 新增 810726685@qq.com 的代码  
			var Intent = plus.android.importClass("android.content.Intent");
			var PendingIntent = plus.android.importClass("android.app.PendingIntent");
			var intent = new Intent(main, main.getClass());
			var pendingIntent = PendingIntent.getActivity(main, 0, intent, PendingIntent.FLAG_CANCEL_CURRENT);
			// 新增代码  
			var r = plus.android.importClass("android.R");

			mNotification.setOngoing(true);
			mNotification.setContentTitle("Hbuilder")
			mNotification.setContentText("MUI & 5+ 好！")

			// 新增代码  
			mNotification.setSmallIcon(r.drawable.ic_notification_overlay)
			mNotification.setTicker("PadInfo")

			// 新增 810726685@qq.com 的代码  
			mNotification.setContentIntent(pendingIntent);
			mNotification.setNumber(10)
			var mNb = mNotification.build()
			nm.notify(NotifyID, mNb);
		},
		//		name: 'App',
		methods: {
			//			beforeDestroyed(){
			//				console.log(show)
			//			}
		},
		computed: {
			//			...Vuex.mapState({
			//				show: state => state.show
			//			})
		}
	}
</script>

<style>
	@import 'assets/common/scss/common.css';
	html {
		height: 100%;
		width: 100%;
	}
	
	#app {
		height: 100%;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	.page {
		/*公共样式:上面的电池栏、下面的切换栏*/
		/*  padding-top: .4rem;
*/
		padding-bottom: .96rem;
	}
	/* .footer_guide{
    position: fixed;
    z-index: 100;
    left:0;
    right:0;
    bottom:0;
    background-color: #ffffff;
    width:100%;
    height: 1.31rem;
    display:flex;
}
.shopping{
    margin-top: .15rem;
}
.guide_item{
    display: flex;
    flex: 1;
    margin-top: .1rem;
    text-align: center;
    flex-direction: column;
    align-items: center;   
    color:#999999;
}
.on{
    color: #ff5e3a;
}
span{
    font-size: .24rem;
    margin-top: .02rem;
    margin-bottom: .02rem;
}
.iconfont{
    font-size: .64rem;

}
.img{
    width:.44rem;
    height: .58rem;
}
.cals{
    margin-top: .15rem;
} */
</style>