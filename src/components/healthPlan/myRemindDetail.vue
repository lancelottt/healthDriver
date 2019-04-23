<template>
	<div id="">
		<div class="remindDetail">
			<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>我的提醒</span><span></span></header>
			<div class="myPlan">
				<div class="">
					<p>{{name}}</p>
				</div>
				<div class="" @click="handlerChangeTime()">
					<p>提醒时间：&nbsp;<b>{{time}}</b></p>
					<p>></p>
				</div>
				<div class="" @click="handlerChangeVoice()">
					<p>应用语音：&nbsp;<b>{{voice}}</b></p>
					<p>></p>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import Vuex from 'vuex';
	import store from '@/store/index'
	import remindStore from '@/store/remindStore'
	import { get, post } from '../../api/fetch.js'
	export default {
		data() {
			return {}
		},
		computed: {
			...Vuex.mapState({
				time: state => store.state.remindTime,
				name: state => store.state.remindName,
				voice: state => store.state.memberRemindVoiceName,
			})
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			handlerChangeTime() {
				
			}
		}
	}
</script>

<style>
	.hitCard {
		height: 100%;
	}
	
	.remindDetail header {
		z-index: 99;
		height: 0.84rem;
		position: fixed;
		top: 0;
	}
	
	.remindDetail h1 {
		margin-left: 0.3rem;
		font-size: 0.3rem;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: #333333;
		text-align: left;
	}
	
	.remindDetail h2 {
		margin: 0.28rem 0 0.28rem 0.3rem;
		text-align: left;
		font-size: 0.3rem;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: #999999;
	}
	
	.remindDetail .myPlan {
		display: flex;
		flex-direction: column;
		margin-top: 0.2rem !important;
		width: 6.88rem;
		height: 5.56rem;
		border-radius: 0.12rem;
		margin: 0 auto;
		position: relative;
	}
	
	.remindDetail .myPlan img {
		width: 100%;
		height: 100%;
	}
	
	.remindDetail .myPlan>div {
		display: flex;
		flex-direction: row;
		justify-content: space-around;
		align-items: center;
		margin: 0 auto;
		width: 80%;
		height: 1rem;
		background: #FFF6E6;
		margin-top: 0.5rem;
		border-radius: 5%;
		font-size: 0.24rem;
	}
	
	.remindDetail .myPlan>div:nth-of-type(1) {
		margin-top: 1rem;
		font-size: 0.3rem;
	}
	
	.remindDetail .myPlan>div>p>b {
		color: #999999;
	}
	/*.hitCard .myPlan .healthPlan-mask {
      width: 5.42rem;
      height: 1.71rem;
      background: #ccc;
      z-index: 10;
      position: absolute;
      top: 0.39rem;
      left: 0.69rem;
      background: rgba(29, 103, 12, 0.23); }
      .hitCard .myPlan .healthPlan-mask .mask-left {
        width: 70%;
        height: 100%;
        float: left; }
        .hitCard .myPlan .healthPlan-mask .mask-left h1 {
          margin: 0.47rem 0 0 0.29rem;
          font-size: 0.36rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fefefe; }
        .hitCard .myPlan .healthPlan-mask .mask-left h2 {
          margin: 0.17rem 0 0 0.29rem;
          font-size: 0.28rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fefefe; }
      .hitCard .myPlan .healthPlan-mask .mask-right {
        width: 30%;
        height: 100%;
        float: left;
        text-align: right; }
        .hitCard .myPlan .healthPlan-mask .mask-right span {
          display: block;
          margin: 0.5rem 0.5rem 0 0rem;
          margin-top: 0.5rem !important;
          font-size: 0.36rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fefefe; }
        .hitCard .myPlan .healthPlan-mask .mask-right i {
          display: block;
          margin: 0.17rem 0.38rem 0 0rem;
          font-size: 0.24rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fefefe; }*/
	/*# sourceMappingURL=myReminder.css.map */
</style>