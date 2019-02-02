<template>
    <div class="had">
        <div>
            <div class="componentHeader-header">
                <div class="Tp">
                    <i class="iconfont Tpi icon-jiantou-left"></i>
                </div>
                <div class="headerAmic">数据中心</div>
                <div class="headerFb">
                    <img src="./img/ShareIcon.png" alt="">
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
    }
}
</script>
<style lang="" scoped>
.had{
    height: .99rem;
}
  .componentHeader-header{
    width: 96%;
    /* height: .87rem; */
    box-sizing: border-box;
    color: black;
    line-height: .87rem;
    margin: auto;
    font-size: .28rem;
}
.Tp{
    float: left;
}
.Tpi{
    font-size: .54rem;
}
.headerAmic{
    width: 79%;
    height: 100%;
    margin: auto;
    font-size: .34rem;
    float: left;
}
.headerFb{
    width: .37rem;
    height: .39rem;
    line-height: .29rem;
    color: #ffffff;
    float: right;
    margin-top: .2rem;
} 
.headerFb img{
    width:100%;
    height: 100%;
}   
</style>
