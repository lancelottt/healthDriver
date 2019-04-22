<template>
  <div class="shopCon">
    <div class="tabbar">
      <div class="tabbarCon">
        <div class="tab">
          <swiper :options="swiperOption">
            <swiper-slide v-for="(item,index) in navList" :key="index">
              <div class="item-title">
                <router-link :to="{ path: item.path, query: { id: item.id}}">
                  <b  :class="{'fruitActive': index == activeId}">{{item.name}}</b>
                </router-link>
              </div>
            </swiper-slide>
          </swiper>
        </div>
      </div>
      <div class="watch"></div>

      <div class="health">
        <div class="healContent">
          <div class="healCon">健康管理</div>
          <div class="healRight">
            <span @click="goMore()">更多</span>
            <span>
              <i class="iconfont icon-fanhui1"></i>
            </span>
          </div>
        </div>
        <div class="conUl">
          <ul>
            <li v-for="(item,index) in lowerList" :key="index" @click="goMain(item.id)">
              <img :src="item.schemeImgUrl" alt>
              <div class="liCentent">
                <p>{{item.chargeSchemeName}}</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <iframe
        id="mainIframe"
        name="mainIframe"
        src="http://www.baidu.com"
        frameborder="0"
        scrolling="auto"
      ></iframe>
    </div>
    <foot-tabbar></foot-tabbar>
  </div>
</template>
<script>
import { InfiniteScroll } from "mint-ui";
import FootTabbar from "../../foorterGuid/footerGuild";
import { get } from "../../../api/fetch.js";
export default {
  components: {
    FootTabbar
  },
  data() {
    return {
      swiperOption: {
        spaceBetween: 10,
        freeMode: true,
        setWrapperSize: false,
        slidesPerView: 4
      },
      activeId: 0,
      navList: [
        {
          name: "热门推荐",
          path: "/shopping"
        },
        {
          name: "商城",
          path: "/shopherf"
        },
        {
          name: "健康管理",
          path: "/ChargeList"
        }
      ],
      lowerList: [],
      limit: 4,
      currPage: 1
    };
  },
  created() {
    this.getNavCategory();
    this.getProductSearchList(this.limit, this.currPage);
  },
  methods: {
    goMain(id) {
      this.$router.push({
        path: "/ChargetListDetail",
        query:{
          id: id
        }
      });
    },
    goMore() {
      this.$router.push("/ChargeList");
    },
    getNavCategory() {
      get("/health-web/modules/pmsproductcategory/list", {
        parentId: 0
      }).then(res => {
        var list = res.list;
        list.map(item => {
          var lifeArr = {};
          var healthArr = {};
          if (item.name == "生活周边") {
            lifeArr.name = item.name;
            lifeArr.path = "/equip";
            lifeArr.id = item.id;
            this.navList.push(lifeArr);
          }
          if (item.name == "体检套餐") {
            healthArr.name = item.name;
            healthArr.path = "/experienceList";
            healthArr.id = item.id;
            this.navList.push(healthArr);
          }
        });
      });
    },
    getProductSearchList(limit, currPage) {
      get(`/ChargeScheme/list/chargeScheme`, {
        pageSize: limit,
        pageNum: currPage
      }).then(res => {
        this.lowerList = res.data.list;
        console.log(res);
        /*  数据长度小于limit */
        // if (res.data.list.length < this.limit) {
        //   this.isLoad = false;
        // }
        // this.currPage = this.currPage + 1;
        // this.lowerList.push(...);
        // this.$nextTick(() => {
        //   this.pullingDownUp();
        // });
      });
    }
  }
};
</script>
<style lang="" scoped>
@import "../../../assets/watchMove/watchMove.css";
.liCentent p {
  color: #f699ce;
  font-size: 0.24rem;
}
.shopCon {
  position: absolute;
  background: #fff;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  z-index: 999;
}

.tabbar {
  width: 100%;
  height: auto;
}

.exper {
  width: 100%;
  position: fixed;
  z-index: 99;
  /*top: .15rem;*/
  padding: 5px 0;
  right: 0;
  background: #fff;
  left: 0;
}

.hotExpe:after {
  clear: both;
  content: "";
  display: block;
  width: 0;
  height: 0;
  visibility: hidden;
}

.hotExpe {
  width: 95%;
  height: auto;
  zoom: 1;
  margin: auto;
}

.hotExpeLeft {
  float: left;
  background: url(../../../../static/images/sousuoR.png) no-repeat center;
  background-size: 100% 100%;
  width: 7%;
  height: 0.43rem;
  margin-right: 0.2rem;
  margin-top: 0.1rem;
}

.hotExpeIn {
  width: 77%;
  height: 0.63rem;
  float: left;
  text-align: left;
  background: #f2f2f2;
  padding-left: 0.2rem;
  box-sizing: border-box;
}

.hotExpeIn input {
  width: 100%;
  outline: none;
  height: 0.63rem;
  background: none;
  font-size: 0.24rem;
  color: #333333;
  padding-left: 0.2rem;
  box-sizing: border-box;
  line-height: 0.63rem;
}

.hotExpeRight {
  width: 7%;
  height: 0.37rem;
  background: url(../../../../static/images/gouwu.png) no-repeat center;
  background-size: 100% 100%;
  float: right;
  margin-top: 0.1rem;
  margin-right: 0.1rem;
}

.hotLeft {
  float: left;
  margin-top: 0.15rem;
  width: 6%;
}

.hotRight {
  float: left;
  width: 94%;
  height: 0.63rem;
  position: relative;
}

.chahao {
  width: 0.37rem;
  height: 0.37rem;
  background: url(../../../../static/images/chahao.png) no-repeat center;
  background-size: 100% 100%;
  position: absolute;
  right: 0.15rem;
  top: 0.15rem;
}

.contents {
  width: 100%;
  height: auto;
  line-height: 1.05rem;
  color: #333333;
  font-size: 0.4rem;
  text-align: left;
  padding-left: 0.3rem;
  box-sizing: border-box;
}

.contents span:nth-of-type(2) {
  margin-left: 0.2rem;
  display: inline-block;
}

.conSpan {
  width: 0.41rem;
  height: 0.33rem;
  background: url(../../../../static/images/fanhui.png) no-repeat center;
  background-size: 100% 100%;
  display: inline-block;
}

.tab {
  height: 0.92rem;
  line-height: 0.92rem;
  background: #fff;
  width: 91%;
  height: 100%;
  background: #fff;
  margin: auto;
}

.tabItem {
  float: left;
  width: 20%;
  text-align: center;
  font-size: 0.28rem;
  color: rgb(77, 85, 93);
}

a {
  display: block;
  position: relative;
}

.router-link-active {
  color: #ff5e3a;
}

.router-link-active::after {
  content: "";
  position: absolute;
  left: 50%;
  bottom: 0.02rem;
  width: 1.25rem;
  height: 0.06rem;
  transform: translateX(-50%);
  background: #ff5e3a;
}

.item-title {
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: inline-block;
  height: 45px;
  line-height: 45px;
  overflow: hidden;
  text-align: center;
}

.fruitActive:after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 100%;
  height: 40px;
  top: 0;
  left: 0;
  border-bottom: 2px solid #ff5e3a;
}
.swiper-slide {
  width: 50%;
}
.tabbarCon{
  height: 45px;
}
</style>