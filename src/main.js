// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/store/store'
import filters from '@/assets/js/filters'
import "@/assets/js/jquery-3.0.0.min"
import "@/assets/js/font"

// 注册全局过滤器
for (let key in filters) {
  Vue.filter(key, filters[key])
}

// 配置axios
axios.interceptors.request.use(function (config) {
  return config
}, function (err) {
  return Promise.reject(err)
})

axios.interceptors.response.use(function (response) {
  return response
}, function (err) {
  return Promise.reject(err)
})

Vue.prototype.$http = axios

// 显示警告
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
