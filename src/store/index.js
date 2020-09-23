import Vue from 'vue'
import Vuex from 'vuex'
import { db } from "../main";
import shared from "./modules/shared"
import reviews from "./modules/reviews"

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    categories: [
      {
        id: "00",
        name: "все"
      },
      {
        id: "01",
        name: "абстрактные картины"
      },
      {
        id: "02",
        name: "интерьерные картины"
      },
      {
        id: "03",
        name: "столы"
      },
      {
        id: "04",
        name: "фоторамки"
      },
      /* {
        id: "05",
        name: "разное"
      }, */
      {
        id: "09",
        name: "видео"
      }
    ],
    products: [],
    videos: [],
    byCat: [],
    favList: [],
    cartList: [],
    order: {},
    product: {},
    search: []
  },
  mutations: {
    ALL_PRODUCTS(state, payload) {
      state.products = payload;
    },
    SET_VIDEOS(state, payload) {
      state.videos = payload;
    },
    PRODUCTS_BY_CATEGORY(state, payload) {
      state.byCat = state.products.filter(product => product.catId.find(catId => catId === payload));
      if (payload === "09") {
        state.byCat = state.byCat.concat(state.videos);
      }
      for (let i = state.byCat.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [state.byCat[i], state.byCat[j]] = [state.byCat[j], state.byCat[i]];
      }
    },
    PRODUCT_BY_ID(state, payload) {
      state.product = state.products.find(product => product.id === payload);
    },
    MY_FAVOURITES(state, payload) {
      state.favList = payload || [];
    },
    ADD_TO_MY_CART(state, payload) {
      const findIndex = state.cartList.findIndex(product => product.id === payload.id);
      if (findIndex === -1) {
        state.cartList.push(payload);
      } else {
        state.cartList[findIndex].count += payload.count;
      }
    },
    REMOVE_FROM_MY_CART(state, payload) {
      const findIndex = state.cartList.findIndex(product => product.id === payload);
      state.cartList.splice(findIndex, 1);
    },
    CLEAR_MY_CART(state) {
      state.cartList = [];
    },
    /*     SEND_NEW_ORDER(state, payload) {
          state.order = payload;
          console.log(state.order);
        }, */
    SEARCH_IN_PRODUCTS(state, payload) {
      state.search = state.products.filter(product => product.name.toLowerCase().indexOf(payload) > -1);
    }
  },
  actions: {
    async fetchAllProducts({ commit }) {
      let result = [];
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);
      try {
        const fbVal = await db.ref("products").once("value");
        const products = fbVal.val();
        Object.keys(products).forEach(key => {
          const product = products[key];
          result.push({
            id: key,
            name: product.name,
            urlPoster: product.urlPoster,
            urlGallery: product.urlGallery,
            urlShop: product.urlShop,
            catId: product.catId,
            available: product.available,
            material: product.material,
            size: product.size,
            price: product.price,
            discount: product.discount,
            new: product.new,
            description: product.description
          })
        })
        commit("ALL_PRODUCTS", result);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
        throw error
      }
    },
    async fetchAllVideos({ commit }) {
      let result = [];
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);
      try {
        const fbVal = await db.ref("videos").once("value");
        const videos = fbVal.val();
        Object.keys(videos).forEach(key => {
          const video = videos[key];
          result.push({
            id: key,
            video: video.video,
            name: video.name,
            catId: video.catId,
          })
        })
        commit("SET_VIDEOS", result);
        commit("SET_LOADING", false);
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
        throw error
      }
    },
    getProductsByCategory({ commit }, payload) {
      commit("PRODUCTS_BY_CATEGORY", payload)
    },
    getProductById({ commit }, payload) {
      commit("PRODUCT_BY_ID", payload)
    },
    getMyFavourites({ commit }) {
      commit("MY_FAVOURITES", JSON.parse(localStorage.getItem("favList")))
    },
    toggleMyFavourite({ commit }, payload) {
      commit("MY_FAVOURITES", payload);
      localStorage.setItem("favList", JSON.stringify(payload));
    },
    addToCart({ commit }, payload) {
      commit("ADD_TO_MY_CART", payload);
    },
    removeFromCart({ commit }, payload) {
      commit("REMOVE_FROM_MY_CART", payload);
    },
    async sendOrder({ commit }, payload) {
      commit("CLEAR_ERROR");
      commit("SET_LOADING", true);
      try {
        await db.ref("orders").push(payload);
        commit("SET_LOADING", false);
        commit("CLEAR_MY_CART");
        console.log(payload)
      } catch (error) {
        commit("SET_ERROR", error.message);
        commit("SET_LOADING", false);
        throw error
      }
      /* ;
      commit("SEND_NEW_ORDER", payload); */
    },
    useSearch({ commit }, payload) {
      commit("SEARCH_IN_PRODUCTS", payload.toLowerCase());
    }
  },
  getters: {
    noProducts(state) {
      return state.products.length === 0;
    },
    sliceProducts: state => start => {
      return state.byCat.slice(start, start + 9);
    },
    getProductById(state) {
      return state.product;
    },
    getFavList(state) {
      return state.favList;
    },
    getFavProducts(state) {
      return state.products.filter(product => state.favList.find(favId => favId === product.id))
    },
    getCartList(state) {
      return state.cartList;
    },
    getSearchResults(state) {
      return state.search;
    },
    getCategories(state) {
      return state.categories;
    }
  },
  modules: {
    shared, reviews
  }
})
