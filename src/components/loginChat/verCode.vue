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
                <div class="cation">
                    <div class="caCon">
                       <div class="phoneCa">手机号码</div>
                        <input type="text" placeholder="请输入手机号码">
                    </div>
                     <div class="Code" style="margin-top:.3rem;">
                       <div class="yan">验证码:</div>
                       <div>
                            <input type="text" placeholder="请输入短信验证码">
                        </div>
                        <!--<router-link to="../startUp/healthy">--> 
                            <button class="huoYan" v-bind:disabled="sendMsDisabled" @click="send" id="sendA">
                            	<span v-if="sendMsDisabled">{{time+'秒后获取'}}</span>
				                <span v-if="!sendMsDisabled">发送验证码</span>
                            </button>
                        <!--</router-link>-->
                    </div>
                     <!-- 登录按钮** -->
                      <button class="buttonO" @click="handleVerCodeLogin()">登录</button>
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
    name:'Code',
    data () {
        return {
           time:60,
           sendMsDisabled:false,
        }
    },
    methods:{
    	handleVerCodeLogin(){
    		this.$router.push({name: 'Invitation'})
    	},
        send () {
            let me=this;
            me.sendMsDisabled=true;
            let interval=window.setInterval(function(){
                if((me.time--)<=0){
                    me.time=60;
                    me.sendMsDisabled=false;
                    window.clearInterval(interval);
                }
            },1000);
        }
	 }
}
</script>
<style scoped>
@import '../../assets/chatLogin/chatLogin.css'
    
</style>