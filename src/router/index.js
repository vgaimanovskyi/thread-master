import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/gallery',
    name: 'Gallery',
    component: () => import('../views/Gallery.vue'),
  },
  {
    path: '/shop',
    name: 'Shop',
    component: () => import('../views/Shop.vue'),
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: () => import('../views/Product.vue'),
  },
  {
    path: '/favourites',
    name: 'Favourites',
    component: () => import('../views/Favourites.vue'),
  },
  {
    path: '/order',
    name: 'Order',
    component: () => import('../views/Order.vue'),
  },
  {
    path: '/contacts',
    name: 'Contacts',
    component: () => import('../views/Contacts.vue'),
  },
  {
    path: '/delivery',
    name: 'Delivery',
    component: () => import('../views/Delivery.vue'),
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  // mode: 'history',
  mode: 'hash',
  // base: process.env.BASE_URL,
  base: '/thread-master/',
  routes
})

export default router
