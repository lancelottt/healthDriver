<template>
	<div>
		<div class="phoneHeader">
			<div class="phontCon">
				<router-link to="/me">
					<div class="phontLeft">
						<img src="../../../../static/images/fanhui.png" />
					</div>
				</router-link>
				<div class="phontCenter">
					编辑个人信息
				</div>
				<div class="phontRi">
					<div class="phonQu" @click="phonQu()">保存</div>
				</div>
			</div>
		</div>
		<!--头像**-->
		<div class="touxiang">
			<div class="touContent">
				<div class="head">
					<img :src="user.icon" />
				</div>
				<div class="inputZong">
					<div class="inputLeft">
						<div>{{user.username}}</div>
					</div>
					<!--<div class="inputRi">
		    			<img src="../../../../static/images/editPhone.png"/>
		    		</div>-->
				</div>
			</div>
		</div>
		<!--编辑资料**-->
		<div class="editZ">
			<div class="editMate">基本资料</div>
			<div class="editBiaodan">
				<div class="page-field">
					<div class="page-part">
						<mt-field label="昵称" placeholder="请输入昵称" v-model="user.username"></mt-field>
						<mt-field label="性别" placeholder="请输入性别" v-model="user.gender"></mt-field>
						<!--<mt-field label="出生日期" placeholder="出生日期" type="date" v-model="user.birthday"></mt-field>-->
						<mt-field label="身高" placeholder="请输入身高" v-model="user.stature"></mt-field>
						<mt-field label="当前体重" placeholder="请输入当前体重" v-model="user.currWeight"></mt-field>
						<mt-field label="目标体重" placeholder="请输入目标体重" v-model="user.targetWeight"></mt-field>
					</div>
				</div>
			</div>
			<div class="birdy">
				<div class="pageZ">出生日期</div>
				<div class="page-datetime" style="float: right;width:70%;">
					<div class="page-datetime-wrapper">
						<mt-button @click.native="open('picker')" size="large" class="inputVal">
							<input type="text" name="" id="" value="" v-model="this.handFang(value)" />
						</mt-button>
					</div>
					<mt-datetime-picker ref="picker" type="date" v-model="value" year-format="{value}" month-format="{value}" date-format="{value}" @confirm="handleChange">
					</mt-datetime-picker>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import { get, postJson } from '../../../api/fetch.js';
	import { Toast } from 'mint-ui';
	import { Indicator } from 'mint-ui';
	export default {
		data() {
			return {
				user: {
					username: '',
					gender: '',
					birthday: '',
					stature: '',
					currWeight: '',
					targetWeight: '',
					choosetime:''
				},
				value: null,
			}
		},
		methods: {
			open(picker) {
				console.log(picker);
				this.$refs[picker].open();
			},
			handleChange(value) {
				this.choosetime = this.handFang(value) 
			},
			update() {
				const params = {
					id: this.$route.query.id
				}
				get('/health-web/modules/umsmember/getUser', params).then((res) => {
					if(res.code == 0) {
						if(res.user.gender == 0) {
							res.user.gender = '未知'
						} else if(res.user.gender == 1) {
							res.user.gender = '男'
						} else {
							res.user.gender = '女'
						}
						this.user.birthday = this.handFang(res.user.birthday)
						this.value = this.user.birthday 
						this.user = res.user
					}
				})
			},
			handFang(t) {
				var _time = new Date(t);
				var year = _time.getFullYear(); //2017
				var month = (_time.getMonth()+1 < 10 ? '0'+(_time.getMonth()+1) : _time.getMonth()+1) //7
				var day = (_time.getDate()+1 < 10 ? '0'+(_time.getDate()+1) : _time.getDate()+1) //10
				return year + "-" + month + "-" + day
			},
			phonQu() {
				Indicator.open();
				let gender = 0
				if (this.user.gender === '男') {
					  gender = 1
				}else if(this.user.gender === '女'){
					  gender = 2
				}else{
					 gender = 0
				}
				const params = {
					id: this.$route.query.id,
					username: this.user.username,
					gender:gender,
					birthday: this.choosetime,
					stature: this.user.stature,
					currWeight: this.user.currWeight,
					targetWeight: this.user.targetWeight
				}
				console.log(params)
				postJson('/health-web/modules/umsmember/update', params).then((res) => {
					if ( res.code == 0 ) {
						 Indicator.close();
 							this.$message({
            					message:'修改成功',
            					type:'success'
            				})
					} else{
						 Indicator.close();
						 this.$message({
        					message:res.msg,
        					type:'success'
        				 })
					}
				})
			}
		},
		created() {
			this.update()
		}
	}
</script>
<style scoped="scoped">
	@import '../../../assets/me/phone.css';
	.pageZ {
		width: 27%;
		float: left;
		margin-top: .3rem;
		font-size: .28rem;
		margin-left: .2rem;
	}
	
	.birdy {
		width: 100%;
		height: .6rem;
	}
	
	.inputLeft {
		float: left;
		width: 50%;
		margin-top: .25rem;
		margin-left: .4rem;
	}
</style>