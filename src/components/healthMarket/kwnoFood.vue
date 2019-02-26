<template>
	<div id="kwnoFood">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<section class="kwnoFood-main">
			<mt-navbar v-model="selected">
  <mt-tab-item id="1">option A</mt-tab-item>
  <mt-tab-item id="2">option B</mt-tab-item>
  <mt-tab-item id="3">option C</mt-tab-item>
</mt-navbar>

<!-- tab-container -->
<mt-tab-container v-model="selected">
  <mt-tab-container-item id="1">
    <mt-cell v-for="n in 10" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="2">
    <mt-cell v-for="n in 4" :title="'content ' + n" />
  </mt-tab-container-item>
  <mt-tab-container-item id="3">
    <mt-cell v-for="n in 6" :title="'content ' + n" />
  </mt-tab-container-item>
</mt-tab-container>
		</section>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{}
		},
		methods:{
			handleBack(){
				this.$router.back()
			}
		}
	}
</script>
<style type="text/css">
	@import '../../assets/common/scss/common.css';
	@import '../../assets/healthMarket/playFood/kwnoFood/kwnoFood.css';
</style>