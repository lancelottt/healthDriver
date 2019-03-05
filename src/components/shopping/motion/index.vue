<template>
    <div>
        <div class="shouye">
            <div class="rewu">
                <div class="rewuLe"></div>
                <div class="rewuRi">wangmeili-88</div>
            </div>
          <!-- 累计运动** -->
          <div class="lative">
              <div class="accum">已累计运动</div>
              <div class="minute">
                  <div class="minLe">
                      <span>1,180</span>
                      <span>分钟</span>
                  </div>
                  <div class="minRi">今日运动<span>-</span> 分钟</div>
              </div>
          </div>
          <!-- 课程** -->
          <div class="culu">
              <div class="addCulu">
                  <div class="addLe">我参加的课程</div>
                  <div class="addRi">
                      + 添加课程
                  </div>
              </div>
              <div class="thenZ">
                <div class="then">
                    <div class="thenLe">
                        <p>腹肌塑造强化</p>
                        <p>上次训练 31 天前   13人正在练  </p>
                    </div>
                    <div class="thenRi">24分钟·K4</div>
                </div>
                <div class="then">
                    <div class="thenLe">
                        <p>跑前热身</p>
                        <p>上次训练 31 天前   13人正在练  </p>
                    </div>
                    <div class="thenRi">8分钟·K1</div>
                </div>
                <div class="thenShow" v-show="show">
                    <div class="then">
                       <div class="thenLe">
                        <p>跑前热身</p>
                        <p>上次训练 31 天前   13人正在练  </p>
                       </div>
                    <div class="thenRi">8分钟·K1</div>
                    </div>
                    <div class="then">
                       <div class="thenLe">
                        <p>跑前热身</p>
                        <p>上次训练 31 天前   13人正在练  </p>
                       </div>
                    <div class="thenRi">8分钟·K1</div>
                    </div>
                    <div class="then">
                       <div class="thenLe">
                        <p>跑前热身</p>
                        <p>上次训练 31 天前   13人正在练  </p>
                       </div>
                    <div class="thenRi">8分钟·K1</div>
                    </div>
                </div>
                <!-- 查看更多** -->
                <div class="more" @click="moreClick()">查看全部</div>
               </div>
          </div>
          <!-- 训练计划** -->
          <div class="plan">
              <div class="planCon">
                  <div class="planTop">训练计划</div>
                  <div class="planImg">
                    <swiper :options="swiperOption">
                            <swiper-slide v-for="(item,index) in items" :key="index">
                                  <div class="slideImg">
                                  	<img src="../../../../static/images/jian.png" alt=''>
                                  </div>
                            </swiper-slide>
                    </swiper>
                  </div>
              </div>
          </div>
        </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
              show:false,
              swiperOption:{
              	freeMode:true,
              	spaceBetween:10
           },
           items:[
               {
                   src:'../img/jian.png'
               },
                {
                   src:'../img/jian.png'
               },
                {
                   src:'../img/jian.png'
               },
           ]
          

        }
    },
    methods:{
        moreClick () {
            this.show= !this.show
        }
    }
    
}
</script>
<style lang="" scoped>
@import '../../../assets/sports/index.css';
</style>
