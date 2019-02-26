<template>
	<div id="competitionJoined">

		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<section class="competition-main">
			<img src="../../../static/img/competitionJoined-background.png" />
			<div class="competition-text">
				<span>每日5:00-8:00早起打卡</span>
				<span>1902期-06796组</span>
				<span>
					<p class="pink" @click="handleCompetitionJoinedHitCard()">打卡<br/><b>{{date}}</b></p>
				</span>
				<span>打卡时间：2月19日05：00-08：00</span>
				<div class="competition-guide">
					<div>
						<p>1232131123.00</p>
						<p>奖励金总额（元）</p>
					</div>
					<div>
						<p>927412321310</p>
						<p>报名人数</p>
					</div>
				</div>
				<span>查看活动规则 ></span>
				<div></div>
				<img src="../../../static/img/competition-cloud3.png" />
				<img src="../../../static/img/competition-cloud.png" />
				<div class="account-balance">
					<span>我的余额：0.00元</span>
				</div>
			</div>

			<Button @click="handleCompetitionJoinedBtn()"><img src="../../../static/img/getUpEarlyTogether.png"/></Button>

		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				//				modal2: false,
				//				modal_loading: false,
				//				modal3: false,
				//				modal4: false,
				modal5: false,
				phone: 'apple',
				NowTime: 'NowTime',
				date:''
			}
		},
		beforeCreate() {
			var _this = this; //声明一个变量指向Vue实例this，保证作用域一致
			this.timer = setInterval(function() {
				var curHour = new Date().getHours() < 10 ? "0" + new Date().getHours() : new Date().getHours();
				var curMinutes = new Date().getMinutes() < 10 ? "0" + new Date().getMinutes() : new Date().getMinutes();
				var curSecond = new Date().getSeconds() < 10 ? "0" + new Date().getSeconds() : new Date().getSeconds();
				_this.date = curHour + ':' + curMinutes + ':' + curSecond; //修改数据date
			}, 1000)
		},
		mounted() {
			
		},
		methods: {
			del() {
				this.modal_loading = true;
				setTimeout(() => {
					this.modal_loading = false;
					this.modal2 = false;
					this.$Message.success('Successfully delete');
				}, 2000);
			},
			//			返回
			handleBack() {
				this.$router.back()
			},
			//			大卡车功
			handleCompetitionJoinedHitCard() {
				var HitCardSucc = document.querySelector('.pink')
				HitCardSucc.innerHTML = '打卡成功 '
			},
			//			邀请朋友注册
			handleCompetitionJoinedBtn() {
				let _this = this
				alert("对方不想说话，并向你抛出了一个异常 ")
				let t = setTimeout(function() {
					_this.$router.push({
						name: 'healthPlan'
					})
				}, 500)

			}
		},
		beforeDestroy() {
			if(this.timer) {
				clearInterval(this.timer); //在vue实例销毁钱，清除我们的定时器
			}
		}
	}
</script>

<style>
	@import '../../assets/competition/competitionJoined/competitionJoined.css';
	.ivu-modal-close {
		display: none;
	}
	
	.ivu-modal-header {
		display: none;
	}
</style>