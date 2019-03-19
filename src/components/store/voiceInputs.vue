<template>
  <div>
    <div class="Equitheader">
      <div class="header-left" @click="handleBack()">
        <i class="iconfont icon-fanhuijiantou"></i>
      </div>
      <div class="header-in">语音录入</div>
    </div>
    <div class="voiceTitle">
      <h4>你可以这样说</h4>
      <h3>今天 <span>10点30分</span> 测点高压是 <span>120</span> 低压是 <span>80</span></h3>
      <img src="../../../static/images/callMiss.png" alt="">
    </div>

    <div class="voicePrompt" @click="startRecognize()">
      <h3>点击按钮，说出你的状况</h3>
    </div>
    <!--<button  @click="message();">识别内容</button>-->
  </div>
</template>
<script type="text/javascript">
    export default {
        methods: {
            handleBack() {
                this.$router.back()
            },
            startRecognize() {
                var text = null;
                var options = {};
                options.engine = 'iFly';
                text = "";
                plus.nativeUI.alert('开始语音识别', alertCB, title, buttonCapture);
                // alert("开始语音识别：");
                plus.speech.startRecognize(options, function(s) {
                    text += s;
                }, function(e) {
                    // alert("" + e.message);
                     plus.nativeUI.alert('语音识别失败：' + e.message, alertCB, title, buttonCapture);
                });
                // 监听识别结束
                plus.speech.addEventListener("end", function() {
                     plus.nativeUI.alert('监听识别结束' + text, alertCB, title, buttonCapture);
                    alert("Success: " + text);
                }, false);
            },
            message() {

            }
        }
    }
</script>
<style scoped>
    .Equitheader {
        width: 100%;
        height: .89rem;
        background: #fff;
        position: fixed;
        z-index: 1;
        padding: 0 .2rem 0 .2rem;
        box-sizing: border-box;
    }
    
    .header-left {
        width: 10%;
        height: 100%;
        float: left;
    }
    
    i {
        font-size: 0.36rem;
        line-height: .89rem;
        text-align: center;
        display: block;
    }
    
    .header-in {
        width: 80%;
        float: left;
        text-align: center;
        font-size: 0.28rem;
        line-height: 0.85rem;
        color: #333333;
    }
    
    .header-rigth {
        width: 10%;
        float: right;
    }
    
    .voiceTitle {
        padding-top: 1.9rem;
        font-size: 0.24rem;
        color: #999;
    }
    
    .voiceTitle h3 {
        font-size: 0.24rem;
        color: #666;
        font-weight: 400;
        padding-top: 0.3rem;
    }
    
    .voiceTitle h3 span {
        font-size: 0.3rem;
        color: #ff5e3a;
        font-weight: bold;
    }
    
    .voiceTitle img {
        width: 1.8rem;
        height: 1.8rem;
        display: block;
        margin: 0 auto;
        margin-top: 4.7rem;
    }
    
    .voicePrompt {
        width: 100%;
        height: auto;
        text-align: center;
        position: absolute;
        bottom: 2rem;
        left: 0;
    }
    
    .voicePrompt h3 {
        color: #999;
        font-size: 0.24rem;
    }
</style>