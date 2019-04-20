<template>
	<div class="ecperCon">
		<Experience-Header></Experience-Header>
		<!--全部，销量，价格**-->
		<div class="whole">
		    <!--<div class="upperList">
			   <span v-for="(list,index) in PartsUpper" class="list" :class="{active:index===partsIndex}" :key="index" @click="btn(index)" >{{list.name}}</span>
			</div>-->
			<!--<div class="lower">-->
				<div class="lowContent">
					<div class="lowMar">
					   <div class="lowerList">
					   	  <img src="../../../static/images/expe01.png" alt="" />
					      <div class="baojia">[899价保双12热销爆款]</div>
					      <p> 125项青中老全面体检</p>
					      <div class="jianKa">
					      	<div> 12项肿瘤筛查</div>
					      	<div> 脑TCD</div>
					      	<div> 血流变</div>
					      </div>
					      <p>¥ 899</p>
					   </div>
					   <div class="lowerList" @click="handLower()">
					   	  <img src="../../../static/images/expe02.png" alt="" />
					        <div class="baojia">[899价保双12热销爆款]</div>
					      <p> 125项青中老全面体检</p>
					      <div class="jianKa"> 
					      	<div> 12项肿瘤筛查</div>
					      	<div> 脑TCD</div>
					      	<div> 血流变</div>
					      </div>
					      <p>¥ 899</p>
					   </div>
					   <div class="lowerList">
					   	  <img src="../../../static/images/expe03.png" alt="" />
					        <div class="baojia">[899价保双12热销爆款]</div>
					      <p> 125项青中老全面体检</p>
					      <div class="jianKa">
					      	<div> 12项肿瘤筛查</div>
					      	<div> 脑TCD</div>
					      	<div> 血流变</div>
					      </div>
					      <p>¥ 899</p>
					   </div>
					   <div class="lowerList">
					   	  <img src="../../../static/images/expe04.png" alt="" />
					       <div class="baojia">[899价保双12热销爆款]</div>
					      <p> 125项青中老全面体检</p>
					      <div class="jianKa">
					      	<div> 12项肿瘤筛查</div>
					      	<div> 脑TCD</div>
					      	<div> 血流变</div>
					      </div>
					      <p>¥ 899</p>
					   </div>
				   </div>
			   </div>
				<!--<div class="lowerList" v-for="(list,index) in lowerList" :key="index">
					 <img :src="list.images">
					 <p>{{list.name}}</p>
					 <p>{{list.dataWenzi}}</p>
					 <p>
					 	<span class="datashu">{{list.datashu}}</span>
					 	+
					 	<span class="dataQi">{{list.dataQi}}</span>
					 </p>
					 <p>
					 	抵扣前：
					 	<span>{{list.duction}}</span>
					 	<span>销量：</span>
					 	<span>{{list.volume}}</span>
					 </p>
				</div>-->
           <!--</div>-->
		</div>
	</div>
</template>

<script>
import ExperienceHeader from './experienceHeader'
   export default {
   	  data () {
   	  	return {
   	  		partsIndex:0,
			PartsUpper:[
			   {
			   	name:'全部'
			   },
			   {
			   	name:'数量'
			   },
			   {
			   	name:'价格'
			   }
			]
   	  	}
   	  },
   	  components:{
   	  	ExperienceHeader
   	  },
   	  	methods :{
		 btn(index) {
//		 	alert(index)
	      var _this = this;
	      _this.partsIndex = index;
//	      _this.lowerList = _this.partsIndex;
        },
        handLower () {
        	this.$router.push({name:'packageDetails'})
        }
	},
   }
</script>

<style scoped="scoped">
@import '../../assets/experience/experience.css';	
</style>