import axios from 'axios'

// axios实例
const http = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
  timeout: process.env.VUE_APP_AXIOS_TIMEOUT
})

// 请求拦截器
http.interceptors.request.use(config => {
  return config
})

// 响应拦截器
http.interceptors.response.use(res => {
  return res
})

export default http