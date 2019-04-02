import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const state = {
	isGirl: false,
	gender: '',
	inputBirth: '',
	inputHeight: '',
	inputCurrentWeight: '',
	inputTargetWeight: '',
	ids:'sub_store',
	userInfoFirst:'',
	userInfoLast:[]
}
const actions = {
	handlerInfo({commit},params){
		commit('handlerInfoUpdate',params)
	},
	handlerIdentityInfo({commit,state},params){
		console.log({commit,state},params)
		commit('handlerIdentityInfoUpdate',params)
	}
}
const mutations = {
	handlerInfoUpdate(state,params){
		state.ids = params
		state.gender = params
	},
//	身份页面数据
	handlerIdentityInfoUpdate(state,params){
		if(params){
			state.userInfoFirst =  params  
		}
	}
}

export default {
	nameSpace:true,
	state,
	actions,
	mutations
}
