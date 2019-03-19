<template>
    <div>
       <mt-header title="体重">
          <router-link to="/device" slot="left">
               <mt-button icon="back"></mt-button>
          </router-link>
          <mt-button icon="more" slot="right"></mt-button>
       </mt-header>
     <div>
        <div class="weightRuler">
            <h4>当前体重</h4>
            <DLRuler :value="50" :min="30" :max="300" :onChange="changeWeight"></DLRuler>
            <div class="weightBtn">
                <button class="restore"> <img src="../../../static/images/goout.png"/> 还原</button>
                <button class="recordBloodBtn" @click="upData()">完成记录</button>
                <button class="calculatorBtn">连接体脂称</button>      
            </div>
        </div>
     </div>
     <div></div>
</div>



</template>
<script type="text/javascript">
    import DLRuler from '../rulerComponent/DLRuler.vue';
    import {get,
        post
    } from '../../api/fetch.js';
    export default {
        components: {
            DLRuler
        },
        data: function() {
            return {
                weightVal: ''
            }
        },
        methods: {
            changeWeight(val) {
                console.log(val);
                this.weightVal = val;
            },
            upData() {
                console.log(this.weightVal)
                get('/health-web/modules/userDataRecord/save', {
                    weightValue: this.weightVal
                }).then((res) => {
                    if (res.code == 0) {
                        this.$message({
                            message: '提交成功 !',
                            type: 'success'
                        })
                    }
                })
                this.$router.push('/device')
            }
        },
        mounted() {}
    }
</script>
<style scoped>
    .weightRuler h4 {
        font-size: 0.28rem;
        color: #666666;
        margin-top: 0.9rem;
    }
    
    .mint-header {
        background: #fff;
        color: #666;
    }
    
    .deviceBtn {
        color: #FF5E3A
    }
    
    .device {
        padding-top: 40px;
    }
    
    .weightBtn {
        font-size: 0;
    }
    
    .restore {
        width: 1.6rem;
        height: 0.7rem;
        font-size: 0.3rem;
        border: 1px solid rgba(153, 153, 153, 1);
        background: #fff;
        border-radius: 20px;
        color: #999;
        text-align: center;
        line-height: 0.7rem;
        margin-top: 0.79rem;
    }
    
    .restore img {
        width: 0.32rem;
    }
    
    .recordBloodBtn {
        width: 3.07rem;
        height: 0.80rem;
        background: linear-gradient(4deg, rgba(255, 94, 58, 1), rgba(255, 149, 0, 1));
        box-shadow: 0px 8px 9px 1px rgba(255, 96, 56, 0.27);
        border-radius: 6px;
        border: 0;
        font-size: 0.3rem;
        color: #fff;
        display: block;
        margin: 0 auto;
        margin-top: 0.71rem;
        margin-bottom: 0.28rem;
    }
    
    .calculatorBtn {
        width: 3.07rem;
        height: 0.80rem;
        font-size: 0.3rem;
        color: rgba(255, 94, 58, 1);
        display: block;
        margin: 0 auto;
        border: 1px solid rgba(255, 94, 58, 1);
        border-radius: 6px;
        background: #fff;
    }
</style>