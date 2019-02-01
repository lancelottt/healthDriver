<template>
	<div id="app">
		<!--<div v-show="show">
			<tab-com></tab-com>
		</div>-->
		<!--    <img src="./assets/logo.png">-->
		<router-view/>
	</div>
</template>

<script>
//	import tab from '@/components/home/Home'
	import Vuex from "vuex"

	export default {
//		components: {
//			'tab-com': tab
//		},
		name: 'App',
		methods:{
//			beforeDestroyed(){
//				console.log(show)
//			}
		},
		computed: {
//			...Vuex.mapState({
//				show: state => state.show
//			})
		}
	}
</script>

<style>
	@import 'assets/common/scss/common.css';
	html {
		height: 100%;
		width: 100%;
	}
	
	#app {
		height: 100%;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	
	.page {
		/*公共样式:上面的电池栏、下面的切换栏*/
		/*  padding-top: .4rem;
*/
		padding-bottom: .96rem;
	}
	
	
</style>
