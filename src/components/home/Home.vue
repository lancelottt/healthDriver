<template>
    <div class="tab" v-show="show">
        <ul>
            <li v-for="(item,index) in navs" @click="handleClick(index)" :class="active == index ? 'active':''">
                <router-link :to="{name:item.name}" class="rl">
                        <i :class="item.icon"></i>{{item.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            navs : [
                {
                    name:"healthPlan",
                    icon:"iconfont icon-Z",
                    title:"自律"
                },
                {
                    name:"healthMarketHome",
                    icon:"iconfont icon-jiankang",
                    title:"健康"
                },
                {
                    name:"shangcheng",
                    icon:"iconfont icon-gouwuche",
                    title:"商城"
                },
                {
                    name:"shuju",
                    icon:"iconfont icon-xin2-copy",
                    title:"数据"
                },
                {
                    name:"wode",
                    icon:"iconfont icon-wode",
                    title:"我的"
                }
            ],
            show:true,
            active:0
        }
    },
    methods:{
        handleClick(index){
            this.active = index;
            console.log(index)
            console.log(this.active)
        }
    }
}
</script>

<style >
    .tab{
    	display: block;
    	z-index: 999;
        width: 100%;
        height: .96rem;
        position: fixed;
        bottom: 0;
        left: 0;
        background: #FFFFFF;
    }
    .tab>ul{
        display: flex;
        width: 100%;
        height: .96rem;
        justify-content: space-around
    }
    .tab>ul>li{
         /* border:1px solid #000; */
         padding-top: 0.1rem;
         font-size: .2rem;
         text-align: center;
		
    }
    .tab>ul>li>.rl{
        color:#9b9b9b!important;
         display: flex;
         flex-direction: column;
    }
    .tab>ul>.active>.rl{
        color: #4d9ee6!important;
    }
   
    .tab>ul>li i{
        font-size: .48rem;
    }

    /* 静态图标
    .tab>ul>li:nth-of-type(1)>.rl>.original>i{
        background:url("../../../static/icons/home-normal.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(2)>.rl>.original>i{
        background:url("../../../static/icons/story-normal.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(3)>.rl>.original>i{
        background:url("../../../static/icons/travel-normal.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(4)>.rl>.original>i{
        background:url("../../../static/icons/my-normal.svg") no-repeat .025rem;
    }
    /*活跃图标
    .tab>ul>li:nth-of-type(1)>.rl>.active>i{
        background:url("../../../static/icons/home-pressed.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(2)>.rl>.active>i{
        background:url("../../../static/icons/stroy-pressed.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(3)>.rl>.active>i{
        background:url("../../../static/icons/travel-pressed.svg") no-repeat;
    }
    .tab>ul>li:nth-of-type(4)>.rl>.active>i{
        background:url("../../../static/icons/my-pressed.svg") no-repeat .025rem;
    } */

</style>
