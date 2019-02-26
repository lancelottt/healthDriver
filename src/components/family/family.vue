<template>
        <div class="hadZo">
            <div class="had">
                <div>
                    <div class="componentHeader-header">
                        <div class="Tp">
                            <i class="iconfont Tpi icon-jiantou-left"></i>
                        </div>
                        <div class="headerAmic">我的家人</div>
                        <div class="headerFb">
                            发布
                        </div>
                    </div>
                </div>
            </div>
        <!-- 家人账号管理** -->
            <div class="account">
                 <div class="accLeft">

                 </div>
                 <div class="accRi"> 
                    家人账号管理
                 </div>
            </div>
            <!-- 任务-爸爸妈妈** -->
            <div class="mily">
                <div class="father">
                    <ul>
                            <li @click="father()">
                                <div class="faCon">爸爸</div>
                                <div class="faQu">
                                    <span>
                                    </span>
                                    <span>
                                    </span>
                                </div>
                            </li>
                        <li>
                            <div class="faCon">妈妈</div>
                            <div class="moQu">
                                <span>
                                </span>
                                <span>
                                </span>
                            </div>
                        </li>
                    </ul>
                </div>
                <!-- 添加家人，关注家人健康** -->
                 <div>
                    <div class="statusCircl">
                        <ul>
                            <li></li>
                            <li>添加家人，关注家人健康</li>
                        </ul>
                   </div>
                 </div>
            </div>
        </div>
</template>
<script>
export default {
    data () {
       return {

       }
    },
    methods:{
        father () {
            this.$router.push("/father")
        }
    }
}
</script>
<style lang="" scoped>
@import './cssFami/family.css';
</style>
