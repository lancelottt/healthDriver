<template>
    <div class="weiZ">
        <div class="wei">
             <div class="had">
                    <div>
                        <div class="componentHeader-header">
                            <div class="Tp" @click="Tp()">
                                <i class="iconfont Tpi icon-jiantou-left"></i>
                            </div>
                            <div class="headerAmic">血糖</div>
                        </div>
                    </div>
                </div>
        </div>
         <!-- 解读与建议** -->
                <div class="unscr">
                    <div class="unscrC">
                        <div class="unkn">未知</div>
                        <div class="unF">家人上传数据后，会给出专业的解读与建议</div>
                        <div class="unImg">
                            <button class="sult">
                                <div class="butL"></div>
                                <div class="butR">立即咨询</div>
                            </button>
                        </div>
                    </div>
                </div>
                <!-- 体重趋势** -->
                <div class="trend">
                    <div class="trZ">
                      <div class="reCon">血脂趋势</div>
                    <div class="yfBlood">
                        <div class="yF">
                            <div class="yFdata">0.0</div>
                            <div class="kgZ">
                                <p>mmol/L</p>
                                <!-- <span class="kgImg"></span> -->
                                <p>血糖值</p>
                            </div>
                            <div class="tuR">

                            </div>
                        </div>
                        <div class="yfRi">
                            <div class="yfTop">
                                <div class="fatY"></div>
                                <div class="fasting">空腹血糖</div>
                            </div>
                            <div class="yfBott">
                                <div class="BottY"></div>
                                <div class="Botting">餐后血糖</div>
                            </div>
                        </div>
                    </div>
                      <div class="moZu">
                            <div class="moLeft"></div>
                            <div class="mound">
                                    <select name="" id="" v-model="val">
                                        <option :value="item.val" v-for="item in lists"  :key="item.val">{{item.name}}</option>
                                    </select>
                                <!-- 月份 -->
                            </div>
                      </div>
                    </div> 
                    <!-- 图片** -->
                    <div class="trZimg">

                    </div>
                </div>
    </div>
</template>
<script>
export default {
    data () {
        return {
            val : 0,
            lists : [
                {
                  name:'7月份',
                  val:0

                },
                {
                    name:'8月份',
                    val:1
                },
                {
                    name:'9月份',
                    val:2
                }
            ]

        }
    },
    mounted () {
       
    },
    methods:{
        Tp(){
             this.$router.back()
        }
      
    }
    
}
</script>
<style lang="" scoped>
@import './cssFami/bloodsu.css';
</style>


