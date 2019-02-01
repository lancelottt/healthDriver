<template>
	<div id="wxLogin">
		<img src="../../../static/img/computer_01.png"/>
		<el-button type="danger" round @click="handleNext()"><i class="iconfont icon-weixin"></i>微信账号登录</el-button>
		<span class="iconfont icon-cha"></span>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			handleNext(){
				this.$router.push('/invitation')
			}
		}
	}
</script>

<style scoped="scoped">
<<<<<<< HEAD
=======
	@import '../../assets/common/scss/common.css';
>>>>>>> origin/wqy
	@import '../../assets/login/login/login.css';
</style>