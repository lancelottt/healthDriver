<template>
<div>
    <div class="mus">
       <img src="../../foorterGuid/img/trendS.png" alt="">
    </div>
    <!-- 内容** -->
    <div class="musNei">
        <ul>
            <li>
                <p>0</p>
                <p>累计记录天数</p>
            </li>
            <li>
                 <p>0</p>
                <p>肌肉量变化量%</p>
            </li>
             <li>
                 <p>0</p>
                <p>最高肌肉量（kg）</p>
            </li>
             <li>
                 <p>0</p>
                <p>最低肌肉量（kg）</p>
            </li>
        </ul>
    </div>
</div>
</template>
<script>
export default {
    
}
</script>
<style lang="" scoped>
.mus{
    width:100%;
    height: 3.8rem;
    margin-top: .1rem;
}
.mus img{
    width:100%;
    height: 100%;
}
.musNei{
    width:100%;
    height: 4.7rem;
}
.musNei ul li{
    float: left;
    width:50%;
    margin-top: .8rem;
}
.musNei ul li p:nth-of-type(1){
    margin-bottom: .34rem;
    font-size: .48rem;
    color: #999999
   
}
.musNei ul li p:nth-of-type(2){
    font-size: .20rem;
    color: #999999
   
}
</style>