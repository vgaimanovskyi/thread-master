(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3a902aa4"],{"02c8":function(t,s,i){t.exports=i.p+"img/btnPrev.ea1ffdb9.svg"},"0440":function(t,s,i){"use strict";var a=i("f8fe"),o=i.n(a);o.a},3784:function(t,s,i){"use strict";var a=i("fdd7"),o=i.n(a);o.a},"54be":function(t,s,i){"use strict";var a=i("d6b6"),o=i.n(a);o.a},"61e0":function(t,s,i){},"857a":function(t,s,i){var a=i("1d80"),o=/"/g;t.exports=function(t,s,i,e){var c=String(a(t)),r="<"+s;return""!==i&&(r+=" "+i+'="'+String(e).replace(o,"&quot;")+'"'),r+">"+c+"</"+s+">"}},9911:function(t,s,i){"use strict";var a=i("23e7"),o=i("857a"),e=i("af03");a({target:"String",proto:!0,forced:e("link")},{link:function(t){return o(this,"a","href",t)}})},a596:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"aside-btn"},[a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.scrollTop}},[a("svg",{staticClass:"svg-btn"},[a("use",{attrs:{"xlink:href":i("4c1f")+"#arrowTop"}})])]),a("router-link",{staticClass:"btn btn--toContacts",attrs:{to:"/contacts",tag:"a"}},[t._v("Напишите нам, мы онлайн!")])],1)},o=[],e={methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},c=e,r=(i("54be"),i("2877")),n=Object(r["a"])(c,a,o,!1,null,"6070fb28",null);s["a"]=n.exports},af03:function(t,s,i){var a=i("d039");t.exports=function(t){return a((function(){var s=""[t]('"');return s!==s.toLowerCase()||s.split('"').length>3}))}},ca19:function(t,s,i){"use strict";var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"social-modal",on:{click:function(s){return s.target!==s.currentTarget?null:t.closeShare(s)}}},[a("div",{staticClass:"modal-body"},[a("button",{staticClass:"btn-remove",attrs:{type:"button"},on:{click:t.closeShare}},[a("svg",{staticClass:"svg-remove"},[a("use",{attrs:{"xlink:href":i("4c1f")+"#remove"}})])]),a("div",{staticClass:"social-block"},[a("h2",{staticClass:"social-block__caption"},[t._v("Поделиться с друзьями")]),a("ul",{staticClass:"social-block__list"},[a("li",{staticClass:"social-block__list-item"},[a("ShareNetwork",{staticClass:"social-block__link social-block__link--telegram",attrs:{network:"telegram",url:t.link,title:t.name,description:t.description}})],1),a("li",{staticClass:"social-block__list-item"},[a("ShareNetwork",{staticClass:"social-block__link social-block__link--pinterest",attrs:{network:"pinterest",url:t.link,title:t.name,media:t.media}})],1),a("li",{staticClass:"social-block__list-item"},[a("ShareNetwork",{staticClass:"social-block__link social-block__link--whatsapp",attrs:{network:"whatsapp",url:t.link,title:t.name,description:t.description}})],1),a("li",{staticClass:"social-block__list-item"},[a("ShareNetwork",{staticClass:"social-block__link social-block__link--viber",attrs:{network:"viber",url:t.link,title:t.name,description:t.description}})],1),a("li",{staticClass:"social-block__list-item"},[a("ShareNetwork",{staticClass:"social-block__link social-block__link--vk",attrs:{network:"vk",url:t.link,title:t.name,description:t.description,media:t.media}})],1),a("li",{staticClass:"social-block__list-item"},[a("ShareNetwork",{staticClass:"social-block__link social-block__link--fb",attrs:{network:"facebook",url:t.link,title:t.name,description:t.description,hashtags:"ThreadMaster,StringArt"}})],1),a("li",{staticClass:"social-block__list-item"},[a("ShareNetwork",{staticClass:"social-block__link social-block__link--gmail",attrs:{network:"email",url:t.link,title:t.name,description:t.description}})],1)]),a("div",{staticClass:"social-copy"},[a("input",{staticClass:"social-copy__link",class:{"social-copy__link--valid":t.copyValid,"social-copy__link--error":t.copyError},attrs:{type:"text"},domProps:{value:t.link}}),a("button",{staticClass:"social-copy__btn",attrs:{type:"button"},on:{click:function(s){return t.copyLink(t.link)}}},[a("svg",{staticClass:"social-copy__svg",class:{"social-copy__svg--valid":t.copyValid,"social-copy__svg--error":t.copyError}},[a("use",{attrs:{"xlink:href":i("4c1f")+"#copy"}})])])])]),a("svg",{staticClass:"svg svg--leptop"},[a("use",{attrs:{"xlink:href":i("4c1f")+"#leptop"}})]),a("svg",{staticClass:"svg svg--pineapple"},[a("use",{attrs:{"xlink:href":i("4c1f")+"#pineapple"}})])])])},o=[],e=(i("a4d3"),i("e01a"),i("9911"),{props:["link","name","description","media"],data:function(){return{copyValid:!1,copyError:!1}},methods:{closeShare:function(){this.$emit("closeShare")},copyLink:function(t){var s=this;navigator.clipboard.writeText(t).then((function(){s.copyValid=!0})).catch((function(t){s.copyError=!0,console.log("Something went wrong",t)})),setTimeout((function(){s.copyValid=!1,s.copyError=!1}),5e3)}},created:function(){console.log(this.link,this.description)}}),c=e,r=(i("3784"),i("2877")),n=Object(r["a"])(c,a,o,!1,null,"684078c5",null);s["a"]=n.exports},d2f1:function(t,s,i){"use strict";i.r(s);var a=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"page"},[a("div",{staticClass:"mainer"},[t.modal?a("Photo",{attrs:{resizePath:t.resizePath},on:{closeModal:function(s){t.modal=!t.modal}}}):t._e(),t.share?a("Share",{attrs:{link:t.link,description:t.product.description,name:t.product.name,media:t.media},on:{closeShare:function(s){t.share=!1}}}):t._e(),a("router-link",{attrs:{tag:"a",to:"/shop",title:"Назад"}},[a("span",{staticClass:"link-back"})]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("carousel",{staticClass:"carousel",attrs:{perPage:1,paginationEnabled:!0,paginationActiveColor:"#FFC120",paginationColor:"rgba(255, 193, 32, 0.3)",paginationSize:15,paginationPadding:5,adjustableHeight:!0}},t._l(t.product.urlShop,(function(s,o){return a("slide",{key:o},[a("div",{staticClass:"slide-block"},[a("div",{staticClass:"btn-conteiner"},[a("svg",{staticClass:"svg-btn",attrs:{title:"Поделиться"},on:{click:function(i){return t.openShare(s)}}},[a("use",{attrs:{"xlink:href":i("4c1f")+"#share"}})])]),a("div",{staticClass:"btn-conteiner btn-conteiner--right"},[a("router-link",{staticClass:"svg-btn svg-btn--back",attrs:{tag:"svg",title:"Назад",to:"/shop"}},[a("use",{attrs:{"xlink:href":i("4c1f")+"#remove"}})]),a("svg",{staticClass:"svg-btn svg-btn--zoom",attrs:{title:"Увеличить"},on:{click:function(s){return t.resizePhoto(o)}}},[a("use",{attrs:{"xlink:href":i("4c1f")+"#resize"}})])],1),a("div",{staticClass:"img-block"},[a("img",{staticClass:"img-block__photo",attrs:{alt:t.product.name,src:s}})])])])})),1)],1),a("div",{staticClass:"col col--width"},[a("div",{staticClass:"product"},[a("div",{staticClass:"product__available"},[t.product.available?a("span",[t._v("Есть в наличии")]):a("span",[t._v("Под заказ")])]),a("h1",{staticClass:"product__name"},[t._v(t._s(t.product.name))]),a("div",{staticClass:"product__price"},[t._v(" "+t._s(t.product.price-t.product.price*t.product.discount/100)+" $ "),t.product.discount>0?a("s",{staticClass:"product__old-price"},[t._v(t._s(t.product.price)+" $")]):t._e()]),a("div",{staticClass:"accordion"},[a("div",{staticClass:"accordion-tabs"},[a("span",{staticClass:"accordion-tabs__tab",class:{active:t.accordionTabDesc},on:{click:function(s){t.accordionTabDesc=!0,t.accordionTabParams=!1}}},[t._v("Описание")]),a("span",{staticClass:"accordion-tabs__tab",class:{active:t.accordionTabParams},on:{click:function(s){t.accordionTabDesc=!1,t.accordionTabParams=!0}}},[t._v("Характеристики")])]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.accordionTabDesc,expression:"accordionTabDesc"}],staticClass:"accordion-info"},[t._v(" "+t._s(t.product.description)+" ")]),a("div",{directives:[{name:"show",rawName:"v-show",value:t.accordionTabParams,expression:"accordionTabParams"}],staticClass:"accordion-info"},[a("span",{staticClass:"accordion-info__parameters"},[a("b",[t._v("Размер:")]),t._v(" "+t._s(t.product.size)+" ")]),a("span",{staticClass:"accordion-info__parameters"},[a("b",[t._v("Материал:")]),t._v(" "+t._s(t.product.material)+" ")])])]),a("div",{staticClass:"controls"},[a("div",{staticClass:"counter"},[a("button",{staticClass:"counter__btn",attrs:{type:"button",disabled:0===t.counter},on:{click:function(s){t.counter--}}},[t._v(" - ")]),a("span",{staticClass:"counter__number"},[t._v(t._s(t.counter))]),a("button",{staticClass:"counter__btn",attrs:{type:"button",disabled:9===t.counter},on:{click:function(s){t.counter++}}},[t._v(" + ")])]),a("button",{staticClass:"btn btn--width",attrs:{type:"button",disabled:0===t.counter},on:{click:t.addToCart}},[t._v(" "+t._s(t.btnText)+" ")]),a("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(s){return t.toggleFavourites(t.product.id)}}},[a("svg",{staticClass:"svg-btn",class:{favourite:t.isFavourite>-1}},[a("use",{attrs:{"xlink:href":i("4c1f")+"#heart"}})])])])])])]),a("h2",{staticClass:"caption"},[t._v("Похожие продукты")]),a("carousel",{staticClass:"similar-carousel",attrs:{perPage:t.perPage,loop:!0,mouseDrag:t.mouseDrag,paginationEnabled:!1,navigationEnabled:t.navEnabled,navigationClickTargetSize:0,navigationPrevLabel:t.prevBtn,navigationNextLabel:t.nextBtn}},t._l(t.similarProducts,(function(s){return a("slide",{key:s.id},[a("div",{staticClass:"similar-slide"},[a("router-link",{staticClass:"img-container",attrs:{tag:"div",to:"/product/"+s.id}},[s.discount>0?a("div",{staticClass:"tag tag--discount"},[t._v(" -"+t._s(s.discount)+"% ")]):t._e(),s.new?a("div",{staticClass:"tag tag--new"},[t._v("Новинка")]):t._e(),a("img",{staticClass:"img",attrs:{src:s.urlPoster,alt:s.name}})]),a("h3",{staticClass:"name"},[a("span",[t._v(t._s(s.name))])]),a("div",{staticClass:"size"},[t._v("Размер: "+t._s(s.size))]),a("div",{staticClass:"price"},[t._v(" "+t._s(s.price-s.price*s.discount/100)+" $ "),s.discount>0?a("s",{staticClass:"old-price"},[t._v(t._s(s.price)+" $")]):t._e()])],1)])})),1)],1),t.asideShow?a("Aside"):t._e(),t.cart?a("Cart",{on:{closeModal:function(s){t.cart=!1}}}):t._e(),a("svg",{staticClass:"svg svg--bird"},[a("use",{attrs:{"xlink:href":i("4c1f")+"#bird"}})]),a("svg",{staticClass:"svg svg--whale"},[a("use",{attrs:{"xlink:href":i("4c1f")+"#whale"}})]),a("svg",{staticClass:"svg svg--pineapple"},[a("use",{attrs:{"xlink:href":i("4c1f")+"#pineapple"}})])],1)},o=[],e=(i("c975"),i("a434"),i("b0c0"),i("96cf"),i("1da1")),c=i("fc2d"),r=i.n(c),n=i("02c8"),l=i.n(n),u=function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"modal",on:{click:function(s){return s.target!==s.currentTarget?null:t.closeModal(s)}}},[a("div",{staticClass:"mainer"},[a("div",{staticClass:"slide-block"},[a("div",{staticClass:"btn-conteiner",attrs:{title:"Закрыть"}},[a("svg",{staticClass:"svg-btn",on:{click:t.closeModal}},[a("use",{attrs:{"xlink:href":i("4c1f")+"#remove"}})])]),a("img",{staticClass:"img",attrs:{src:t.resizePath}})])])])},d=[],p={name:"photo",props:["resizePath"],methods:{closeModal:function(){this.$emit("closeModal")},scrollTop:function(){window.scrollTo({top:0})}},created:function(){this.scrollTop()}},v=p,h=(i("de54"),i("2877")),_=Object(h["a"])(v,u,d,!1,null,"880cca04",null),f=_.exports,b=i("a596"),g=i("3eaf"),k=i("0a63"),m=i("ca19"),C={components:{Photo:f,Aside:b["a"],Cart:g["a"],Carousel:k["Carousel"],Slide:k["Slide"],Share:m["a"]},metaInfo:{title:"Товар"},data:function(){return{id:this.$route.params["id"],counter:1,accordionTabDesc:!0,accordionTabParams:!1,modal:!1,resizePath:"",cart:!1,share:!1,media:"",link:window.location.href,autoplay:!1}},computed:{product:function(){return this.$store.getters.getProductById},similarProducts:function(){return this.$store.getters.sliceProducts(0)},favouriteList:function(){return this.$store.getters.getFavList},isFavourite:function(){return this.favouriteList.indexOf(this.id)},nextBtn:function(){return'<img src="'.concat(r.a,'"/>')},prevBtn:function(){return'<img src="'.concat(l.a,'"/>')},mouseDrag:function(){return window.innerWidth<992},navEnabled:function(){return window.innerWidth<480||!(window.innerWidth<992)},perPage:function(){return window.innerWidth<480?1:window.innerWidth<768?2:3},asideShow:function(){return!(window.innerWidth<576)},btnText:function(){return window.innerWidth<375?"В корзину":"Добавить в корзину"}},methods:{resizePhoto:function(t){this.resizePath=this.product.urlGallery[t],this.modal=!0},toggleFavourites:function(t){this.isFavourite>-1?(this.favouriteList.splice(this.isFavourite,1),this.$store.dispatch("toggleMyFavourite",this.favouriteList)):this.favouriteList?(this.favouriteList.push(t),this.$store.dispatch("toggleMyFavourite",this.favouriteList)):this.$store.dispatch("toggleMyFavourite",[t])},addToCart:function(){var t=this.product.price-this.product.price*this.product.discount/100,s={id:this.product.id,name:this.product.name,urlPoster:this.product.urlPoster,price:t,count:this.counter};this.$store.dispatch("addToCart",s),this.cart=!0,this.counter=1},openShare:function(t){this.media=t,this.share=!0},scrollTop:function(){window.scrollTo({top:0})}},created:function(){var t=this;return Object(e["a"])(regeneratorRuntime.mark((function s(){var i;return regeneratorRuntime.wrap((function(s){while(1)switch(s.prev=s.next){case 0:if(!t.$store.getters.noProducts){s.next=3;break}return s.next=3,t.$store.dispatch("fetchAllProducts");case 3:t.$store.dispatch("getProductById",t.id),i=t.product.catId[1],t.$store.dispatch("getProductsByCategory",i),t.scrollTop();case 7:case"end":return s.stop()}}),s)})))()},watch:{$route:function(t){this.id=t.params["id"],this.$store.dispatch("getProductById",this.id),this.scrollTop()}}},w=C,y=(i("0440"),Object(h["a"])(w,a,o,!1,null,"e115ccda",null));s["default"]=y.exports},d6b6:function(t,s,i){},de54:function(t,s,i){"use strict";var a=i("61e0"),o=i.n(a);o.a},f8fe:function(t,s,i){},fc2d:function(t,s,i){t.exports=i.p+"img/btnNext.5ca842d0.svg"},fdd7:function(t,s,i){}}]);
//# sourceMappingURL=chunk-3a902aa4.df13cbb8.js.map