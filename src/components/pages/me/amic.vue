<template>
    <div class="amic">
       <header>
           <div class="amincZ">
            <div class="Tp" @click="back()">
                <i class="iconfont Tpi">&#xe6b1;</i>
            </div>
            <div class="headerAmic">发布动态</div>
            <div class="headerFb">发布</div>
           </div>
        </header>
        <!-- 内容区域** -->
        <div class="amicCon">
            <div class="title">
                <p>有标题才能更吸引人
                    <span :style="amicObj">（选填）</span>
                </p>
                <P>从被嘲笑到被仰慕，写下经验，激励更多人</p>
                <!-- 图片** -->
                <div class="amicImg">
                    <img src="./img/imgIcon.png" alt="">
                </div>
            </div>
            <!-- 话题，所在位置** -->
            <div class="topic">
                <div class="toI">
                    <i class="iconfont toIico icon-huati"></i>
                </div>
                <div class="huti">
                    <p>话题</p>
                    <div class="huiP">
                        <i class="iconfont huiI icon-fanhui1"></i>
                    </div>
                </div>
            </div>
            <!-- 所在位置** -->
             <div class="topic">
                <div class="toI">
                    <i class="iconfont toIico icon-weizhi"></i>
                </div>
                <div class="huti">
                    <p>所在位置</p>
                    <div class="huiP">
                        <!-- <p class="huiTion">公开</p> -->
                        <i class="iconfont huiI icon-fanhui1"></i>
                    </div>
                </div>
            </div>
              <!-- 谁都可以看** -->
             <div class="topicS">
                <div class="toI">
                    <i class="iconfont toIico  icon-dangan"></i>
                </div>
                <div class="hutis">
                    <p>谁可以看</p>
                    <div class="huiP">
                        <i class="iconfont huiI icon-fanhui1"></i>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
export default {
    name:'',
    data () {
        return {
            amicObj :{
                fontSize:".28rem"
            }
        }
    },
    methods : {
        back (){
            this.$router.back();
        }
    }
    
}
</script>
<style scoped>
@import './style/amic.css' ;
    
</style>
