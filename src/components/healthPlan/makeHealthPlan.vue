<template>
	<div id="makeHealthPlan">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>健康生活方式管理方案</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="makeHealthPlan-main">
			<div class="makeHealthPlanBanner">
				<swiper :options="swiperOption">
					<swiper-slide v-for="(item,index) in makeHealthPlanBanner" :key='index'>
						<div>
							<img :src=item.src />
							<b>{{item.content1}}</b>
							<i>{{item.content2}}</i>
						</div>
					</swiper-slide>
				</swiper>
			</div>
			<div class="healthManagement-title">
				尊享的免费服务
			</div>
			<div class="healthManagement-free">
					<div class="healthManagement-free-con" v-for="(item,index) in freeContent" :key="index">
						<router-link :to='item.path'>
						<img :src="item.src" />
						<h2>{{item.content1}}</h2>
						<span>{{item.content2}}</span>
						</router-link>
					</div>
			</div>
			<div class="healthManagement-title">
				尊享的免费服务
			</div>
			<div class="healthManagement-pay">
				<div class="healthManagement-pay-con" v-for="(item,index) in costContent" :key="index">
					
					<div><img :src="item.src" /></div>
					<h2>{{item.content1}}</h2>
					<router-link :to="item.path"><span>{{item.content2}}</span></router-link>
				</div>
			</div>
			<div class="makeHealthPlan-skip()" @click="handleHealthManagementClick()" style="margin-top: 1rem;color: #6C6C6C;">
				跳过
			</div>
			<img src="../../../static/img/qwe/aplle.png"/>
			<img src="../../../static/img/qwe/book.png"/>
			<img src="../../../static/img/qwe/tv.png"/>
			<img src="../../../static/img/qwe/food1.png"/>
		</section>
	</div>
</template>

<script>
	import { goAnchor, GetQueryString } from '@/utils/anchor.js';

	export default {
		data() {
			return {
				makeHealthPlanBanner: [{
						src: 'http://lorempixel.com/400/245/food',
						content1: '健康生活方式',
						content2: '科学养成',
						
					},
					{
						src: 'http://lorempixel.com/400/245/food',
						content1: '666',
						content2: 'what the hell?',
						
					},
					{
						src: 'http://lorempixel.com/400/245/food',
						content1: 'how dare you!',
						content2: '面对疾风吧!',
						
					},
				],
				freeContent: [{
						src: '../../../static/img/qwe/tv.png',
						content1: '管理方案',
						content2: '健康生活方式养成',
						path: '/healthyZ'
					},
					{
						src: '../../../static/img/qwe/aplle.png',
						content1: '营养搭配',
						content2: '清清淡淡才是真',
						path: '/healthMarket/playFood'
					},
					{
						src: '../../../static/img/qwe/book.png',
						content1: '健康微课',
						content2: '短视频课程教学',
						path: '/self'
					}
				],
				costContent: [{
						src: '../../../static/img/qwe/food1.png',
						content1: '健康生活方式养成',
						content2: '学习',
						path:'/shopping'
					},
					{
						src: '../../../static/img/qwe/food2.png',
						content1: '营养搭配均衡美味',
						content2: '学习',
						path:'/healthMarket/playFood/kwnoFood'
					},
					{
						src: '../../../static/img/qwe/food3.png',
						content1: '健康微课学堂',
						content2: '学习',
						path:'/mymotion/index'
					}
				],
				swiperOption: {
					autoPlay: true,
					loop: true
				},
			};
		},

		mounted() {
			let maodian = this.GetQueryString('anchor'); //进入页面，如果带有锚点参数，则跳转至锚点地方，参数值就是id名
			if(maodian) {
				console.log(maodian);
				this.goAnchor('#' + maodian);
			}
		},
		methods: {
			goAnchor,
			GetQueryString,
			handleBack() {
				this.$router.back()
			},
			handleHealthManagementClick() {
				this.$router.push('/healthPlan/healthPlan')
			},
		}
	};
</script>

<style>
	@import '../../assets/healthPlan/makeHealthPlan/makeHealthPlan.css';
</style>