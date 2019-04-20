<template>
	<div class="hadZo">
		<div class="had">
			<div>
				<div class="componentHeader-header">
					<div class="Tp" @click="handlerBack()">
						<i class="iconfont Tpi icon-jiantou-left"></i>
					</div>
					<div class="headerAmic">我的家人</div>
					<div class="headerFb">
						发布
					</div>
				</div>
			</div>
		</div>
		<!-- 好友通知** -->
		<div class="account">
			<div class="friend">
				<img src="../../../static/images/family01.png" />
			</div>
			<div class="accRi">
				好友通知
			</div>
		</div>
		<!-- 任务-爸爸妈妈** -->
		<div class="mily">
			<div class="father">
				<ul v-if=" List.length > 0">
					<li v-for="(item,index) in List" :key='index'>
						<div class="friendFaCon">
							{{ item.ausername }}
						</div>
						<div class="friendFaQu">
							<div class="confirm" @click="handConfirm(index, item.ausername,item.userFamilyRelationExamineCode)">{{confirm}}</div>
							<div class="refuse" @click="handrefuse(index, item.ausername,item.userFamilyRelationExamineCode)">{{refuse}}</div>
						</div>
					</li>
				</ul>
				<div v-else class="nopeople">无</div>
			</div>
		</div>
		<!-- 家人账号管理** -->
		<div class="account">
			<div class="accLeft"></div>
			<div class="accRi">家人账号管理</div>
		</div>
		<!-- 任务-爸爸妈妈** -->
		<div class="mily">
			<div class="father">
				<ul>
					<li v-for="(user,index) in userFamilyList" :key='index'>
						<div class="renwuImg">
							<img :src="user.portrait" alt="" />
						</div>
						<div class="faCon">
							<input  type="text"   v-model = 'user.names'
                                                   @blur="blurMethod(index,user.userFamilyRelationCode)"
                                                   >
						</div>
						<div class="faQu">
							<div class="jiechu" @click="jiechu(index,user.buserCode)">解除</div>
							<div class="snajio" @click="sanJIao(user.buserCode,user.buserNickname)"></div>
						</div>
					</li>
				</ul>
			</div>
		</div>
		<!-- 添加家人，关注家人健康** -->
		<div class="statusCircl" @click="handFamily()">
			<ul>
				<li></li>
				<li>添加家人，关注家人健康</li>
			</ul>
		</div>
	</div>
</template>
<script>
	import axios from 'axios';
	import { get, put } from '../../api/fetch.js';
	import { Toast, MessageBox } from 'mint-ui';
	export default {
		data() {
			return {
				List: [],
				confirm: '同意',
				refuse: '拒绝',
				userFamilyList: []
			}
		},
		methods: {
			//添加家人**
			handFamily() {
				MessageBox({
					    $type:'prompt',
					    message:'请填写您的手机号',
					    inputPattern: /^1[0123456789]\d{9}$/,    //正则条件
					    inputErrorMessage:'请输入正确的手机号',
					    showCancelButton:true,
					    showInput:true
					}).then(({ value, action }) => {
					    const params1 = {
						inviteeMobile: value
					};
					get('/health-web/modules/userFamilyRelationExamine/save', params1).then((res) => {
						if(res.code == 0) {
							Toast({
								message: '添加成功',
								duration: 1500
							});
						 
						}else{
							Toast({
								message: res.msg,
								duration: 1500
							});
						}
						 this.$router.go(0); /**刷新整个页面**/
					})
					});
			},
			handlerBack() {
				this.$router.back()
			},
			handlerMom() {
				this.$router.push("/father")
			},
			//     好友通知**
			getFirend() {
				get('/health-web/modules/userFamilyRelationExamine/list', {}).then((res) => {
					if(res.code == 0) {
						this.List = res.familyRelationExamineList;
					}

				})
			},
			//      家人账号管理**
			milyList() {
				get('/health-web/modules/userFamilyRelation/list', {}).then((res) => {
					if(res.code == 0) {
						res.userFamilyList.forEach(item => { 
									if ( item.buserNickname == null ){ 
										item.names = item.busername 
									}else{
										item.names = item.buserNickname 
									}
		                  })
						this.userFamilyList = res.userFamilyList;
					}
				})
			},
			//      获取焦点修改别名**
			      blurMethod(i,codeBainb) {
			      	const namesVal=this.userFamilyList[i].names
			      	const params={
			      		userFamilyRelationCode:codeBainb,
			      		bUserNickname:namesVal
			      	}
			      	get('/health-web/modules/userFamilyRelation/updateUserInfo',params).then((res)=>{
			      		if(res.code==0){
			      			Toast({
								message: '修改成功',
								duration: 1500
							});
			      		}
			      	})
			      },
	//    同意**
			handConfirm(i, name, val) {
				const params1 = {
					userFamilyRelationExamineCode: val,
					examineSign: true,
				};
				get('/health-web/modules/userFamilyRelationExamine/update', params1).then((res) => {
					console.log(res)
					if(res.code == 0) {
						this.userFamilyList.push({
							name: name
						});
						this.List.splice(i, 1);
						this.$router.go(0); /**刷新整个页面**/
					}
				})
			},
	//      拒绝**
			handrefuse(i, name, val) {
				const params1 = {
					userFamilyRelationExamineCode: val,
					examineSign: false,
				};
				get('/health-web/modules/userFamilyRelationExamine/update', params1).then((res) => {
					if(res.code == 0) {
						alert(1)
						this.List.splice(i, 1);
						this.$router.go(0); /**刷新整个页面**/
					}
				})
			},
		//      解除按钮**
			jiechu(i, id) {
				MessageBox.confirm('确定解除吗?').then(action => {
				const params = {
					bUserCode: id
				}
					get('/health-web/modules/userFamilyRelation/update', params).then((res) => {
						if(res.code == 0) {
							this.userFamilyList.splice(i, 1);
							Toast({
								message: '解除成功',
								duration: 1500
							});
						}
					})
                 });
			},
			sanJIao(i,nameVal) {
				this.$router.push({
					path: './father',
					query:{
						buserCode:i,
						nameValue:nameVal
					}
				})
			}
		},
		created() {
			this.getFirend();
			this.milyList();
		}
	}
</script>
<style lang="" scoped>
	@import './cssFami/family.css';
	.nopeople {
		text-align: left;
		margin-top: .3rem;
	}
</style>