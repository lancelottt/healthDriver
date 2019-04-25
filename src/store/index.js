import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import userInfoStore from './userInfoStore'
import remindStore from './remindStore'
Vue.use(Vuex);

const state = {
	weChatServices: '',
	user: {
		id: "111"
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
}
const getters = {

}
const mutations = {
	handlerCommit(state,params){
		console.log(params)
		state.ids = params
	},
	handlerRemindCommit(state,params){
		console.log(params)
		state.remindName = params.remindItemName
		state.remindTime = params.remindTime
		state.memberRemindVoiceName = params.memberRemindVoiceName
//		state.remindItemId = params.remindItemId
//		state.memberRemindVoice = params.memberRemindVoice
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
	handleEditTabStatus({
		commit
	}, params) {
		console.log(params)
		commit("handleEditTabStatus", params);
	},
	handlerModify({
		commit
	}, params) {
		commit("handlerMessage", params)
	},
	handlerDispatch({commit},params){
		console.log({commit},params)
		commit("handlerCommit",params)
	},
	handlerRemindDispatch({commit},params){
		commit("handlerRemindCommit",params)
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