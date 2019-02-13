<template>
    <div>
      <HeadeTabbar/>
      <div class="tab">
           <div class="tabItem">
               <router-link to="/history/trend/mi">MI</router-link>
           </div>
           <div class="tabItem">
               <router-link to="/history/trend/fatPer">脂肪率</router-link>
           </div>
          <div class="tabItem">
               <router-link to="/history/trend/muscleRa">肌肉率</router-link>
           </div>
           <div class="tabItem">
               <router-link to="/history/trend/waterRa">水分率</router-link>
           </div>
           <div class="tabItem">
               <router-link to="/history/trend/bone">骨</router-link>
           </div>
       </div>
        <router-view/> 
       <foot-tabbar></foot-tabbar>
    </div>
</template>
<script>
import HeadeTabbar from './trendTop'
import FootTabbar from './commentHistory'
export default {
    components:{
        FootTabbar,
        HeadeTabbar
    },
    name:"trend",
    data () {
        return {
        }
       
    }
}
</script>
<style lang="" scoped>
    .tab{
    height: .92rem;
    line-height: .92rem;
    background: #fff;
    border-bottom:.01rem solid #f2f2f2;
}
.tabItem{
    float: left;
    width: 20%;
    text-align: center;
    font-size: .28rem;
    color:rgb(77,85,93);
}
a{
    display: block;
    position: relative;
}
.router-link-active{
    color: #ff5e3a;
}
.router-link-active::after{
    content: '';
    position: absolute;
    left:50%;
    bottom: .02rem;
    width: 1.25rem;
    height: .035rem;
    transform: translateX(-50%);
    background: #ff5e3a;
}

</style>
