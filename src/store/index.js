import Vue from "vue";
import Vuex from "vuex";
import axios from 'axios'
Vue.use(Vuex);

const state = {
	weChatServices: '',
	user: {
		id: "111"
	},
	address: [],
	show: true,
	token:'',
}
const getters = {

}
const mutations = {
	handleEditTabStatus(state, params) {
		if(!params) {
			state.show = !state.show;
		} else {
			console.log(params, 7);
			if(params == 1) {
				state.show = true;
			} else {
				state.show = false;
			}
		}

	}
}
const actions = {
	handleEditTabStatus({
		commit
	}, params) {
		console.log(params)
		commit("handleEditTabStatus", params);
	}
}

const store = new Vuex.Store({
	state,
	getters,
	mutations,
	actions,
	module: {

	}
})
export default store;