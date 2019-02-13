<template>
     <div style="padding-bottom:2.31rem">
          <div class="dyna">
            <div class="report">
              <div class="follow">
                  <ul>
                      <li>
                          <p>2</p>
                          <p>天</p>
                          <p>坚持运动</p>
                      </li>
                      <li>
                           <p>2</p>
                          <p>分钟</p>
                          <p>累计运动</p>
                      </li>
                      <li id="followLi">
                          <p>142</p>
                          <p>千卡</p>
                          <p>累计消耗</p>
                      </li>
                  </ul>
              </div>
          </div>
     </div>
     <!-- 选项卡** -->
    <div class="page-navbar">
            <mt-navbar id="mint-navbar" class="page-part" v-model="selected">
                <mt-tab-item id="1">日</mt-tab-item>
                <mt-tab-item id="2">周</mt-tab-item>
                <mt-tab-item id="3">月</mt-tab-item>
            </mt-navbar>
            <div>
            </div>
            <mt-tab-container v-model="selected">
                <mt-tab-container-item id="1">
                  <div class="consume">
                        <p>2018年共消耗能量</p>
                        <p>273
                            <span>kcal</span>
                        </p>
                  </div>
                  <!-- 图表** -->
                     <div class="chart" @click="chart()"></div>
                  <!-- 图表结束** -->
                  <!-- 运动数据** -->
                     <div class="shopSj">
                         <div class="yun">12月运动数据</div>
                         <div class="min">
                             <ul>
                                 <li>累计分钟
                                     <span> 0</span>
                                     </li>
                                 <li>共燃脂千卡 
                                     <span>52</span>
                                 </li>
                                 <li>完成次数 
                                   <span>1</span>
                                 </li>
                             </ul>
                         </div>
                     </div>
                  <!-- 运动数据结束** -->
                  <!-- 步行** -->
                     <div class="walk">
                         <div class="walkData">12月07日</div>
                         <div class="walkZ">
                             <div class="walkImg"></div>
                             <div class="walkP">
                                 <p>步行1562步</p>
                                 <p>09:06</p>
                             </div>
                             <div class="xiaoH">消耗52千卡</div>
                         </div>
                     </div>
                  <!-- 步行结束** -->
                </mt-tab-container-item>
                <mt-tab-container-item id="2">
                       2222222
                </mt-tab-container-item>
                <mt-tab-container-item id="3">
                       3333
                </mt-tab-container-item>
            </mt-tab-container>
  </div>
      <!-- 选项卡结束** -->
    
</div>
</template>
<script>
export default {
  name: 'page-navbar',
  data() {
    return {
      selected: '1'
    }
  },
  methods : {
      chart () {
         this.$router.push('/history/fat') 
      }
  }
};
</script>
<style scoped>
@import './style/motion.css';
</style>