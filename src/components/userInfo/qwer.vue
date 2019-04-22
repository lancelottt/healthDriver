<template>
	<div id="payment">
		<header>
			<div></div>
			<div>qwer</div>
			<div></div>
		</header>
		<article class="payment-main">
			<section class="mainframe">
				<div>
					<div><img src="../../../static/img/huangguan (2).png" /></div>
					<i>会员488/年</i>
				</div>
				<div>
					<div>
						<div><img src="../../../static/img/qwe/ARROW.png" /><b>定制健康管理</b></div>
						<div><img src="../../../static/img/qwe/YALIN.png" /><b>定制专属计划</b></div>
						<div><img src="../../../static/img/qwe/FIRE.png" /><b>自选瘦身计划</b></div>
						<div><img src="../../../static/img/qwe/ELIT.png" /><b>健康自律养成计划</b></div>
					</div>
				</div>
				<div>
					会员权益
				</div>
				<div class="my-middle-el-button--danger payButton" @click="handlerWxPay()">
					<p>开通会员</p>
				</div>

				<!--<div class="iconfont icon-weixin" >
					微信支付
				</div>-->

			</section>
			<div class="nextBtn" @click="handlerNext()">
				next
			</div>
		</article>
	</div>
</template>

<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			handlerWxPay() {
				var _this = this;
				var k = null;
				var wxpayService = null;
				var wxpayReady = null;
				plus.payment.getChannels((s) => {
					plus.nativeUI.toast("获取支付通道成功 " + JSON.stringify(s))
					console.log("获取支付通道成功 " + JSON.stringify(s))
					if(s.length) {
						for(k in s) {
							if(s[k].id = "wxpay") {
								wxpayService = s[k]
								console.log('wxpayService' + wxpayService)
							}
						}
					} else {
						console.log('没有微信通道')
					}
					plus.payment.request(wxpayService, {
						"retcode": 0,
						"retmsg": "ok",
						"appid": 'wxb7a73ac2a23fe04b',
						"noncestr": '1850559950',
						"package": "Sign=WXPay",
						"partnerid": '1531113621',
						"prepayid": 'wx191851219619642d492396841190621332',
						"timestamp": 1555671055,
						"sign": '7FE9A9F56BDE90F1DD394819A28C8738'
					}, function(s) {
						plus.nativeUI.toast("支付操作成功！" + JSON.stringify(s))
						console.log("支付操作成功！" + JSON.stringify(s));
					}, function(e) {
						plus.nativeUI.toast("支付操作失败！" + JSON.stringify(e))
						console.log("支付失败：" + e.message);
					});
				}, (error) => {
					plus.nativeUI.toast("获取支付通道失败 " + JSON.stringify(error))
					console.log("获取支付通道失败" + JSON.stringify(error))
				});
			},
			handlerNext() {
				this.$router.push({
					name: 'Invitation'
				})
			}
		}
	}
</script>

<style>
	@import '../../assets/common/scss/common.css';
	@import '../../assets/chatLogin/payment/payment.css';
	.payButton{
		text-align: center;
	}
</style>