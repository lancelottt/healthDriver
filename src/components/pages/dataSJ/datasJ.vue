<template>
    <div>
       <CommentHeader/>
       <div class="tab">
           <div class="tabItem">
               <router-link to="/dataSj/weight">体重</router-link>
           </div>
           <div class="tabItem">
               <router-link to="/dataSj/blood">血压</router-link>
           </div>
          <div class="tabItem">
               <router-link to="/dataSj/sugar">血糖</router-link>
           </div>
           <div class="tabItem">
               <router-link to="/dataSj/motion">运动</router-link>
           </div>
           <div class="tabItem">
               <router-link to="/dataSj/heart">心率</router-link>
           </div>
       </div>
      <router-view/> 
      <foot-tabbar></foot-tabbar>
    </div>
</template>
<script>
import CommentHeader from '../../commentHeader/commentHeader'
import FootTabbar from '../../foorterGuid/footerGuild';
export default {
  components:{
      FootTabbar,
      CommentHeader
      },
  data(){
    return{
     
     }
  },
}
</script>
<style scoped>
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