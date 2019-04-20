<template>
	<div>
		<label for="zxc">nan<input id="zxc" type="checkbox" value="nan" v-model="genderBox" /></label>
		<label for="xcv">sda<input id="xcv" type="checkbox" value="asd" v-model="genderBox"/></label>
		<label for="cvb">qwe<input id="cvb" type="checkbox" value="qwe" v-model="genderBox"/></label>
		
		
		
		<div>{{this.genderBox}}</div>
	</div>
</template>
<script type="text/javascript">
	export default{
		data(){
			return{
				genderBox:[]
			}
		}
	}
</script>
<style type="text/css">
	label{
		width: 2rem;
		
		height: 2rem;
		background: yellow;
	}
	input{
		display: none;
	}
	#wechatloginTest {
		width: 100%;
		height: 100%;
	}
	
	#wechatloginTest>p {
		display: block;
		width: 3rem;
		height: 3rem;
		background: pink;
		border-radius: 50%;
	}
</style>