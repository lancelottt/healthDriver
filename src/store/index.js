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
	id: ''
}
const getters = {

}
const mutations = {
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
	implement(state, params){
		state.id = params
	}

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
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	module: {
		userInfoStore
	}
})
export default store;