(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-35935dd4"],{"0d31":function(t,s,e){t.exports=e.p+"img/poster.6f4b6d94.jpg"},"0e0d":function(t,s,e){"use strict";e.r(s);var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"page"},[o("div",{staticClass:"mainer"},[this.favouriteList.length?t._e():o("noData",{attrs:{text:"В данный момент в избранном ничего нет"}}),o("h1",{staticClass:"page__caption"},[t._v("Избранные товары")]),o("div",{staticClass:"row"},[t._l(t.favProducts,(function(s){return o("div",{key:s.id,staticClass:"col"},[o("router-link",{staticClass:"img-container",attrs:{tag:"div",to:"/product/"+s.id}},[s.discount>0?o("div",{staticClass:"tag tag--discount"},[t._v("-"+t._s(s.discount)+"%")]):t._e(),s.new?o("div",{staticClass:"tag tag--new"},[t._v("Новинка")]):t._e(),o("img",{staticClass:"img",attrs:{src:e("3c31")("./"+s.id+"/poster.jpg"),alt:s.name}})]),o("h3",{staticClass:"name"},[o("span",[t._v(t._s(s.name))])]),o("div",{staticClass:"size"},[t._v("Размер: "+t._s(s.size))]),o("div",{staticClass:"price"},[t._v(" "+t._s(s.price-s.price*s.discount/100)+" $ "),s.discount>0?o("s",{staticClass:"old-price"},[t._v(t._s(s.price)+" $")]):t._e()]),o("button",{staticClass:"btn btn--width",attrs:{type:"button"},on:{click:function(e){return t.addToBasket(s.id)}}},[t._v("Добавить в корзину")]),o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:function(e){return t.removeFromFavourites(s.id)}}},[o("svg",{staticClass:"svg-btn favourite"},[o("use",{attrs:{"xlink:href":e("4c1f")+"#heart"}})])])],1)})),o("div",{staticClass:"col empty"}),o("div",{staticClass:"col empty"})],2)],1),o("Aside"),o("svg",{staticClass:"svg svg--balloon"},[o("use",{attrs:{"xlink:href":e("4c1f")+"#balloon"}})]),o("svg",{staticClass:"svg svg--faces"},[o("use",{attrs:{"xlink:href":e("4c1f")+"#faces"}})])],1)},r=[],i=(e("c740"),e("a434"),e("a596")),n=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"modal"},[o("div",{staticClass:"modal-body"},[o("router-link",{staticClass:"btn-remove",attrs:{to:"/shop",tag:"a"}},[o("svg",{staticClass:"svg-remove"},[o("use",{attrs:{"xlink:href":e("4c1f")+"#remove"}})])]),o("div",{staticClass:"text"},[t._v(t._s(t.text))]),o("router-link",{staticClass:"btn btn--width",attrs:{to:"/shop",tag:"a"}},[t._v("Вернуться в магазин")]),o("svg",{staticClass:"svg svg--deer"},[o("use",{attrs:{"xlink:href":e("4c1f")+"#deer"}})]),o("svg",{staticClass:"svg svg--owl"},[o("use",{attrs:{"xlink:href":e("4c1f")+"#owl"}})])],1)])},p=[],a={props:["text"]},c=a,f=(e("1b9f"),e("2877")),g=Object(f["a"])(c,n,p,!1,null,"0936360c",null),u=g.exports,d={components:{noData:u,Aside:i["a"]},computed:{favProducts:function(){return this.$store.getters.getFavProducts},favouriteList:function(){return this.$store.state.favList}},methods:{removeFromFavourites:function(t){var s=this.favouriteList.findIndex((function(s){return s===t}));this.favouriteList.splice(s,1),this.$store.dispatch("toggleMyFavourite",this.favouriteList)}},created:function(){console.log(this.favouriteList)}},l=d,v=(e("da4c"),Object(f["a"])(l,o,r,!1,null,"08cf500f",null));s["default"]=v.exports},1201:function(t,s,e){t.exports=e.p+"img/poster.587a147d.jpg"},"1b9f":function(t,s,e){"use strict";var o=e("b64d"),r=e.n(o);r.a},"1d52":function(t,s,e){t.exports=e.p+"img/poster.f3c0480f.jpg"},"24a7":function(t,s,e){t.exports=e.p+"img/poster.3dc755c9.jpg"},2521:function(t,s,e){"use strict";var o=e("340f"),r=e.n(o);r.a},"340f":function(t,s,e){},"35b5":function(t,s,e){t.exports=e.p+"img/poster.33b7ad88.jpg"},"3c31":function(t,s,e){var o={"./101/poster.jpg":"c3d5","./102/poster.jpg":"d7eb","./103/poster.jpg":"ab9b","./105/poster.jpg":"74ef","./106/poster.jpg":"9467","./107/poster.jpg":"1201","./108/poster.jpg":"9556","./109/poster.jpg":"9659","./110/poster.jpg":"64cf","./111/poster.jpg":"8f3c","./112/poster.jpg":"0d31","./113/poster.jpg":"5a7d","./114/poster.jpg":"952a","./115/poster.jpg":"a8b0","./116/poster.jpg":"24a7","./117/poster.jpg":"65af","./118/poster.jpg":"de5a","./119/poster.jpg":"e314","./120/poster.jpg":"586b","./121/poster.jpg":"74c9","./122/poster.jpg":"b4f9","./123/poster.jpg":"1d52","./124/poster.jpg":"45d3","./125/poster.jpg":"ad63","./126/poster.jpg":"5688","./127/poster.jpg":"e3d9","./128/poster.jpg":"addf","./129/poster.jpg":"6a9a","./130/poster.jpg":"685b","./131/poster.jpg":"35b5"};function r(t){var s=i(t);return e(s)}function i(t){if(!e.o(o,t)){var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}return o[t]}r.keys=function(){return Object.keys(o)},r.resolve=i,t.exports=r,r.id="3c31"},4509:function(t,s,e){},"45d3":function(t,s,e){t.exports=e.p+"img/poster.5180efce.jpg"},5688:function(t,s,e){t.exports=e.p+"img/poster.5185b9e5.jpg"},"586b":function(t,s,e){t.exports=e.p+"img/poster.5b1f8029.jpg"},"5a7d":function(t,s,e){t.exports=e.p+"img/poster.eb261dcb.jpg"},"64cf":function(t,s,e){t.exports=e.p+"img/poster.f09763c9.jpg"},"65af":function(t,s,e){t.exports=e.p+"img/poster.b6084090.jpg"},"685b":function(t,s,e){t.exports=e.p+"img/poster.33b7ad88.jpg"},"6a9a":function(t,s,e){t.exports=e.p+"img/poster.6d56a459.jpg"},"74c9":function(t,s,e){t.exports=e.p+"img/poster.0b747de7.jpg"},"74ef":function(t,s,e){t.exports=e.p+"img/poster.f7181a5e.jpg"},"8f3c":function(t,s,e){t.exports=e.p+"img/poster.82dc7981.jpg"},9467:function(t,s,e){t.exports=e.p+"img/poster.6e53e94c.jpg"},"952a":function(t,s,e){t.exports=e.p+"img/poster.8dff33ec.jpg"},9556:function(t,s,e){t.exports=e.p+"img/poster.5c0df1a5.jpg"},9659:function(t,s,e){t.exports=e.p+"img/poster.c6e3ad77.jpg"},a434:function(t,s,e){"use strict";var o=e("23e7"),r=e("23cb"),i=e("a691"),n=e("50c4"),p=e("7b0b"),a=e("65f0"),c=e("8418"),f=e("1dde"),g=e("ae40"),u=f("splice"),d=g("splice",{ACCESSORS:!0,0:0,1:2}),l=Math.max,v=Math.min,b=9007199254740991,j="Maximum allowed length exceeded";o({target:"Array",proto:!0,forced:!u||!d},{splice:function(t,s){var e,o,f,g,u,d,m=p(this),x=n(m.length),h=r(t,x),C=arguments.length;if(0===C?e=o=0:1===C?(e=0,o=x-h):(e=C-2,o=v(l(i(s),0),x-h)),x+e-o>b)throw TypeError(j);for(f=a(m,o),g=0;g<o;g++)u=h+g,u in m&&c(f,g,m[u]);if(f.length=o,e<o){for(g=h;g<x-o;g++)u=g+o,d=g+e,u in m?m[d]=m[u]:delete m[d];for(g=x;g>x-o+e;g--)delete m[g-1]}else if(e>o)for(g=x-o;g>h;g--)u=g+o-1,d=g+e-1,u in m?m[d]=m[u]:delete m[d];for(g=0;g<e;g++)m[g+h]=arguments[g+2];return m.length=x-o+e,f}})},a596:function(t,s,e){"use strict";var o=function(){var t=this,s=t.$createElement,o=t._self._c||s;return o("div",{staticClass:"aside-btn"},[o("button",{staticClass:"btn",attrs:{type:"button"},on:{click:t.scrollTop}},[o("svg",{staticClass:"svg-btn"},[o("use",{attrs:{"xlink:href":e("4c1f")+"#arrowTop"}})])]),o("router-link",{staticClass:"btn btn--toContacts",attrs:{to:"/contacts",tag:"a"}},[t._v("Напишите нам, мы онлайн!")])],1)},r=[],i={methods:{scrollTop:function(){window.scrollTo({top:0,behavior:"smooth"})}}},n=i,p=(e("2521"),e("2877")),a=Object(p["a"])(n,o,r,!1,null,"127d1d36",null);s["a"]=a.exports},a8b0:function(t,s,e){t.exports=e.p+"img/poster.aa4dc0f1.jpg"},ab9b:function(t,s,e){t.exports=e.p+"img/poster.30720745.jpg"},ad63:function(t,s,e){t.exports=e.p+"img/poster.15e3e0e8.jpg"},addf:function(t,s,e){t.exports=e.p+"img/poster.1bbd2729.jpg"},b4f9:function(t,s,e){t.exports=e.p+"img/poster.dfd939d6.jpg"},b64d:function(t,s,e){},c3d5:function(t,s,e){t.exports=e.p+"img/poster.fb45eb65.jpg"},c740:function(t,s,e){"use strict";var o=e("23e7"),r=e("b727").findIndex,i=e("44d2"),n=e("ae40"),p="findIndex",a=!0,c=n(p);p in[]&&Array(1)[p]((function(){a=!1})),o({target:"Array",proto:!0,forced:a||!c},{findIndex:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}}),i(p)},d7eb:function(t,s,e){t.exports=e.p+"img/poster.b806c741.jpg"},da4c:function(t,s,e){"use strict";var o=e("4509"),r=e.n(o);r.a},de5a:function(t,s,e){t.exports=e.p+"img/poster.6bd213c0.jpg"},e314:function(t,s,e){t.exports=e.p+"img/poster.174f7ff0.jpg"},e3d9:function(t,s,e){t.exports=e.p+"img/poster.dda9ff18.jpg"}}]);
//# sourceMappingURL=chunk-35935dd4.e20f5be4.js.map