// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from '@/store/store'
import filters from '@/assets/js/filters'
import Loading from '@/components/loading'
import "@/assets/js/jquery-3.0.0.min"
import "@/assets/js/font"

// 注册全局loading组件
Vue.use(Loading)

// 注册全局过滤器
for (let key in filters) {
  Vue.filter(key, filters[key])
}
// 配置axios
axios.interceptors.request.use(function (config) {
  store.dispatch('SHOW_LOADING')
  return config
}, function (err) {
  store.dispatch('HIDE_LOADING')
  return Promise.reject(err)
})

axios.interceptors.response.use(function (response) {
  store.dispatch('HIDE_LOADING')
  return response
}, function (err) {
  store.dispatch('HIDE_LOADING')
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
