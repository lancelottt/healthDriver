<template>
  <div>
		<div v-html="info.detailHtml" v-if="info"></div>
    <!--脑，心，瘤**-->
    <!-- <div class="modity" id="target">
      <div class="modityCon">体验优选，省心更贴心</div>
      <div class="modityUl">
        <ul>
          <li>
            <p>
              <img src="../../../../static/images/details02.png" alt>
            </p>
            <p>TCD经颅多普勒</p>
          </li>
          <li>
            <p>
              <img src="../../../../static/images/details03.png" alt>
            </p>
            <p>200元心脏彩超</p>
          </li>
          <li>
            <p>
              <img src="../../../../static/images/details04.png" alt>
            </p>
            <p>升级肿瘤12项</p>
          </li>
        </ul>
      </div>
      <div class="modityImg">
        <img src="../../../../static/images/details01.png" alt>
      </div> -->
      <!--重点检查**-->
      <!-- <div class="inspect">
        <div class="insSpan">
          <span>重点检查</span>
          <span>项目</span>
        </div>
        <div class="inspectXian"></div>
        <div class="zho">ZHONG DIAN JIAN CHA XIANG MU</div>
        <div class="inspeCon">
          <ul>
            <li>
              <p></p>
              <p>肝功能11项</p>
            </li>
            <li>
              <p></p>
              <p>C12肿瘤筛选</p>
            </li>
            <li>
              <p></p>
              <p>心脏彩超</p>
            </li>
            <li>
              <p></p>
              <p>类风湿因子</p>
            </li>
            <li>
              <p></p>
              <p>胃幽门螺杆菌</p>
            </li>
            <li>
              <p></p>
              <p>血流变</p>
            </li>
            <li>
              <p></p>
              <p>腰椎侧位</p>
            </li>
            <li>
              <p></p>
              <p>经颅多普勒(TCD)</p>
            </li>
            <li>
              <p></p>
              <p>骨密度</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="cation" v-show="showTop" @click="toTop"></div> -->
  </div>
</template>

<script>
import { get } from "../../../api/fetch";

export default {
  data() {
    return {
      scrollTop: 0,
      time: 0,
      dParams: 20,
      scrollState: 0,
      info: null
    };
  },
  created() {
    this.getProductInfo();
    console.log("sports");
  },
  methods: {
    getProductInfo() {
      get(`/health-web/modules/pmsproduct/info/${this.$route.query.id}`).then(
        res => {
          this.info = res.pmsProduct;
        }
      );
    },
    toTop(e) {
      if (!!this.scrollState) {
        return;
      }
      this.scrollState = 1;
      e.preventDefault();
      let distance =
        document.documentElement.scrollTop || document.body.scrollTop;
      let _this = this;
      this.time = setInterval(function() {
        _this.gotoTop(_this.scrollTop - _this.dParams);
      }, 20);
    },
    gotoTop(distance) {
      this.dParams += 20;
      distance = distance > 0 ? distance : 0;
      document.documentElement.scrollTop = document.body.scrollTop = window.pageYOffset = distance;
      if (this.scrollTop < 10) {
        clearInterval(this.time);
        this.dParams = 20;
        this.scrollState = 0;
      }
    },
    getScrollTop() {
      this.scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
    }
  },
  computed: {
    showTop: function() {
      let value = this.scrollTop > 50 ? true : false;
      return value;
    }
  },
  mounted() {
    window.addEventListener("scroll", this.getScrollTop);
  }
};
</script>
<style scoped="scoped">
@import "../../../assets/equip/modityDetails.css";
</style>