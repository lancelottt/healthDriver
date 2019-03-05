<template>
	<div>
		<div class="pressure">
			<div class="preTop">
				<div class="preTopLeft" @click="handPreTopLeft()">
					
				</div>
				<div class="preTopCenter">
					血糖
				</div>
			</div>
			<div class="measure">
				<div class="meaRight">
					智能测量
				</div>
			</div>
		</div>
		<!--记录血压**-->
		<div>
		<div class="record">
		</div>
		<div class="recordBlood">记录血糖</div>
		</div>
		<!--用药和提醒**-->
		<div class="rugUse">
			<div class="rugUseContent">
				<ul>
					<li>
						<div class="medica"></div>
						<p>用药</p>
					</li>
					<li>
						<div class="remind"></div>
						<p>提醒</p>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
	data () {
		      return {
		       
		      }
    },
    methods:{
    	handPreTopLeft () {
    		this.$router.back()
    	}
    }
	}
</script>

<style>
@import '../../assets/device/sugar.css';
</style>