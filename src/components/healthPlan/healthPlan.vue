<template>

	<div id="healthPlan" class="page">

		<!--<tab-com></tab-com>-->
		<foot-com></foot-com>
		<mt-loadmore :top-method="loadTop" ref="loadmore">

			<div class="healthPlanHeader"><span>下拉查看日签</span></div>
			<!--iconfont icon-xiangzuojiantou-->
			<div class="healthPlan-con">
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
				<div class='healthGuide'>
					<div class="healthGuide-con">
						<article>
							<div id="">
								<img src="../../../static/hulu/tree.png" />
							</div>
							<div id="">
								<img src="../../../static/hulu/ellipsise.png" />
							</div>
						</article>
						<section>
							<div class="healthGuide-con-right">
								<div class="">
									<router-link to='/healthPlan/myReminder'>
										<div>
											<img src="../../../static/hulu/biao.png" />
										</div>
										<p>提醒</p>
									</router-link>
								</div>
								<ul v-for="(item,index) in this.schemeList" :key='index' @click="handlerHitCardClick(item)">
									<li>{{item.remindItemName}}</li>
									<li>{{item.remindTime}}</li>
								</ul>
							</div>
							<div class="healthGuide-con-left">
								<div class="avatar">
									<div>
										<img src="../../../static/hulu/biao.png" />
									</div>
									<div>
										<img src="../../../static/hulu/hulu.png" />
									</div>
									<p>×<i>5</i></p>
								</div>
								
									<div class="myMsg">
										<router-link to='/message'>
										<img src="../../../static/hulu/laba.png" />
										<b>消息</b>
										</router-link>
									</div>
								
								<div class="clock">
									<div>
										<img src="../../../static/hulu/bitch.png" />
									</div>
									<p>距下次打卡：<b>{{countDownTime}}</b></p>
								</div>
							</div>
						</section>
						<!--1,6-->
						<div class="1" ref='sixO'>
							<img src="../../../static/hulu/pieces1.png" />
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('06')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('06')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--2,7-->
						<div class="2" ref='sevenO'>
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('07')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('07')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--3,8-->
						<div class="3" ref='eightO'>
							<img src="../../../static/hulu/pieces3.png" />
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('08')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('08')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--4,9-->
						<div class="4" ref='nineO'>
							<img src="../../../static/hulu/pieces4.png" />
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('09')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('09')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--5,10-->
						<div class="5" ref='tenO'>
							<img src="../../../static/hulu/pieces2.png" />
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('10')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('10')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--6,11-->
						<div class="6" ref='elevenO'>
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('11')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('11')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--7,1213-->
						<div class="" ref='twelveO'>
							<img src="../../../static/hulu/pieces5.png" />
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('12')>-1||this.showBox.indexOf('13')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('12')>-1||this.showBox.indexOf('13')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--8,1415-->
						<div class="" ref='forthO'>
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('14')>-1||this.showBox.indexOf('15')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('14')>-1||this.showBox.indexOf('15')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--9,1617-->
						<div class="" ref='sixteenO'>
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('16')>-1||this.showBox.indexOf('17')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('16')>-1||this.showBox.indexOf('17')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--10,1819-->
						<div class="" ref='eighteenO'>
							<img src="../../../static/hulu/pieces7.png" />
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('18')>-1||this.showBox.indexOf('19')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('18')>-1||this.showBox.indexOf('19')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--11,2021-->
						<div class="11" ref='twentyO'>
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('20')>-1||this.showBox.indexOf('21')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('20')>-1||this.showBox.indexOf('21')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--12,2223-->
						<div class="12" ref='twentyTwoO'>
							<img src="../../../static/hulu/pieces8.png" />
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('22')>-1||this.showBox.indexOf('23')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('22')>-1||this.showBox.indexOf('23')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--13略略略-->
						<div class="13lueluelue">
							<div class="healthGuide-con-dot">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint">
								<!--<img src="../../../static/hulu/jiaoying.png"/>-->
							</div>
						</div>
						<!--14,01-->
						<div class="14" ref='zeroO'>
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('00')>-1||this.showBox.indexOf('01')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('00')>-1||this.showBox.indexOf('01')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--15,23-->
						<div class="15" ref='twoO'>
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('02')>-1||this.showBox.indexOf('03')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('02')>-1||this.showBox.indexOf('03')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
							</div>
						</div>
						<!--16,45-->
						<div class="16" ref='foreO'>
							<img src="../../../static/hulu/pieces6.png" />
							<div class="healthGuide-con-dot" v-show="this.showBox.indexOf('04')>-1||this.showBox.indexOf('05')>-1?true:false">
								<div class="healthGuide-con-dot-concret">

								</div>
							</div>
							<div class="healthGuide-con-footprint" v-show="this.showBox.indexOf('04')>-1||this.showBox.indexOf('05')>-1?true:false">
								<img src="../../../static/hulu/footPrintSprite_02.png" />
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
				</div>

				<!--				----------------------------------我的提醒------------------------------------------>
			</div>
		</mt-loadmore>

	</div>

</template>

<script>
	import axios from 'axios'
	import anime from 'animejs'
	import FootTabbar from '../foorterGuid/footerGuild';
	import { get, post, cnget } from '../../api/fetch'
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
//				reminder: [{
//					info: '吃饭',
//					time: '14:41'
//				}, {
//					info: '敲敲敲asd',
//					time: '15:41'
//				}, {
//					info: '吃吃吃',
//					time: '16:41'
//				}, {
//					info: '拍拍拍',
//					time: '17:41'
//				}, {
//					info: '揉揉绕',
//					time: '18:41'
//				}],
				response: [],
				schemeList: [],
				//				show:false
				showBox: [],
				beginTime: '',
				endTime: '',
				hitCardStatus0: '',
				hitCardStatus1: '',
				hitCardStatus2: '',
				hitCardStatus3: '',
				hitCardStatus4: '',
				hitCardStatus5: '',
				hitCardStatus6: '',
				hitCardStatus7: '',
				hitCardStatus8: '',
				hitCardStatus9: '',
				hitCardStatus10: '',
				hitCardStatus11: '',
				hitCardStatus12: '',
				hitCardStatus13: '',
				hitCardStatus14: '',
				hitCardStatus15: '',
				hitCardStatus16: '',
				hitCardStatus17: '',
				hitCardStatus18: '',
				hitCardStatus19: '',
				hitCardStatus20: '',
				hitCardStatus21: '',
				hitCardStatus22: '',
				hitCardStatus23: '',
				hitCardStatus: '',
				failedStatus: [],
				succedStatus: [],
				curHour: '',
				curMinutes: '',
				countDownTime: '',
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
		created() {
			//			var h = new Date().getHours();
			//			var m = new Date().getMinutes();
			//			this.nowTime = h + ':' + m
			//			let _this = this; // 声明一个变量指向Vue实例this，保证作用域一致
			//			this.timer = setInterval(() => {
			//				console.log(this.nowTime); // 修改数据date
			//			}, 1000)
			var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
			this.curHour = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
			this.curMinutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
			//				this.nowTimer = curHour + ':' + curMinutes //修改数据dater
			console.log('nowTimer' + this.nowTimer)
			this.timer = setInterval(function() {
				var del5 = new Date().getSeconds() - 300
				if(del5 < 0 && del5 > -60) {
					this.beginTime = new Date().getMinutes() - 1
				}
				if(del5 < -60 && del5 > -120) {
					this.beginTime = new Date().getMinutes() - 2
				}

				if(del5 < -120 && del5 > -180) {
					this.beginTime = new Date().getMinutes() - 3
				}
				if(del5 < -180 && del5 > -240) {
					this.beginTime = new Date().getMinutes() - 4
				}
				if(del5 < -240 && del5 > -300) {
					this.beginTime = new Date().getMinutes() - 5
				}
			}, 1000)
			this.timer = setInterval(function() {
				//				var del5 = new Date().getSeconds() + 300
				this.endTime = new Date().getMinutes() + 5
			}, 1000)

		},
		methods: {
			handlerHitCardClick(item) {
				console.log(item)

				//				switch(item.remindTime.substr(0, 2)) {
				//					case '16':
				//						break;
				//				}
				//				if当前小时==接口小时&&当前分钟和接口分钟之差的绝对值小于等于5   || 当前小时和接口 小时之差小于1&&当前分钟和接口分钟之差的绝对值大于等于55          打卡成功1
				if(item.isFinish == 0) {
					//					console.log(typeof(this.nowTimer)+typeof(this.response.memberRemindScheme.memberRemindSchemeCode)+typeof(item.memberRemindSchemeItemCode)+typeof(item.remindTime)+typeof(item.remindItemName)+typeof('1'))
					if(item.remindTime.substr(0, 2) == this.nowTimer.substr(0, 2) && Math.abs(item.remindTime.substr(3, 2) - this.nowTimer.substr(3, 2)) <= 5 || Math.abs(item.remindTime.substr(0, 2) - this.nowTimer.substr(0, 2)) <= 1 && Math.abs(item.remindTime.substr(3, 2) - this.nowTimer.substr(3, 2)) >= 55) {
						
						console.log(typeof(this.nowTimer) + typeof(this.response.memberRemindScheme.memberRemindSchemeCode) + typeof(item.memberRemindSchemeItemCode) + typeof(item.remindTime) + typeof(item.remindItemName) + typeof('1'))
						get('/health-web/frontMemberScheme/memberClockRecord?clockTime=' + this.nowTimer + '&memberRemindSchemeCode=' + this.response.memberRemindScheme.memberRemindSchemeCode + '&memberRemindSchemeItemCode=' + item.memberRemindSchemeItemCode + '&remindTime=' + item.remindTime + '&remindItemName=' + item.remindItemName + '&status=' + '1', {}).then(
							(res) => {
								console.log('发送成功状态成功' + res)
								plus.nativeUI.toast('打卡成功')
							}
						).catch(
							(err) => {
								console.log("发送成功状态失败 " + err)
							}
						)
					} else {
						plus.nativeUI.toast('打卡时间有误')
					}
				}
			},
			//			超时情况
			isCard(time) {
				var finishVal = '';
				this.schemeList.map((item) => {
					if(item.remindTime.substr(0, 2) == time) {
						finishVal = item.isFinish;
					}
				})
				return finishVal;

			},
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
			//判断打卡超时状态
			failure() {
				this.schemeList.map((item) => {
					if(item.isFinish == 0) {
						if(Number(this.nowTimer.substr(0, 2)) - Number(item.remindTime.substr(0, 2)) > 0 || Number(this.nowTimer.substr(0, 2)) - Number(item.remindTime.substr(0, 2)) == 0 && Number(this.nowTimer.substr(3, 2)) - Number(item.remindTime.substr(3, 2)) > 5) {
							this.hitCardStatus = 2;
							if(this.hitCardStatus == 2) {
								get('/health-web/frontMemberScheme/memberClockRecord?clockTime=' + this.nowTimer + '&memberRemindSchemeCode=' + this.response.memberRemindScheme.memberRemindSchemeCode + '&memberRemindSchemeItemCode=' + item.memberRemindSchemeItemCode + '&remindTime=' + item.remindTime + '&remindItemName=' + item.remindItemName + '&status=' + '2', {}).then(
									(res) => {
										console.log('发送失败状态成功' + res)
									}
								).catch(
									(err) => {
										console.log("发送失败状态失败 " + err)
									}
								)
								this.failedStatus.push(item.remindTime);
								console.log('failure' + this.failedStatus)

							}

							console.log('failure' + item.remindTime + '打卡超时' + this.hitCardStatus)
						}
					}
				})

			},
			//		距下次打卡倒计时
			countDown() {
				this.schemeList.map((item) => {
					var nextRemindTime = null;
					var countDownTimeH = null;
					var countDownTimeM = null;
//					只有状态为0才判断
					if(item.isFinish == 0) {
//						判断那个打卡项最接近下次打卡时间且不超过下次打卡时间
						if(Number(item.remindTime.substr(0, 2)) - Number(this.nowTimer.substr(0, 2)) >= 0 || Number(item.remindTime.substr(0, 2)) - Number(this.nowTimer.substr(0, 2)) < 0 && Number(item.remindTime.substr(3, 2)) - Number(this.nowTimer.substr(3, 2)) > 0) {
							var nextRemindTime = item.remindTime
							if(Number(nextRemindTime.substr(0, 2)) - Number(this.nowTimer.substr(0, 2)) > 0) {
								countDownTimeH = Number(nextRemindTime.substr(0, 2)) - Number(this.nowTimer.substr(0, 2))
								countDownTimeH < 10 ? countDownTimeH = '0' + countDownTimeH : countDownTimeH = countDownTimeH
							} else {
								countDownTimeH = '00'
							}
							if(Number(nextRemindTime.substr(3, 2)) - Number(this.nowTimer.substr(3, 2)) > 0) {
								countDownTimeM = Number(nextRemindTime.substr(3, 2)) - Number(this.nowTimer.substr(3, 2))
								countDownTimeM < 10 ? countDownTimeM = '0' + countDownTimeM : countDownTimeM = countDownTimeM
							} else {
								countDownTimeM = Math.abs(Number(nextRemindTime.substr(3, 2)) - Number(this.nowTimer.substr(3, 2))+60)
								countDownTimeH -= 1
							}
							countDownTimeH<=0?countDownTimeH='00':countDownTimeH
							this.countDownTime = countDownTimeH + ':' + countDownTimeM
						} else {
							this.countDownTime = "今日打卡结束"
						}
					}
				})
			}
			//			handleBack() {
			//				this.$router.back()
			//			},
			//			跳转参加竞赛页面
			//			handleJoinCompetition() {
			//				this.$router.push({
			//					name: 'competition'
			//				})
			//			},
		},
		computed: {
			nowTimer: function() {
				return this.curHour + ':' + this.curMinutes
			},
			computedHeight: function() {

			}
		},
		mounted() {
			get('/health-web/frontMemberScheme/healthCorona', {}).then(
				(res) => {
					this.response = res
					this.schemeList = res.memberRemindScheme.memberRemindSchemeItemList;
					var reg = /^(20|21|22|23|[0-1]\d):[0-5]\d:[0-5]\d$/;
					var regExp = new RegExp(reg);
					for(var i = 0; i < this.schemeList.length; i++) {
						var subHour = this.schemeList[i].remindTime.substr(0, 2)
						this.showBox.push(subHour)
						//方法 1.switch case挨个判断           方法2.放到数组里，属于数组为真，否则为假
						if(!regExp.test(this.schemeList[i].remindTime)) {　
							console.log("时间格式不正确，正确格式为：12:00:00");　　
							return;
						} else {
							var _this = this;
							//							console.log(subHour)
							switch(subHour) {
								case '00':
									this.$refs.zeroO.value = this.isCard('00');
									this.hitCardStatus0 = this.isCard('00')
									console.log(this.$refs.zeroO.value);
									if(this.$refs.zeroO.value == 0) {
										console.log('00待打卡')
									}
									if(this.$refs.zeroO.value == 1) {
										console.log('00已打卡')
									}
									if(this.$refs.zeroO.value == 2) {
										console.log('00未打卡')
									}
									break;
								case '01':
									this.$refs.zeroO.nodeValue = this.isCard('01');
									this.hitCardStatus1 = this.isCard('01')
									console.log(this.$refs.zeroO.nodeValue);
									if(this.$refs.zeroO.nodeValue == 0) {
										console.log('01待打卡')
									}
									if(this.$refs.zeroO.nodeValue == 1) {
										console.log('01已打卡')
									}
									if(this.$refs.zeroO.nodeValue == 2) {
										console.log('01未打卡')
									}
									break;
								case '02':
									this.$refs.twoO.value = this.isCard('02');
									this.hitCardStatus2 = this.isCard('02')
									console.log(this.$refs.twoO.value);
									if(this.$refs.twoO.value == 0) {
										console.log('02待打卡')
									}
									if(this.$refs.twoO.value == 1) {
										console.log('02已打卡')
									}
									if(this.$refs.twoO.value == 2) {
										console.log('02未打卡')
									}
									break;
								case '03':
									this.$refs.twoO.nodeValue = this.isCard('03');
									this.hitCardStatus3 = this.isCard('03')
									console.log(this.$refs.twoO.nodeValue);
									if(this.$refs.twoO.nodeValue == 0) {
										console.log('03待打卡')
									}
									if(this.$refs.twoO.nodeValue == 1) {
										console.log('03已打卡')
									}
									if(this.$refs.twoO.nodeValue == 2) {
										console.log('03未打卡')
									}
									break;
								case '04':
									this.$refs.foreO.value = this.isCard('04');
									this.hitCardStatus4 = this.isCard('04')
									console.log(this.$refs.foreO.value);
									if(this.$refs.foreO.value == 0) {
										console.log('04待打卡')
									}
									if(this.$refs.foreO.value == 1) {
										console.log('04已打卡')
									}
									if(this.$refs.foreO.value == 2) {
										console.log('04未打卡')
									}
									break;
								case '05':
									this.$refs.foreO.nodeValue = this.isCard('05');
									this.hitCardStatus5 = this.isCard('05')
									console.log(this.$refs.foreO.nodeValue);
									if(this.$refs.foreO.nodeValue == 0) {
										console.log('05待打卡')
									}
									if(this.$refs.foreO.nodeValue == 1) {
										console.log('05已打卡')
									}
									if(this.$refs.foreO.nodeValue == 2) {
										console.log('05未打卡')
									}
									break;
								case '06':
									this.$refs.sixO.value = this.isCard('06');
									this.hitCardStatus6 = this.isCard('06')
									console.log(this.$refs.sixO.value);
									if(this.$refs.sixO.value == 0) {
										console.log('06待打卡')
									}
									if(this.$refs.sixO.value == 1) {
										console.log('06已打卡')
									}
									if(this.$refs.sixO.value == 2) {
										console.log('06未打卡')
									}
									break;
								case '07':
									this.$refs.sevenO.value = this.isCard('07');
									this.hitCardStatus7 = this.isCard('07')
									console.log(this.$refs.sevenO.value);
									if(this.$refs.sevenO.value == 0) {
										console.log('07待打卡')
									}
									if(this.$refs.sevenO.value == 1) {
										console.log('07已打卡')
									}
									if(this.$refs.sevenO.value == 2) {
										console.log('07未打卡')
									}
									break;
								case '08':
									this.$refs.eightO.value = this.isCard('08');
									this.hitCardStatus8 = this.isCard('08')
									console.log(this.$refs.eightO.value);
									if(this.$refs.eightO.value == 0) {
										console.log('08待打卡')
									}
									if(this.$refs.eightO.value == 1) {
										console.log('08已打卡')
									}
									if(this.$refs.eightO.value == 2) {
										console.log('08未打卡')
									}
									break;
								case '09':
									this.$refs.nineO.value = this.isCard('09');
									this.hitCardStatus9 = this.isCard('09')
									console.log(this.$refs.nineO.value);
									if(this.$refs.nineO.value == 0) {
										console.log('09待打卡')
									}
									if(this.$refs.nineO.value == 1) {
										console.log('09已打卡')
									}
									if(this.$refs.nineO.value == 2) {
										console.log('09未打卡')
									}
									break;
								case '10':
									this.$refs.tenO.value = this.isCard('10');
									this.hitCardStatus10 = this.isCard('10')
									console.log(this.$refs.tenO.value);
									if(this.$refs.tenO.value == 0) {
										console.log('10待打卡')
									}
									if(this.$refs.tenO.value == 1) {
										console.log('10已打卡')
									}
									if(this.$refs.tenO.value == 2) {
										console.log('10未打卡')
									}
									break;
								case '11':
									this.$refs.elevenO.value = this.isCard('11');
									this.hitCardStatus11 = this.isCard('11')
									console.log(this.$refs.elevenO.value);
									if(this.$refs.elevenO.value == 0) {
										console.log('11待打卡')
									}
									if(this.$refs.elevenO.value == 1) {
										console.log('11已打卡')
									}
									if(this.$refs.elevenO.value == 2) {
										console.log('11未打卡')
									}
									break;
								case '12':
									this.$refs.twelveO.value = this.isCard('12');
									this.hitCardStatus12 = this.isCard('12')
									console.log(this.$refs.twelveO.value);
									if(this.$refs.twelveO.value == 0) {
										console.log('12待打卡')
									}
									if(this.$refs.twelveO.value == 1) {
										console.log('12已打卡')
									}
									if(this.$refs.twelveO.value == 2) {
										console.log('12未打卡')
									}
									break;
								case '13':
									this.$refs.twelveO.nodeValue = this.isCard('13');
									this.hitCardStatus13 = this.isCard('13')
									console.log(this.$refs.twelveO.nodeValue);
									if(this.$refs.twelveO.nodeValue == 0) {
										console.log('13待打卡')
									}
									if(this.$refs.twelveO.nodeValue == 1) {
										console.log('13已打卡')
									}
									if(this.$refs.twelveO.nodeValue == 2) {
										console.log('13未打卡')
									}
									break;
								case '14':
									this.$refs.forthO.value = this.isCard('14');
									this.hitCardStatus14 = this.isCard('14')
									console.log(this.$refs.forthO.value);
									if(this.$refs.forthO.value == 0) {
										console.log('14待打卡')
									}
									if(this.$refs.forthO.value == 1) {
										console.log('14已打卡')
									}
									if(this.$refs.forthO.value == 2) {
										console.log('14未打卡')
									}
									break;
								case '15':
									this.$refs.forthO.nodeValue = this.isCard('15');
									this.hitCardStatus15 = this.isCard('15')
									console.log(this.$refs.forthO.nodeValue);
									if(this.$refs.forthO.nodeValue == 0) {
										console.log('15待打卡')
									}
									if(this.$refs.forthO.nodeValue == 1) {
										console.log('15已打卡')
									}
									if(this.$refs.forthO.nodeValue == 2) {
										console.log('15未打卡')
									}
									console.log(this.hitCardStatus15 + '!!!')
									break;
								case '16':
									this.$refs.sixteenO.part.value = this.isCard('16');
									this.hitCardStatus16 = this.isCard('16')
									console.log(this.$refs.sixteenO.part.value);
									if(this.$refs.sixteenO.part.value == 0) {
										console.log('16待打卡')
									}
									if(this.$refs.sixteenO.part.value == 1) {
										console.log('16已打卡')
									}
									if(this.$refs.sixteenO.part.value == 2) {
										console.log('16未打卡')
									}
									break;
								case '17':
									this.$refs.sixteenO.nodeValue = this.isCard('17');
									this.hitCardStatus17 = this.isCard('17')
									console.log(this.$refs.sixteenO.nodeValue);
									if(this.$refs.sixteenO.nodeValue == 0) {
										console.log('17待打卡')
									}
									if(this.$refs.sixteenO.nodeValue == 1) {
										console.log('17已打卡')
									}
									if(this.$refs.sixteenO.nodeValue == 2) {
										console.log('17未打卡')
									}
									break;
								case '18':
									this.$refs.eighteenO.value = this.isCard('18');
									this.hitCardStatus18 = this.isCard('18')
									console.log(this.$refs.eighteenO.value);
									if(this.$refs.eighteenO.value == 0) {
										console.log('18待打卡')
									}
									if(this.$refs.eighteenO.value == 1) {
										console.log('18已打卡')
									}
									if(this.$refs.eighteenO.value == 2) {
										console.log('18未打卡')
									}
									break;
								case '19':
									this.$refs.eighteenO.nodeValue = this.isCard('19');
									this.hitCardStatus19 = this.isCard('19')
									console.log(this.$refs.eighteenO.nodeValue);
									if(this.$refs.eighteenO.nodeValue == 0) {
										console.log('19待打卡')
									}
									if(this.$refs.eighteenO.nodeValue == 1) {
										console.log('19已打卡')
									}
									if(this.$refs.eighteenO.nodeValue == 2) {
										console.log('19未打卡')
									}
									break;
								case '20':
									this.$refs.twentyO.value = this.isCard('20');
									this.hitCardStatus20 = this.isCard('20')
									console.log(this.$refs.twentyO.value);
									if(this.$refs.twentyO.value == 0) {
										console.log('20待打卡')
									}
									if(this.$refs.twentyO.value == 1) {
										console.log('20已打卡')
									}
									if(this.$refs.twentyO.value == 2) {
										console.log('20未打卡')
									}
									break;
								case '21':
									this.$refs.twentyO.nodeValue = this.isCard('21');
									this.hitCardStatus21 = this.isCard('21')
									console.log(this.$refs.twentyO.nodeValue);
									if(this.$refs.twentyO.nodeValue == 0) {
										console.log('21待打卡')
									}
									if(this.$refs.twentyO.nodeValue == 1) {
										console.log('21已打卡')
									}
									if(this.$refs.twentyO.nodeValue == 2) {
										console.log('21未打卡')
									}
									break;
								case '22':
									this.$refs.twentyTwoO.value = this.isCard('22');
									this.hitCardStatus22 = this.isCard('22')
									console.log(this.$refs.twentyTwoO.value);
									if(this.$refs.twentyTwoO.value == 0) {
										console.log('22待打卡')
									}
									if(this.$refs.twentyTwoO.value == 1) {
										console.log('22已打卡')
									}
									if(this.$refs.twentyTwoO.value == 2) {
										console.log('22未打卡')
									}
									break;
								case '23':
									this.$refs.twentyTwoO.nodeValue = this.isCard('23');
									this.hitCardStatus23 = this.isCard('23')
									console.log(this.$refs.twentyTwoO.nodeValue);
									if(this.$refs.twentyTwoO.nodeValue == 0) {
										console.log('23待打卡')
									}
									if(this.$refs.twentyTwoO.nodeValue == 1) {
										console.log('23已打卡')
									}
									if(this.$refs.twentyTwoO.nodeValue == 2) {
										console.log('23未打卡')
									}
									break;
							}
						}
					}
					this.failure();
					this.countDown()
				}
			).catch(
				(err) => {
					console.log(err)
				}
			)
		},
		beforUpdate() {

		},
		destroyed() {

		},
		watch: {
			curHour: function(newVal) {
				this.curHour = newVal
				console.log('当前时' + this.curHour)
			},
			curMinutes: function(modVal) {
				this.curMinutes = modVal
				console.log('当前分' + this.curMinutes)
			},
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