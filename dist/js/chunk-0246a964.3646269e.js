(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0246a964"],{"0e0d":function(t,s,a){"use strict";a.r(s);var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"page"},[i("div",{staticClass:"mainer"},[i("h1",{staticClass:"page__caption"},[t._v("Избранные товары")]),i("div",{staticClass:"row"},[t._l(t.favProducts,(function(s){return i("div",{key:s.id,staticClass:"col"},[i("router-link",{staticClass:"img-container",attrs:{tag:"div",to:"/product/"+s.id}},[s.discount>0?i("div",{staticClass:"tag tag--discount"},[t._v("-"+t._s(s.discount)+"%")]):t._e(),s.new?i("div",{staticClass:"tag tag--new"},[t._v("Новинка")]):t._e(),i("img",{staticClass:"img",attrs:{src:a("3c31")("./"+s.id+"/poster.jpg"),alt:s.name}})]),i("h3",{staticClass:"name"},[i("span",[t._v(t._s(s.name))])]),i("div",{staticClass:"size"},[t._v("Размер: "+t._s(s.size))]),i("div",{staticClass:"price"},[t._v(" "+t._s(s.price-s.price*s.discount/100)+" $ "),s.discount>0?i("s",{staticClass:"old-price"},[t._v(t._s(s.price)+" $")]):t._e()]),i("div",{staticClass:"btn-container"},[i("button",{staticClass:"btn btn--width",attrs:{type:"button"},on:{click:function(a){return t.addToCart(s.id)}}},[t._v("Добавить в корзину")]),i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(a){return t.removeFromFavourites(s.id)}}},[i("svg",{staticClass:"svg-btn favourite"},[i("use",{attrs:{"xlink:href":a("4c1f")+"#heart"}})])])])],1)})),i("div",{staticClass:"col empty"}),i("div",{staticClass:"col empty"})],2)]),i("Aside"),i("svg",{staticClass:"svg svg--balloon"},[i("use",{attrs:{"xlink:href":a("4c1f")+"#balloon"}})]),i("svg",{staticClass:"svg svg--faces"},[i("use",{attrs:{"xlink:href":a("4c1f")+"#faces"}})])],1)},e=[],n=(a("c740"),a("a434"),a("a596")),c={components:{Aside:n["a"]},computed:{favProducts:function(){return this.$store.getters.getFavProducts},favouriteList:function(){return this.$store.getters.getFavList}},methods:{removeFromFavourites:function(t){var s=this.favouriteList.findIndex((function(s){return s===t}));this.favouriteList.splice(s,1),this.$store.dispatch("toggleMyFavourite",this.favouriteList)}},created:function(){console.log(this.favouriteList)}},o=c,r=(a("8c00"),a("2877")),l=Object(r["a"])(o,i,e,!1,null,"1594f7a4",null);s["default"]=l.exports},"6f64":function(t,s,a){},8308:function(t,s,a){"use strict";var i=a("b951"),e=a.n(i);e.a},"8c00":function(t,s,a){"use strict";var i=a("6f64"),e=a.n(i);e.a},a596:function(t,s,a){"use strict";var i=function(){var t=this,s=t.$createElement,i=t._self._c||s;return i("div",{staticClass:"aside-btn"},[i("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.scrollTop}},[i("svg",{staticClass:"svg-btn"},[i("use",{attrs:{"xlink:href":a("4c1f")+"#arrowTop"}})])]),i("router-link",{staticClass:"btn btn--toContacts",attrs:{to:"/contacts",tag:"a"}},[t._v("Напишите нам, мы онлайн!")])],1)},e=[],n={methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=n,o=(a("8308"),a("2877")),r=Object(o["a"])(c,i,e,!1,null,"45ef8d5e",null);s["a"]=r.exports},b951:function(t,s,a){}}]);
//# sourceMappingURL=chunk-0246a964.3646269e.js.map