import axios from 'axios';
import store from '@/store/index';
import Vuex from 'vuex';
import vue from 'vue';
import { setCookie, getCookie, delCookie } from '@/utils/holdno';

//const repUrl = 'http://192.168.1.119:8081'; // 开发接口地址
//const repUrl = 'http://192.168.1.144:8081';
//const repUrl = 'http://192.168.1.115:8080'; // 开发接口地址
// const repUrl = 'http://192.168.1.145:8081'; // 开发接口地址http://2b3665801a.51mypc.cn:20626/
// const repUrl = 'http://2b3665801a.51mypc.cn:20626'; // 开发接口地址
//var myToken = getCookie('tokenCookie')
//function myTo() {
	var myToken = null;
//		if(localStorage.getItem('tokenCookie')) {
//			myToken = localStorage.getItem('tokenCookie')
//			console.log('myToken0'+myToken)
//		}
//		console.log('myToken1'+myToken)
//	return myToken
//}
if(localStorage.getItem('tokenCookie')) {
			myToken = localStorage.getItem('tokenCookie')
			console.log('myToken0'+myToken)
		}else{
			
		}
		console.log('myToken1'+myToken)
const repUrl = 'http://bossdu.zicp.vip:55090';
const mtoken = store.state.user.token
console.log('myToken2'+myToken)
typeof(myToken)
const headers = {
	//     'token': 'faad5a64-2f11-4b4a-9136-f7f50c333947',
	'token': myToken
	// 'Content-Type': 'application/x-www-form-urlencoded'
}
export function get(url, params, data = {}) {
	return axios.get(repUrl + url, {
			headers: headers,
			params: params,
			data: data
		})
		.then((res) => {
			return Promise.resolve(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
}

export function post(url, data) {
	return axios.post(repUrl + url, data, {
			headers: headers
		}).then((res) => {
			return Promise.resolve(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
}
export function postJson(url, data) {
	return axios.post(repUrl + url, data, {
			headers: {
				'token': 'faad5a64-2f11-4b4a-9136-f7f50c333947',
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			return Promise.resolve(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
}
export function deletes(url, data) {
	return axios.delete(repUrl + url, {
			headers: headers,
			data: data
		})
		.then((res) => {
			return Promise.resolve(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
}
export function put(url, data) {
	return axios.put(repUrl + url, data, {
			headers: {
				'token': 'faad5a64-2f11-4b4a-9136-f7f50c333947',
				'Content-Type': 'application/json'
			}
		}).then((res) => {
			return Promise.resolve(res.data)
		})
		.catch((err) => {
			console.log(err)
		})
}