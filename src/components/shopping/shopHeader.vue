<template>
    <!-- <div class="shopCom"> -->
        <div class="hadHea">
        <div class="had">
            <div class="componentHeader-header">
                <div class="Tp" @click="handlerBack()">
                    
                </div>
                <div class="headerAmic">我的运动</div>
                <div class="headerFb">
                 
                </div>
            </div>
        </div>
       </div>
    <!-- </div> -->
</template>
<script>
export default {
    data () {
        return {

        }
    },
    methods:{
    	handlerBack(){
    		this.$router.back()
    	}
    }
}
</script>
<style lang="" scoped>
.shopCom{
    width:100%;
    height: auto;
    padding-bottom: 1.15rem;
    box-sizing: border-box;
    background: #eeeeee;
}
.hadHea{
    width:100%;
    height: auto;
    background: #ffffff;
}
.had{
    width:94%;
    height: .99rem;
    margin: auto;
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
    width:.41rem;
    height: .33rem;
    background: url(./img/ShareIcon.png) no-repeat center;
    background-size: 100% 100%;
    margin-top: .3rem;
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
    width: .28rem;
    height: .28rem;
    line-height: .29rem;
    color: #ffffff;
    float: right;
    margin-top: .3rem;
    background: url(./img/search.png) no-repeat center;
    background-size: 100% 100%;
} 
  
</style>
