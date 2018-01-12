import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/pages/Home'
import Article from '../components/pages/Article'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/home',
      component: Home
    },
    {
      path: '/article/:id',
      component: Article
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
