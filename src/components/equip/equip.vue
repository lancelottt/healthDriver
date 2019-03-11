<template>
	<div class="equip">
		<Equip-Header title="健康设备"></Equip-Header>
		<div class="equipMain">
			<div class="upper">
			   <span v-for="(list,index) in PartsUpper" class="list" :class="{active:index===partsIndex}" :key="index" @click="btn(index)" >{{list.name}}</span>
			</div>
			<div class="lower">
				<div class="lowerList" v-for="(list,index) in lowerList" :key="index" @click="handLower(list.id)">
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
				</div>
        </div>
		</div>
		
		
	</div>
</template>

<script>
import EquipHeader from './commentHeader';
export default {
	data () {
		return {
			partsIndex:0,
			PartsUpper:[
			   {
			   	name:'全部'
			   },
			   {
			   	name:'体脂秤'
			   },
			   {
			   	name:'血压计'
			   },
			   {
			   	name:'血糖仪'
			   },
			   {
			   	name:'血氧仪'
			   }
			],
			lowerList:[
			  {
			  	id:0,
			  	images:'../../../static/images/jiankang01.png',
			  	name:'沃莱Mini智能体脂秤',
			  	dataWenzi:'瘦身路上8大数据持续监测',
			  	datashu:'¥ 82.50',
			  	dataQi:'11650',
			  	duction:'¥ 82.50',
			  	volume:'2809'
			  },
			  {
			  	id:1,
			  	images:'../../../static/images/jiankang02.png',
			  	name:'沃莱Mini智能体脂秤',
			  	dataWenzi:'瘦身路上8大数据持续监测',
			  	datashu:'¥ 82.50',
			  	dataQi:'11650',
			  	duction:'¥ 82.50',
			  	volume:'2809'
			  },
			  {
			  	id:2,
			  	images:'../../../static/images/jiankang03.png',
			  	name:'沃莱Mini智能体脂秤',
			  	dataWenzi:'瘦身路上8大数据持续监测',
			  	datashu:'¥ 82.50',
			  	dataQi:'11650',
			  	duction:'¥ 82.50',
			  	volume:'2809'
			  	
			  },
			   {
			   	id:3,
			  	images:'../../../static/images/jiankang04.png',
			  	name:'沃莱Mini智能体脂秤',
			  	dataWenzi:'瘦身路上8大数据持续监测',
			  	datashu:'¥ 82.50',
			  	dataQi:'11650',
			  	duction:'¥ 82.50',
			  	volume:'2809'
			  },
			   {
			   	id:4,
			  	images:'../../../static/images/jiankang01.png',
			  	name:'沃莱Mini智能体脂秤',
			  	dataWenzi:'瘦身路上8大数据持续监测',
			  	datashu:'¥ 82.50',
			  	dataQi:'11650',
			  	duction:'¥ 82.50',
			  	volume:'2809'
			  	
			  },
			   {
			   	id:5,
			  	images:'../../../static/images/jiankang02.png',
			  	name:'沃莱Mini智能体脂秤',
			  	dataWenzi:'瘦身路上8大数据持续监测',
			  	datashu:'¥ 82.50',
			  	dataQi:'11650',
			  	duction:'¥ 82.50',
			  	volume:'2809'
			  }
			]
			
		}
	},
	methods :{
		 btn(index) {
//		 	alert(index)
	      var _this = this;
	      _this.partsIndex = index;
//	      _this.lowerList = _this.partsIndex;
        },
        handLower(id) {
         this.$router.push({
	        path: "equipSport",
	//      query: { id: id }
	         });
        }
	},
	components:{
		EquipHeader
	}
}
</script>

<style scoped="scoped">
@import '../../assets/equip/equip.css';
</style>