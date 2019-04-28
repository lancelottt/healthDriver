import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import userInfoStore from './userInfoStore'
import remindStore from './remindStore'
Vue.use(Vuex);

const state = {
	weChatServices: '',
	user: {
		id:'111',
		uid: "",
		userCode:'',
		memberLevelId:'',
		token:'',
		ompleteStatus:'',
	},
	address: [],
	show: true,
	token: '',
	ids: '',
	remindName:'',
	remindTime:'',
	memberRemindVoiceName:'',
	remindItemId:'',
	memberRemindVoice:'',
	myInfo:{
		nickname:'',
		sex:'',
		headimgurl:'',
		openid:'',
		access_token:''
	},
	promotionCode:'',
}
const getters = {
}
const mutations = {
	handlerCommit(state,params){
		if(params){state.ids = params}
	},
	handlerRemindCommit(state,params){
		if(params){
			state.remindName = params.remindItemName
			state.remindTime = params.remindTime
			state.memberRemindVoiceName = params.memberRemindVoiceName
		}
		
//		state.remindItemId = params.remindItemId
//		state.memberRemindVoice = params.memberRemindVoice
	},
	handlerUserInfoCommit(state,params){
		console.log(state,params)
		state.user.uid = params.id
		state.user.userCode = params.userCode
		state.user.memberLevelId = params.memberLevelId
		state.user.token = params.token
		state.user.ompleteStatus = params.ompleteStatus
	},
	handlerMyInfoCommit(state,params){
		if(params){
			state.myInfo.nickname = params.nickname
			state.myInfo.sex = params.sex
			state.myInfo.headimgurl = params.headimgurl
			state.myInfo.openid = params.openid
			state.myInfo.access_token = params.access_token
		}
		
	},
	handlerProCodeCommit(state,params){
		if(params){
					state.promotionCode = params

		}
	}
	
//	handleEditTabStatus(state, params) {
//		if(!params) {
//			state.show = !state.show;
//		} else {
//			console.log(params, 7);
//			if(params == 1) {
//				state.show = true;
//			} else {
//				state.show = false;
//			}
//		}
//
//	},
//	handlerMessage(state, params) {
//		state.id = params
//	},

}
const actions = {
//	handleEditTabStatus({
//		commit
//	}, params) {
//		console.log(params)
//		commit("handleEditTabStatus", params);
//	},
//	handlerModify({
//		commit
//	}, params) {
//		commit("handlerMessage", params)
//	},
	handlerDispatch({commit},params){
		console.log({commit},params)
		commit("handlerCommit",params)
	},
	handlerRemindDispatch({commit},params){
		commit("handlerRemindCommit",params)
	},
	handlerDispatchUserInfo({commit},params){
				console.log({commit},params)

		commit('handlerUserInfoCommit',params)
	},
	handlerMyInfo({commit},params){
		commit("handlerMyInfoCommit",params)
	},
	handlerProCodeAction({commit},params){
		commit("handlerProCodeCommit",params)
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules: {
		userInfoStore,
		remindStore
	}
})
export default store;