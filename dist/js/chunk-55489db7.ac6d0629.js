(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-55489db7"],{"0481":function(e,t,r){"use strict";var a=r("23e7"),i=r("a2bf"),n=r("7b0b"),s=r("50c4"),o=r("a691"),u=r("65f0");a({target:"Array",proto:!0},{flat:function(){var e=arguments.length?arguments[0]:void 0,t=n(this),r=s(t.length),a=u(t,0);return a.length=i(a,t,t,r,0,void 0===e?1:o(e)),a}})},1331:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=i},"2a12":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"maxLength",max:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)<=e}))};t.default=i},"303f":function(e,t,r){},3360:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"and"},(function(){for(var e=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t&&r.apply(e,a)}),!0)}))};t.default=i},"3a54":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=i},4069:function(e,t,r){var a=r("44d2");a("flat")},"45b8":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("numeric",/^[0-9]*$/);t.default=i},"46bc":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"maxValue",max:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=i},5319:function(e,t,r){"use strict";var a=r("d784"),i=r("825a"),n=r("7b0b"),s=r("50c4"),o=r("a691"),u=r("1d80"),l=r("8aa5"),c=r("14c3"),d=Math.max,f=Math.min,v=Math.floor,m=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,p=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,r,a){var y=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,_=y?"$":"$0";return[function(r,a){var i=u(this),n=void 0==r?void 0:r[e];return void 0!==n?n.call(r,i,a):t.call(String(i),r,a)},function(e,a){if(!y&&b||"string"===typeof a&&-1===a.indexOf(_)){var n=r(t,e,this,a);if(n.done)return n.value}var u=i(e),v=String(this),m="function"===typeof a;m||(a=String(a));var h=u.global;if(h){var $=u.unicode;u.lastIndex=0}var w=[];while(1){var C=c(u,v);if(null===C)break;if(w.push(C),!h)break;var O=String(C[0]);""===O&&(u.lastIndex=l(v,s(u.lastIndex),$))}for(var x="",L=0,P=0;P<w.length;P++){C=w[P];for(var k=String(C[0]),N=d(f(o(C.index),v.length),0),j=[],q=1;q<C.length;q++)j.push(p(C[q]));var A=C.groups;if(m){var S=[k].concat(j,N,v);void 0!==A&&S.push(A);var M=String(a.apply(void 0,S))}else M=g(k,v,N,j,A,a);N>=L&&(x+=v.slice(L,N)+M,L=N+k.length)}return x+v.slice(L)}];function g(e,r,a,i,s,o){var u=a+e.length,l=i.length,c=h;return void 0!==s&&(s=n(s),c=m),t.call(o,c,(function(t,n){var o;switch(n.charAt(0)){case"$":return"$";case"&":return e;case"`":return r.slice(0,a);case"'":return r.slice(u);case"<":o=s[n.slice(1,-1)];break;default:var c=+n;if(0===c)return t;if(c>l){var d=v(c/10);return 0===d?t:d<=l?void 0===i[d-1]?n.charAt(1):i[d-1]+n.charAt(1):t}o=i[c-1]}return void 0===o?"":o}))}}))},"5d75":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,n=(0,a.regex)("email",i);t.default=n},"5db3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"minLength",min:e},(function(t){return!(0,a.req)(t)||(0,a.len)(t)>=e}))};t.default=i},6235:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("alpha",/^[a-zA-Z]*$/);t.default=i},6417:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"not"},(function(t,r){return!(0,a.req)(t)||!e.call(this,t,r)}))};t.default=i},6547:function(e,t,r){var a=r("a691"),i=r("1d80"),n=function(e){return function(t,r){var n,s,o=String(i(t)),u=a(r),l=o.length;return u<0||u>=l?e?"":void 0:(n=o.charCodeAt(u),n<55296||n>56319||u+1===l||(s=o.charCodeAt(u+1))<56320||s>57343?e?o.charAt(u):n:e?o.slice(u,u+2):s-56320+(n-55296<<10)+65536)}};e.exports={codeAt:n(!1),charAt:n(!0)}},"772d":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,n=(0,a.regex)("url",i);t.default=n},"78ef":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return a.default}}),t.regex=t.ref=t.len=t.req=void 0;var a=i(r("8750"));function i(e){return e&&e.__esModule?e:{default:e}}function n(e){return n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}var s=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===n(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=s;var o=function(e){return Array.isArray(e)?e.length:"object"===n(e)?Object.keys(e).length:String(e).length};t.len=o;var u=function(e,t,r){return"function"===typeof e?e.call(t,r):r[e]};t.ref=u;var l=function(e,t){return(0,a.default)({type:e},(function(e){return!s(e)||t.test(e)}))};t.regex=l},"7f20":function(e,t,r){"use strict";var a=r("303f"),i=r.n(a);i.a},8750:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a="web"===Object({NODE_ENV:"production",BASE_URL:"/thread-master/"}).BUILD?r("cb69").withParams:r("0234").withParams,i=a;t.default=i},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},"91d3":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,a.withParams)({type:"macAddress"},(function(t){if(!(0,a.req)(t))return!0;if("string"!==typeof t)return!1;var r="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==r&&(6===r.length||8===r.length)&&r.every(n)}))};t.default=i;var n=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},a2bf:function(e,t,r){"use strict";var a=r("e8b5"),i=r("50c4"),n=r("0366"),s=function(e,t,r,o,u,l,c,d){var f,v=u,m=0,h=!!c&&n(c,d,3);while(m<o){if(m in r){if(f=h?h(r[m],m,t):r[m],l>0&&a(f))v=s(e,t,f,i(f.length),v,l-1)-1;else{if(v>=9007199254740991)throw TypeError("Exceed the acceptable array length");e[v]=f}v++}m++}return v};e.exports=s},aa82:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"requiredIf",prop:e},(function(t,r){return!(0,a.ref)(e,this,r)||(0,a.req)(t)}))};t.default=i},b5ae:function(e,t,r){"use strict";function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return h.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return g.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return $.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return w.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return O.default}}),t.helpers=void 0;var i=k(r("6235")),n=k(r("3a54")),s=k(r("45b8")),o=k(r("ec11")),u=k(r("5d75")),l=k(r("c99d")),c=k(r("91d3")),d=k(r("2a12")),f=k(r("5db3")),v=k(r("d4f4")),m=k(r("aa82")),h=k(r("e652")),p=k(r("b6cb")),y=k(r("772d")),b=k(r("d294")),_=k(r("3360")),g=k(r("6417")),$=k(r("eb66")),w=k(r("46bc")),C=k(r("1331")),O=k(r("c301")),x=P(r("78ef"));function L(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return L=function(){return e},e}function P(e){if(e&&e.__esModule)return e;if(null===e||"object"!==a(e)&&"function"!==typeof e)return{default:e};var t=L();if(t&&t.has(e))return t.get(e);var r={},i=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var n in e)if(Object.prototype.hasOwnProperty.call(e,n)){var s=i?Object.getOwnPropertyDescriptor(e,n):null;s&&(s.get||s.set)?Object.defineProperty(r,n,s):r[n]=e[n]}return r.default=e,t&&t.set(e,r),r}function k(e){return e&&e.__esModule?e:{default:e}}t.helpers=x},b6cb:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"sameAs",eq:e},(function(t,r){return t===(0,a.ref)(e,this,r)}))};t.default=i},bf19:function(e,t,r){"use strict";var a=r("23e7");a({target:"URL",proto:!0,enumerable:!0},{toJSON:function(){return URL.prototype.toString.call(this)}})},c301:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=i},c99d:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.withParams)({type:"ipAddress"},(function(e){if(!(0,a.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(n)}));t.default=i;var n=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,r){"use strict";(function(e){function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var a="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},i=function(e,t){return"object"===r(e)&&void 0!==t?t:e((function(){}))},n=a.vuelidate?a.vuelidate.withParams:i;t.withParams=n}).call(this,r("c8ba"))},cf2a:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page"},[a("div",{staticClass:"mainer"},[a("h1",{staticClass:"page__caption"},[e._v("Оформление товара")]),a("div",{staticClass:"row"},[a("div",{staticClass:"col col--width"},[a("h4",{staticClass:"title"},[e._v("Данные покупателя")]),a("div",{staticClass:"customer-content"},[a("div",{staticClass:"customer-content__col"},[a("h4",{staticClass:"caption"},[a("div",{staticClass:"icon",class:{"icon--active":!e.customerFormOpen}},[a("svg",{staticClass:"svg-icon"},[e.customerFormOpen?a("use",{attrs:{"xlink:href":r("4c1f")+"#pen"}}):a("use",{attrs:{"xlink:href":r("4c1f")+"#yes"}})])]),e._v("Личные данные ")]),e.customerFormOpen?a("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),e.writeCustomerData(t)}}},[a("div",{staticClass:"error-block"},[!e.$v.yourName.required&&e.$v.yourName.$error?a("span",{staticClass:"error-alert"},[e._v("это поле обязательное")]):e._e(),e.$v.yourName.alpha&&e.$v.yourName.maxLength?e._e():a("span",{staticClass:"error-alert"},[e._v("введите верное имя")])]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.yourName,expression:"yourName",modifiers:{lazy:!0}}],class:{invalid:e.$v.yourName.$error,dirty:e.$v.yourName.$dirty},attrs:{type:"text",name:"yourName",id:"yourName",autocomplete:"off"},domProps:{value:e.yourName},on:{blur:function(t){return e.$v.yourName.$touch()},change:function(t){e.yourName=t.target.value}}}),a("label",{staticClass:"placeholder-label",attrs:{for:"yourName"}},[e._v("Ваше имя*")]),a("div",{staticClass:"error-block"},[!e.$v.yourLastName.required&&e.$v.yourLastName.$error?a("span",{staticClass:"error-alert"},[e._v("это поле обязательное")]):e._e(),e.$v.yourLastName.alpha&&e.$v.yourLastName.maxLength?e._e():a("span",{staticClass:"error-alert"},[e._v("введите верное имя")])]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.yourLastName,expression:"yourLastName",modifiers:{lazy:!0}}],class:{invalid:e.$v.yourLastName.$error,dirty:e.$v.yourLastName.$dirty},attrs:{type:"text",name:"yourLastName",id:"yourLastName",autocomplete:"off"},domProps:{value:e.yourLastName},on:{blur:function(t){return e.$v.yourLastName.$touch()},change:function(t){e.yourLastName=t.target.value}}}),a("label",{staticClass:"placeholder-label",attrs:{for:"yourLastName"}},[e._v("Ваша фамилия*")]),a("div",{staticClass:"error-block"},[!e.$v.tel.required&&e.$v.tel.$error?a("span",{staticClass:"error-alert"},[e._v("это поле обязательное")]):e._e(),e.$v.tel.minLength&&e.$v.tel.maxLength?e._e():a("span",{staticClass:"error-alert"},[e._v("введите верный номер")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.tel,expression:"tel"},{name:"mask",rawName:"v-mask",value:"+38(###)-##-##-###",expression:"'+38(###)-##-##-###'"}],class:{invalid:e.$v.tel.$error,dirty:e.$v.tel.$dirty},attrs:{type:"tel",name:"tel",id:"tel",autocomplete:"off"},domProps:{value:e.tel},on:{focus:function(t){e.tel=0},blur:function(t){return e.$v.tel.$touch()},input:function(t){t.target.composing||(e.tel=t.target.value)}}}),a("label",{staticClass:"placeholder-label",attrs:{for:"tel"}},[e._v("Ваш телефон*")]),a("div",{staticClass:"error-block"},[!e.$v.email.required&&e.$v.email.$error?a("span",{staticClass:"error-alert"},[e._v("это поле обязательное")]):e._e(),e.$v.email.email&&e.$v.email.maxLength?e._e():a("span",{staticClass:"error-alert"},[e._v("введите верный e-mail")])]),a("input",{directives:[{name:"model",rawName:"v-model.lazy",value:e.email,expression:"email",modifiers:{lazy:!0}}],class:{invalid:e.$v.email.$error,dirty:e.$v.email.$dirty},attrs:{type:"email",name:"email",id:"email",autocomplete:"off"},domProps:{value:e.email},on:{blur:function(t){return e.$v.email.$touch()},change:function(t){e.email=t.target.value}}}),a("label",{staticClass:"placeholder-label",attrs:{for:"email"}},[e._v("Ваш E-mail*")]),a("button",{staticClass:"btn btn--width",attrs:{type:"submit",disabled:e.$v.yourName.$invalid||e.$v.yourLastName.$invalid||e.$v.tel.$invalid||e.$v.email.$invalid}},[e._v("Продолжить")])]):e._e()]),a("div",{staticClass:"customer-content__col"},[a("h4",{staticClass:"caption"},[a("div",{staticClass:"icon",class:{"icon--active":!1}},[e.deliveryFormOpen?a("svg",{staticClass:"svg-icon"},[a("use",{attrs:{"xlink:href":r("4c1f")+"#pen"}})]):a("span",{staticClass:"text-icon"},[e._v("2")])]),e._v("Доставка и Оплата ")]),e.deliveryFormOpen?a("form",{staticClass:"contact-form",on:{submit:function(t){return t.preventDefault(),e.writeDeliveryData(t)}}},[a("div",{staticClass:"error-block"},[!e.$v.city.required&&e.$v.city.$error?a("span",{staticClass:"error-alert"},[e._v("это поле обязательное")]):e._e(),!e.$v.city.$dirty||e.citiesArr.length||e.$v.city.$error?e._e():a("span",{staticClass:"error-alert"},[e._v("введите верный адресс")])]),a("div",{staticClass:"filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],class:{invalid:e.$v.city.$error||e.$v.city.$dirty&&!e.citiesArr.length,dirty:e.$v.city.$dirty},attrs:{type:"text",name:"city",id:"city",autocomplete:"off"},domProps:{value:e.city},on:{blur:function(t){return e.$v.city.$touch()},input:[function(t){t.target.composing||(e.city=t.target.value)},e.getCity],focus:e.focusCity}}),a("label",{staticClass:"placeholder-label",attrs:{for:"city"}},[e._v("Город*")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.cityListOpen,expression:"cityListOpen"}],staticClass:"filter__list"},e._l(e.citiesArr,(function(t,r){return a("label",{key:r,attrs:{title:t.Present}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedCityIndex,expression:"checkedCityIndex"}],attrs:{type:"radio"},domProps:{value:r,checked:e._q(e.checkedCityIndex,r)},on:{click:function(t){return e.checkCity(r)},change:function(t){e.checkedCityIndex=r}}}),e._v(" "+e._s(t.Present)+" ")])})),0)]),a("div",{staticClass:"error-block"},[e.deliveryListOpen&&!e.deliveryName.length?a("span",{staticClass:"error-alert"},[e._v("выберите доставку")]):e._e()]),a("div",{staticClass:"filter"},[a("div",{staticClass:"filter-name",class:{dirty:e.deliveryListOpen||e.deliveryName.length},on:{click:function(t){e.deliveryListOpen=!e.deliveryListOpen}}},[e._v(e._s(e.deliveryName))]),a("label",{staticClass:"placeholder-label",on:{click:function(t){e.deliveryListOpen=!0}}},[e._v("Способ доставки*")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.deliveryListOpen,expression:"deliveryListOpen"}],staticClass:"filter__list"},[e.checkedCity.Warehouses?a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryValue,expression:"deliveryValue"}],attrs:{type:"radio",value:"warehouse"},domProps:{checked:e._q(e.deliveryValue,"warehouse")},on:{change:[function(t){e.deliveryValue="warehouse"},e.deliveryChecked],click:function(t){e.deliveryListOpen=!1}}}),e._v(" Доставка в отделение (Новая Почта) ")]):e._e(),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.deliveryValue,expression:"deliveryValue"}],attrs:{type:"radio",value:"deliveryboy"},domProps:{checked:e._q(e.deliveryValue,"deliveryboy")},on:{change:[function(t){e.deliveryValue="deliveryboy"},e.deliveryChecked],click:function(t){e.deliveryListOpen=!1}}}),e._v(" Доставка курьером (Новая Почта) ")])])]),"warehouse"===e.deliveryValue?a("div",[a("div",{staticClass:"error-block"},[!e.$v.warehouse.required&&e.$v.warehouse.$error?a("span",{staticClass:"error-alert"},[e._v("это поле обязательное")]):e._e(),!e.$v.warehouse.uniq&&e.$v.warehouse.$error?a("span",{staticClass:"error-alert"},[e._v("введите верный адресс")]):e._e()]),a("div",{staticClass:"filter"},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.warehouse,expression:"warehouse"}],class:{invalid:e.$v.warehouse.$error,dirty:e.$v.warehouse.$dirty},attrs:{type:"text",name:"warehouse",id:"warehouse",autocomplete:"off",disabled:!e.city.length},domProps:{value:e.warehouse},on:{blur:function(t){return e.$v.warehouse.$touch()},focus:function(t){e.getWarehouse(),e.warehouseListOpen=!0},input:[function(t){t.target.composing||(e.warehouse=t.target.value)},e.warehouseFilter]}}),a("label",{staticClass:"placeholder-label",attrs:{for:"warehouse"}},[e._v("Отделение*")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.warehouseListOpen,expression:"warehouseListOpen"}],staticClass:"filter__list"},e._l(e.warehouseFilter(),(function(t,r){return a("label",{key:t.Ref,attrs:{title:t.Description.replace("на одне місце","")}},[a("input",{directives:[{name:"model",rawName:"v-model",value:e.checkedWarehouseIndex,expression:"checkedWarehouseIndex"}],attrs:{type:"radio"},domProps:{value:r,checked:e._q(e.checkedWarehouseIndex,r)},on:{click:function(r){return e.checkWarehouse(t.Ref)},change:function(t){e.checkedWarehouseIndex=r}}}),e._v(" "+e._s(t.Description.replace("на одне місце",""))+" ")])})),0)])]):e._e(),"deliveryboy"===e.deliveryValue?a("div",{staticClass:"address"},[a("div",{staticClass:"address__col address__col--width"},[a("div",{staticClass:"error-block"},[!e.$v.street.required&&e.$v.street.$error?a("span",{staticClass:"error-alert"},[e._v("это поле обязательное")]):e._e(),e.$v.street.minLength&&e.$v.street.maxLength?e._e():a("span",{staticClass:"error-alert"},[e._v("введите верный адресс")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.street,expression:"street"}],class:{invalid:e.$v.street.$error,dirty:e.$v.street.$dirty},attrs:{type:"text",name:"street",id:"street",autocomplete:"off"},domProps:{value:e.street},on:{blur:function(t){return e.$v.street.$touch()},input:function(t){t.target.composing||(e.street=t.target.value)}}}),a("label",{staticClass:"placeholder-label",attrs:{for:"street"}},[e._v("Улица*")])]),a("div",{staticClass:"address__col"},[a("div",{staticClass:"error-block"},[!e.$v.house.required&&e.$v.house.$error?a("span",{staticClass:"error-alert"},[e._v("это поле обязательное")]):e._e(),e.$v.house.maxLength?e._e():a("span",{staticClass:"error-alert"},[e._v("не больше 10 символов")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.house,expression:"house"}],class:{invalid:e.$v.house.$error,dirty:e.$v.house.$dirty},attrs:{type:"text",name:"house",id:"house",autocomplete:"off"},domProps:{value:e.house},on:{blur:function(t){return e.$v.house.$touch()},input:function(t){t.target.composing||(e.house=t.target.value)}}}),a("label",{staticClass:"placeholder-label",attrs:{for:"house"}},[e._v("Дом*")])]),a("div",{staticClass:"address__col"},[a("div",{staticClass:"error-block"},[e.$v.flat.maxLength?e._e():a("span",{staticClass:"error-alert"},[e._v("не больше 10 символов")])]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.flat,expression:"flat"}],class:{invalid:e.$v.flat.$error,dirty:e.$v.flat.$dirty},attrs:{type:"text",name:"flat",id:"flat",autocomplete:"off"},domProps:{value:e.flat},on:{blur:function(t){return e.$v.flat.$touch()},input:function(t){t.target.composing||(e.flat=t.target.value)}}}),a("label",{staticClass:"placeholder-label",attrs:{for:"flat"}},[e._v("Кв")])])]):e._e(),a("div",{staticClass:"error-block"},[e.payListOpen&&!e.payName.length?a("span",{staticClass:"error-alert"},[e._v("выберите оплату")]):e._e()]),a("div",{staticClass:"filter"},[a("div",{staticClass:"filter-name",class:{dirty:e.payListOpen||e.payName.length},on:{click:function(t){e.payListOpen=!e.payListOpen}}},[e._v(e._s(e.payName))]),a("label",{staticClass:"placeholder-label",on:{click:function(t){e.payListOpen=!0}}},[e._v("Способ оплаты*")]),a("div",{directives:[{name:"show",rawName:"v-show",value:e.payListOpen,expression:"payListOpen"}],staticClass:"filter__list"},[a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.payValue,expression:"payValue"}],attrs:{type:"radio",value:"cod"},domProps:{checked:e._q(e.payValue,"cod")},on:{change:[function(t){e.payValue="cod"},e.payChecked],click:function(t){e.payListOpen=!1}}}),e._v(" Наложенный платеж ")]),a("label",[a("input",{directives:[{name:"model",rawName:"v-model",value:e.payValue,expression:"payValue"}],attrs:{type:"radio",value:"visa"},domProps:{checked:e._q(e.payValue,"visa")},on:{change:[function(t){e.payValue="visa"},e.payChecked],click:function(t){e.payListOpen=!1}}}),e._v(" Оплатить на карту Visa/Mastercard ")])])]),a("div",{staticClass:"error-block"},[e.$v.comment.maxLength?e._e():a("span",{staticClass:"error-alert"},[e._v("количество символов "+e._s(e.comment.length)+"/70")])]),a("div",{staticClass:"filter"},[e.commentOpen?a("textarea",{directives:[{name:"model",rawName:"v-model",value:e.comment,expression:"comment"}],staticClass:"comment-textarea",class:{invalid:e.$v.comment.$error},attrs:{name:"comment",placeholder:"Напишите комментарий...",rows:"1",maxlength:"71"},domProps:{value:e.comment},on:{blur:function(t){return e.$v.comment.$touch()},input:function(t){t.target.composing||(e.comment=t.target.value)}}}):a("button",{staticClass:"comment-btn",attrs:{type:"button"},on:{click:function(t){e.commentOpen=!0}}},[e._v("Добавить комментарий к заказу")])]),"warehouse"===e.deliveryValue?a("button",{staticClass:"btn btn--width",attrs:{type:"submit",disabled:e.$v.city.$invalid||e.$v.warehouse.$invalid||!e.payName.length||!e.cartList.length}},[e._v("Оформить заказ")]):a("button",{staticClass:"btn btn--width",attrs:{type:"submit",disabled:e.$v.city.$invalid||e.$v.street.$invalid||e.$v.house.$invalid||!e.payName.length||!e.cartList.length}},[e._v("Оформить заказ")])]):e._e()])])]),a("div",{staticClass:"col"},[a("h4",{staticClass:"title"},[a("span",[e._v("Ваш заказ")]),a("router-link",{staticClass:"link",attrs:{to:"/shop",tag:"a"}},[e._v("Продолжить покупки")])],1),a("div",{staticClass:"cart-content"},[a("div",{staticClass:"cart-products"},[a("ul",{staticClass:"cart"},e._l(e.cartList,(function(t){return a("li",{key:t.id,staticClass:"cart__item"},[a("div",{staticClass:"photo-block"},[a("img",{staticClass:"photo",attrs:{src:t.urlPoster,alt:t.name}})]),a("div",{staticClass:"controls"},[a("h3",{staticClass:"name"},[e._v(e._s(t.name))]),a("div",{staticClass:"counter"},[a("button",{staticClass:"counter__btn",attrs:{type:"button",disabled:1===t.count},on:{click:function(e){t.count--}}},[e._v("-")]),a("span",{staticClass:"counter__number"},[e._v(e._s(t.count))]),a("button",{staticClass:"counter__btn",attrs:{type:"button",disabled:t.count>=5},on:{click:function(e){t.count++}}},[e._v("+")])]),a("button",{staticClass:"remove-item",attrs:{type:"button"},on:{click:function(r){return e.removeFromCart(t.id)}}},[e._v("Удалить")])]),a("div",{staticClass:"summ"},[e._v(e._s(t.price*t.count)+" $")])])})),0)]),a("div",{staticClass:"total"},[a("span",{staticClass:"total__name"},[e._v("Общая стоимость товаров")]),a("span",{staticClass:"total__amount"},[e._v(e._s(e.amount)+" $")])]),a("div",{staticClass:"notice"},[e._v(' Доставка осуществляется за счет покупателя согласно тарифов компании "Новая Почта". Доставка оплачивается при получении заказа. ')])])])])]),a("svg",{staticClass:"svg svg--book"},[a("use",{attrs:{"xlink:href":r("4c1f")+"#book"}})])])},i=[],n=(r("4de4"),r("7db0"),r("0481"),r("c975"),r("13d5"),r("4069"),r("d3b7"),r("ac1f"),r("5319"),r("bf19"),r("96cf"),r("1da1")),s=r("b5ae"),o={name:"Order",data:function(){return{yourName:"",yourLastName:"",tel:"",email:"",customerFormOpen:!0,citiesArr:[],cityListOpen:!1,checkedCityIndex:null,checkedCity:{},city:"",deliveryFormOpen:!1,deliveryListOpen:!1,deliveryName:"",deliveryValue:"",warehousesArr:[],warehouseListOpen:!1,checkedWarehouseIndex:null,checkedWarehouse:{},warehouse:"",street:"",house:"",flat:"",payListOpen:!1,payName:"",payValue:"",comment:"",commentOpen:!1}},computed:{cartList:function(){return this.$store.getters.getCartList},amount:function(){return this.cartList.reduce((function(e,t){return e+t.price*t.count}),0)}},methods:{writeCustomerData:function(){this.customerFormOpen=!1,this.deliveryFormOpen=!0},writeDeliveryData:function(){var e=this;this.deliveryFormOpen=!1;var t={customerData:{name:this.yourName,lastName:this.yourLastName,email:this.email,tel:this.tel},deliveryData:{city:this.city,deliveryName:this.deliveryName,warehouse:this.warehouse,street:this.street,house:this.house,flat:this.flat,pay:this.payName,comment:this.comment},productsData:this.cartList,cartData:{productsAmount:this.amount,date:(new Date).toJSON(),done:!1}};this.$store.dispatch("sendOrder",t).then((function(){return e.$router.push("/shop")})).catch((function(){}))},getCity:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={modelName:"Address",calledMethod:"searchSettlements",methodProperties:{CityName:e.city,Limit:10},apiKey:"0d0432fee6e7afe32b4e8965268f382f"},a=e,t.next=4,fetch("https://api.novaposhta.ua/v2.0/json/",{crossDomain:!0,method:"POST",headers:{"content-type":"application/json"},processData:!1,body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){return a.citiesArr=e.data[0].Addresses})).catch((function(e){return console.log(e)}));case 4:case"end":return t.stop()}}),t)})))()},checkCity:function(e){this.checkedCity=this.citiesArr[e],this.city=this.checkedCity.Present,this.cityListOpen=!1},focusCity:function(){this.cityListOpen=!0,this.deliveryListOpen=!1,this.deliveryName="",this.deliveryValue="",this.warehousesArr=[],this.warehouseListOpen=!1,this.checkedWarehouseIndex=null,this.checkedWarehouse={},this.warehouse=""},deliveryChecked:function(){switch(this.deliveryValue){case"warehouse":this.deliveryName="Доставка в отделение (Новая Почта)",this.street="",this.$v.street.$reset(),this.house="",this.$v.house.$reset(),this.flat="",this.$v.flat.$reset();break;case"deliveryboy":this.deliveryName="Доставка курьером (Новая Почта)",this.warehousesArr=[],this.warehouseListOpen=!1,this.checkedWarehouseIndex=null,this.checkedWarehouse={},this.warehouse="",this.$v.warehouse.$reset();break;default:this.deliveryName=""}this.deliveryListOpen=!1},getWarehouse:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={modelName:"AddressGeneral",calledMethod:"getWarehouses",methodProperties:{SettlementRef:e.checkedCity.Ref},apiKey:"0d0432fee6e7afe32b4e8965268f382f"},a=e,t.next=4,fetch("https://api.novaposhta.ua/v2.0/json/",{crossDomain:!0,method:"POST",headers:{"content-type":"application/json"},processData:!1,body:JSON.stringify(r)}).then((function(e){return e.json()})).then((function(e){return a.warehousesArr=e.data})).catch((function(e){return console.log(e)}));case 4:console.log(e.warehousesArr);case 5:case"end":return t.stop()}}),t)})))()},warehouseFilter:function(){var e=this;return this.warehousesArr.filter((function(t){return-1!==t.Description.toLowerCase().indexOf(e.warehouse)}))},checkWarehouse:function(e){this.checkedWarehouse=this.warehousesArr.find((function(t){return t.Ref===e})),this.warehouse=this.checkedWarehouse.Description.replace("на одне місце",""),this.warehouseListOpen=!1},payChecked:function(){switch(this.payValue){case"cod":this.payName="Наложенный платеж";break;case"visa":this.payName="Оплатить на карту Visa/Mastercard";break;default:this.payName=""}this.payListOpen=!1}},validations:{yourName:{required:s["required"],alpha:function(e){return/^[а-яё,і,ї,є,a-z,',-]*$/i.test(e)},maxLength:Object(s["maxLength"])(40)},yourLastName:{required:s["required"],alpha:function(e){return/^[а-яё,і,ї,є,a-z,',-]*$/i.test(e)},maxLength:Object(s["maxLength"])(40)},tel:{required:s["required"],maxLength:Object(s["maxLength"])(18),minLength:Object(s["minLength"])(18)},email:{required:s["required"],email:s["email"],maxLength:Object(s["maxLength"])(40)},city:{required:s["required"]},warehouse:{required:s["required"],uniq:function(e){return""===e||!!this.warehousesArr.find((function(t){return t.Description.replace("на одне місце","")===e}))}},street:{required:s["required"],maxLength:Object(s["maxLength"])(50),minLength:Object(s["minLength"])(5)},house:{required:s["required"],maxLength:Object(s["maxLength"])(10)},flat:{maxLength:Object(s["maxLength"])(10)},comment:{maxLength:Object(s["maxLength"])(70)}}},u=o,l=(r("7f20"),r("2877")),c=Object(l["a"])(u,a,i,!1,null,"e643c7e4",null);t["default"]=c.exports},d294:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,a.withParams)({type:"or"},(function(){for(var e=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];return t.length>0&&t.reduce((function(t,r){return t||r.apply(e,a)}),!1)}))};t.default=i},d4f4:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=(0,a.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,a.req)(e.trim()):(0,a.req)(e)}));t.default=i},e652:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"requiredUnless",prop:e},(function(t,r){return!!(0,a.ref)(e,this,r)||(0,a.req)(t)}))};t.default=i},eb66:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e){return(0,a.withParams)({type:"minValue",min:e},(function(t){return!(0,a.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=i},ec11:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r("78ef"),i=function(e,t){return(0,a.withParams)({type:"between",min:e,max:t},(function(r){return!(0,a.req)(r)||(!/\s/.test(r)||r instanceof Date)&&+e<=+r&&+t>=+r}))};t.default=i}}]);
//# sourceMappingURL=chunk-55489db7.ac6d0629.js.map