<template>
  <div>
    <div class="had">
      <div class="componentHeader-header">
        <div class="Tp" @click="handlerBack()"></div>
        <div class="headerAmic">体检套餐</div>
      </div>
    </div>
    <div class="packageDetails" v-if="info">
      <div class="packageImg">
        <img :src="info.schemeImgUrl">
        <!-- <div class="gouwu">
          <div class="gou"></div>
          <div class="gouRi"></div>
        </div>-->
      </div>
      <div class="packCAontent">
        <div class="storePrice">
          <div class="storePriceL">
            <span>¥{{info.price}}</span>
            <span>
              <del>¥{{info.originalPrice}}</del>
            </span>
          </div>
          <div class="storePriceR">已售{{info.sale}}件</div>
        </div>
        <div class="packContent">
          <p>{{info.chargeSchemeName}}</p>
          <p>{{info.chargeSchemeDescribe}}</p>
        </div>
        <div class="Tree" v-for="(item,index) in info.chargeSchemeItem" :key="index">
          <span id="span">{{item.remindItemName}}</span>
          <span id="span">{{item.remindItemName}}</span>
        </div>
      </div>
      <!--高级餐厅**-->
      <!-- <div class="taurant">高级套餐</div> -->
      <!--分类**-->
      <div class="fication">
        <!--分类**-->
        <!-- <div class="ficationCon">
          <span>分类</span>
          <span>女性</span>
        </div>-->
        <!--支持门店**-->
        <div>
          <div v-html="info.chargeSuitable"></div>
        </div>
        <!--地址**-->
        <!-- <div class="dizhi">
          <span>西安市高新区高新路与南二环十字向东50米易和蓝...</span>
        </div>-->
      </div>
    </div>
    <!-- <DetailsFoot/> -->
  </div>
</template>


<script>
import { get } from "../../api/fetch";
export default {
  data() {
    return {
      info: null
    };
  },
  created() {
    this.getProductInfo();
  },
  methods: {
    getProductInfo() {
      console.log("123");
      get(`/ChargeScheme/details/chargeScheme?id=${this.$route.query.id}`).then(
        res => {
          this.info = res.data;
        }
      );
    },
    handlerBack() {
      this.$router.back();
    },
    goStore(id) {
      this.$router.push({
        path: "/store",
        query: { id: id }
      });
    }
  }
};
</script>

<style scoped="scoped">
@import "../../assets/experience/packageDetails.css";
.shopCom {
  width: 100%;
  height: auto;
  padding-bottom: 1.15rem;
  box-sizing: border-box;
  background: #eeeeee;
}

.hadHea {
  width: 100%;
  height: auto;
  background: #ffffff;
}

.had {
  width: 94%;
  height: 0.99rem;
  margin: auto;
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
.packContent p {
  word-break: keep-all;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 90%;
  padding-bottom: 0.1rem;
}
.Tree{
  text-align: left;
  margin-top: 4px;
}
.Tree #span {
  height: 20px;
  line-height: 20px;
  padding: 2px;
  display: inline-block;
  border-radius: 8px;
  border: 1px solid rgba(255, 94, 58, 1);
  padding: 0 4px;
  color: rgba(255, 94, 58, 1);
  margin-right: 4px;
}
 
</style>