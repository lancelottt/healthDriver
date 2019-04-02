<template>
  <div id="healthMarketHome" class="page">
    <tab-com></tab-com>
    <header style="padding: 5px 0;">
      <div>
        <i class="iconfont icon-tianjiahaoyou"></i>
      </div>
      <div class="healthMarketHome-searchBar">
        <i class="iconfont icon-sousuo"></i>
        <el-autocomplete
          v-model="state4"
          :fetch-suggestions="querySearchAsync"
          placeholder="请输入商品名称或 店铺名称"
          @select="handleSelect"
        ></el-autocomplete>
        <i class="iconfont icon-huiseyuancha" @click="handleHealthMarketHomeCancelInput()"></i>
      </div>
      <div>
        <i class="iconfont icon-tixing"></i>
      </div>
    </header>
    <div class="wrapper" ref="wrapper">
      <div class="content">
        <div>
          <div class="health-header" style="padding-top: 0.8rem;">
            <ul>
              <li @click="checkedHeader(0)">
                <b :class="{'fruitActive': index == 0}">健康驾校</b>
              </li>
              <li @click="checkedHeader(1)">
                <b :class="{'fruitActive': index == 1}">家庭营养师</b>
              </li>
            </ul>
          </div>

          <swiper :options="swiperOption">
            <swiper-slide v-for="(slide, index) in swiperSlides" :key="index">
              <img :src="slide.src">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
          </swiper>
          <div class="healthMarketHome-navigate">
            <div @click="handlerToPlayFood()">
              <img src="../../../static/images/foodTba_01.png">
              <span>玩转食物</span>
            </div>
            <div @click="handlerToSportGuide()">
              <img src="../../../static/images/foodTba_02.png">
              <span>运动指南</span>
            </div>
            <div @click="handlerToStory()">
              <img src="../../../static/images/foodTba_03.png">
              <span>蜕变故事</span>
            </div>
            <div @click="handlerToNews()">
              <img src="../../../static/images/foodTba_04.png">
              <span>健康资讯</span>
            </div>
          </div>
          <article class="healthMarketHome-article">
            <div v-for="(list,index) in healthPointList" :key="index">
              <div>
                <h2>{{list.name}}</h2>
                <span @click="healthMore(list.id, list.name)">查看更多>></span>
              </div>
              <div class="healthMarketHomeXWrapper" ref="healthMarketHomeXWrapper">
                <div class="healthMarketHomeXContent">
                  <div
                    v-for="value in  list.categoryList"
                    :key="value.index"
                    @click="goMeaunLsit(value.id, value.name)"
                  >
                    <img :src="value.icon">
                    <span>{{value.name}}</span>
                  </div>
                </div>
              </div>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import BScroll from "better-scroll";
import tab from "../foorterGuid/footerGuild";
import { get } from "../../api/fetch";

export default {
  name: "carrousel",
  components: {
    "tab-com": tab
  },
  data() {
    return {
      index: 0,
      healthPointList: [],
      swiperOption: {
        observer: true, //修改swiper自己或子元素时，自动初始化swiper
        observeParents: true, //修改swiper的父元素时，自动初始化swiper
        loop: true,
        autoplay: false,
        pagination: {
          el: ".swiper-pagination"
        }
      },
      swiperSlides: [
        {
          src: "../../../static/img/drink_14.png"
        },

        {
          src: "../../../static/img/sport_15.png"
        },
        {
          src: "../../../static/img/drink_14.png"
        },
        {
          src: "../../../static/img/sport_15.png"
        },
        {
          src: "../../../static/img/drink_14.png"
        }
      ],
      show: true,
      restaurants: [],
      state4: "",
      timeout: null,
      activeName: "second"
    };
  },
  created() {
    this.healthPoint();
  },
  methods: {
    healthPoint() {
      get("/health-web/modules/hfmprogramcategory/list?parentId=0").then(
        res => {
          this.healthPointList = res.list;
        }
      );
    },
    goMeaunLsit(id, name) {
      this.$router.push({
        path: "/healthPlan/HealtTarget", 
        query: { id: id, name:name}
      });
     
    },
    healthMore(id, name) {
      this.$router.push({
        path: "/healthyZ/HealtTargetMore",
        query:{ moreId: id, title: name}
      });
      get("/health-web/modules/hfmprogramcategory/list?parentId=" + id).then(
        res => {
          console.log(res);
        }
      );
    },
    checkedHeader(id) {
      this.index = id;
      if (id == 1) {
        this.$router.push("/KwnoFood/fruit/Airlines/2");
      }
    },
    loadAll() {},
    handlerToPlayFood() {
      // this.$router.push({
      //   name: "playFood"
      // });
      this.$router.push({
        path: "/healthMarket/playFood/kwnoFood"
      });
    },
    handlerToSportGuide() {
      this.$router.push("/mymotion");
    },
    handlerToStory() {
      this.$router.push({ path: "/healthyZ/HealStory", query: { type: 1 } });
    },
    handlerToNews() {
      this.$router.push({ path: "/healthyZ/HealStory", query: { type: 2 } });
    },
    handleHealthMarketHomeCancelInput() {
      this.state4 = "";
    },
    handleClick(tab, event) {
      console.log(tab, event);
    },
    querySearchAsync(queryString, cb) {
      var restaurants = this.restaurants;
      var results = queryString
        ? restaurants.filter(this.createStateFilter(queryString))
        : restaurants;
      clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        cb(results);
      }, 3000 * Math.random());
    },
    createStateFilter(queryString) {
      return state => {
        return (
          state.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0
        );
      };
    },
    handleSelect(item) {
      console.log(item);
    }
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper;
    }
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      tap: true,
      click: true,
      pullUpLoad: true,
      pullDownRefresh: {
        threshold: 50,
        stop: 20
      }
    });
    this.scroll.on("pullingUp", () => {
      console.log("触底了");
    });
    this.scroll.on("pullingDown", () => {
      console.log("触顶了");
    });
    // this.XScroll = new BScroll(this.$refs.healthMarketHomeXWrapper, {
    //   scrollX: true,
    //   freeScroll: true,
    //   startX: 0,
    //   tap: true
    // });
    this.restaurants = this.loadAll();
    setInterval(() => {
      console.log("simulate async data");
      if (this.swiperSlides.length < 5) {
        this.swiperSlides.push(this.swiperSlides.length + 1);
      }
    }, 3000);
  }
};
</script>

<style>
@import "../../assets/healthMarket/healthMarketHome.css";
.healthMarketHome-navigate > div {
  width: 25% !important;
}

.healthMarketHome-navigate img {
  width: 58%;
  display: block;
}

#healthMarketHome .el-tabs__header {
  width: 100%;
}

.tab-fourth {
  width: 33.33%;
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