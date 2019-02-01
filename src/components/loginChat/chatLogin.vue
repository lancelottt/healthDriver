<template>
    <div class="chatLogin">
         <div class="imgZ">
             <img src="../../../static/img/bJ.png"/>
         </div>
         <div class="content">
             <p>哈喽！</p>
             <p>欢迎登录健康驾校</p>
             <div class="conTu">
                 <img src="../../../static/img/chatLogin.png" alt="">
                 <div class="phone">
                     <img src="../../../static/img/phone.png" alt="">
                 </div>
                <!-- 快捷登录** -->
                <div class="weChat">
                    <div @click="loginWinwei()">
                     <img src="../../../static/img/weixin.png" alt="" >
                    </div>
                     <span>点击微信快捷登录</span>
                </div>
               
             </div>
             <div class="imgT">
                 <div class="imgTleft"><img src="../../../static/img/jY.png" alt=""></div>
                 <div class="imgTright"><img src="../../../static/img/home.png" alt=""></div>
             </div>
         </div>
    </div>
</template>
<script>
export default {
    name:'loginChat',
    data () {
        return {
          
        }
    },
   methods:{
       loginWinwei () {
           this.$router.push('/loginChat/verCode')
       }
   }
}
</script>
<style scoped>
	@import '../../assets/chatLogin/chatLogin.css'
</style>

