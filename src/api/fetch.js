import axios from 'axios';
const repUrl = 'http://192.168.1.170:8081'; // 开发接口地址
const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    'token': 'faad5a64-2f11-4b4a-9136-f7f50c333947',
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

export function deletes(url, params) {
    return axios.delete(url, {
            headers: headers,
            data: params
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
            headers: headers
        }).then((res) => {
            return Promise.resolve(res.data)
        })
        .catch((err) => {
            console.log(err)
        })
}