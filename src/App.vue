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
	
.footer_guide{
    position: fixed;
    z-index: 100;
    left:0;
    right:0;
    bottom:0;
    background-color: #ffffff;
    width:100%;
    height: 1.31rem;
    display:flex;
}
.shopping{
    margin-top: .15rem;
}
.guide_item{
    display: flex;
    flex: 1;
    margin-top: .1rem;
    text-align: center;
    flex-direction: column;
    align-items: center;   
    color:#999999;
}
.on{
    color: #ff5e3a;
}
span{
    font-size: .24rem;
    margin-top: .02rem;
    margin-bottom: .02rem;
}
.iconfont{
    font-size: .64rem;

}
.img{
    width:.44rem;
    height: .58rem;
}
.cals{
    margin-top: .15rem;
}
</style>
