<template>
	<div id="count">
		<div class="count-con">
			<div class="count-img">
				<!--<img src="../../../static/img/man健康导航系统的副本_03.png"/>-->
			</div>
			<div class="count-slogon">
				<span>“无论怎么样，<br />
				一个人借故堕落总是不值得原谅的，
				越是没有人爱，<br />
				越要</span>
				<i>爱自己</i>
				<b>”</b>
			</div>
			<div class="count-detail">
				<div>
					<img src="../../../static/img/count5.png"/>
					<h1>0</h1>
					<h2>分钟</h2>
					<h3>完成训练</h3>
				</div>
				<div>
					<img src="../../../static/img/count3.png"/>
					<h1>0</h1>
					<h2>分钟</h2>
					<h3>完成训练</h3>
				</div>
				<div>
					<img src="../../../static/img/count.png"/>
					<h1>0</h1>
					<h2>分钟</h2>
					<h3>完成训练</h3>
				</div>
			</div>
			<div class="count-date">
				<span>12.27</span>
				<i>星期二</i>
			</div>
			<div class="count-icon">
				<img src="../../../static/img/count2.png"/>
				<img src="../../../static/img/count3.png" @click="handleCountBack()"/>
				<img src="../../../static/img/count1.png"/>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		data(){
			return{
				
				
			}
		},
		methods:{
			handleCountBack(){
				this.$router.push('/healthPlan/healthPlan')
			}
		}
	}
</script>

<style>
	@import '../../assets/common/scss/common.css';
	@import '../../assets/healthPlan/count/count.css';
</style>