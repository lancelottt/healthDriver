<template>
    <div style="padding-bottom:2.31rem">
        <div class="weight">
             <div class="danW">单位:kg</div>
                    <div class="danT">
                        <p>69.1</p>
                        <p>最新体重</p>
                    </div>
                    <div class="box">
                            <div class="box-left"></div>
                            <div class="box-right"></div>
                            <div class="box1">
                                <div class="boxquan"></div>
                            </div>
                       
                    </div>
                    <div class="tiZ">
                     <div class="tiNei">
                            <p style="color:#999999;font-size:.36rem">80.0</p>
                            <p style="color:#999999;font-size:.20rem">初始体重</p>
                    </div>
                      <div class="jiLw">记录体重</div>
                        <div class="muB">
                             <p style="color:#999999;font-size:.36rem">65.0</p>
                            <p style="color:#999999;font-size:.20rem">目标体重</p>
                        </div>
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
.box{
    width: 85%;
    height: .04rem;
    background:rgb(196, 188, 178);
    margin: .3rem auto;
    border-radius: .2rem;
    position: relative;
}
.box-left{
    width: .15rem;
    height:.15rem;
    border-radius: 50%;
    background: #ff5e3a;
    position: absolute;
    left: 0;
    top:0;
    bottom: 0;
    margin: auto;
}
.box-right{
    width: .15rem;
    height:.15rem;
    border-radius: 50%;
    background: #ff5e3a;
    position: absolute;
    right: 0;
    top:0;
    bottom: 0;
    margin: auto;
}
.box1{
    position: absolute;
    width: 60%;
    height: 100%;
    border-radius: 20px;
    top: 0;
    left: 0;
    background: #ff5e3a;
}
.boxquan{
    width: .15rem;
    height: .15rem;
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0px;
    margin: auto;
    border-radius: 50%;
    background: #ff5e3a;
}
.boxquan:after{
    content: '';
    width: .03rem;
    height: .3rem;
    position: absolute;
    bottom: 8px;
    left: 0;
    right: 0;
    margin: auto;
    background: #ff5e3a;
}
.danT P:nth-of-type(1){
    font-size: .72rem;
    color: #999999;
}
.danT P:nth-of-type(2){
    font-size: .20rem;
    color: #999999;
    margin-top: .1rem;
}
.tiZ {     zoom: 1;
    width: 90%;
    margin: auto; } 
.tiZ:after { clear:both;content:'';display:block;width:0;height:0;visibility:hidden; }
.tiNei{
    text-align: left;
    float: left;
}
.muB{
    text-align: left;
    float: right
}
</style>