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
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg", "/shop/4.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "56,5 x 48 см",
        price: 65,
        discount: 50,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "102",
        name: 'Панно "Girl"',
        urlPotser: "../images/products/102/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "58 x 49,5 см",
        price: 65,
        discount: 0,
        new: true,
        description: "Lorem ipsum dolor consectetur adipisicing elit. Voluptatem consequatur asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "103",
        name: 'Панно "King & Queen"',
        urlPotser: "../images/products/103/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg", "/shop/4.jpg", "/shop/5.jpg", "/shop/6.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "18 x 46 см",
        price: 20,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "105",
        name: 'Фоторамка "I love you"',
        urlPotser: "../images/products/105/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/img/3.jpg"],
        catId: ["00", "04"],
        available: true,
        material: "основа дерево, гвозди, нейлоновая нить, крепление на стену, 2 прищепки-сердечка",
        size: "45 x 15 см",
        price: 15,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "106",
        name: 'Панно "Вихрь"',
        urlPotser: "../images/products/106/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/img/3.jpg"],
        catId: ["00", "01", "02"],
        available: false,
        material: "основа фанера, гвозди, люминесцентная нить, крепление на стену",
        size: "50 x 50 см",
        price: 50,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "107",
        name: 'Панно "Ом"',
        urlPotser: "../images/products/107/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа фанера, покрытая морилкой, гвозди, нейлоновая нить, крепление на стену",
        size: "20 x 20 см",
        price: 20,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "108",
        name: 'Панно "YES"',
        urlPotser: "../images/products/108/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg", "/shop/4.jpg", "/shop/5.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "35 x 55 см",
        price: 60,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "109",
        name: 'Панно "Ловец снов"',
        urlPotser: "../images/products/109/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg", "/shop/4.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену, перья, бусины",
        size: "20 x 20 см",
        price: 25,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "110",
        name: 'Декоративное панно "Синяя клетка"',
        urlPotser: "../images/products/110/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg"],
        catId: ["00", "01", "02"],
        available: true,
        material: "фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "30 x 30 см",
        price: 30,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "111",
        name: 'Панно "Emoji smile"',
        urlPotser: "../images/products/111/poster.jpg",
        urlGallery: ["/img/1.jpg"],
        urlShop: ["/shop/1.jpg"],
        catId: ["00", "02"],
        available: true,
        material: "основа фанера, гвозди, ирис нить, крепление на стену",
        size: "20 x 20 см",
        price: 15,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "112",
        name: 'Панно-картины "Dinosaurs"',
        urlPotser: "../images/products/112/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg", "/img/5.jpg", "/img/6.jpg", "/img/7.jpg", "/img/8.jpg", "/img/9.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg", "/shop/4.jpg", "/shop/5.jpg", "/shop/6.jpg", "/shop/7.jpg", "/shop/8.jpg", "/shop/9.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа фанера, гвозди, нить, крепление на стену",
        size: "35 x 35 см",
        price: 20,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "113",
        name: 'Стол "Player"',
        urlPotser: "../images/products/113/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg"],
        catId: ["00", "03"],
        available: true,
        material: "ДСП лакированный черный, гвозди столярные, стекло 6мм, нейлоновая нить",
        size: "55 x 55 x 47 см",
        price: 80,
        discount: 0,
        new: false,
        description: "Стильный журнальный столик – одно из главных украшений любой гостиной. Столик, выполненный в стиле стринг арт, поможет наиболее выгодно подчеркнуть изысканность вашего вкуса."
      },
      {
        id: "114",
        name: 'Стол "Sun"',
        urlPotser: "../images/products/114/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg", "/shop/4.jpg"],
        catId: ["00", "03"],
        available: true,
        material: "ДСП лакированный черный, гвозди столярные, стекло 6мм, нейлоновая нить",
        size: "55 x 55 x 47 см",
        price: 80,
        discount: 0,
        new: false,
        description: "Стильный журнальный столик – одно из главных украшений любой гостиной. Столик, выполненный в стиле стринг арт, поможет наиболее выгодно подчеркнуть изысканность вашего вкуса."
      },
      {
        id: "115",
        name: 'Стол "Нежность"',
        urlPotser: "../images/products/115/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg", "/img/4.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg", "/shop/4.jpg"],
        catId: ["00", "03"],
        available: false,
        material: "ДСП лакированный черный, гвозди столярные, стекло 6мм, нейлоновая нить",
        size: "55 x 55 x 47 см",
        price: 80,
        discount: 0,
        new: false,
        description: "Стильный журнальный столик – одно из главных украшений любой гостиной. Столик, выполненный в стиле стринг арт, поможет наиболее выгодно подчеркнуть изысканность вашего вкуса."
      },
      {
        id: "116",
        name: 'Стол "Стихия"',
        urlPotser: "../images/products/116/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg"],
        catId: ["00", "03"],
        available: false,
        material: "ДСП лакированный черный, гвозди столярные, стекло 6мм, нейлоновая нить",
        size: "55 x 55 x 47 см",
        price: 80,
        discount: 0,
        new: false,
        description: "Стильный журнальный столик – одно из главных украшений любой гостиной. Столик, выполненный в стиле стринг арт, поможет наиболее выгодно подчеркнуть изысканность вашего вкуса."
      },
      {
        id: "117",
        name: 'Панно "Love"',
        urlPotser: "../images/products/117/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 50,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "118",
        name: 'Логотип для ателье "I’m Atelier"',
        urlPotser: "../images/products/118/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 50,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "119",
        name: 'Панно "Rose"',
        urlPotser: "../images/products/119/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену, краска масляная",
        size: "40 x 10 см",
        price: 25,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "120",
        name: 'Панно "Emoji Pile of Poo"',
        urlPotser: "../images/products/120/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа фанера, гвозди, ирис нить, крепление на стену",
        size: "20 x 20 см",
        price: 15,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "121",
        name: 'Панно "Ero"',
        urlPotser: "../images/products/121/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "40 x 60 см",
        price: 100,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "122",
        name: 'Панно "Wine"',
        urlPotser: "../images/products/122/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа дерево, гвозди, нейлоновая нить, крепление на стену",
        size: "45 x 15 см",
        price: 15,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "123",
        name: 'Панно "Незнакомка"',
        urlPotser: "../images/products/123/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа ЛДСП, гвозди, нейлоновая нить, крепление на стену",
        size: "55 x 55 см",
        price: 120,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "124",
        name: 'Панно "Хризантема"',
        urlPotser: "../images/products/124/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "01", "02"],
        available: false,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 60,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "125",
        name: 'Фоторамка  "Friends"',
        urlPotser: "../images/products/125/poster.jpg",
        urlGallery: ["/img/1.jpg"],
        urlShop: ["/shop/1.jpg"],
        catId: ["00", "04"],
        available: false,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену, 2 прищепки",
        size: "50 x 30 см",
        price: 40,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "126",
        name: 'Панно "Neon girl"',
        urlPotser: "../images/products/126/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg", "/img/3.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg", "/shop/3.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "",
        size: "",
        price: 0,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "127",
        name: 'Панно "Sunrise"',
        urlPotser: "../images/products/127/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "01", "02"],
        available: true,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 40,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "128",
        name: 'Панно "Waterfall"',
        urlPotser: "../images/products/128/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "01", "02"],
        available: true,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 30 см",
        price: 40,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "129",
        name: 'Панно "Baby feet"',
        urlPotser: "../images/products/129/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "02"],
        available: false,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "20 x 20 см",
        price: 15,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
      {
        id: "130",
        name: 'Панно "Радуга"',
        urlPotser: "../images/products/130/poster.jpg",
        urlGallery: ["/img/1.jpg", "/img/2.jpg"],
        urlShop: ["/shop/1.jpg", "/shop/2.jpg"],
        catId: ["00", "01", "02"],
        available: true,
        material: "основа фанера, гвозди, нейлоновая нить, крепление на стену",
        size: "50 x 50 см",
        price: 60,
        discount: 0,
        new: false,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem consequatur laboriosam architecto voluptatum asperiores blanditiis qui. Beatae fugit quis delectus!"
      },
    ],
    videos: [
      {
        id: "901",
        video: "LU8O_f4b0KM",
        name: "String art Erotic Girl 2",
        catId: ["00", "09"],
      },
      {
        id: "902",
        video: "it-jd2gpvlk",
        name: "String art Neon Girl",
        catId: ["00", "09"],
      },
      {
        id: "903",
        video: "Ec3VWZjbjSg",
        name: "String art Love",
        catId: ["00", "09"],
      },
      {
        id: "904",
        video: "281K4VhzV90",
        name: "String art Erotic girl (ultraviolet threads)",
        catId: ["00", "09"],
      },
      {
        id: "905",
        video: "tnK1W19nmvg",
        name: "String art Tornado DIY",
        catId: ["00", "09"],
      },
      {
        id: "906",
        video: "_1mbD9e4ukY",
        name: "String Art Handmade Table",
        catId: ["00", "09"],
      },
      {
        id: "907",
        video: "txEd6LV5RD8",
        name: "String art Sexy Girl",
        catId: ["00", "09"],
      },
      {
        id: "908",
        video: "E8OPy2k0-to",
        name: "String art Lady in hat",
        catId: ["00", "09"],
      },
      {
        id: "909",
        video: "ZGwju6ISG-A",
        name: "String art Two elements Tutorial",
        catId: ["00", "09"],
      },
      {
        id: "910",
        video: "lWDniDw2RBM",
        name: "Redesign. How to make string art abstract!?",
        catId: ["00", "09"],
      },
      {
        id: "911",
        video: "upqshU_712U",
        name: "String Art King",
        catId: ["00", "09"],
      },
      {
        id: "912",
        video: "JJp2Cg4i5uQ",
        name: "String art Queen Heart",
        catId: ["00", "09"],
      },
      {
        id: "913",
        video: "GDLlFQfuldA",
        name: "String art panno baby feet",
        catId: ["00", "09"],
      },
      {
        id: "914",
        video: "XEglkn6Se7g",
        name: "String art Love",
        catId: ["00", "09"],
      },
      {
        id: "915",
        video: "c10iGlbLdh0",
        name: "String art Panda",
        catId: ["00", "09"],
      },
      {
        id: "916",
        video: "xdlIJTinKGk",
        name: "String art Stranger",
        catId: ["00", "09"],
      },
      {
        id: "917",
        video: "Ttt1-Jl29iI",
        name: "Stringart heart",
        catId: ["00", "09"],
      },
      {
        id: "918",
        video: "IIgRXF5ZJ54",
        name: "Stringart Always Say YES",
        catId: ["00", "09"],
      },
      {
        id: "919",
        video: "u0ZniTy_XvE",
        name: "Stringart abstract",
        catId: ["00", "09"],
      },
      {
        id: "920",
        video: "jB0yGGmSCW0",
        name: "string art Inspiration",
        catId: ["00", "09"],
      },
      {
        id: "921",
        video: "o5m9hrrwScI",
        name: "String art Flower Lotos",
        catId: ["00", "09"],
      },
      {
        id: "922",
        video: "bTYLSQqYu14",
        name: "DIY STRING ART WORKSHOP",
        catId: ["00", "09"],
      },
      {
        id: "923",
        video: "opt6PCGP-bY",
        name: "how to make STRING ART Wall decor",
        catId: ["00", "09"],
      },
      {
        id: "924",
        video: "QpoVzRdPYLQ",
        name: "Из чего это сделано: Ручка- сделай сам.",
        catId: ["00", "09"],
      },
      {
        id: "925",
        video: "1lZa2Mi2KsA",
        name: "STRING ART Sweet Dream",
        catId: ["00", "09"],
      },
      {
        id: "926",
        video: "iQDQpgBTy0o",
        name: "STRING ART Paradise flower",
        catId: ["00", "09"],
      },
      {
        id: "927",
        video: "NBd7mgAxuNI",
        name: "STRING ART Tranquillity",
        catId: ["00", "09"],
      },
      {
        id: "928",
        video: "fers-ipiSrA",
        name: "STRING ART Magic eye",
        catId: ["00", "09"],
      },
      {
        id: "929",
        video: "9xOMUvz6LpM",
        name: "String art INFINITY LOVE",
        catId: ["00", "09"],
      },
      {
        id: "930",
        video: "gCUzzVgsolc",
        name: "How to make string art DIY 'Dreamcatcher'",
        catId: ["00", "09"],
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
      /* {
        id: "05",
        name: "разное"
      }, */
      {
        id: "09",
        name: "видео"
      }
    ],
    byCat: [],
    favList: [],
    cartList: [],
    order: {},
    product: {},
    search: []
  },
  mutations: {
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
    SEND_NEW_ORDER(state, payload) {
      state.order = payload;
      console.log(state.order);
    },
    SEARCH_IN_PRODUCTS(state, payload) {
      state.search = state.products.filter(product => product.name.toLowerCase().indexOf(payload) > -1);
      console.log(state.search)
    }
  },
  actions: {
    getProductsByCategory({ commit }, payload) {
      commit("PRODUCTS_BY_CATEGORY", payload.toLowerCase())
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
    sendOrder({ commit }, payload) {
      commit("CLEAR_MY_CART");
      commit("SEND_NEW_ORDER", payload);
    },
    useSearch({ commit }, payload) {
      commit("SEARCH_IN_PRODUCTS", payload);
    }
  },
  getters: {
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
    }
  },
  modules: {
  }
})
