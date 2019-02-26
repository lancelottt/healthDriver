<template>
   <div class="unheaZ">
    <Unheal/>
    <div>
        <div class="simi">
            -以下数据均为私密状态-
        </div>
        <!-- 对比照** -->
        <div class="contrast">
            <div class="conO">
                <div class="myCon">我的对比照</div>
                <div class="myTet">拍下你身体的剪影，你将会看到自己的变化</div>
                <div class="circl">
                    <ul>
                        <li></li>
                        <li>添加照片</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 我的状态** -->
         <div class="contrast status">
            <div class="statusConO">
                <div class="myCon">我的体重</div>
                <div class="statusMyTet">
                    <p>69.1</P>
                    <P>当前体重(kg)</P>
                </div>
                <div class="statusCircl">
                    <ul>
                        <li></li>
                        <li>记录体重</li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- 我的纬度 -->
        <div class="circum">
              <div class="feren">
                 <div class="myFen">我的围度</div>
                 <div class="meas">
                     <span>如何测量</span>

                     <i class="iconfont icon-fanhui1 fontD"></i>
                 </div>    
              </div>  
              <div class="feFont">
                  <div>171</div>
                  <div>身高（cm）</div>
              </div>
              <div class="bust">
                   <ul>
                       <li>
                           <p>0.0</p>
                           <p>臀围</p>
                       </li>
                       <li>
                           <p>0.0</p>
                           <p>臀围</p>
                       </li>
                       <li>
                           <p>0.0</p>
                           <p>臀围</p>
                       </li>
                       <li>
                           <p>0.0</p>
                           <p>臀围</p>
                       </li>
                       <li>
                           <p>0.0</p>
                           <p>臀围</p>
                       </li>
                       <li>
                           <p>0.0</p>
                           <p>臀围</p>
                       </li>
                   </ul>
              </div>
        </div>
    </div>
   </div>
</template>
<script>
import Unheal from './unheal'
export default {
    components:{
        Unheal
    }
}
</script>
<style lang="" scoped>
@import './unheal/uncertain.css';
</style>

