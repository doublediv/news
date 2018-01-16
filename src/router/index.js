import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Article from '../components/pages/Article'
import Follow from '../components/pages/Follow'
import Column from '../components/pages/Column'
import My from '../components/pages/My'
import Login from '../components/pages/Login'
import Reg from '../components/pages/Reg'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      name: '首页',
      component: Home,
      meta: { isHeader: true, isKeepAlive: true }
    },
    {
      path: '/article/:id',
      name: '文章',
      component: Article,
      meta: { isHeader: false, isKeepAlive: false }
    },
    {
      path: '/follow',
      name: '关注',
      component: Follow,
      meta: { isHeader: true, isKeepAlive: true }
    },
    {
      path: '/column',
      name: '栏目',
      component: Column,
      meta: { isHeader: true, isKeepAlive: true }
    },
    {
      path: '/my',
      name: '我的',
      component: My,
      meta: { isHeader: false, isKeepAlive: true }
    },
    {
      path: '/user-login',
      name: '登录',
      component: Login,
      meta: { isHeader: false, isKeepAlive: true }
    },
    {
      path: '/user-reg',
      name: '登录',
      component: Reg,
      meta: { isHeader: false, isKeepAlive: true }
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
