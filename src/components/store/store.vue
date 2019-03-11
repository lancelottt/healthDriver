<template>
  <div>
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">支持门店</div>
    </div>
    <div class="addressChoose">
      <div>
        <span>地区筛选</span>
      </div>
      <div class="goAddress">
        <img src="../../../static/images/ionaderss.png" alt="">
        <span>北京市</span>
        <img src="../../../static/images/goBack.png" alt="">
      </div>
    </div>
    <div>
      <div class="addressLsit">
        <div class="addressMain">
          <h3>北京魏公村分院</h3>
          <p>海淀区中关村南大街寰太大厦4层</p>
          <p> <img src="../../../static/images/ionaderss.png" alt="">30.7km  |  周一至周六8:00-10:30海淀区中关村南大街寰太大厦4层</p>
        </div>
        <div class="callPhone">
           <img src="../../../static/images/ioncall.png" alt="">
        </div>
      </div>

       <div class="addressLsit">
        <div class="addressMain">
          <h3>北京魏公村分院</h3>
          <p>海淀区中关村南大街寰太大厦4层</p>
          <p> <img src="../../../static/images/ionaderss.png" alt="">30.7km  |  周一至周六8:00-10:30海淀区中关村南大街寰太大厦4层</p>
        </div>
        <div class="callPhone">
           <img src="../../../static/images/ioncall.png" alt="">
        </div>
      </div>
    </div>
  </div>
</template>
<script type="text/javascript">
	export default{
		methods: {
      handleBack() {
				this.$router.back()
			}
    }
	}
</script>

<style scoped>
  @import '../../assets/store/store.css';

</style>
