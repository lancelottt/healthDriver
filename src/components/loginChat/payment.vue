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
					<i>会员{{this.cost}}/年</i>
				</div>
				<div>
					<div>
						<div><img src="../../../static/img/qwe/ARROW.png" /><b>定制健康管理</b></div>
						<div><img src="../../../static/img/qwe/YALIN.png" /><b>定制专属计划</b></div>
						<div><img src="../../../static/img/qwe/FIRE.png" /><b>自选瘦身计划</b></div>
						<div><img src="../../../static/img/qwe/ELIT.png" /><b>健康自律养成计划</b></div>
					</div>
				</div>
				<!--<p>{{userid}}</p>
				<p>{{usernick}}</p>
				<p>{{usercode}}</p>
				<p>{{this.token}}</p>
				<img :src="userav"/>-->
				<!--<p>{{store.state.user.token}}</p>-->
				<div>
					会员权益
				</div>
				<div class="my-middle-el-button--danger payButton"  @click="handlerWxPay()"><p>开通会员</p></div>

				<!--<div class="iconfont icon-weixin" >
					微信支付
				</div>-->
				
			</section>
			<!--<div class="nextBtn" @click="handlerNext()">.
				</div>-->
		</article>
	</div>
</template>

<script>
	import { get, post } from "../../api/fetch";
	import axios from 'axios'
	import store from '@/store/index'
	import vue from 'vue'
	import Vuex from 'vuex'
	export default {
		data() {
			return {
				token:'',
				cost:''
			}
		},
		created(){
			this.token = store.state.user.token
		},
		computed: {
			...Vuex.mapState({
				userid:state=>store.state.user.uid,
				usernick: state => store.state.myInfo.nickname,
				usercode:state=>store.state.user.userCode,
				userav:state=>store.state.myInfo.headimgurl,
			})
		},
		mounted(){
			this.getProductInfo()
			console.log(store.state.user.token)
		},
		methods: {
			getProductInfo() {
				get('/health-web/modules/pmsproduct/getUserProduct', {}).then(res => {
					this.info = res.pmsProduct;
					this.cost = res.pmsProduct.price
					console.log(JSON.stringify(this.info))
				});
			},
			handlerWxPay() {
				this.$router.push('/paymentInfo')
//				var _this = this;
//				var k = null;
//				var wxpayService = null;
//				var wxpayReady = null;
//				plus.payment.getChannels((s) => {
//					plus.nativeUI.toast("获取支付通道成功 " + JSON.stringify(s))
//					console.log("获取支付通道成功 " + JSON.stringify(s))
//					if(s.length) {
//						for(k in s) {
//							if(s[k].id = "wxpay") {
//								wxpayService = s[k]
//								wxpayReady = JSON.parse(wxpayService)
//							}
//							console.log('wxpayReady'+wxpayReady)
//							console.log('wxpayReady'+JSON.stringify(wxpayReady))
//							if(wxpayReady == null) {
//								plus.nativeUI.toast('没有服务')
//								return;
//							}
//						}
//					} else {
//						if(s.id = "wxpay") {
//							wxpayReady = JSON.parse(s)
//						}
//					}
//					plus.payment.request(wxpayReady, {
//						productid: '123123',
//						username: 'zyd',
//						quantity: '1'
//					}, function(s) {
//						plus.nativeUI.toast("支付操作成功！" + JSON.stringify(s))
//						console.log("支付操作成功！" + JSON.stringify(s));
//					}, function(e) {
//						plus.nativeUI.toast("支付操作失败！" + JSON.stringify(e))
//						console.log("支付失败：" + e.message);
//					});
//				}, (error) => {
//					plus.nativeUI.toast("获取支付通道失败 " + JSON.stringify(error))
//					console.log("获取支付通道失败" + JSON.stringify(error))
//				});
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