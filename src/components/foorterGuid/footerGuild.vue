<template>
	<div>
		<div class="footer_guide">
			<a href="javascript:;" class="guide_item cals" :class="{on:'/self'===$route.path}" @click="goTo('/self')">
				<span class="item_icon">
            		<i class="iconfont icon-jianshen-zilv"></i><!--heart-broken-->
        		</span>
				<span>自律</span>
			</a>
			<a href="javascript:;" class="guide_item" :class="{on:'/healthyZ'===$route.path}" @click="goTo('/healthyZ')">
				<span class="item_icon">
            		<i class="iconfont  icon-2jiankangzhishi"></i><!--heart-broken-->
        		</span>
				<span>健康</span>
			</a>
			<a href="javascript:;" :style="objCol" class="guide_item" :class="{on:'/shopping'===$route.path}" @click="goTo('/shopping')">
				<span class="item_icon">
                	<i class="iconfont  icon-shangcheng1" :style="styleObj"></i><!--icon-waimai-->
            	</span>
				<span class="shopping">商城</span>
			</a>
			<a href="javascript:;" :style="objCol" class="guide_item" :class="{on:'/dataSj'===$route.path}" @click="goTo('/dataSj')">
				<span class="item_icon">
            		<i class="iconfont  icon-shuju" :style="styleObj"></i><!--icon-waimai-->
       			</span>
				<span class="shopping">数据</span>
			</a>
			<a href="javascript:;" class="guide_item" :class="{on:'/me'===$route.path}" @click="goTo('/me')">
				<span class="item_icon">
            		<i class="iconfont icon-wode"></i>
        		</span>
				<span>我的</span>
			</a>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				styleObj: {
					fontSize: ".42rem",
					marginTop: ".15rem"
				},
				objCol: {
					marginTop: ".2rem"
				},
			}
		},
		methods: {
			goTo(path) {
				this.$router.replace(path) //跳转路由
			}
		},
	}
</script>
<style scoped>
	.footer_guide {
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: #ffffff;
		width: 100%;
		height: 1.31rem;
		display: flex;
	}
	
	.shopping {
		margin-top: .15rem;
	}
	
	.guide_item {
		display: flex;
		flex: 1;
		margin-top: .1rem;
		text-align: center;
		flex-direction: column;
		align-items: center;
		color: #999999;
	}
	
	.on {
		color: #ff5e3a;
	}
	
	span {
		font-size: .24rem;
		margin-top: .02rem;
		margin-bottom: .02rem;
	}
	
	.iconfont {
		font-size: .64rem;
	}
	
	.img {
		width: .44rem;
		height: .58rem;
	}
	
	.cals {
		margin-top: .15rem;
	}
</style>