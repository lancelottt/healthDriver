<template>
	<div id="remindDetail">
		<div class="remindDetail">
			<header><span class="" @click="handleBack()"><img src="../../../static/img/arrow_03.png"/></span><span>我的提醒</span><span></span></header>
			<div class="myPlan">
				<div class="">
					<p>{{name}}</p>
				</div>
				
				<div class="">
					<p>提醒时间：&nbsp;<b></b></p>
					
					<p>
						<el-time-select @change="handlerChangeTime" v-model="value1" :picker-options="{
						    start: this.myremindTime,
						    step: '00:01',
						    end: '23:59'
						  }" placeholder="选择时间">
						</el-time-select>
						></p>

				</div>
				<div>之前的提醒时间:{{this.myremindTime}}</div>
				<div>选择的提醒时间:{{this.value1}}</div>
				<div class="demonstration">
					<p>应用语音：&nbsp;<b>
						<el-dropdown @command="handleCommand">
							  <span class="el-dropdown-link">
							    语音列表<i class="el-icon-arrow-down el-icon--right"></i>
							  </span>
							  <el-dropdown-menu slot="dropdown">
							    <el-dropdown-item :command=item.voiceName v-for="(item,index) in this.userVoiceBanks" :key=index>{{item.voiceName}}</el-dropdown-item>
							    
							  </el-dropdown-menu>
						</el-dropdown>
					</b></p>
				</div>

			</div>
		</div>
	</div>
</template>
<script>
	import Vuex from 'vuex';
	import store from '@/store/index'
	import remindStore from '@/store/remindStore'
	import { get, post } from '../../api/fetch.js'
	export default {
		name: 'myRemindDetail',
		data() {
			return {
				myuId:this.$route.params.myuid,
				mymemberRemindVoice:this.$route.params.mymemberRemindVoice,
				myremindTime:this.$route.params.myremindTime,
				myvoicePath:this.$route.params.myvoicePath,
				value1: '',
				userVoiceBanks: [],
				voiceNameBox: [],
//				语音code
				userVoiceBankCode:'',
				userVoiceBankId:'',
			}
		},
		computed: {
			...Vuex.mapState({
				time: state => store.state.remindTime.substr(0, 5),
				name: state => store.state.remindName,
				voice: state => store.state.memberRemindVoiceName,
			})
		},
		created(){
			get('/health-web/frontMemberScheme/memberRemindList', {}).then((res) => {
				console.log(res)
								this.userVoiceBanks = res.userVoiceBanks
								this.userVoiceBanks.map((item) => {
									this.userVoiceBankId = item.userVoiceBankId
									this.userVoiceBankCode = item.userVoiceBankCode
									this.voiceNameBox.push(item.voiceName)
									this.voiceNameBox  = this.voiceNameBox.slice(0,2)
									console.log(this.voiceNameBox)
								})
							})
		},
		methods: {
			handleBack() {
				this.$router.back()
			},
			handlerChangeTime(){
				console.log(this.myuId+this.mymemberRemindVoice+this.value1)
				get('/health-web/frontMemberScheme/memberRemindVoice?memberRemindSchemeItemId='+ this.myuId +'&userVoiceBankCode=' + this.mymemberRemindVoice+'&remindTime='+this.value1,{}).then((res)=>{
					console.log(res)
					this.$message({message:'你选择的是' + this.value1, type: 'success'})
				}).catch((err)=>{
					console.log('发送时间设置失败'+err)
				})
				
			},
			 handleCommand(command) {
			 	get('/health-web/frontMemberScheme/memberRemindVoice?memberRemindSchemeItemId='+ this.myuId +'&userVoiceBankCode=' + this.mymemberRemindVoice,{}).then((res)=>{
					console.log(res)
					this.$message({message:'你选择的是' + command, type: 'success'});
				}).catch((err)=>{
					console.log('发送声音设置失败'+err)
				})
        
      }
		}
	}
</script>

<style>
	#remindDetail{
		height: 100%;
		overflow: hidden;
	}
	.remindDetail {
		height: 100%;
	}
	
	.remindDetail header {
		z-index: 99;
		height: 0.84rem;
		position: fixed;
		top: 0;
	}
	
	.remindDetail h1 {
		margin-left: 0.3rem;
		font-size: 0.3rem;
		font-family: Adobe Heiti Std R;
		font-weight: normal;
		color: #333333;
		text-align: left;
	}
	
	.remindDetail h2 {
		margin: 0.28rem 0 0.28rem 0.3rem;
		text-align: left;
		font-size: 0.3rem;
		font-family: PingFangSC-Regular;
		font-weight: 400;
		color: #999999;
	}
	
	.remindDetail .myPlan {
		display: flex;
		flex-direction: column;
		margin-top: 0.2rem !important;
		width: 6.88rem;
		height: 5.56rem;
		border-radius: 0.12rem;
		margin: 0 auto;
		position: relative;
	}
	
	.remindDetail .myPlan img {
		width: 100%;
		height: 100%;
	}
	
	.remindDetail .myPlan>div {
		display: flex;
		flex-direction: row;
		justify-content: space-between;
		align-items: center;
		margin: 0 auto;
		width: 80%;
		height: 1rem;
		background: #FFF6E6;
		margin-top: 0.5rem;
		border-radius: 5%;
		font-size: 0.24rem;
	}
	
	.remindDetail .myPlan>div:nth-of-type(1) {
		margin-top: 1rem;
		font-size: 0.3rem;
	}
	
	.remindDetail .myPlan>div>p>b {
		display: block;
		color: #999999;
	}
	
	.remindDetail .myPlan>div:nth-of-type(2)>p:nth-of-type(2)>.el-input {
		width: 3.5rem;
		opacity: 0;
	}
	
	.el-message-box {
		width: 100%;
	}
	.remindDetail .myPlan>div:nth-of-type(1){
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
	.remindDetail .demonstration>p{
		width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
	}
	/*.hitCard .myPlan .healthPlan-mask {
      width: 5.42rem;
      height: 1.71rem;
      background: #ccc;
      z-index: 10;
      position: absolute;
      top: 0.39rem;
      left: 0.69rem;
      background: rgba(29, 103, 12, 0.23); }
      .hitCard .myPlan .healthPlan-mask .mask-left {
        width: 70%;
        height: 100%;
        float: left; }
        .hitCard .myPlan .healthPlan-mask .mask-left h1 {
          margin: 0.47rem 0 0 0.29rem;
          font-size: 0.36rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fefefe; }
        .hitCard .myPlan .healthPlan-mask .mask-left h2 {
          margin: 0.17rem 0 0 0.29rem;
          font-size: 0.28rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fefefe; }
      .hitCard .myPlan .healthPlan-mask .mask-right {
        width: 30%;
        height: 100%;
        float: left;
        text-align: right; }
        .hitCard .myPlan .healthPlan-mask .mask-right span {
          display: block;
          margin: 0.5rem 0.5rem 0 0rem;
          margin-top: 0.5rem !important;
          font-size: 0.36rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fefefe; }
        .hitCard .myPlan .healthPlan-mask .mask-right i {
          display: block;
          margin: 0.17rem 0.38rem 0 0rem;
          font-size: 0.24rem;
          font-family: PingFangSC-Regular;
          font-weight: 400;
          color: #fefefe; }*/
	/*# sourceMappingURL=myReminder.css.map */
</style>