import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import Login from './views/Login'
import Register from './views/Register'
import UserCenter from './views/UserCenter'
import UserCenterInfo from './components/UserCenter/UserCenterInfo'
import UserCenterOrder from './components/UserCenter/UserCenterOrder'
import UserCenterSite from './components/UserCenter/UserCenterSite'
import GoodDetail from './views/GoodDetail'
import ShoppingCart from './views/ShoppingCart'
import ShoppingList from './views/ShoppingList'
import ShoppingOrder from './views/ShoppingOrder'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    },
    {
      path: '/user_center',
      name: 'UserCenter',
      component: UserCenter,
      children: [
        {
          path: '/user_info',
          component: UserCenterInfo
        },
        {
          path: '/user_order',
          component: UserCenterOrder
        },
        {
          path: '/user_site',
          component: UserCenterSite
        }
      ]
    },
    {
      path: '/details',
      name: 'GoodDetail',
      component: GoodDetail
    },
    {
      path: '/shopping_cart',
      name: 'ShoppingCart',
      component: ShoppingCart
    },
    {
      path: '/shopping_list',
      name: 'ShoppingList',
      component: ShoppingList
    },
    {
      path: '/shopping_order',
      name: 'ShoppingOrder',
      component: ShoppingOrder
    }
  ]
})
