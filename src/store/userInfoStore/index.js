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
	id:''
}
const actions = {
	handlerInfo({commit},params){
		commit('handlerInfoUpdate',111)
	}
}
const mutations = {
	handlerInfoUpdate(state,params){
		state.gender = params
	}
}
const Store = new Vuex.Store({
	state,
	actions,
	mutations
})
export default Store