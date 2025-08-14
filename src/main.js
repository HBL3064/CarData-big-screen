import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
// 将自动注册所有组件为全局组件
import dataV from '@jiaminghi/data-view'
import axios  from './api/index.js'

const app = createApp(App)
app.use(axios) // 使用axios插件
app.use(dataV)
app.mount('#app')
