<template>
    <div style="padding-bottom:2.31rem">
     <div >
         <div class="meHeader">
             我的
         </div>
         <!-- 发布动态** -->
          <div class="dyna">
           <!-- 新人报道** -->
              <div class="report">
                <div class="reportZ">
                    <div class="reportRen">
                        <img src="./img/ren.png" alt="">
                    </div>
                    <div class="reportCon">
                        <div class="reponConZ">
                             <span>wangmeili-88</span>
                             <span class="sugar">控糖营</span>
                        </div>
                        <div class="xinren">新人报到！请多多关照～</div>
                     <!-- 箭头** -->
                          <div class="arrow">
                              <i class="iconfont fontZt">&#xe603;</i>
                          </div>
                    </div>
                  
                </div>
              </div>
              <!-- 动态，关注与粉丝** -->
              <div class="follow">
                  <ul>
                      <li>
                          <p>0</p>
                          <p>动态</p>
                      </li>
                      <li>
                           <p>5</p>
                          <p>关注</p>
                      </li>
                      <li>
                            <p>0</p>
                          <p>粉丝</p>
                      </li>
                  </ul>
              </div>
              <!-- 发布第一条动态** -->
              <router-link to="./amic">
                  <div class="dynamic">发布第一条动态</div>
              </router-link>
          </div>
     <!-- 数据中心** -->
       <div class="dataZ">
          <ul>
              <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
              <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
              <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
              <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
              <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
               <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
               <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
               <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
               <li>
                  <i class="iconfont shuju">&#xe604;</i>
                  <p>数据中心</p>
              </li>
          </ul>
       </div>
       <!-- 我的计划** -->
        <div class="plan">
               <div class="planIcon">
                   <i class="iconfont planFont">&#xe605;</i>
               </div>
                <div class="planContent">我的计划</div>
                <div class="iconfont planJ"> &#xe603;</div>
        </div>
        <!-- 系统设置** -->
         <!-- 我的计划** -->
        <div class="planSz">
               <div class="planIcon">
                   <i class="iconfont planFont">&#xe605;</i>
               </div>
                <div class="planContent">系统设置</div>
                <div class="iconfont planJ"> &#xe603;</div>
        </div>
     </div>
     <foot-tabbar></foot-tabbar>
    </div>
</template>
<script>
import FootTabbar from '../../foorterGuid/footerGuild'

export default {
  components:{
      FootTabbar
    },
    data () {
        return{
        
        }
    },
}
</script>
<style scoped>
@import './style/me.css';
</style>