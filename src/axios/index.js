import axios from 'axios'
import { ElNotification } from 'element-plus'

// axios实例
const http = axios.create({
  baseURL: process.env.VUE_APP_AXIOS_BASE_URL,
  timeout: process.env.VUE_APP_AXIOS_TIMEOUT
})

// 请求拦截器
http.interceptors.request.use((config) => {
  return config
})

// 响应拦截器
http.interceptors.response.use(
  (res) => {
    if (res.data) {
      if (res.data.code !== 200) {
        ElNotification({
          title: res.data.msg,
          message: res.data.data,
          type: 'error'
        })
      }
      return res.data
    } else {
      ElNotification({
        title: '无法连接到服务器',
        message: res.statusText,
        type: 'error'
      })
      return Promise.reject(new Error(res.statusText))
    }
  },
  (err) => {
    ElNotification({
      title: '无法连接到服务器',
      message: err.message,
      type: 'error'
    })
    return Promise.reject(new Error(err.message))
  }
)

export default http
