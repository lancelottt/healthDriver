<template>
    <div style="padding-bottom:2.31rem">
        <div class="weight">
             <div class="danW">单位:kg</div>
             <div class="weiImg">
                 <img src="./img/qieT.png" alt="">
                 <div class="jiLw">记录体重</div>
             </div>
        </div>
        <!-- 按天查看** -->
        <div class="dataT">
           <div class="dataQ" ref="dataQ">
               <ul>
                    <li  @click="tab(index)" v-for="(item,index) in items"  :class="{active:index===curId}" :key="index">{{item.item}}</li>
               </ul>
           </div>
           <!-- 选项卡内容** -->
           <div class="tab-con" ref="tabCon">
               <div class="dataC" v-if="curId==0">
                   <div class="dataImg">
                       <img src="./img/mubiao.png" alt="">
                   </div>
                   <div class="dataCon">
                       <p>12月08日体重记录</p>
                        <div class="xinW">
                            <div class="xinWo">
                                <div class="xinImg">
                                    <img src="./img/weight.png" alt="">
                                    </div>
                                <div class="xinWei">
                                        <div>最新体重</div>
                                        <div class="xinP">09:06</div>
                                </div>
                            </div>
                            <div class="xinWt">69.1kg</div>
                            <div class="xinWs">
                                <div class="eait">8</div>
                               <div class="xinSub">
                                   <span style="font-size: .32rem;">kg</span>
                                   <span><img src="./img/Up.png" alt=""></span>
                               </div>
                            </div>
                   </div>
                   </div>
                  
               </div>
               <div v-else="" class="dataC">vddddd</div>
               <!-- <div v-show="index===curId" v-for="(content,index) in contents" :key="index">{{content.content}}</div> -->
           </div>
          </div>
        </div>
</template>
<script>
export default {
    name:'Weight',
     data () {
         return {
            curId: 0,
                items: [
                {item: '按天查看'},
                {item: '体重趋势'}
                ]
         }
     },
     methods :{
       tab (index) {
             this.curId = index;
          }
     }
}
</script>
<style lang="" scoped>
@import './style/weight.css';
</style>