<template>
	<div id="kwnoFood">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<section class="kwnoFood-main">
			111
		</section>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {}
		},
		methods: {
			handleBack() {
				this.$router.back()
			}
		}
	}
</script>
<style type="text/css">
	@import '../../assets/common/scss/common.css';
	@import '../../assets/healthMarket/playFood/kwnoFood/kwnoFood.css';
</style>