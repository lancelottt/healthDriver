<template>
  <div>
    <div class="hadHea">
      <div class="had">
        <div class="componentHeader-header">
          <div class="Tp" @click="handlerBack"></div>
          <div class="headerAmic">我的订单</div>
        </div>
      </div>
      <div class="health-header">
        <ul>
          <li @click="checkedHeader(0)">
            <b :class="{'fruitActive': index == 0}">我的会员</b>
          </li>
          <li @click="checkedHeader(1)">
            <b :class="{'fruitActive': index == 1}">我的方案</b>
          </li>
        </ul>
      </div>
    </div>

    <div class="message-list" ref="foodsWrapper">
      <div>
        <div style=" padding-top: 2.2rem;">
          <div class="member" v-if="index == 0">
            <div class="member-list" v-for="(item,index) in memberlist" :key="index" >
              <div class="list-top">
                <h3>
                  <img src="../../../../static/images/shopIcon.png" alt>
                  商品信息
                </h3>
                <p>订单号: {{item.orderSn}}</p>
              </div>
              <div class="list-center">
                <ul>
                  <li>
                    <img :src="item.orderItem.productPic" alt>
                  </li>
                  <li>
                    <h3>{{item.orderItem.productName}}</h3> 
                    <p>创建时间：{{item.createTime |dateFormat }}</p>
                  </li>
                </ul>
              </div>
              <div class="list-bottom">
                <h3>
                  共1件商品 合计：¥
                  <span>{{item.totalAmount}}</span>  
                </h3>
              </div>
            </div>
          </div>

          <div class="plant" v-if="index == 1">
            <div class="member-list" v-for="(item,index) in orderList" :key="index">
              <div class="list-top">
                <h3>
                  <img src="../../../../static/images/shopIcon.png" alt>
                  商品信息
                </h3>
                <p>订单号: {{item.orderSn}}</p>
              </div>
              <div class="list-center">
                <ul>
                  <li>
                    <img :src="item.chargeScheme.schemeImgUrl" alt>
                  </li>
                  <li>
                    <h3>{{item.chargeScheme.chargeSchemeName}}</h3>
                    <p>创建时间：{{item.chargeScheme.createTime | dateFormat}}</p>
                  </li>
                </ul>
              </div>
              <div class="list-bottom">
                <h3>
                  共1件商品 合计：¥
                  <span>{{item.chargeScheme.price}}</span>
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from "better-scroll";
import { MessageBox, Toast } from "mint-ui";
import { get } from "../../../api/fetch";
export default {
  data() {
    return {
      activeId: 0,
      partsIndex: 0,
      PartsUpper: [],
      lowerList: [],
      limit: 10,
      currPage: 1,
      categoryId: "",
      keyword: "",
      options: {
        pullDownRefresh: {
          threshold: 50, // 当下拉到超过顶部 50px 时，触发 pullingDown 事件
          stop: 20 // 刷新数据的过程中，回弹停留在距离顶部还有 20px 的位置
        },
        pullUpLoad: {
          threshold: -20 // 在上拉到超过底部 20px 时，触发 pullingUp 事件
        },
        click: true,
        probeType: 3,
        startY: 0,
        scrollbar: false
      },
      isLoad: true,
      index: 0,
      orderList: [],
      memberlist:[]
    };
  },
  created() {
    this.$nextTick(() => {
      this._initScroll();
    });
    this.getMember();
    this.getOrder(this.limit, this.currPage);
  },
  methods: {
    getOrder(limit, currPage) {
      get("/health-web/schemeOrder/orderList", {
        pageSize: limit,
        pageNum: currPage
      }).then(res => {
        /*  数据长度小于limit */
        if (res.chargeOrderslength < this.limit) {
          this.isLoad = false;
        }
        this.currPage = this.currPage + 1;
        this.orderList.push(...res.chargeOrders);
        this.$nextTick(() => {
          this.pullingDownUp();
        });
      });
    },
    checkedHeader(id) {
      this.index = id;
    },
    handlerBack() {
      this.$router.back();
    },
    _initScroll() {
      this.foodsScroll = new BScroll(this.$refs.foodsWrapper, this.options);
      // 下拉
      this.foodsScroll.on("pullingDown", () => {
        // 刷新数据的过程中，回弹停留在距离顶部还有20px的位置
        // this.goods = []; // 重置数据
        // this.searchCondition.pageNo = 1; // 重置分页数
        // this.setData(); //获取数据方法
      });
      this.foodsScroll.on("pullingUp", () => {
        if (this.index == 1) {
          /*订单列表*/
          if (this.isLoad) {
            this.getOrder(this.limit, this.currPage);
          } else {
            Toast("加载完毕");
            return;
          }
        }
      });
      this.foodsScroll.on("pullingDown", () => {
        console.log("触顶了");
      });
    },
    getMember() {
      console.log("132132");
    //   this.$route.query.id
      get(
        "/health-web/order/getOrderList?memberId=1" 
      ).then(res => {
        console.log(res);
        this.memberlist = res.list;
      });
    },
    pullingDownUp() {
      this.foodsScroll.finishPullDown();
      this.foodsScroll.finishPullUp();
      this.foodsScroll.refresh(); //重新计算元素高度
    }
  }
};
</script>

<style scoped>
.hadHea {
  width: 100%;
  height: auto;
  background: #ffffff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 99;
}

.had {
  width: 94%;
  margin: auto;
  top: 0;
  left: 0;
  padding-right: 10px;
  box-sizing: border-box;
}
.headerAmic {
  margin-left: -5px;
}
.componentHeader-header {
  width: 96%;
  box-sizing: border-box;
  color: black;
  line-height: 0.87rem;
  margin: auto;
  font-size: 0.28rem;
  position: relative;
}

.Tp {
  float: left;
  width: 0.41rem;
  height: 0.33rem;
  background: url("../../../../static/images/ShareIcon.png") no-repeat center;
  background-size: 100% 100%;
  margin-top: 0.28rem;
}
.member-list {
  width: 100%;
  background: #ffffff;
  margin-bottom: 0.1rem;
}
.list-top {
  padding: 15px 15px;
  box-sizing: border-box;
  display: flex;
  display: -webkit-flex;
  justify-items: space-around;
  align-items: center;
}
.list-top h3 {
  text-align: left;
  font-size: 0.026rem;
  color: #333;
}
.list-top img {
  width: 0.32rem;
  height: 0.32rem;
  vertical-align: text-bottom;
  margin-right: 5px;
}
.list-top p {
  font-size: 0.22rem;
  color: #aaaaaa;
}

.list-center {
  width: 100%;
  background: #fafafa;
  padding: 15px;
}
.list-center ul {
  display: flex;
}
.list-center li:first-child {
  width: 1.53rem;
  flex: 0 0 1.53rem;
}

.list-center img {
  width: 1.53rem;
  height: 1.53rem;
}
.list-center h3 {
  padding-top: 9px;
}
.list-center p {
  font-size: 0.24rem;
  padding-top: 9px;
  color: #999;
}
.list-bottom h3 {
  font-size: 0.22rem;
  color: #333333;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
}
.list-bottom h3 span {
  font-size: 0.2rem;
  color: #ff0000;
}
.list-bottom {
  width: 100%;
  text-align: right;
  overflow: hidden;
  padding: 0 15px;
  box-sizing: border-box;
}
.list-bottom h4 {
  font-size: 0.3rem;
  color: #ff0000;
  width: 1.52rem;
  height: 0.52rem;
  line-height: 0.52rem;
  border: 1px solid #ff0000;
  border-radius: 10px;
  text-align: center;
  float: right;
  margin-top: 0.55rem;
  margin-bottom: 0.2rem;
}

.message-list {
  height: 100%;
  width: 100%;
  background: #f2f2f2;

  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 0;
}

.message-list li:last-child {
  padding-left: 0.3rem;
  text-align: left;
}
.message-list li h3 {
  font-size: 0.32rem;
  color: #333;
  padding-top: 0.1rem;
}
.message-list li p {
}
h3,
p {
  display: inline-block;
  width: 100%;
  word-break: break-all;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
.delete {
  float: right;
  font-size: 0.2rem;
  color: #666;
  position: absolute;
  right: 0;
  top: 1px;
}
.health-header ul {
  width: 100%;
  display: flex;
}
.health-header li {
  width: 50%;
  height: 45px;
  line-height: 45px;
  position: relative;
}

.fruitActive:after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 50%;
  height: 40px;
  bottom: 0;
  left: 25%;
  border-bottom: 2px solid #ff5e3a;
}
</style>
