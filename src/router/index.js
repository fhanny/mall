import { createRouter, createWebHashHistory } from "vue-router"
import Home from '../pages/home/index.vue'
import Index from '../pages/index/index.vue'
import Product from '../pages/product/index.vue'
import Cart from '../pages/cart/index.vue'
import Order from '../pages/order/index.vue'
import Login from '../pages/login/index.vue'
const routes = [
  {
    name: 'home',
    path: '/',
    component: Home,
    redirect: '/index',
    children: [
      {
        name: 'index',
        path: '/index',
        component: Index,
      },
      {
        name: 'product',
        path: '/product',
        component: Product,
      },  
      {
        name: 'cart',
        path: '/cart',
        component: Cart,
      },
    ]
  },
  {
    name: 'login',
    path: '/login',
    component: Login
  },
  {
    name: 'order',
    path: '/order',
    component: Order,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes

})
export default router