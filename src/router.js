import vue from 'vue'
import vueRouter from 'vue-router'

import home from './home'
import checkList from './packages/checkList'

vue.use(vueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: home
  },
  {
    path: '/checkList',
    name: 'checkList',
    component: checkList
  }
]

const router = new vueRouter({routes})

export default router