(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-68dab176"],{"159b":function(t,n,e){var a=e("da84"),r=e("fdbc"),i=e("17c2"),s=e("9112");for(var c in r){var o=a[c],l=o&&o.prototype;if(l&&l.forEach!==i)try{s(l,"forEach",i)}catch(u){l.forEach=i}}},"17c2":function(t,n,e){"use strict";var a=e("b727").forEach,r=e("a640"),i=r("forEach");t.exports=i?[].forEach:function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}},5899:function(t,n){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,n,e){var a=e("1d80"),r=e("5899"),i="["+r+"]",s=RegExp("^"+i+i+"*"),c=RegExp(i+i+"*$"),o=function(t){return function(n){var e=String(a(n));return 1&t&&(e=e.replace(s,"")),2&t&&(e=e.replace(c,"")),e}};t.exports={start:o(1),end:o(2),trim:o(3)}},7156:function(t,n,e){var a=e("861d"),r=e("d2bb");t.exports=function(t,n,e){var i,s;return r&&"function"==typeof(i=n.constructor)&&i!==e&&a(s=i.prototype)&&s!==e.prototype&&r(t,s),t}},8742:function(t,n,e){},"9e81":function(t,n,e){t.exports=e.p+"img/toutiao_logo.4653c8be.png"},a640:function(t,n,e){"use strict";var a=e("d039");t.exports=function(t,n){var e=[][t];return!!e&&a((function(){e.call(null,n||function(){throw 1},1)}))}},a9e3:function(t,n,e){"use strict";var a=e("83ab"),r=e("da84"),i=e("94ca"),s=e("6eeb"),c=e("5135"),o=e("c6b6"),l=e("7156"),u=e("c04e"),f=e("d039"),h=e("7c73"),d=e("241c").f,p=e("06cf").f,v=e("9bf2").f,m=e("58a8").trim,g="Number",b=r[g],C=b.prototype,w=o(h(C))==g,x=function(t){var n,e,a,r,i,s,c,o,l=u(t,!1);if("string"==typeof l&&l.length>2)if(l=m(l),n=l.charCodeAt(0),43===n||45===n){if(e=l.charCodeAt(2),88===e||120===e)return NaN}else if(48===n){switch(l.charCodeAt(1)){case 66:case 98:a=2,r=49;break;case 79:case 111:a=8,r=55;break;default:return+l}for(i=l.slice(2),s=i.length,c=0;c<s;c++)if(o=i.charCodeAt(c),o<48||o>r)return NaN;return parseInt(i,a)}return+l};if(i(g,!b(" 0o1")||!b("0b1")||b("+0x1"))){for(var _,k=function(t){var n=arguments.length<1?0:t,e=this;return e instanceof k&&(w?f((function(){C.valueOf.call(e)})):o(e)!=g)?l(new b(x(n)),e,k):x(n)},y=a?d(b):"MAX_VALUE,MIN_VALUE,NaN,NEGATIVE_INFINITY,POSITIVE_INFINITY,EPSILON,isFinite,isInteger,isNaN,isSafeInteger,MAX_SAFE_INTEGER,MIN_SAFE_INTEGER,parseFloat,parseInt,isInteger,fromString,range".split(","),A=0;y.length>A;A++)c(b,_=y[A])&&!c(k,_)&&v(k,_,p(b,_));k.prototype=C,C.constructor=k,s(r,g,k)}},d01f:function(t,n,e){"use strict";e("8742")},d81d:function(t,n,e){"use strict";var a=e("23e7"),r=e("b727").map,i=e("1dde"),s=i("map");a({target:"Array",proto:!0,forced:!s},{map:function(t){return r(this,t,arguments.length>1?arguments[1]:void 0)}})},ed00:function(t,n,e){"use strict";e.r(n);var a=function(){var t=this,n=t.$createElement,a=t._self._c||n;return a("div",{staticClass:"home-container"},[a("van-nav-bar",{attrs:{fixed:""},scopedSlots:t._u([{key:"right",fn:function(){return[a("van-icon",{attrs:{name:"search",size:"18"},on:{click:function(n){return t.$router.push("/search")}}})]},proxy:!0},{key:"left",fn:function(){return[a("img",{staticClass:"logo",attrs:{src:e("9e81"),alt:""}})]},proxy:!0}])}),a("van-tabs",{attrs:{sticky:"","offset-top":"1.22667rem","before-change":t.beforeChange},on:{change:t.onTabsChange},model:{value:t.active,callback:function(n){t.active=n},expression:"active"}},t._l(t.channels,(function(t){return a("van-tab",{key:t.id,attrs:{title:t.name}},[a("ArtList",{attrs:{"channel-id":t.id}})],1)})),1),a("van-popup",{attrs:{"close-on-click-overlay":!1},on:{closed:function(n){t.isDel=!1}},model:{value:t.show,callback:function(n){t.show=n},expression:"show"}},[a("div",{staticClass:"popup-container"},[a("van-nav-bar",{attrs:{title:"频道管理"},scopedSlots:t._u([{key:"right",fn:function(){return[a("van-icon",{attrs:{name:"cross",size:"14",color:"white"},on:{click:function(n){t.show=!1}}})]},proxy:!0}])}),a("div",{staticClass:"pop-body"},[a("div",{staticClass:"my-channel-box"},[a("div",{staticClass:"channel-title"},[a("div",[a("span",{staticClass:"title-bold"},[t._v("已添加频道：")]),a("span",{staticClass:"title-gray"},[t._v(t._s(t.isDel?"点击移除频道":"点击进入频道"))])]),a("span",{staticClass:"btn-edit",on:{click:function(n){t.isDel=!t.isDel}}},[t._v(t._s(t.isDel?"完成":"编辑"))])]),a("van-row",{attrs:{type:"flex"}},t._l(t.channels,(function(n,e){return a("van-col",{key:n.id,attrs:{span:"6"}},[a("div",{staticClass:"channel-item van-hairline--surround",on:{click:function(a){return t.onUserChannelClick(n,e)}}},[t._v(" "+t._s(n.name)+" "),t.isDel&&"推荐"!==n.name&&t.channels.length>2?a("van-badge",{staticClass:"cross-badge",attrs:{color:"transparent"},scopedSlots:t._u([{key:"content",fn:function(){return[a("van-icon",{staticClass:"badge-icon",attrs:{name:"cross",color:"#cfcfcf",size:"12"}})]},proxy:!0}],null,!0)}):t._e()],1)])})),1)],1),a("div",{staticClass:"van-hairline--top sp-line"}),a("div",{staticClass:"more-channel-box"},[a("div",{staticClass:"channel-title"},[a("div",[a("span",{staticClass:"title-bold"},[t._v("可添加频道：")]),a("span",{staticClass:"title-gray"},[t._v("点击添加频道")])])]),a("van-row",{attrs:{type:"flex"}},t._l(t.moreChannel,(function(n){return a("van-col",{key:n.id,attrs:{span:"6"}},[a("div",{staticClass:"channel-item van-hairline--surround",on:{click:function(e){return t.addToChannel(n)}}},[t._v(t._s(n.name))])])})),1)],1)])],1)]),a("van-icon",{staticClass:"plus",attrs:{name:"plus",size:"16"},on:{click:function(n){t.show=!0}}})],1)},r=[],i=e("1da1"),s=(e("96cf"),e("159b"),e("b0c0"),e("4de4"),e("d81d"),e("3518")),c=function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("van-pull-refresh",{attrs:{disabled:t.finished},on:{refresh:t.onRefresh},model:{value:t.isLoading,callback:function(n){t.isLoading=n},expression:"isLoading"}},[e("van-list",{attrs:{finished:t.finished,"finished-text":"没有更多了","immediate-check":!1},on:{load:t.onLoad},model:{value:t.loading,callback:function(n){t.loading=n},expression:"loading"}},t._l(t.artList,(function(n){return e("ArtItem",{key:n.art_id,attrs:{article:n},on:{"remove-article":t.removeArticle}})})),1)],1)],1)},o=[],l=e("2909"),u=(e("a9e3"),e("99af"),e("cea7")),f={name:"ArtList",props:{channelId:{type:Number,required:!0}},data:function(){return{artList:[],timestamp:Date.now(),loading:!0,finished:!1,isLoading:!1}},created:function(){this.initArtList()},methods:{initArtList:function(t){var n=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var a,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,Object(s["c"])(n.channelId,n.timestamp);case 2:a=e.sent,r=a.data,"OK"===r.message&&(n.timestamp=r.data.pre_timestamp,n.artList=t?[].concat(Object(l["a"])(r.data.results),Object(l["a"])(n.artList)):[].concat(Object(l["a"])(n.artList),Object(l["a"])(r.data.results)),n.loading=!1,n.isLoading=!1,null===r.data.pre_timestamp&&(n.finished=!0));case 5:case"end":return e.stop()}}),e)})))()},onLoad:function(){this.initArtList()},onRefresh:function(){this.initArtList(!0)},removeArticle:function(t){this.artList=this.artList.filter((function(n){return n.art_id!==t})),this.artList.length<10&&this.initArtList()}},components:{ArtItem:u["a"]}},h=f,d=e("2877"),p=Object(d["a"])(h,c,o,!1,null,"3933c4e8",null),v=p.exports,m=e("3089"),g=e("6015"),b={},C={name:"Home",mixins:[g["a"]],data:function(){return{active:0,channels:[],show:!1,allChannel:[],isDel:!1}},computed:{moreChannel:function(){var t=this,n=[];return this.allChannel.forEach((function(e){var a=t.channels.every((function(t){return t.id!==e.id}));a&&n.push(e)})),n}},created:function(){this.initUserChannels(),this.initAllChannel()},methods:{initUserChannels:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["d"])();case 2:e=n.sent,a=e.data,"OK"===a.message&&(t.channels=a.data.channels);case 5:case"end":return n.stop()}}),n)})))()},initAllChannel:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,Object(s["b"])();case 2:e=n.sent,a=e.data,"OK"===a.message&&(t.allChannel=a.data.channels);case 5:case"end":return n.stop()}}),n)})))()},addToChannel:function(t){this.channels.push(t),this.saveUserChannel()},onUserChannelClick:function(t,n){if(this.isDel){if("推荐"===t.name||2===this.channels.length)return;this.channels=this.channels.filter((function(n){return n.id!==t.id})),this.saveUserChannel()}else this.active=n,this.show=!1},saveUserChannel:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var e,a,r;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=t.channels.map((function(t,n){return{id:t.id,seq:n}})),n.next=3,Object(s["f"])(e);case 3:a=n.sent,r=a.data,"OK"===r.message&&Object(m["Notify"])({type:"success",message:"更新频道成功！"});case 6:case"end":return n.stop()}}),n)})))()},beforeChange:function(){var t=this.channels[this.active].name,n=window.scrollY;return b[t]=n,!0},onTabsChange:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function n(){var e,a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return e=t.channels[t.active].name,a=b[e]||0,n.next=4,t.$nextTick();case 4:window.scrollTo(0,a);case 5:case"end":return n.stop()}}),n)})))()}},components:{ArtList:v}},w=C,x=(e("d01f"),Object(d["a"])(w,a,r,!1,null,"7a17f632",null));n["default"]=x.exports}}]);
//# sourceMappingURL=chunk-68dab176.61aaf05f.js.map