<template>
  <div>
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">数据解读</div>
      <div class="header-rigth">
        <i class="iconfont icon-icon-test"></i>
      </div>
    </div>

    <div class="sportTab">
      <span v-bind:class="{ active: isActive }">运动</span>
      <span>运动</span>
      <span>运动</span>
      <span>运动</span>
    </div>
    <div class="sportList">
      <ul>
        <li>
          <img src="../../../static/images/sportImg.jpg" alt="">
        </li>
        <li>
          <h3>智能运动手环FIL02</h3>
          <h4>翻转亮屏 睡眠全监测 USB即插即用 续航持久</h4>
          <p>5482人已绑定</p>
        </li>
      </ul>

      <ul>
        <li>
          <img src="../../../static/images/sportImg.jpg" alt="">
        </li>
        <li>
          <h3>智能运动手环FIL02</h3>
          <h4>翻转亮屏 睡眠全监测 USB即插即用 续航持久</h4>
          <p>5482人已绑定</p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script type="text/javascript">
  export default {
      data() {
          return {
              isActive: true
          }
      }
  }
</script>
<style scoped>
  @import '../../assets/store/sports.css';

</style>
