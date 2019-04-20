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
          <span>￥1320.00</span>
        </li>
        <li>
          <h3 @click="getPlaceOrder">确认支付</h3>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
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
    this.plusjk();
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
    /* 获取支付通道 */
    plusjk() {
      plus.payment.getChannels(
        function(channels) {
          var that = this;
          // var content = document.getElementById("payment");
          // var info = document.getElementById("info");
          // var txt = "支付通道信息：";
          for (var i in channels) {
            console.log("获取支付通道成功" + JSON.stringify(channels[i].id));
            //          var channel = channels[i];
            if (
              channels[i].id == "qhpay" ||
              channels[i].id == "qihoo" ||
              channels[i].id == "alipay"
            ) {
            }
            console.log("是否安装微信wxpay");
            // 过滤掉不支持的支付通道：暂不支持360相关支付
            //            continue;
            that.wxService = channels[i].id;
 
            console.log("that.wxService" + that.wxService);
            //          this.pays[channel.id] = channel;

            // txt += "id:" + channel.id + ", ";
            // txt += "description:" + channel.description + ", ";
            // txt += "serviceReady:" + channel.serviceReady + "； ";
            // var de = document.createElement("div");
            // de.setAttribute("class", "button");
            // de.setAttribute("onclick", "pay(this.id)");
            // de.id = channel.id;
            // de.innerText = channel.description + "支付";
            // content.appendChild(de);
            //          this.checkServices(channel);
          }
          // info.innerText = txt;
        },
        function(e) {
          console.log("获取支付通道失败：" + e.message);
        }
      );
    },
    /* 检测是否安装支付服务 */
    //  checkServices(pc) {
    //    if (!pc.serviceReady) {
    //      var txt = null;
    //      switch (pc.id) {
    //        case "alipay":
    //          txt =
    //            "检测到系统未安装“支付宝快捷支付服务”，无法完成支付操作，是否立即安装？";
    //          break;
    //        default:
    //          txt =
    //            "系统未安装“" +
    //            pc.description +
    //            "”服务，无法完成支付，是否立即安装？";
    //          break;
    //      }
    //      plus.nativeUI.confirm(
    //        txt,
    //        function(e) {
    //          if (e.index == 0) {
    //            pc.installService();
    //          }
    //        },
    //        pc.description
    //      );
    //    }
    //  },
    /* 下单-生成订单 */
    getPlaceOrder() {
      get(`/health-web/order/generateSchemeOrder`, {
        schemeCode: this.$route.query.id,
        userId: 1
      })
        .then(res => {
          console.log(res.order.orderSn, res.order.totalAmount);
          this.goPay(res.order.orderSn, res.order.totalAmount, {"id":"wxpay","description":"微信","serviceReady":true});
          console.log("下单成功！");
        })
        .catch(err => {
          console.log("下单失败" + err);
        });
    },
    /* 支付 */
    goPay(outTradeNo, totalFee, id) {
      var _this = this;
      console.log(_this.wxService + "_this.wxService");
      console.log(this.wxService + "this.wxService");
      alert(2);
      get("/health-web/weixinMobile/dopay", {
        orderType: 0,
        outTradeNo: outTradeNo,
        totalFee: totalFee,
        openId: "oi1oy1dgeHOAqdYLSF2sICfRG61w"
      }).then(res => {
        console.log(JSON.stringify(res));
        var dopay = res;
        console.log("dopay:" + JSON.stringify(dopay));
        var order1 = {
          //参数顺序必须正确
          appid: dopay.appid,
          noncestr: dopay.noncestr,
          package: "Sign=WXPay",
          partnerid: dopay.partnerid,
          prepayid: dopay.prepayid,
          timestamp: dopay.timestamp,
          sign: dopay.sign
        };
        plus.payment.request(
          this.wxService,
          order1,
          function(result) {
            plus.nativeUI.alert(
              "支付成功：感谢你的支持，我们会继续努力完善产品。",
              function() {
                back();
              },
              "捐赠"
            );
            console.log(
              result + "支付成功：感谢你的支持，我们会继续努力完善产品。"
            );
          },
          function(e) {
            plus.nativeUI.alert(
              "更多错误信息请参考支付(Payment)规范文档：http://www.html5plus.org/#specification#/specification/Payment.html",
              null,
              "支付失败：" + e.code + "," + e
            );
          }
        );
      });
    }
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
