<template>
    <div class="shopCom">
        <div>
         <ShopHeader/>
         <div class="tab">
             <div class="tabItem">
                 <router-link to="/mymotion/index">首页</router-link>
             </div>
             <div class="tabItem">
                 <router-link to="/mymotion/run">跑步</router-link>
             </div>
             <div class="tabItem">
                 <router-link to="/mymotion/bulid">健身</router-link>
             </div>
             <div class="tabItem">
                 <router-link to="/mymotion/yoga">瑜伽</router-link>
             </div>
             <div class="tabItem">
                 <router-link to="/mymotion/step">快走</router-link>
             </div>
         </div>
         <router-view/> 
         </div>
    </div>
</template>
<script>
import ShopHeader from './shopHeader'

export default {
    components:{
        ShopHeader
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
.shopCom{
    width:100%;
    height: auto;
    padding-bottom: 1.15rem;
    box-sizing: border-box;
    background: #eeeeee;
}
   
</style>
