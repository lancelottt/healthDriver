import axios from 'axios';
const repUrl = 'http://192.168.1.170:8081'; //接口地址
const headers = {
    'token': 'faad5a64-2f11-4b4a-9136-f7f50c333947'
}


export function get(url, params) {
    return axios.get(repUrl + url, {
            headers: headers,
            params: params
        })
        .then((res) => {
            return Promise.resolve(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export function post(url, params) {
    return axios.post(url, {
            headers: headers,
            params: params
        })
        .then((res) => {
            return Promise.resolve(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export function deletes(url, params) {
    return axios.delete(url, {
            headers: headers,
            params: params
        })
        .then((res) => {
            return Promise.resolve(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}

export function put(url, params) {
    return axios.put(url, {
            headers: headers,
            params: params
        })
        .then((res) => {
            return Promise.resolve(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}