<template>
	<div id="iocloud">
		<p v-model="gop">111</p>
		<router-view/>
	</div>
	
</template>

<script>
	export default{
		data(){
			return{
				gop:'6666'
			}
		},
		beforeCreate(){
			console.log(this.gop)
		}
		
	}
</script>

<style>
</style>