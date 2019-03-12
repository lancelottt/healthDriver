<template>
	<div class="detaildsCon">
	 <div class="footCon">
	 	<div class="footLeft" @click="handFootLeft()">
	 		<div class="footImg"></div>
	 	</div>
		 <div class="tab">
	           <div class="tabItem">
	               <router-link to="/equipSport">商品</router-link>
	           </div>
	           <div class="tabItem">
	               <router-link to="/equipEvaluate">评论</router-link>
	           </div>
	          <div class="tabItem">
	               <router-link to="/modityDetails">详情</router-link>
	           </div>
	       </div>
	       <div class="gootRi">
	       	  <div class="gootRiImg"></div>
	       </div>
       </div>
        <router-view/> 
	 <DetailsFoot/>
	</div>
</template>

<script>
import DetailsFoot from './details/detailsFoot'
	export default{
		components:{
			DetailsFoot
		},
		data () {
			return{
				
			}
		},
		methods:{
			handFootLeft () {
				this.$router.go(-1);
			}
		}
	}
</script>
<style scoped="scoped">
.detaildsCon{
	width:100%;
	height: auto;
	padding-bottom: 2.15rem;
	background: #eee;
	box-sizing: border-box;
}
.footCon{
    width: 100%;
    height: .96rem;
    border-bottom: .07rem solid #f2f2f2;
    box-sizing: border-box;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
    background: #fff;
}
.footLeft{
	float: left;
	width:10%;
	height: .92rem;
}
.footImg{
	width:.41rem;
	height: .33rem;
	background: url(../../../static/images/fanhui.png) no-repeat center;
	background-size: 100% 100%;
	margin: auto;
	margin-top: .30rem;
}
.gootRi{
	float: right;
	width:10%;
	height: .92rem;
}
.gootRiImg{
	width:.34rem;
	height: .33rem;
	background: url(../../../static/images/commod05.png) no-repeat center;
	background-size: 100% 100%;
	margin: auto;
	margin-top: .30rem;
}
.tab{
	width: 80%;
    float: left;
    height: .90rem;
    line-height: .90rem;
    background: #fff;
    box-sizing: border-box;
}
.tabItem{
    float: left;
    width: 33%;
    text-align: center;
    font-size: .28rem;
    color:#333333;
}
a{
    display: block;
    color: #333333;
    font-size: .28rem;
    position: relative;
}
.router-link-active{
    color: #ff5e3a;
}
.router-link-active::after{
    content: '';
    position: absolute;
    left:50%;
    bottom: -.04rem;
    width: 1.25rem;
    height: .055rem;
    transform: translateX(-50%);
    background: #ff5e3a;
}
	
</style>