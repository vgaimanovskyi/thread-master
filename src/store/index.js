import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    products: [
      {
        id: "101",
        name: 'Панно "Lady in hat"',
        urlPotser: "../images/products/101/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "56,5 x 48 см",
        price: 65
      },
      {
        id: "102",
        name: 'Панно "Girl"',
        urlPotser: "../images/products/102/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "58 x 49,5 см",
        price: 65
      },
      {
        id: "103",
        name: 'Панно "King & Queen"',
        urlPotser: "../images/products/103/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "18 x 46 см",
        price: 20
      },
      {
        id: "105",
        name: 'Фоторамка "I love you"',
        urlPotser: "../images/products/105/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "04"],
        available: true,
        material: "основа дерево, гвозди, нейлоновая нить, крепление на стену, 2 прищепки-сердечка",
        size: "45 x 15 см",
        price: 15
      },
      {
        id: "106",
        name: 'Панно "Вихрь"',
        urlPotser: "../images/products/106/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "01", "02"],
        available: false,
        material: "основа фанера, гвозди, люминесцентная нить, крепление на стену",
        size: "50 x 50 см",
        price: 50
      },
      {
        id: "107",
        name: 'Панно "Ом"',
        urlPotser: "../images/products/107/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа фанера, покрытая морилкой, гвозди, нейлоновая нить, крепление на стену",
        size: "20 x 20 см",
        price: 20
      },
      {
        id: "108",
        name: 'Панно "YES"',
        urlPotser: "../images/products/108/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "35 x 55 см",
        price: 60
      },
      {
        id: "109",
        name: 'Панно "Ловец снов"',
        urlPotser: "../images/products/109/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену, перья, бусины",
        size: "20 x 20 см",
        price: 25
      },
      {
        id: "110",
        name: 'Декоративное панно "Синяя клетка"',
        urlPotser: "../images/products/110/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        catId: ["00", "01", "02"],
        available: true,
        material: "фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "30 x 30 см",
        price: 30
      },
      {
        id: "111",
        name: 'Панно "Emoji smile"',
        urlPotser: "../images/products/111/poster.jpg",
        urlGallery: ["/img/1.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа фанера, гвозди, ирис нить, крепление на стену",
        size: "20 x 20 см",
        price: 15
      },
      {
        id: "112",
        name: 'Панно-картины "Dinosaurs"',
        urlPotser: "../images/products/112/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg", "/img/7.jpg", "/img/8.jpg", "/img/9.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа фанера, гвозди, нить, крепление на стену",
        size: "35 x 35 см",
        price: 20
      },
      {
        id: "113",
        name: 'Стол "Player"',
        urlPotser: "../images/products/113/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        catId: ["00", "03"],
        available: true,
        material: "ДСП лакированный черный, гвозди столярные, стекло 6мм, нейлоновая нить",
        size: "55 x 55 x 47 см",
        price: 80
      },
      {
        id: "114",
        name: 'Стол "Sun"',
        urlPotser: "../images/products/114/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        catId: ["00", "03"],
        available: true,
        material: "ДСП лакированный черный, гвозди столярные, стекло 6мм, нейлоновая нить",
        size: "55 x 55 x 47 см",
        price: 80
      },
      {
        id: "115",
        name: 'Стол "Нежность"',
        urlPotser: "../images/products/115/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        catId: ["00", "03"],
        available: false,
        material: "ДСП лакированный черный, гвозди столярные, стекло 6мм, нейлоновая нить",
        size: "55 x 55 x 47 см",
        price: 80
      },
      {
        id: "116",
        name: 'Стол "Стихия"',
        urlPotser: "../images/products/116/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        catId: ["00", "03"],
        available: false,
        material: "ДСП лакированный черный, гвозди столярные, стекло 6мм, нейлоновая нить",
        size: "55 x 55 x 47 см",
        price: 80
      },
      {
        id: "117",
        name: 'Панно "Love"',
        urlPotser: "../images/products/117/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 50
      },
      {
        id: "118",
        name: 'Логотип для ателье "I’m Atelier"',
        urlPotser: "../images/products/118/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 50
      },
      {
        id: "119",
        name: 'Панно "Rose"',
        urlPotser: "../images/products/119/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену, краска масляная",
        size: "40 x 10 см",
        price: 25
      },
      {
        id: "120",
        name: 'Панно "Emoji Pile of Poo"',
        urlPotser: "../images/products/120/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа фанера, гвозди, ирис нить, крепление на стену",
        size: "20 x 20 см",
        price: 15
      },
      {
        id: "121",
        name: 'Панно "Ero"',
        urlPotser: "../images/products/121/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "40 x 60 см",
        price: 100
      },
      {
        id: "122",
        name: 'Панно "Wine"',
        urlPotser: "../images/products/122/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа дерево, гвозди, нейлоновая нить, крепление на стену",
        size: "45 x 15 см",
        price: 15
      },
      {
        id: "123",
        name: 'Панно "Незнакомка"',
        urlPotser: "../images/products/123/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "55 x 55 см",
        price: 120
      },
      {
        id: "124",
        name: 'Панно "Хризантема"',
        urlPotser: "../images/products/124/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "01", "02"],
        available: false,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 60
      },
      {
        id: "125",
        name: 'Фоторамка  "Friends"',
        urlPotser: "../images/products/125/poster.jpg",
        urlGallery: ["/img/1.jpg"],
        catId: ["00", "04"],
        available: false,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену, 2 прищепки",
        size: "50 x 30 см",
        price: 40
      },
      {
        id: "126",
        name: 'Панно "Neon girl"',
        urlPotser: "../images/products/126/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "",
        size: "",
        price: 0
      },
      {
        id: "127",
        name: 'Панно "Sunrise"',
        urlPotser: "../images/products/127/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "01", "02"],
        available: true,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 40
      },
      {
        id: "128",
        name: 'Панно "Waterfall"',
        urlPotser: "../images/products/128/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "01", "02"],
        available: true,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 30 см",
        price: 40
      },
      {
        id: "129",
        name: 'Панно "Baby feet"',
        urlPotser: "../images/products/129/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "20 x 20 см",
        price: 15
      },
      {
        id: "130",
        name: 'Панно "Радуга"',
        urlPotser: "../images/products/130/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        catId: ["00", "01", "02"],
        available: true,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 60
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
      return state.byCat.slice(start, start + 9);
    }
  },
  actions: {
  },
  modules: {
  }
})
