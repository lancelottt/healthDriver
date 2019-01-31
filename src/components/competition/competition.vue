<template>
	<div id="competition">

		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<section class="competition-main">
			<img src="../../../static/img/competition-big_03.png" />
			<div class="competition-text">
				<span>每日5:00-8:00早起打卡</span>
				<span>早起奖励金总额(元)</span>
				<span>已有<b>9999999</b>人报名</span>
				<span>￥<i>27742.00</i></span>
				<div class="competition-guide">
					<div><img src="../../../static/img/competition-coin.png" /><img src="../../../static/img/competition3.png" /><img src="../../../static/img/competit1.png" /><img src="../../../static/img/arrowHead.png" /><img src="../../../static/img/arrowHead.png" /></div>
					<div><b>付费者参赛</b><b>早起打卡</b><b>瓜分奖励金</b></div>
				</div>
				<span>查看活动规则 ></span>
				<div></div>
				<img src="../../../static/img/competition-cloud3.png" />
				<img src="../../../static/img/competition-cloud.png" />
				<div class="account-balance">
					<span>我的余额：0.00元</span>
				</div>
			</div>

			<Button @click="modal5 = true"><img src="../../../static/img/competition5.png"/><img src="../../../static/img/competition-circle.png"/></Button>
			<!--模态框-->
			<Modal class='modal' v-model="modal5" title="Custom width" width="300">
				<div class="modal-con">
					<div>
						<h2>支付报名费:</h2>
						<span>2.00</span>
						<i>元</i>
					</div>
					<div>
						<h2>挑战时间:</h2>
						<span>2018年12月7日 5:00-8:00</span>
					</div>
					<div>
						<h2>活动说明:</h2>
						<span>1.活动以东八区(北京时间)判定打卡时间；</span>
						<h3>2.挑战日在规定时间内完成打卡，视为挑战成功；</h3>
						<span>3.挑战成功者将获得≥2元的早起奖励金。</span>
					</div>
					<div>
						<h2>支付方式</h2>
						<RadioGroup v-model="phone">
							<Radio label="apple">
								<Icon type="logo-apple"></Icon>
								<span>余额支付</span>
							</Radio>
							<Radio label="android">
								<Icon type="logo-android"></Icon>
								<span><i class="iconfont icon-weixin"></i>微信支付</span>
							</Radio>
							<!--<Radio label="windows">
								<Icon type="logo-windows"></Icon>
								<span>Windows</span>
							</Radio>-->
						</RadioGroup>
					</div>
					

				</div>
				<div class="pay-confirm" @click="handleCompetitionPay()">
						
							支付并报名
						
				</div>
			</Modal>
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
			}
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
			handleBack() {
				this.$router.back()
			},
			handleCompetitionPay(){
				this.$router.push({name:'healthPlan'})
			}
		}
	}
</script>

<style>
	@import '../../assets/competition/competition.css';
	.ivu-modal-close {
		display: none;
	}
	
	.ivu-modal-header {
		display: none;
	}
</style>