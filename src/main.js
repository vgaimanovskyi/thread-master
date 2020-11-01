// Transpiler for older browsers
import 'core-js/stable';
// optional but required for transforming generator fns.
import 'regenerator-runtime/runtime';

import Vue from 'vue';
import Vuelidate from 'vuelidate';
import App from './App.vue';
import './registerServiceWorker';
import router from './router';
import store from './store';
import scrollTo from './scrollTo';
import VueCarousel from 'vue-carousel';
import VueMask from 'v-mask';
import VueMeta from 'vue-meta';
import VueSocialSharing from 'vue-social-sharing'
import Vue2TouchEvents from 'vue2-touch-events'

import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';


Vue.use(Vuelidate);
Vue.use(VueCarousel);
Vue.use(VueMask);
Vue.use(VueMeta);
Vue.use(VueSocialSharing);
Vue.use(Vue2TouchEvents);


Vue.config.devtools = true;
Vue.config.productionTip = false;

firebase.initializeApp({
  apiKey: "AIzaSyC8Cd8xpvEKXh8vjvMtpTB0fdcP7wzBRGc",
  authDomain: "threadmaster-affcd.firebaseapp.com",
  databaseURL: "https://threadmaster-affcd.firebaseio.com",
  projectId: "threadmaster-affcd",
  storageBucket: "threadmaster-affcd.appspot.com",
  messagingSenderId: "351973733556",
  appId: "1:351973733556:web:8b22c8303ca8d9a03a93e1",
  measurementId: "G-BCF66P2GP6"
});
export const db = firebase.database();
export const fs = firebase.storage();

new Vue({
  router,
  store,
  scrollTo,
  render: h => h(App),
}).$mount('#app')
