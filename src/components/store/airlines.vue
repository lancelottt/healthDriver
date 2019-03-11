<template>
  <div>
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">在线咨询</div>
      <div class="header-rigth">
        我的问诊
      </div>
    </div>

    <div class="airlinesMain">
      <div class="airlinesArea">
        <textarea rows="" cols="" placeholder="请详细描述您的问题，包括身体状况、疾病和病症等，我们会为您分配最专业的医生，并且保证您的隐私安全（最少10个字）"></textarea>
      </div>
      <div class="addImg">
        <img src="../../../static/images/ioncamera.png" alt="">
        <div class="addImgTitle">
          <h3> <strong>添加照片</strong> <span>（非必填）</span></h3>
          <p>症状部位，检查报告或其他材料</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
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
