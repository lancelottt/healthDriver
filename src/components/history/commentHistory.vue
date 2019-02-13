<template>
   <div class="history">
      <div href="javascript:;" class="hisItem cals" :class="{on:'/history/fat'===$route.path}" @click="goto('/history/fat')">
          <span class="hisItem_icon">
             <i class="iconfont icon-chengzhong"></i>
          </span>
          <span>脂肪称</span>
      </div>
       <div href="javascript:;" class="hisItem" :class="{on:'/history/trend/mi'===$route.path}" @click="goto('/history/trend/mi')">
          <span class="hisItem_icon">
             <i class="iconfont icon-eng"></i>
          </span>
          <span>体趋势</span>
      </div>
   </div>
</template>
<script>
export default {
   data () {
      return{

      }
   },
   methods : {
       goto(path){
          this.$router.replace(path) //路由跳转
       }
   }
    
}
</script>
<style lang="" scoped>
.history{
    position: fixed;
    z-index: 100;
    left:0;
    right:0;
    bottom:0.19rem;
    background-color: #ffffff;
    width:100%;
    height: 1.11rem;
    display: flex;
    display: -webkit-flex;
}
.hisItem{
   display: flex;
   display: -webkit-flex;
   flex: 1;
   margin-top: .1rem;
   text-align: center;
   flex-direction: column;
   -webkit-flex-direction: column;
   align-items: center;
   color: #999999;
}
.on {
		color: #ff5e3a;
	}
span {
   font-size: .24rem;
   margin-top: .02rem;
   margin-bottom: .02rem;
}
	
.iconfont {
   font-size: .64rem;
}

.img {
   width: .44rem;
   height: .58rem;
}

.cals {
   margin-top: .15rem;
}
    
</style>

