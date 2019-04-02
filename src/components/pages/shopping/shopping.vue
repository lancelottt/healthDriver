<template>
    <div class="shopCon">
       <div class="exper">
		<div class="hotExpe">
			<div class="hotExpeLeft">
				
			</div>
			
			<div class="hotExpeIn">
				<div class="hotLeft">
				  <i class="iconfont icon-icon-test"></i>
				</div>
				<div class="hotRight">
					<input type="text" name="" id="" placeholder="运动手表" />
					<div class="chahao"></div>
				</div>
			</div>
			<div class="hotExpeRight"></div>
		</div>
	</div>
	<div class="tabbar">
		<div class="tabbarCon">
		<div class="tab">
			<div>
		     <div class="tabItem">
               <router-link to="/shopping">热销推荐</router-link>
           </div>
           <div class="tabItem">

               <router-link to="/healthMana">健康管理</router-link>
           </div>
          <div class="tabItem">
               <router-link to="/equip">生活周边</router-link>
           </div>
           <!--<div class="tabItem">
               <router-link to="/experience">运动装备</router-link>
           </div>-->
           <div class="tabItem">
               <router-link to="/experience">体验套餐</router-link>
           </div>
	   </div>
			<!--<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in foodMenuList":key="index">
=======
			<swiper :options="swiperOption">
				<swiper-slide v-for="(item,index) in foodMenuList" :key="index">
>>>>>>> origin/c
					<div  class="item-title">
						<b :class="{'fruitActive': index == activeId}">{{item.foodMenuName}}</b>
					</div>
					</swiper-slide>
			 </swiper>-->
       </div>
	 
       </div> 
       <div class="watch">
       </div>
       <!--健康管理**-->
	
       <div class="health">
       	<div class="healContent">
       	 <div class="healCon">健康管理</div>
       	 <div class="healRight">
       	   <span>更多</span>
       	   <span>
       	   	<i class="iconfont icon-fanhui1"></i>
       	   </span>
       	 </div>
       	 </div>
       	<div class="conUl">
       		<ul>
       			<li>
       				<img src="../../../../static/images/jia02.png" alt="" />
       			    <div class="liCentent">
	       			    <p>防弹减脂营</p>
	       			    <p>月瘦10-30斤</p>
	       			    <p>下单即刻蜕变吧</p>
       			    </div>
       			</li>
       			<li>
       				<img src="../../../../static/images/jia01.png" alt="" />
       			    <div class="liCentent allow">
	       			    <p>防弹控糖营</p>
	       			    <p>一个月内减针</p>
	       			    <p id="liTwo">下单即刻控糖吧</p>
       			    </div>
       			</li>
       			<li>
       				<img src="../../../../static/images/jia03.png" alt="" />
       			    <div class="liCentent">
       			    <p>防弹降压营</p>
       			    <p>一个月内减药</p>
       			    <p>下单即刻降压吧</p>
       			     </div>
       			</li>
       			<li>
       				<img src="../../../../static/images/jia04.png" alt="" />
       			 <div class="liCentent allow">
       			    <p>防弹降压营</p>
       			    <p>一个月内减药</p>
       			    <p id="lowering">下单即刻降脂吧</p>
       			 </div>
       			</li>
       		</ul>
       	</div>
       	<!--拼团**-->
       <div class="assemble">
       	   <div class="assLeft">拼团</div>
       	   <div class="assRight">
       	   	<span>更多</span>
       	   	<span>
       	   		<i class="iconfont icon-fanhui1"></i>
       	   	</span>
       	   </div>
       </div>
       </div>
       
	</div>
     <foot-tabbar></foot-tabbar>
    </div>
</template>
<script>
    import {
        InfiniteScroll
    } from 'mint-ui';
    import FootTabbar from '../../foorterGuid/footerGuild'
    import {get
    } from '../../../api/fetch.js'
    export default {
        components: {
            FootTabbar
        },
        data() {
            return {
                swiperOption: {
                    spaceBetween: 10,
                    freeMode: true,
                    setWrapperSize: false,
                    slidesPerView: 5,
                },
                activeId: 0,
                foodMenuList: []
            }
        },
        created() {
            get('/health-web/sys/hfmfoodmenu/list', {
                limit: this.limit,
                currPage: this.currPage
            }).then((res) => {
                if (res.code == 0) {
                    this.foodMenuList = res.page.list;
                    console.log(this.foodMenuList)
                }
            })
        }
    }
</script>
<style lang="" scoped>
    @import '../../../assets/watchMove/watchMove.css';
    .shopCon {
        position: absolute;
        background: #fff;
        width: 100%;
        height: 100%;
        top: 0;
        bottom: 0;
        z-index: 999;
    }
    
    .tabbar {
        width: 100%;
        height: auto;
        margin-top: .9rem;
    }
    
    .exper {
        width: 100%;
        position: fixed;
        z-index: 99;
        /*top: .15rem;*/
        padding: 5px 0;
        right: 0;
        background: #fff;
        left: 0;
    }
    
    .hotExpe:after {
        clear: both;
        content: '';
        display: block;
        width: 0;
        height: 0;
        visibility: hidden;
    }
    
    .hotExpe {
        width: 95%;
        height: auto;
        zoom: 1;
        margin: auto;
    }
    
    .hotExpeLeft {
        float: left;
        background: url(../../../../static/images/sousuoR.png) no-repeat center;
        background-size: 100% 100%;
        width: 7%;
        height: .43rem;
        margin-right: .2rem;
        margin-top: .1rem;
    }
    
    .hotExpeIn {
        width: 77%;
        height: .63rem;
        float: left;
        text-align: left;
        background: #f2f2f2;
        padding-left: .2rem;
        box-sizing: border-box;
    }
    
    .hotExpeIn input {
        width: 100%;
        outline: none;
        height: .63rem;
        background: none;
        font-size: .24rem;
        color: #333333;
        padding-left: .2rem;
        box-sizing: border-box;
        line-height: .63rem;
    }
    
    .hotExpeRight {
        width: 7%;
        height: .37rem;
        background: url(../../../../static/images/gouwu.png) no-repeat center;
        background-size: 100% 100%;
        float: right;
        margin-top: .1rem;
        margin-right: .1rem;
    }
    
    .hotLeft {
        float: left;
        margin-top: .15rem;
        width: 6%;
    }
    
    .hotRight {
        float: left;
        width: 94%;
        height: .63rem;
        position: relative;
    }
    
    .chahao {
        width: .37rem;
        height: .37rem;
        background: url(../../../../static/images/chahao.png) no-repeat center;
        background-size: 100% 100%;
        position: absolute;
        right: .15rem;
        top: .15rem;
    }
    
    .contents {
        width: 100%;
        height: auto;
        line-height: 1.05rem;
        color: #333333;
        font-size: .4rem;
        text-align: left;
        padding-left: .3rem;
        box-sizing: border-box;
    }
    
    .contents span:nth-of-type(2) {
        margin-left: .2rem;
        display: inline-block;
    }
    
    .conSpan {
        width: .41rem;
        height: .33rem;
        background: url(../../../../static/images/fanhui.png) no-repeat center;
        background-size: 100% 100%;
        display: inline-block;
    }
    
    .tab {
        height: .92rem;
        line-height: .92rem;
        background: #fff;
        width: 91%;
        height: 100%;
        background: #fff;
        margin: auto;
    }
    
    .tabItem {
        float: left;
        width: 20%;
        text-align: center;
        font-size: .28rem;
        color: rgb(77, 85, 93);
    }
    
    a {
        display: block;
        position: relative;
    }
    
    .router-link-active {
        color: #ff5e3a;
    }
    
    .router-link-active::after {
        content: '';
        position: absolute;
        left: 50%;
        bottom: .02rem;
        width: 1.25rem;
        height: .06rem;
        transform: translateX(-50%);
        background: #ff5e3a;
    }
    
    .item-title {
        width: 100%;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        display: inline-block;
        height: 45px;
        line-height: 45px;
        overflow: hidden;
        text-align: center;
    }
    
    .fruitActive:after {
        position: absolute;
        content: '';
        display: inline-block;
        width: 100%;
        height: 40px;
        top: 0;
        left: 0;
        border-bottom: 2px solid #FF5E3A;
    }
</style>