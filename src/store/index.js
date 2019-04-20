import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
import userInfoStore from './userInfoStore'
Vue.use(Vuex);

const state = {
	weChatServices: '',
	user: {
		id: "111"
	},
	address: [],
	show: true,
	token: '',
	ids: ''
}
const getters = {

}
const mutations = {
	handlerCommit(state,params){
		console.log(params)
		state.ids = params
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
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	modules: {
		userInfoStore
	}
})
export default store;