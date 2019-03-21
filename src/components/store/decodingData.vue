<template>
	
	<div class="grayBg">
  <div class="decodingData">
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">数据解读</div>
      <div class="header-rigth">
        <i class="iconfont icon-icon-test"></i>
      </div>
    </div>

    <div class="decodingDataMain">
      <div class="decodingDataPer">
        <h3>16.0<span>%</span> </h3>
        <div class="perSplit">
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>

          <div class="perProgress ">
            <el-progress :text-inside="true" :stroke-width="4" :percentage="60" :show-text="false" :color="proColor"></el-progress>
          </div>
        </div>

        <div class="perSplitName">
          <span>过低</span>
          <span>偏低</span>
          <span>正常</span>
          <span>偏高</span>
          <span>过高</span>
        </div>

        <div class="personImg">
          <img src="../../../static/images/foods_fun_05.gif" alt="">
        </div>
      </div>
    </div>

    <div class="decodingTab">
      <ul>
        <li>
          <i> <img src="../../../static/images/foodicon_4.png" alt=""><span>肌肉</span></i>
          <h3>41.0kg</h3>
        </li>
        <li>
          <i> <img src="../../../static/images/foodicon_3.png" alt=""><span>骨骼</span></i>
          <h3>15.0kg</h3>
        </li>
        <li>
          <i> <img src="../../../static/images/foodicon_2.png" alt=""><span>水分</span></i>
          <h3>59%</h3>
        </li>
        <li>
          <i> <img src="../../../static/images/foodicon_1.png" alt=""><span>基础代谢</span></i>
          <h3>1420.0kcal</h3>
        </li>
      </ul>
    </div>

    <div class="decodingOption">
      <ul>
        <li>
          <i> <img src="../../../static/images/ionDecoding_5.png" alt=""><span>数据解读</span></i>
          <h3>尽管不是最健美的身材，但是最健康的，继续保持哦！</h3>
        </li>
        <li>
          <i> <img src="../../../static/images/ionDecoding_6.png" alt=""><span>数据解读</span></i>
          <h3>尽管不是最健美的身材，但是最健康的，继续保持哦！</h3>
          <h3>尽管不是最健美的身材，但是最健康的，继续保持哦！</h3>
        </li>
        
      </ul>
    </div>
	</div>
  </div>
</template>
<script type="text/javascript">
   export default {
     data() {
       return {
         proColor: '#93e16a'
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
  @import '../../assets/store/decodingData.css';

</style> 