<template>
  <div class="meData">
    <div>
      <div class="meHeader">
        我的
        <span class="message">
          <router-link to="/message">
            <img src="../../../../static/images/revenD.png" alt v-if="messageShow">
            <img src="../../../../static/images/revenD_1.png" v-if="!messageShow" alt>
          </router-link>
        </span>
      </div>
      <!-- 发布动态** -->
      <div class="dyna">
        <!-- 新人报道** -->
        <div class="report">
          <div class="reportZ">
            <div class="reportRen" @click="meHeader()">
              <img src="./img/ren.png" alt>
            </div>
            <div class="reportCon">
              <div class="reponConZ">
                <span>wangmeili-88</span>
                <span class="sugar">控糖营</span>
              </div>
              <div class="xinren">新人报到！请多多关照～</div>
              <!-- 箭头** -->
              <div class="arrow">
                <i class="iconfont fontZt icon-fanhui1"></i>
              </div>
            </div>
          </div>
        </div>
        <!-- 动态，关注与粉丝** -->
        <!-- <div class="follow">
          <ul>
            <li>
              <p>0</p>
              <p>动态</p>
            </li>
            <li>
              <p>5</p>
              <p>关注</p>
            </li>
            <li>
              <p>0</p>
              <p>粉丝</p>
            </li>
          </ul>
        </div>-->
        <!-- 发布第一条动态** -->
        <!-- <router-link to="./amic">
          <div class="dynamic">发布第一条动态</div>
        </router-link>-->
      </div>
      <!-- 数据中心** -->
      <div class="dataZ">
        <ul>
          <li>
            <router-link to="/device">
              <p>
                <img src="../../../../static/images/me01.png" alt>
              </p>
              <p>数据中心</p>
            </router-link>
          </li>
          <li @click="handHealday()">
            <p>
              <img src="../../../../static/images/me02.png" alt>
            </p>
            <p>身体档案</p>
          </li>
          <!-- <li>
            <p>
              <img src="../../../../static/images/me03.png" alt>
            </p>
            <p>我的设备</p>
          </li>-->
          <li @click="goOrder">
            <p>
              <img src="../../../../static/images/me04.png" alt>
            </p>
            <p>我的订单</p>
          </li>
          <li @click="handlerMyFamily()">
            <p>
              <img src="../../../../static/images/me05.png" alt>
            </p>
            <p>我的家人</p>
          </li>
          <li>
            <p>
              <img src="../../../../static/images/me06.png" alt>
            </p>
            <p>我的服务</p>
          </li>
          <!-- <li>
            <p>
              <img src="../../../../static/images/me07.png" alt>
            </p>
            <p>我的拍档</p>
          </li>-->
          <li>
            <router-link to="/Collections">
              <p>
                <img src="../../../../static/images/me08.png" alt>
              </p>
              <p>我的收藏</p>
            </router-link>
          </li>
          <!-- <li @click="handlerMembership()">
            <p>
              <img src="../../../../static/images/me09.png" alt>
            </p>
            <p>我的团队</p>
          </li>-->
        </ul>
      </div>
      <!-- 我的计划** -->
      <!-- <div class="plan">
        <div class="planIcon">
          <img src="../../../../static/images/me10.png" alt>
        </div>
        <div class="planContent">我的计划</div>
        <i class="iconfont planJ icon-fanhui1"></i>
      </div>-->
      <!-- 系统设置** -->
      <div class="planSz" @click="xitong">
        <div class="planIcon">
          <img src="../../../../static/images/me11.png" alt>
        </div>
        <div class="planContent">系统设置</div>
        <i class="iconfont planJ icon-fanhui1"></i>
      </div>
    </div>
    <foot-tabbar></foot-tabbar>
  </div>
</template>
<script>
import { get } from "../../../api/fetch.js";
import FootTabbar from "../../foorterGuid/footerGuild";

export default {
  components: {
    FootTabbar
  },
  data() {
    return {
      messageShow: false,
      userId: ""
    };
  },
  created() {
    this.isMessage();
    this.getUser();
  },
  methods: {
    goOrder() {
      this.$router.push({
        path: "/MeOrder",
        query: { id: this.userId }
      });
    },
    isMessage() {
      get("/health-web/modules/userMessage/count").then(res => {
        if (res.count > 0) {
          this.messageShow = true;
        }
        console.log(res);
      });
    },
    handlerMyFamily() {
      this.$router.push({
        name: "family"
      });
    },
    handlerMembership() {
      this.$router.push({
        name: "memCen"
      });
    },
    getUser() {
      get("/health-web/modules/umsmember/getUser", {}).then(res => {
        if (res.code == 0) {
          this.userId = res.user.id;
          console.log(1);
        }
      });
    },
    //			添加照片**
    meHeader() {
      alert(1);
    },
    //			身体档案**
    handHealday() {
      this.$router.push({
        name: "archi"
      });
    },
    xitong() {
      this.$router.push({
        name: "setUp"
      });
    }
  }
};
</script>
<style scoped>
@import "./style/me.css";
.message img {
  width: 17px;
  height: 17px;
  position: absolute;
  top: 12px;
  right: 20px;
}
.meHeader {
  position: relative;
}
</style>