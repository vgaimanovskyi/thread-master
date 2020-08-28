import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: "101",
        name: 'Панно "Lady in hat"',
        urlPotser: "../images/products/01/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "102",
        name: 'Панно "Girl"',
        urlPotser: "../images/products/02/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "103",
        name: 'Панно "King & Queen"',
        urlPotser: "../images/products/03/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "105",
        name: 'Фоторамка "I love you"',
        urlPotser: "../images/products/05/poster.jpg",
        catId: ["00", "04"]
      },
      {
        id: "106",
        name: 'Панно "Вихрь"',
        urlPotser: "../images/products/06/poster.jpg",
        catId: ["00", "01", "02"]
      },
      {
        id: "107",
        name: 'Панно "Ом"',
        urlPotser: "../images/products/07/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "108",
        name: 'Панно "YES"',
        urlPotser: "../images/products/08/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "109",
        name: 'Панно "Ловец снов"',
        urlPotser: "../images/products/09/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "110",
        name: 'Декоративное панно "Синяя клетка"',
        urlPotser: "../images/products/10/poster.jpg",
        catId: ["00", "01", "02"]
      },
      {
        id: "111",
        name: 'Панно "Emoji smile"',
        urlPotser: "../images/products/11/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "112",
        name: 'Панно-картины "Dinosaurs"',
        urlPotser: "../images/products/12/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "113",
        name: 'Стол "Player"',
        urlPotser: "../images/products/13/poster.jpg",
        catId: ["00", "03"]
      },
      {
        id: "114",
        name: 'Стол "Sun"',
        urlPotser: "../images/products/14/poster.jpg",
        catId: ["00", "03"]
      },
      {
        id: "115",
        name: 'Стол "Нежность"',
        urlPotser: "../images/products/15/poster.jpg",
        catId: ["00", "03"]
      },
      {
        id: "116",
        name: 'Стол "Стихия"',
        urlPotser: "../images/products/16/poster.jpg",
        catId: ["00", "03"]
      },
      {
        id: "117",
        name: 'Панно "Love"',
        urlPotser: "../images/products/17/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "118",
        name: 'Логотип для ателье "I’m Atelier"',
        urlPotser: "../images/products/18/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "119",
        name: 'Панно "Rose"',
        urlPotser: "../images/products/19/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "120",
        name: 'Панно "Emoji Pile of Poo"',
        urlPotser: "../images/products/20/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "121",
        name: 'Панно "Ero"',
        urlPotser: "../images/products/21/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "122",
        name: 'Панно "Wine"',
        urlPotser: "../images/products/22/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "123",
        name: 'Панно "Незнакомка"',
        urlPotser: "../images/products/23/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "124",
        name: 'Панно "Хризантема"',
        urlPotser: "../images/products/24/poster.jpg",
        catId: ["00", "01", "02"]
      },
      {
        id: "125",
        name: 'Фоторамка  "Friends"',
        urlPotser: "../images/products/25/poster.jpg",
        catId: ["00", "04"]
      },
      {
        id: "126",
        name: 'Панно "Neon girl"',
        urlPotser: "../images/products/26/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "127",
        name: 'Панно "Sunrise"',
        urlPotser: "../images/products/27/poster.jpg",
        catId: ["00", "01", "02"]
      },
      {
        id: "128",
        name: 'Панно "Waterfall"',
        urlPotser: "../images/products/28/poster.jpg",
        catId: ["00", "01", "02"]
      },
      {
        id: "129",
        name: 'Панно "Baby feet"',
        urlPotser: "../images/products/29/poster.jpg",
        catId: ["00", "02"]
      },
      {
        id: "130",
        name: 'Панно "Радуга"',
        urlPotser: "../images/products/30/poster.jpg",
        catId: ["00", "01", "02"]
      },
    ],
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
      {
        id: "05",
        name: "разное"
      }
    ],
    byCat: [],
  },
  mutations: {
    productsByCategory(state, payload) {
      state.byCat = state.products.filter(product => product.catId.find(catId => catId === payload));
    },
  },
  getters: {
    sliceProducts: state => start => {
      return state.byCat.slice(start, start + 3);
    }
  },
  actions: {
  },
  modules: {
  }
})
