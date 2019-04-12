<template>
  <div>
    <div class="hadHea">
      <div class="had">
        <div class="componentHeader-header">
          <div class="Tp" @click="handlerBack"></div>
          <div class="headerAmic">健康商城</div>
        </div>
      </div>
    </div>
    <iframe
      src="https://h5.youzan.com/v2/showcase/homepage?alias=5kxDY6W7ne&sf=wx_menu&redirect_count=1"
      style="width:100%;height:1100px"
      name="iframe_a"
      frameborder="no"
      border="0"
      marginwidth="0"
      marginheight="0"
      scrolling="no"
      allowtransparency="yes"
    ></iframe>
  </div>
</template>
<script>
export default {
  methods: {
    handlerBack() {
        this.$router.back();
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
}

.had {
  width: 94%;
  margin: auto;
  top: 0;
  left: 0;
  padding-right: 10px;
  box-sizing: border-box
}
.headerAmic{
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
</style>
