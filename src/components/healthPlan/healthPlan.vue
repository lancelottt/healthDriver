<template>

	<div id="healthPlan" class="page">

		<!--<tab-com></tab-com>-->
		<foot-com></foot-com>
		<mt-loadmore :top-method="loadTop" ref="loadmore">

			<div class="healthPlanHeader"><span>下拉查看日签</span></div>
			<!--iconfont icon-xiangzuojiantou-->
			<div class="healthPlan-con">
				<Tabs value="name1">
					<!--	-------------------------------------------我的计划------------------------------------------->
					<!--<TabPane label="我的计划" name="name1" class='hitCard'>
						<h1>健康自律养成计划</h1>
						<h2>1/28天</h2>
						<div class="myPlan" @click="handleJoinCompetition()">
							<img src="../../../static/img/sleep_10.png" alt="" />
							<div class="healthPlan-mask">
								<div class="mask-left">
									<h1>早起打卡</h1>
									<h2>现在开始早起打卡计划</h2>
								</div>
								<div class="mask-right">
									<span>0%</span>
									<i>完成进度</i>
								</div>
							</div>
						</div>

						<div class="myPlan">
							<img src="../../../static/img/sport_15.png" alt="" />
							<div class="healthPlan-mask">
								<div class="mask-left">
									<h1>早起打卡</h1>
									<h2>现在开始早起打卡计划</h2>
								</div>
								<div class="mask-right">
									<span>0%</span>
									<i>完成进度</i>
								</div>
							</div>
						</div>

						<div class="myPlan">
							<img src="../../../static/img/drink_14.png" alt="" />
							<div class="healthPlan-mask">
								<div class="mask-left">
									<h1>早起打卡</h1>
									<h2>现在开始早起打卡计划</h2>
								</div>
								<div class="mask-right">
									<span>0%</span>
									<i>完成进度</i>
								</div>
							</div>
						</div>
					</TabPane>-->

					<!--		------------------------------------------------健康导航 -----------------------------------------	-->
					<TabPane label="健康导航" name="name1" class='healthGuide'>
						<div class="healthGuide-con">
							<!--1-->
							<div class="">
								<img src="../../../static/hulu/pieces1.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--2-->
							<div class="">
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--3-->
							<div class="">
								<img src="../../../static/hulu/pieces3.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--4-->
							<div class="">
								<img src="../../../static/hulu/pieces4.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--5-->
							<div class="">
								<img src="../../../static/hulu/pieces2.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--6-->
							<div class="">
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--7-->
							<div class="">
								<img src="../../../static/hulu/pieces5.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--8-->
							<div class="">
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--9-->
							<div class="">
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--10-->
							<div class="">
								<img src="../../../static/hulu/pieces7.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--11-->
							<div class="11">
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
									<img src="../../../static/hulu/jiaoying.png" />
								</div>
							</div>
							<!--12-->
							<div class="">
								<img src="../../../static/hulu/pieces8.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
										<img src="../../../static/hulu/jiaoying.png"/>
								</div>
							</div>
							<!--13-->
							<div class="13">
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
										<img src="../../../static/hulu/jiaoying.png"/>
								</div>
							</div>
							<!--14-->
							<div class="">
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
										<img src="../../../static/hulu/jiaoying.png"/>
								</div>
							</div>
							<!--15-->
							<div class="">
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
										<img src="../../../static/hulu/jiaoying.png"/>
								</div>
							</div>
							<!--16-->
							<div class="">
								<img src="../../../static/hulu/pieces6.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
								<div class="healthGuide-con-footprint">
										<img src="../../../static/hulu/jiaoying.png"/>
								</div>
							</div>
							<div class="sun">
								<img src="../../../static/hulu/taiyang.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
							</div>
							<div class="moon">
								<img src="../../../static/hulu/yueliang.png" />
								<div class="healthGuide-con-dot">
									<div class="healthGuide-con-dot-concret">

									</div>
								</div>
							</div>
						</div>
					</TabPane>

					<!--				----------------------------------我的提醒------------------------------------------>
					<TabPane label="我的提醒" name="name2" class='hitCard'>

						<h1>健康自律养成计划</h1>
						<h2>1/28天</h2>
						<div class="myPlan">
							<img src="../../../static/img/sleep_10.png" alt="" />
							<div class="healthPlan-mask">
								<div class="mask-left">
									<h1>早起打卡</h1>
									<h2>现在开始早起打卡计划</h2>
								</div>
								<div class="mask-right">
									<span>0%</span>
									<i>完成进度</i>
								</div>
							</div>
						</div>

						<div class="myPlan">
							<img src="../../../static/img/sport_15.png" alt="" />
							<div class="healthPlan-mask">
								<div class="mask-left">
									<h1>早起打卡</h1>
									<h2>现在开始早起打卡计划</h2>
								</div>
								<div class="mask-right">
									<span>0%</span>
									<i>完成进度</i>
								</div>
							</div>
						</div>

						<div class="myPlan">
							<img src="../../../static/img/drink_14.png" alt="" />
							<div class="healthPlan-mask">
								<div class="mask-left">
									<h1>早起打卡</h1>
									<h2>现在开始早起打卡计划</h2>
								</div>
								<div class="mask-right">
									<span>0%</span>
									<i>完成进度</i>
								</div>
							</div>
						</div>
					</TabPane>
				</Tabs>
			</div>
		</mt-loadmore>

	</div>

</template>

<script>
	import anime from 'animejs'
	import FootTabbar from '../foorterGuid/footerGuild'
	//	import tab from '@/components/home/Home'
	export default {
		components: {
			'foot-com': FootTabbar,
			clientHeight: '',
		},
		data() {
			return {
				moveDistance: this.offsetHeight,
				Oheight: "",
			}
		},
		beforeCreate() {
			var _this = this;

			function plusReady() {
				void plus.push.createMessage('success', {
					"MessageOptions": [{
						"sound": "none"
					}, {
						title: 'mafia'
					}]

				});
				plus.audio.createPlayer('http://m10.music.126.net/20190309164554/0f2e61523df4fde1282c1043fd8f3eca/ymusic/4848/dc50/3355/62726df9ee5a0d1a95fe0950271cebbc.mp3').play()
				plus.device.beep();
			}
			if(window.plus) {
				plusReady(
					//					plus.push.createMessage('itWorks!')
					plus.audio.createPlayer(plus.io.convertLocalFileSystemURL('./kiss.mp3')).play()
				);
			} else {
				document.addEventListener('plusready', plusReady, false);
			}

			// 监听plusready事件  
			document.addEventListener("plusready", function() {
				// 扩展API加载完毕，现在可以正常调用扩展API
				// 添加监听从系统消息中心点击某条消息启动应用事件
				plus.push.addEventListener("receive", function(msg) {
					// 分析msg.payload处理业务逻辑 

					alert("You clicked: " + msg.content);
				}, false);
			}, false);
			//function plusReady(){
			//	            //  
			//          this.on('tap', 'button', function(event) {  
			//              var id = this.getAttribute('id');
			//				addAlarm();
			//});
			//var main = plus.android.runtimeMainActivity();// 广播接收  
			//          var ALARM_RECEIVER = "alarm_receiver";  
			//          var receiver = plus.android.implements('io.dcloud.android.content.BroadcastReceiver', {  
			//              onReceive: function(context, intent) { //实现onReceiver回调函数  
			//                  plus.android.importClass(intent); //通过intent实例引入intent类，方便以后的‘.’操作  
			//                  //console.log(intent.getAction()); //获取action  
			//                  var txt = "接收到消息"  +intent.getAction() +  ": " +  getCurTime();
			//                  mui.toast(txt);  
			//                  pushMsg(txt);  
			//                  main.unregisterReceiver(receiver); //取消监听  
			//              }  
			//          });  
			//          //  
			//          function addAlarm() {  
			//              // --- 注册监听 start ---  
			//              var IntentFilter = plus.android.importClass('android.content.IntentFilter');  
			//              var filter = new IntentFilter(ALARM_RECEIVER);  
			//              main.registerReceiver(receiver, filter);  
			//              // --- 注册监听 end ---  
			//              // --- 设置闹铃时间 start ---  
			//              var Calendar = plus.android.importClass('java.util.Calendar');  
			//              var calendar = Calendar.getInstance();  
			//              // 11点4分执行  
			//                calendar.set(Calendar.HOUR_OF_DAY, 11);  
			//                calendar.set(Calendar.MINUTE, 4);  
			//                calendar.set(Calendar.SECOND, 0);  
			//              // 过5s 执行  
			//              calendar.setTimeInMillis(Date.parse(new Date()));  
			//              calendar.add(Calendar.SECOND, 5);  
			//              // --- 设置闹铃时间 end ---  
			//              // --- 设置闹铃 ---  
			//              var Intent = plus.android.importClass('android.content.Intent');  
			//              var intent = new Intent(ALARM_RECEIVER);  
			//              //  
			//              var PendingIntent = plus.android.importClass('android.app.PendingIntent');  
			//              var sender = PendingIntent.getBroadcast(main, 0, intent, 0);  
			//              //  
			//              var AlarmManager = plus.android.importClass("android.app.AlarmManager");  
			//              var Context = plus.android.importClass("android.content.Context");  
			//              var alarm = main.getSystemService(Context.ALARM_SERVICE);  
			//              // 一次    
			//              alarm.set(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), sender);  
			//              // 重复多次  
			//              //alarm.setRepeating(AlarmManager.RTC_WAKEUP, calendar.getTimeInMillis(), 5 * 1000, sender);  
			//              mui.toast("设置闹铃5秒后提醒: " +  getCurTime());  
			//          };  
			//          //  
			//          function pushMsg(content) {  
			//              var options = {  
			//                  "title": "闹铃提醒",  
			//              };  
			//              plus.push.createMessage(content, "alarm", options);  
			//          };  
			//          //  
			//          function getCurTime() {  
			//              var d = new Date();  
			//              return d.getFullYear() +  "-" +  (d.getMonth() -  1) +  "-" +  d.getDate() +  " "  + d.getHours() +  ":" +  d.getMinutes() +  ":" +  d.getSeconds();  
			//          };  
			//}

		},
		methods: {
			changeFixed(clientHeight) { //动态修改样式
				this.$refs.homePage.style.height = clientHeight + 'px';
			},

			//			下拉跳转打卡记录页面
			loadTop() {

				//... load more data
				this.$router.push({
					name: 'count'
				})

			},
			//			handleBack() {
			//				this.$router.back()
			//			},
			//			跳转参加竞赛页面
			handleJoinCompetition() {
				this.$router.push({
					name: 'competition'
				})
			},
		},
		computed: {
			computedHeight: function() {

			}
		},
		mounted() {

		},
		watch: {
			// 如果 `clientHeight` 发生改变，这个函数就会运行
			clientHeight: function() {
				this.changeFixed(this.clientHeight)
			},
		},

	}
</script>

<style>
	@import '../../assets/healthPlan/healthPlan/healthPlan.css';
	.healthPlanHitCardDot {
		z-index: 9999;
		width: 0.4rem;
		height: 0.4rem;
		border-radius: 50%;
		position: absolute;
		top: 4.25rem;
		left: 9.1rem;
		background: #fff;
		border: 0.01rem solid #ff6c60;
		box-shadow: 0 0 0.1rem red;
	}
	
	.healthPlanHitCardDot img {
		width: 80%;
		height: 80%;
		z-index: 9999;
		margin-top: 9%;
	}
</style>