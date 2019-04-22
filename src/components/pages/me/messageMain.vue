<template>
  <div>
    <div class="hadHea">
      <div class="had">
        <div class="componentHeader-header">
          <div class="Tp" @click="handlerBack"></div>
          <div class="headerAmic">消息</div>
        </div>
      </div>
    </div>

    <div class="message-main">
      <h3>{{message.messageTitle}}</h3>
      <h4>{{message.updateTime |dateFormat}}</h4>
      <p>{{message.messageContent}}</p>
    </div>
  </div>
</template>
<script>
import { get, post } from "../../../api/fetch";
export default {
  data() {
    return {
      message: ""
    };
  },
  created() {
    this.getMessage();
  },
  methods: {
    handlerBack() {
      this.$router.back();
    },
    getMessage() {
      get(`/health-web/modules/userMessage/info/${this.$route.query.id}`).then(
        res => {
          this.message = res.userMessage;
          this.getUpdate(res.userMessage.userMessageCode);
          console.log(this.message);
        }
      );
    },
    getUpdate(id) {
      get(`/health-web/modules/userMessage/update`, {
        userMessageCode: id,
        isRead: 2
      }).then(res => {
        this.message = res.userMessage;
        console.log(this.message);
      });
    }
  }
};
</script>

<style>
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
}

.Tp {
  float: left;
  width: 0.41rem;
  height: 0.33rem;
  background: url("../../../../static/images/ShareIcon.png") no-repeat center;
  background-size: 100% 100%;
  margin-top: 0.28rem;
}
.message-main {
  width: 100%;
  padding: 0.2rem;
  padding-top: 1rem;
  text-align: left;
}
.message-main h3 {
  font-size: 0.32rem;
  color: #333;
}
.message-main h4 {
  font-size: 0.24rem;
  color: #333;
  padding: 0.2rem 0;
}
.message-main p {
  font-size: 0.24rem;
  color: #666;
  line-height: 0.5rem;
}
</style>
