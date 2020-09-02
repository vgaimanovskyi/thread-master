import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Gallery from '../views/Gallery.vue'
import Shop from '../views/Shop.vue'
import Product from '../views/Product.vue'
import Contacts from '../views/Contacts.vue'
import Delivery from '../views/Delivery.vue'

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
    // component: () => import('../views/Gallery.vue'),
    component: Gallery
  },
  {
    path: '/shop',
    name: 'Shop',
    // component: () => import('../views/Shop.vue'),
    component: Shop,
  },
  {
    path: '/product/:id',
    name: 'Product',
    // component: () => import('../views/Product.vue'),
    component: Product
  },
  {
    path: '/contacts',
    name: 'Contacts',
    // component: () => import('../views/Contacts.vue'),
    component: Contacts
  },
  {
    path: '/delivery',
    name: 'Delivery',
    // component: () => import('../views/Delivery.vue'),
    component: Delivery
  },
  {
    path: '*',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  base: '/thread-master/',
  routes
})

export default router
