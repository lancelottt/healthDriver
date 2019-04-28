<template>
  <div class="paybg">
    <div class="had">
      <div class="componentHeader-header">
        <div class="Tp" @click="handlerBack()"></div>
        <div class="headerAmic">立即支付</div>
      </div>
    </div>
    <div class="payMain">
      <div class="proTitle">
        <h3>商品信息</h3>
      </div>
      <div class="proInfo" v-if="info">
        <ul>
          <li>
            <img :src="info.schemeImgUrl">
          </li>
          <li>
            <h3>{{info.chargeSchemeName}}</h3>
            <p>类别：血糖</p>
          </li>
        </ul>
        <ul>
          <li>
            <h4>￥{{info.price}}</h4>
            <h5>x1</h5>
          </li>
        </ul>
      </div>
      <div class="proTitle">
        <h3>支付方式</h3>
      </div>
      <div class="pay-type">
        <img src="../../../static/images/wechatPay_06.png" alt>
        <span>微信支付</span>
      </div>
    </div>
    <div class="footer">
      <ul>
        <li>
          合计：
          <span>￥{{info.price}}</span>
        </li>
        <li>
          <h3 @click="getPlaceOrder">确认支付</h3>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
	import store from '@/store/index'
	import vue from 'vue'
	import Vuex from 'vuex'
import { get, post } from "../../api/fetch";
export default {
  data() {
    return {
      info: null,
      pays: {}, // 支付通道标识
      wxService: null
    };
  },
  created() {
    this.getProductInfo();
    /* 检测支付通道 */
  },
  methods: {
    handlerBack() {
      this.$router.back();
    },
    getProductInfo() {
      get(
        `/health-web/ChargeScheme/details/chargeScheme?id=${
          this.$route.query.id
        }`
      ).then(res => {
        console.log("getProductInfores:" + JSON.stringify(res));
        this.info = res.data;
      });
    },
    /* 下单-生成订单 */
    getPlaceOrder() {
      get(`/health-web/order/generateSchemeOrder`, {
        schemeCode: this.$route.query.id,
        userId: store.state.user.uid
      })
        .then(res => {
          console.log(res.order.orderSn, res.order.totalAmount);
          this.goPay(res.order.orderSn, res.order.totalAmount);
          console.log("下单成功！");
        })
        .catch(err => {
          console.log("下单失败" + err);
        });
    },
    			goPay(outTradeNo, totalFee) {
				
				post(
					"/health-web/weixinMobile/dopay?orderType=0&outTradeNo=" +
					outTradeNo +
					"&totalFee=" +
					totalFee +
					"&openId="+store.state.myInfo.openid
//					"&openId=oi1oy1dgeHOAqdYLSF2sICfRG61w"
				).then(res => {
					var dopay = res;
					var _this = this;
					var k = null;
					var wxpayService = null;
					var wxpayReady = null;
					plus.payment.getChannels(
						s => {
							plus.nativeUI.toast("获取支付通道成功 " + JSON.stringify(s));
							console.log("获取支付通道成功 " + JSON.stringify(s));
							if(s.length) {
								for(k in s) {
									if((s[k].id = "wxpay")) {
										wxpayService = s[k];
										console.log("wxpayService" + wxpayService);
									}
								}
							} else {
								console.log("没有微信通道");
							}
							plus.payment.request(
								wxpayService, {
									retcode: 0,
									retmsg: "ok",
									appid: dopay.appid,
									noncestr: dopay.noncestr,
									package: "Sign=WXPay",
									partnerid: dopay.partnerid,
									prepayid: dopay.prepayid,
									timestamp: dopay.timestamp,
									sign: dopay.sign
								},
								function(s) {
									console.log("this:"+this)
								console.log('_this'+_this)
									console.log("支付操作成功！" + JSON.stringify(s));
									plus.nativeUI.toast("支付操作成功!");
									_this.$router.push({
										name: 'Invitation'
									})
									
								},
								function(e) {
									plus.nativeUI.toast("支付操作失败！" + JSON.stringify(e));
									console.log("支付失败：" + e.message);
								}
							);
						},
						error => {
							plus.nativeUI.toast("获取支付通道失败 " + JSON.stringify(error));
							console.log("获取支付通道失败" + JSON.stringify(error));
						}
					);

				});
			}
    /* 支付 */
  }
};
</script>

<style>
.footer {
  width: 100%;
  height: 45px;
  line-height: 45px;
  background: #ffffff;
  overflow: hidden;
  position: fixed;
  bottom: 0;
  left: 0;
}
.footer ul {
  display: flex;
  display: -webkit-flex;
  justify-content: space-between;
}
.footer ul h3 {
  height: 45px;
  padding: 0 20px;
  background: #ff0000;
  color: #ffffff;
}
.footer ul li:first-child {
  padding-left: 10px;
}
.hadHea {
  width: 100%;
  height: auto;
}

.had {
  width: 100%;
  height: 0.99rem;
  background: #ffffff;
  margin: auto;
  padding: 0 3%;
}

.componentHeader-header {
  width: 96%;
  box-sizing: border-box;
  color: black;
  line-height: 0.87rem;
  margin: auto;
  font-size: 0.28rem;
}

.Tp {
  float: left;
  width: 0.41rem;
  height: 0.33rem;
  background: url(../../../static/images/ShareIcon.png) no-repeat center;
  background-size: 100% 100%;
  margin-top: 0.3rem;
  margin-right: 0.3rem;
}

.Tpi {
  font-size: 0.54rem;
}

.headerAmic {
  width: 79%;
  height: 100%;
  margin: auto;
  font-size: 0.34rem;
  float: left;
}

.headerFb {
  width: 0.28rem;
  height: 0.28rem;
  line-height: 0.29rem;
  color: #ffffff;
  float: right;
  margin-top: 0.3rem;
  background: url(../../../static/images/search.png) no-repeat center;
  background-size: 100% 100%;
}
.payMain {
  width: 100%;
  padding: 0 10px;
  background: #ffffff;
  padding-top: 5px;
}
.proTitle {
  text-align: left;
}
.proTitle h3 {
  border-left: 1px solid #ff5e3a;
  padding-left: 10px;
  margin: 5px 0;
}
.proInfo {
  display: flex;
  display: -webkit-flex;
  justify-content: space-around;
  padding: 10px 0;
}
.proInfo ul {
  display: flex;
  display: -webkit-flex;
}
.proInfo ul li:nth-child(1) {
  flex: 0 0 1.63rem;
  width: 1.63rem;
  height: 1.3rem;
}
.proInfo ul li:nth-child(2) {
  text-align: left;
  padding-left: 5px;
}
.proInfo ul li:nth-child(3) {
  text-align: right;
  padding-left: 5px;
}
.proInfo ul:nth-child(2) li {
  text-align: right;
}
.proInfo ul:nth-child(2) li h4 {
  padding-bottom: 5px;
  padding-top: 5px;
  color: #fc0d1b;
}
.proInfo ul li:nth-child(2) h3 {
  padding-top: 5px;
  padding-bottom: 10px;
}
.proInfo ul li:nth-child(2) p {
  color: #999;
}
.proInfo ul li img {
  width: 1.63rem;
  height: 1.3rem;
}
.pay-type {
  width: 100%;
  text-align: left;
  padding: 10px 0;
}
.pay-type img {
  width: 0.5rem;
  vertical-align: middle;
  margin-right: 10px;
}
.paybg {
  width: 100%;
  height: 100%;
  background: #f2f2f2;
}
</style>
