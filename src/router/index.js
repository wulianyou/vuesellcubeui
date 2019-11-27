import Vue from 'vue'
import VueRouter from 'vue-router'
import Header from '../components/header/header.vue'
import goods from '../components/goods/goods'

Vue.use(VueRouter)

const routes = [
  {
    // 定义默认页面
    path: '/goods',
    name: 'goods',
    component: goods
  },
  {
    path: '/components/header/',
    name: 'header',
    component: Header
  },
  {
    path: '/goods',
    name: 'goods',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/goods/goods.vue')
  },
  {
    path: '/seller',
    name: 'seller',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/seller/seller.vue')
  },
  {
    path: '/ratings',
    name: 'ratings',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../components/ratings/ratings.vue')
  }
]

const router = new VueRouter({
  linkActiveClass: 'active', // router-link-active设置
  routes
})

export default router
