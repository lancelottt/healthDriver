<template>
	<div id="kwnoFood">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<div class="kwnoFoodTabBar-out">
			<div class="kwnoFoodTabBar" v-for="(item,index) in knowFoodLinks">
				<div :class="index">
					<router-link :to="item.src" :class="index">{{item.name}}</router-link>
				</div>

			</div>
		</div>
		<router-view></router-view>
	</div>
</template>
<script type="text/javascript">
	export default {
		data() {
			return {
				knowFoodLinks: [{
					src: "/KwnoFood/carbon",
					name:"碳水"
				}, {
					src: "/KwnoFood/eggWhite",
					name:"蛋白"
				}, {
					src: "/KwnoFood/vegetable",
					name:"蔬菜"
				}, {
					src: "/KwnoFood/fruit",
					name:"水果"
				}, {
					src: "/KwnoFood/others",
					name:"其他"
				}]
			}
		},
		components: {

		},
		methods: {
			handleBack() {
				this.$router.back()
			},
		},

	}
</script>
<style type="text/css">
	@import '../../assets/common/scss/common.css';
	@import '../../assets/healthMarket/playFood/kwnoFood/kwnoFood.css';
</style>