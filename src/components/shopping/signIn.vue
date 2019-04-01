<template>
    <transition name="confirm-fade">
    <div  v-show="isShow">
       <div class="signBg"></div>
        <div class="signMain">
            <div class="signClose"  @click="closeCard"></div>
            <h3>签到成功！</h3>
            <div class="successBg">
                <img src="../../../static/images/success_bg.png"/>
                <h3>你已经坚持打卡了{{cardDay + 1 }}天，继续保持哦～</h3>
                <button @click="closeCard">知道啦</button>
            </div>
        </div>
    </div></transition>
</template>
<script type="text/javascript">
    export default {
        props: {
            isShow: {
                type: Boolean,
                default: false
            },
            cardDay: 0
        },
        created() {
            console.log(this.isShow)
        },
        methods: {
            closeCard() {
                this.$emit("closeCard");
            }
        }
    }
</script>
<style>
    .confirm-fade-enter-active {
        animation: confirm-fadein 0.3s;
    }
    
    .confirm-fade-leave-active {
        animation: confirm-fadeout 0.3s;
    }
    
    @keyframes confirm-fadein {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
    }
    
    @keyframes confirm-fadeout {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
    }
    
    .confirm-content {
        animation: confirm-zoom 0.3s;
    }
    
    .signBg {
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.75);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 10;
    }
    
    .signMain {
        width: 95%;
        height: 7.18rem;
        position: fixed;
        top: 20%;
        left: 2.5%;
        z-index: 10;
        background: url('../../../static/images/signBg.png') no-repeat;
        background-size: 100% 100%;
        text-align: center;
    }
    
    .signMain h3 {
        font-size: 0.55rem;
        color: #000;
        margin-top: 0.6rem;
        margin-bottom: 1.95rem;
    }
    
    .signClose {
        width: 0.79rem;
        height: 0.84rem;
        background: url('../../../static/images/sign_clos.png') no-repeat;
        background-size: 100% 100%;
        position: absolute;
        right: 0;
        top: 0;
    }
    
    .successBg {
        width: 100%;
    }
    
    .successBg h3 {
        font-size: 0.22rem;
        color: #333;
        margin: .4rem 0;
    }
    
    .successBg img {
        width: 1.63rem;
    }
    
    .successBg button {
        width: 4.93rem;
        height: 0.71rem;
        background: url('../../../static/images/sign_btn.png') no-repeat;
        background-size: 100% 100%;
        border: 0;
    }
</style>