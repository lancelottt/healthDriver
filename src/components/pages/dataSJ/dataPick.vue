<template>
	<div>
		<div class="select" @click="toggleSelect">
			{{ this.selectList[nowIndex].name }}
		</div>
		<div class="select_ul" v-if="isShow">
			<ul>
				<li v-for="(item,index) in selectList" @click="changeSelect(index)">{{ item.name }}</li>
			</ul>
		</div>
		<mt-datetime-picker
		    ref="picker"
		    type="date"
		    year-format="{value} "
		    month-format="{value} "
		    day-format="{value} "
		    @confirm="handleConfirm"
		    v-model="pickerValue"
		    >
  		</mt-datetime-picker>
	</div>
</template>

<script>
	import { DatetimePicker } from 'mint-ui'
	export default {
		data (){
			return {
				pickerValue:null,
				chooseName:'按月查',
				isShow:false,
				nowIndex:1,
				selectList:[
					{
						id:'years',
						name:'按年查'
					},
					{
						id:'months',
						name:'按月查'
					}
					
				]
			}
		},
		methods :{
			changeSelect (i) {
				this.nowIndex = i
				this.chooseName = this.selectList[i].name
				this.isShow = false
				if (i === 0) {
					$('.picker-slot.picker-slot-center')[1].style.display='none'
					$('.picker-slot.picker-slot-center')[2].style.display='none'
				}else if(i === 1){
					$('.picker-slot.picker-slot-center')[1].style.display='block'
					$('.picker-slot.picker-slot-center')[2].style.display='none'
				}
				   this.$refs.picker.open()
			},
			toggleSelect () {
				this.isShow = !this.isShow
			},
			handleConfirm (){
				let selectsDate = {}
				let aaa = this.formatDate(this.pickerValue)
				let year = this.spliceDate(aaa)
				let month = this.spliceMonthDate(aaa)
				if( this.chooseName.indexOf("按年查") >=0){
					selectsDate.startCreateTime = year +'-01-01',
					selectsDate.endCreateTime = year +'-12-31',
					selectsDate.orderKey = 'days'
				}else if(this.chooseName.indexOf("按月查") >=0){
					selectsDate.startCreateTime = month+'-01',
					selectsDate.endCreateTime =  month+'-31',
					selectsDate.orderKey = 'days'
				}
				this.$emit('aaaa',selectsDate)
			},
			formatDate(date) {
				 let y = date.getFullYear()
				 let m = date.getMonth() + 1
				 m = m < 10 ? '0' + m : m
				 let d = date.getDate()
				 d = d < 10 ? ('0' + d) : d
				 return y + '-' + m + '-' + d
			},
			spliceDate(val){
				let year = val.slice(0,4)
				return year
			},
			spliceMonthDate(val){
				let month = val.slice(0,7)
				return month
			}
		}
	}
</script>

<style scoped="scoped">
	.select{
		width:1.9rem;
		padding: .2rem 0;
		color: #4DDFA9;
		background:rgba(255,255,255,1);
		border:1px solid rgba(216,216,216,1);
		border-radius:10px;
	}
	.select_ul{
		width: 1.5rem;
		height: auto;
		position: relative;
		z-index: 9999999999;
	}
	.select_ul ul{
		width: 100%;
		height: auto;
		list-style: none;
	}
	.select_ul li{
		width:1.9rem;
		height: auto;
		padding: .2rem 0;
		background:rgba(255,255,255,1);
		border:1px solid rgba(216,216,216,1);
		/*border-radius:10px;*/
					
	}
	.mint-popup.mint-popup-bottom{
		width: 100%;
	}
</style>