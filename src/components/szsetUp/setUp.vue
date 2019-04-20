<template>
	<div class="setUp">
		<div class="setUpTop">
			<router-link to="/me">
				<div class="setUpLeft"></div>
			</router-link>
			<div class="setUpRight">设置</div>
		</div>
		<!--我的账号，地址管理**-->
		<!-- <div class="number"> -->
			<!--我的账号**-->
			<!-- <div class="containerCon">
				<div class="containLeft">
					我的账号
				</div>
				<div class="containRight">
					
				</div>
			</div> -->
			<!--代管理**-->
			<!-- <div class="dealerShip">
				<div class="dealerShipLeft">地址管理</div>
				<div class="dealerShipRight">
					<span>待完善</span>
					<span></span>
				</div>
			</div> -->
		<!-- </div> -->
		<!--权限管理，缓存管理**-->
		<!-- <div class="jurisdic">
			<div class="jurContent" @click="jurContent()">
				<div class="jurLeft">权限设置</div>
				<div class="jurRight"></div>
			</div> -->
			<!--<div class="jurContent">
				<div class="jurLeft">通用设置</div>
				<div class="jurRight"></div>
			</div>-->
			<!-- <div class="cache">
				<div class="jurLeft">缓存管理</div>
				<div class="jurRight"></div>
			</div>
		</div> -->
		<!--给我评分**-->
		<!-- <div class="score">
			<div class="jurContent">
				<div class="jurLeft">给我评分</div>
				<div class="jurRight"></div>
			</div>
			<div class="jurContent">
				<div class="jurLeft">语言定制</div>
				<div class="jurRight"></div>
			</div>
			<div class="jurContent">
				<div class="jurLeft">帮助中心</div>
				<div class="jurRight"></div>
			</div>
			<div class="jurContent">
				<div class="jurLeft">意见反馈</div>
				<div class="jurRight"></div>
			</div>
			<div class="jurContent munity">
				<div class="jurLeft">社区规范</div>
				<div class="jurRight"></div>
			</div>
		</div> -->
		<!--关于我们**-->
		    <!-- <div class="we">
				<div class="jurLeft">关于我们</div>
				<div class="jurRight"></div>
			</div>  -->
			<div class="weTo" @click="weTo()">
				<div class="jurLeft">退出</div>
				<div class="jurRight"></div>
			</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				
			}
		},
		methods:{
			jurContent(){
				this.$router.push({
					name:'settings'
				})
			},
			weTo(){
				this.$router.push({
					name:'setupTong'
				})
			}
		}
	}
	
</script>

<style>
@import '../../assets/setUp/setUp.css';
.weTo{
	border-top:1px solid #F2F2F2;
	box-sizing: border-box;
	width: 100%;
    height: 1.03rem;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    padding: .3rem;
    line-height: .5rem;
    background: #fff;
} 
</style>