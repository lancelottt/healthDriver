<template>
  <div class="shopCom">
    <div>
      <ShopHeader/>
      <div class="tab">
        <swiper :options="swiperOption">
          <swiper-slide v-for="(item,index) in sportsMenuList" :key="index">
            <div
              @click="checkSports(item.userAthleticItemCode,index)"
              class="item-title"
              :class="{'fruitActive': index == activeId}"
            >
              <b>{{item.itemName}}</b>
            </div>
          </swiper-slide>
        </swiper>
      </div>

      <div class="sports-video">
        <video-player v-if="isshow"
          class="video-player vjs-custom-skin playFoodVideo"
          ref="videoPlayer"
          :playsinline="true"
          :options="playerOptions"
        ></video-player>
      </div>
      <SportVideo :userItemCode = "userItemCode" :sportMain="sportMain" :cardMain="cardMain" :cardCode="cardCode" ></sportvideo>
    </div>
  </div>
</template>
<script>
import ShopHeader from "./shopHeader";
import { get, post } from "../../api/fetch.js";
import SportVideo from "../../components/shopping/motion/index.vue";
export default {
  data() {
    return {
        isshow:false,
      swiperOption: {
        spaceBetween: 10,
        freeMode: true,
        setWrapperSize: false,
        slidesPerView: 5
      },
      sportsMenuList: [],
      activeId: 0,
      sportMain: {},
      cardMain: {},
      cardCode: null,
      userItemCode: null,
      basePathUrl: "",
      srcViedo: "",
      // 视频控建
      playerOptions: {
        // playbackRates: [0.5, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: "auto", // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: "zh-CN",
        aspectRatio: "16:9", // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [
          {
            type: "",
            src: ''//url地址
          }
        ],
        poster: "" , //你的封面地址
        notSupportedMessage: "此视频暂无法播放，请稍后再试", //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true // 全屏按钮
        }
      }
    };
  },
  created() {
    this.getSportsMenu();
  },
  methods: {
    getSportsMenu() {
      get("/health-web/modules/userathleticitem/list").then(res => {
        if (res.code == 0) {
          this.sportsMenuList = res.userAthleticItemList;
          this.userItemCode = res.userAthleticItemList[0].userAthleticItemCode;
          this.getSportsMain(this.userItemCode);
        }
      });
    },
    checkSports(id, index) {
      this.activeId = index;
      this.userItemCode = id;
      this.getSportsMain(id);
    },
    getSportsMain(menuId) {
        this.isshow= false;
      get("/health-web/modules/userathleticitem/info/" + menuId).then(res => {
        if (res.code == 0) {
          this.sportMain = res.userAthleticItem; 
          this.isshow =true;
          this.playerOptions.sources[0].src = res.basePath + res.userAthleticItem.itemPath;
          this.playerOptions.poster = res.basePath + res.userAthleticItem.itemCoverPath;
          console.log(this.srcViedo)
        }
      });
      get("/health-web/modules/userathleticrecords/info/" + menuId).then(
        res => {
          if (res.code == 0) {
            this.cardMain = res.userAthleticRecords;
            this.cardCode = res.count;
            console.log(res)
          }
        }
      );
    }
  },
  components: {
    ShopHeader,
    SportVideo
  }
};
</script>
<style lang="" scoped>
.fruitActive:after {
  position: absolute;
  content: "";
  display: inline-block;
  width: 100%;
  bottom: 0;
  left: 0;
  border-bottom: 2px solid #ff5e3a;
}

.tab {
  height: 0.92rem;
  line-height: 0.92rem;
  background: #fff;
  border-bottom: 0.01rem solid #f2f2f2;
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
  height: 0.035rem;
  transform: translateX(-50%);
  background: #ff5e3a;
}

.shopCom {
  width: 100%;
  height: 100%;
  padding-bottom: 1.15rem;
  box-sizing: border-box;
  background: #eeeeee;
}
.swiper-slide{
  height: 40px !important;
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
</style>