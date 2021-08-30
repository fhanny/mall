import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import ElementPlus from 'element-plus';
import './assets/style/index.scss'
import 'element-plus/lib/theme-chalk/index.css';
import request from './api/request'
import VueLazyLoad from 'vue3-lazyload'
// import './index.css'
const app = createApp(App)
app.config.globalProperties.$axios = request
app.use(VueLazyLoad).use(router).use(ElementPlus).mount('#app')

