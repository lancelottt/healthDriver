<template>
	<div id="payment">
		<header>
			<div></div>
			<div>开通会员</div>
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
				<button class="my-middle-el-button--danger"  @click="handlerWxPay()"><p>开通会员</p></button>

				<!--<div class="iconfont icon-weixin" >
					微信支付
				</div>-->
				<div class="nextBtn" @click="handlerNext()">
					next
				</div>
			</section>
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
								wxpayReady = JSON.parse(wxpayService)
							}
							console.log(wxpayReady)
							console.log(JSON.stringify(wxpayReady))
							if(wxpayReady == null) {
								plus.nativeUI.toast('没有服务')
								return;
							}
						}
					} else {
						if(s.id = "wxpay") {
							wxpayReady = JSON.parse(s)
						}
					}
					plus.payment.request(wxpayReady, {
						productid: '123123',
						username: 'zyd',
						quantity: '1'
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
</style>