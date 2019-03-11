<template>
  <div>
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">添加用药量</div>
    </div>
    <div class="pharmacyType">
      <ul>
        <li>用药方式</li>
        <li>
          <button type="" class="allType">
                <img src="../../../static/images/icon_pharmacy.png" alt=""> 口服药
            </button>
          <button type="">胰岛素汁</button>
        </li>
      </ul>
      <ul>
        <li>药品名称</li>
        <li>
          <img src="../../../static/images/sanjiao.png" alt="" class="nextBtn">
        </li>
      </ul>
    </div>
    <div class="pharmacyTime">
      <h3>用药时间和剂量</h3>
      <div class="pharmacyTimeMain">
        <ul>
          <li>
            <h4>08:00</h4>
            <input type="" name="" value="" placeholder="请填写早餐用药">
          </li>
          <li>
            <h4>08:00</h4>
            <input type="" name="" value="" placeholder="请填写早餐用药">
          </li>
          <li>
            <h4>08:00</h4>
            <input type="" name="" value="" placeholder="请填写早餐用药">
          </li>
        </ul>
      </div>
    </div>

    <div class="pharmacyAgain">
      <h3>重复周期</h3>
      <button type="" :class="{ active: isActive }">隔天</button>
      <button type="">每天</button>
    </div>

    <div class="pharmacyRemind">
      <h3>开启提醒</h3>
      <el-switch v-model="value2" active-color="#ff5e3a" inactive-color="#999">
      </el-switch>
    </div>
  </div>
</template>
<script type="text/javascript">
   export default {
     data() {
       return {
         isActive: true,
         value1: true,
         value2: true
       }
     },
     methods: {
      handleBack() {
				this.$router.back()
	  	}
    }
   }
</script>
<style scoped>
  @import '../../assets/store/addPharmacy.css';

</style>
