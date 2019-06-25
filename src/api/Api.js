import axios from 'axios'

const createNewAxiosInstance = (token = '') => {
    instanceHasToken = !instanceHasToken
    return axios.create({
        baseURL: 'http://localhost:4000/',
        timeout: 5000,
        headers: { 'Authorization': `Bearer ${token}`, 'Access-Control-Allow-Origin': '*' }
    })
}

export let instance = createNewAxiosInstance()
export let instanceHasToken = false

export const register = async (nickname, password) => {
    try {
        const { data: { token } } = await instance.post('auth/register', { nickname, password })
        instance = createNewAxiosInstance(token)
    }
    catch (e) {
        console.log(e)
    }
}

export const login = async (nickname, password) => {
    try {
        const { data: { token } } = await instance.post('auth/login', { nickname, password })
        instance = createNewAxiosInstance(token)
    }
    catch (e) {
        console.log(e)
    }
}