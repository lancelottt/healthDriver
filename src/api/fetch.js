import axios from 'axios';
// const repUrl = 'http://192.168.1.145:8081'; // 开发接口地址http://2b3665801a.51mypc.cn:20626/
// const repUrl = 'http://2b3665801a.51mypc.cn:20626'; // 开发接口地址
const repUrl = 'http://bossdu.zicp.vip:55090';

const headers = {
    // 'token': 'faad5a64-2f11-4b4a-9136-f7f50c333947',
    'token': 'faad5a64-2f11-4b4a-9136-f7f50c333947',
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
export function deletes(url, params) {
    return axios.delete(repUrl + url, {
            headers: headers,
            data: params
        })
        .then((res) => {
            return Promise.resolve(res.params)
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