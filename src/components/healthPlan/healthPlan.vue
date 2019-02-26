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
					<TabPane label="我的计划" name="name1" class='hitCard'>
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
							<!--<button id="alarm"> 插入闹铃</button> -->
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

					<!--		------------------------------------------------健康导航 -----------------------------------------	-->
					<TabPane label="健康导航" name="name2" class='healthGuide'>
						<div class="healthPlanHitCardDot" ref="homePage">
							<img src="../../../static/img/competition-coin.png" />
						</div>
						<div class="healthGuide-con">
							<div class="loop">
								<!--------------------------------------------left------------------------------------------>
								<div class="healthGuideSlot1" @click="handleHealthPlanGo1($event)" v-model="moveDistance" ref="move" value="666">
									<div>07:00</div>
									<div></div>
									<div>起床</div>
								</div>
								<div class="healthGuideSlot2" @click="handleHealthPlanGo2()">
									<div>07:00</div>
									<div></div>
									<div>撒是</div>
								</div>
								<div class="healthGuideSlot3" @click="handleHealthPlanGo3()">
									<div>07:00</div>
									<div></div>
									<div>吃 </div>
								</div>

								<div class="healthGuideSlot4" @click="handleHealthPlanGo4()">
									<div>07:00</div>
									<div></div>
									<div>喝</div>
								</div>

								<div class="healthGuideSlot5" @click="handleHealthPlanGo5()">
									<div>07:00</div>
									<div></div>
									<div>啦是</div>
								</div>
								<!------------------------------------------top----------------------------------------->
								<div class="healthGuideSlot6" @click="handleHealthPlanGo6()">
									<div>07:00</div>
									<div><img src="" /></div>
									<div>真香</div>
								</div>
								<div class="healthGuideSlot7" @click="handleHealthPlanGo7()">
									<div>07:00</div>
									<div><img src="" /></div>
									<div>鞍山市</div>
								</div>
								<!----------------------------------------------right-------------------------------------->
								<div class="healthGuideSlot8" @click="handleHealthPlanGo8()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot9" @click="handleHealthPlanGo9()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot10" @click="handleHealthPlanGo10()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot11" @click="handleHealthPlanGo11()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot12" @click="handleHealthPlanGo12()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot13" @click="handleHealthPlanGo13()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot14" @click="handleHealthPlanGo14()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot15" @click="handleHealthPlanGo15()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot16" @click="handleHealthPlanGo16()">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot17">
									<div>请问</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<!---------------------------------bottom--------------------------------------------->
								<div class="healthGuideSlot18">
									<div>真香</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<div class="healthGuideSlot19">
									<div>鞍山</div>
									<div><img src="" /></div>
									<div>07:00</div>
								</div>
								<!---------------------------------------left---------------------------------------->
								<div class="healthGuideSlot20">
									<div>07:00</div>
									<div></div>
									<div>起床</div>
								</div>
								<div class="healthGuideSlot21">
									<div>07:00</div>
									<div></div>
									<div>撒是</div>
								</div>
								<div class="healthGuideSlot22">
									<div>07:00</div>
									<div></div>
									<div>吃 </div>
								</div>

								<div class="healthGuideSlot23">
									<div>07:00</div>
									<div></div>
									<div>喝</div>
								</div>

								<div class="healthGuideSlot24">
									<div>07:00</div>
									<div></div>
									<div>啦是</div>
								</div>
							</div>
						</div>
					</TabPane>

					<!--				----------------------------------我的提醒------------------------------------------>
					<TabPane label="我的提醒" name="name3" class='hitCard'>

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
				Oheight: ""
			}
		},
		beforeCreate() {
			function plusReady() {

				// 在这里调用plus api
				void plus.push.createMessage('success', {
					"MessageOptions": [{
						"sound": "none"
					}, {
						title: 'mafia'
					}]

				});
				plus.audio.createPlayer('http://demo.dcloud.net.cn/test/audio/apple.mp3').play()
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
				console.log(clientHeight);
				this.$refs.homePage.style.height = clientHeight + 'px';
			},
			handleHealthPlanGo1(e) {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				console.log(e.currentTarget.clientHeight)
				while(OffSetTop.top > 350 && OffSetTop.top < 360 && OffSetTop.left > 50 && OffSetTop.left < 100) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: 0,
							translateY: -this.clientHeight / 17,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',
							//						complete: () => {
							//							anime({
							//								targets: '.healthPlanHitCardDot',
							//								translateX: 0,
							//								translateY: 0,
							//								rotateY: [0, 120],
							//								complete: () => {
							//									anime({
							//										targets: '.healthPlanHitCardDot',
							//										translateX: 200,
							//										translateY: 100,
							//										rotateY: [0, 120],
							//										complete: () => {
							//
							//											resolve(true)
							//										}
							//									})
							//								}
							//							})
							//						}
						})
					})
				}

			},
			handleHealthPlanGo2() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				while(OffSetTop.top > 300 && OffSetTop.top < 310 && OffSetTop.left > 50 && OffSetTop.left < 100) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: 0,
							translateY: -this.clientHeight / 9 - 1,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
			handleHealthPlanGo3() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				while(OffSetTop.top > 200 && OffSetTop.top < 270 && OffSetTop.left > 50 && OffSetTop.left < 100) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: 0,
							translateY: -this.clientHeight / 6 - 2,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
			handleHealthPlanGo4() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 220 && OffSetTop.top < 230 && OffSetTop.left > 50 && OffSetTop.left < 100) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: 0,
							translateY: -OffSetTop.top + 59,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
			handleHealthPlanGo5() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 180 && OffSetTop.top < 190 && OffSetTop.left > 50 && OffSetTop.left < 100) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.top / 6 - 10,
							translateY: -OffSetTop.top,
							rotateY: [0, 0],
							duration: 500,
							easing: 'linear',
							complete: () => {
								anime({
									targets: '.healthPlanHitCardDot',
									translateX: OffSetTop.top / 6 + 10,
									translateY: -OffSetTop.top - 2,
									duration: 500,
									easing: 'linear',
									complete: () => {
										anime({
											targets: '.healthPlanHitCardDot',
											translateX: OffSetTop.top / 6 + 40,
											translateY: -OffSetTop.top - 3,
											duration: 700,
											easing: 'linear',
											//											complete: () => {
											//
											//												resolve(true)
											//											}
										})
									}
								})
							}
						})
					})
				}

			},
			handleHealthPlanGo6() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 160 && OffSetTop.top < 170) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.top / 6 + 118,
							translateY: -OffSetTop.top - 20,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
			handleHealthPlanGo7() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 160 && OffSetTop.top < 170) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.top + 20,
							translateY: -OffSetTop.top - 20,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'linear',
							complete: () => {
								anime({
									targets: '.healthPlanHitCardDot',
									translateX: OffSetTop.top + 30,
									translateY: -OffSetTop.top - 20,
									duration: 700,
									easing: 'linear',
									complete: () => {
										anime({
											targets: '.healthPlanHitCardDot',
											translateX: OffSetTop.top + 50,
											translateY: -OffSetTop.top - 0,
											duration: 700,
											easing: 'linear',
										})
									}
								})
							}
						})
					})
				}
			},
			handleHealthPlanGo8() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 180 && OffSetTop.top < 190 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.top + 32,
							translateY: OffSetTop.top / 10 - 145,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'linear',
						})
					})
				}
			},
			handleHealthPlanGo9() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 220 && OffSetTop.top < 230 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.left - 90,
							translateY: OffSetTop.top / 10 - 105,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
			handleHealthPlanGo10() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 260 && OffSetTop.top < 270 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.left - 90,
							translateY: OffSetTop.top / 10 - 70,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
			handleHealthPlanGo11() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 300 && OffSetTop.top < 310 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.left - 88,
							translateY: OffSetTop.top / 10 - 30,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
			handleHealthPlanGo12() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 350 && OffSetTop.top < 360 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.left - 88,
							translateY: OffSetTop.top / 10 + 5,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
						handleHealthPlanGo13() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 390 && OffSetTop.top < 400 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.left - 88,
							translateY: OffSetTop.top / 10 + 45,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
						handleHealthPlanGo14() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 430 && OffSetTop.top < 440 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.left - 88,
							translateY: OffSetTop.top / 10 + 80,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
						handleHealthPlanGo15() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 470 && OffSetTop.top < 480 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.left - 88,
							translateY: OffSetTop.top / 10 + 120,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
			},
									handleHealthPlanGo16() {
				var OffSetTop = this.$refs.homePage.getBoundingClientRect()
				console.log(OffSetTop)
				if(OffSetTop.top > 510 && OffSetTop.top < 520 && OffSetTop.left > 300 && OffSetTop.left < 350) {
					return new Promise((resolve) => {
						anime({
							targets: '.healthPlanHitCardDot',
							translateX: OffSetTop.left - 88,
							translateY: OffSetTop.top / 10 + 155,
							rotateY: [0, 0],
							duration: 1000,
							easing: 'easeInOutQuart',

						})
					})
				}
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
			var OffSetTop = this.$refs.homePage.getBoundingClientRect()
			console.log(OffSetTop)
			// 获取浏览器可视区域高度
			var Oheight = this.$refs.homePage.offsetHeight
			console.log(Oheight)
			this.clientHeight = `${document.documentElement.clientHeight}` //document.body.clientWidth;
			//console.log(self.clientHeight);
			window.onresize = function temp() {
				this.clientHeight = `${document.documentElement.clientHeight}`;
				console.log(this.clientHeight)
			};
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