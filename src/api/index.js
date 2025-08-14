import axios from "axios"

const request = axios.create({
    baseURL: "http://localhost:8000/api",   // API服务器的地址
    timeout: 5000                       // 请求超时时间
})

export default {
  install(app) {
    // 注入全局属性
    app.config.globalProperties.$axios = request
    // 如果你想在组合式 API 中也能方便使用，可再提供一个 key
    app.provide('axios', request)
  }
}