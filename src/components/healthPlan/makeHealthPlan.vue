<template>
	<div id="makeHealthPlan">
		<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>制订你的健康计划</span><span></span></header>
		<!--iconfont icon-xiangzuojiantou-->
		<section class="makeHealthPlan-main">
			<div class="healthManagement" @click="handleHealthManagementClick()">
				<img src="../../../static/img/doc_03.png" />
				<h2>定制健康管理</h2>
				<span>
					根据您的情况，由健康管理师为您定制管理计划
				</span>
			</div>
			<div class="healthManagement">
				<img src="../../../static/img/teacher_06.png"/>
				<h2>定制专属计划</h2>
				<span>
					根据您的情况，为您详细制定瘦身计划
				</span>
			</div>
			<div class="healthManagement">
				<img src="../../../static/img/run_03.png" />
				<h2>自选瘦身计划</h2>
				<span>
					从体重管理专家的方案库中，自己选一套计划
				</span>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		data() {
			return {};
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			handleHealthManagementClick(){
				this.$router.push('/healthPlan/healthPlan')
			}
		}
	};
</script>

<style>
	@import '../../assets/healthPlan/makeHealthPlan/makeHealthPlan.css';
</style>