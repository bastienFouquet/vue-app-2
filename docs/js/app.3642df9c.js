(function(e){function t(t){for(var r,a,c=t[0],s=t[1],l=t[2],u=0,d=[];u<c.length;u++)a=c[u],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&d.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);f&&f(t);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],r=!0,a=1;a<n.length;a++){var c=n[a];0!==o[c]&&(r=!1)}r&&(i.splice(t--,1),e=s(s.s=n[0]))}return e}var r={},a={app:0},o={app:0},i=[];function c(e){return s.p+"js/"+({}[e]||e)+"."+{"chunk-46d8d7b8":"04ed182f","chunk-5f5bc3b7":"e2994a5f","chunk-6645b1bb":"b3325ae8"}[e]+".js"}function s(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(e){var t=[],n={"chunk-46d8d7b8":1,"chunk-5f5bc3b7":1,"chunk-6645b1bb":1};a[e]?t.push(a[e]):0!==a[e]&&n[e]&&t.push(a[e]=new Promise((function(t,n){for(var r="css/"+({}[e]||e)+"."+{"chunk-46d8d7b8":"539933c0","chunk-5f5bc3b7":"5d1f4a77","chunk-6645b1bb":"a4353d34"}[e]+".css",o=s.p+r,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var l=i[c],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===o))return t()}var d=document.getElementsByTagName("style");for(c=0;c<d.length;c++){l=d[c],u=l.getAttribute("data-href");if(u===r||u===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var r=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[e],f.parentNode.removeChild(f),n(i)},f.href=o;var p=document.getElementsByTagName("head")[0];p.appendChild(f)})).then((function(){a[e]=0})));var r=o[e];if(0!==r)if(r)t.push(r[2]);else{var i=new Promise((function(t,n){r=o[e]=[t,n]}));t.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,s.nc&&u.setAttribute("nonce",s.nc),u.src=c(e);var d=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},s.m=e,s.c=r,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)s.d(n,r,function(t){return e[t]}.bind(null,r));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/vue-app-2/",s.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var d=0;d<l.length;d++)t(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0370":function(e,t,n){"use strict";n("4ae5")},"4ae5":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("b0c0"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},o=[],i={name:"App",data:function(){return{}}},c=i,s=n("2877"),l=n("6544"),u=n.n(l),d=n("7496"),f=Object(s["a"])(c,a,o,!1,null,null,null),p=f.exports;u()(f,{VApp:d["a"]});var h=n("9483");Object(h["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});n("d3b7");var g=n("8c4f"),v=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("v-app-bar",{attrs:{floating:"",app:""}},[n("v-toolbar-title",[e._v("Markdown Notes")])],1),n("v-navigation-drawer",{attrs:{app:"",floating:"",permanent:"",color:"secondary"}},[n("span",{on:{click:e.refresh}},[e._v("tree struct "),n("v-icon",[e._v("mdi-reload")])],1),n("Tree",{attrs:{tree:e.tree}})],1),n("v-main",{attrs:{app:""}},[n("v-container",{attrs:{fluid:""}},[e.$root.$data.selectedLeaf.title?n("Markdown"):n("div",[n("h2",[e._v("Select a note")])])],1)],1)],1)},b=[],m=(n("96cf"),n("1da1")),k=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tree"},[n("ul",{staticClass:"parent-tree-list"},e._l(e.tree,(function(e){return n("Leaf",{key:e.id,attrs:{leaf:e}})})),1),n("div",{staticClass:"actions"},[n("v-speed-dial",{attrs:{bottom:"",right:"","open-on-hover":"",transition:"slide-y-reverse-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[n("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[e.fab?n("v-icon",[e._v(" mdi-close ")]):n("v-icon",[e._v(" mdi-plus ")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"#388E3C"},on:{click:function(t){return e.triggerDialog("leaf")}}},[n("v-icon",[e._v("mdi-leaf")])],1),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"#388E3C"},on:{click:function(t){return e.triggerDialog("markdown")}}},[n("v-icon",[e._v("mdi-language-markdown")])],1),n("v-btn",{attrs:{fab:"",dark:"",small:"",color:"#C62828"},on:{click:function(t){return e.triggerDialog("delete")}}},[n("v-icon",[e._v("mdi-delete")])],1)],1)],1),n("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog.triggered,callback:function(t){e.$set(e.dialog,"triggered",t)},expression:"dialog.triggered"}},[n("v-card",[n("v-container",[e._v(" "+e._s(e.dialog.title)+" "),e.dialog.label?n("v-text-field",{attrs:{label:e.dialog.label},model:{value:e.dialog.data,callback:function(t){e.$set(e.dialog,"data",t)},expression:"dialog.data"}}):e._e()],1),n("v-card-actions",[n("v-spacer"),n("v-btn",{attrs:{text:"",color:"#C62828"},on:{click:function(t){e.dialog.triggered=!1}}},[e._v(" Close ")]),n("v-btn",{attrs:{text:"",color:"#388E3C"},on:{click:e.dialog.action}},[e._v(" Confirm ")])],1)],1)],1)],1)},w=[],y=n("bc3a"),x=n.n(y),_={name:"Tree",components:{Leaf:function(){return n.e("chunk-5f5bc3b7").then(n.bind(null,"23b4"))}},props:{tree:Array},data:function(){return{dialog:{triggered:!1,title:null,action:null,data:null},fab:null}},methods:{createLeaf:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post(this.backAddress()+"leaf",{label:this.dialog.data,parentLeaf:this.$root.$data.selectedLeaf?this.$root.$data.selectedLeaf.id:null},this.getHeaders());case 3:t=e.sent,t&&(this.dialog.triggered=!1,this.dialog.data=null),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),createNote:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post(this.backAddress()+"notes",{title:this.dialog.data,leaf:this.$root.$data.selectedLeaf?this.$root.$data.selectedLeaf.id:null},this.getHeaders());case 3:t=e.sent,t&&(this.dialog.triggered=!1,this.dialog.data=null),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),delete:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.$root.$data.selectedLeaf.title?"notes":"leaf",e.next=4,x.a.delete(this.backAddress()+t+"/"+this.$root.$data.selectedLeaf.id,this.getHeaders());case 4:n=e.sent,n&&(this.dialog.triggered=!1,console.log(n)),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),triggerDialog:function(e){switch(e){case"leaf":this.dialog.title="New leaf",this.dialog.label="Label",this.dialog.action=this.createLeaf,this.dialog.triggered=!0;break;case"markdown":this.dialog.title="New markdown note",this.dialog.label="Title",this.dialog.action=this.createNote,this.dialog.triggered=!0;break;case"delete":this.$root.$data.selectedLeaf.title?(this.dialog.title="Are tou sure you want to delete this note ?",this.dialog.action=this.delete,this.dialog.triggered=!0):(this.dialog.action=this.delete,this.dialog.title="Are tou sure you want to delete this leaf ?",this.dialog.triggered=!0);break}}}},$=_,L=(n("f4c2"),n("8336")),C=n("b0af"),j=n("99d9"),A=n("a523"),O=n("169a"),T=n("132d"),E=n("2fa4"),S=n("c73b"),V=n("8654"),N=Object(s["a"])($,k,w,!1,null,null,null),P=N.exports;u()(N,{VBtn:L["a"],VCard:C["a"],VCardActions:j["a"],VContainer:A["a"],VDialog:O["a"],VIcon:T["a"],VSpacer:E["a"],VSpeedDial:S["a"],VTextField:V["a"]});var R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"editor"}},[e.alert?n("v-alert",{attrs:{dismissible:"",elevation:"2",type:"success"}}):e._e(),n("span",{staticClass:"sectionTitle editorSection"},[e._v("Editor")]),n("textarea",{domProps:{value:e.input},on:{input:function(t){return e.update(t.target.value)}}}),n("span",{staticClass:"sectionTitle prevSection"},[e._v("Preview")]),n("div",{domProps:{innerHTML:e._s(e.compiledMarkdown)}}),n("v-btn",{staticClass:"custom-button",attrs:{color:"#388E3C",fab:""},on:{click:e.updateNote}},[n("v-icon",[e._v("mdi-content-save")])],1)],1)},H=[],M=n("0e54"),D=n.n(M),B={name:"Markdown",created:function(){this.$root.$data.selectedLeaf.content&&(this.input=this.$root.$data.selectedLeaf.content)},data:function(){return{input:"",alert:!1}},computed:{compiledMarkdown:function(){return D()(this.input)}},methods:{update:function(e){this.input=e},updateNote:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.put(this.backAddress()+"notes/"+this.$root.$data.selectedLeaf.id,{content:this.input},this.getHeaders());case 3:t=e.sent,t&&(this.alert=!0),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}},I=B,F=(n("0370"),n("0798")),q=Object(s["a"])(I,R,H,!1,null,null,null),J=q.exports;u()(q,{VAlert:F["a"],VBtn:L["a"],VIcon:T["a"]});var z={name:"Home",components:{Tree:P,Markdown:J},data:function(){return{tree:[]}},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getParentsLeaf();case 2:case"end":return t.stop()}}),t)})))()},methods:{getParentsLeaf:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get(this.backAddress()+"tree",this.getHeaders());case 3:t=e.sent,this.tree=t.data,e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.tree=[],this.$root.$data.selectedLeaf={},e.next=5,this.getParentsLeaf();case 5:e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}()}},K=z,U=n("40dc"),G=n("f6c4"),Q=n("f774"),W=n("2a7f"),X=Object(s["a"])(K,v,b,!1,null,null,null),Y=X.exports;u()(X,{VApp:d["a"],VAppBar:U["a"],VContainer:A["a"],VIcon:T["a"],VMain:G["a"],VNavigationDrawer:Q["a"],VToolbarTitle:W["a"]}),r["a"].use(g["a"]);var Z=[{path:"/",name:"Home",component:Y},{path:"/login",name:"Login",component:function(){return n.e("chunk-6645b1bb").then(n.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return n.e("chunk-46d8d7b8").then(n.bind(null,"73cf"))}}],ee=new g["a"]({routes:Z}),te=ee,ne=n("f309");r["a"].use(ne["a"]);var re=new ne["a"]({theme:{dark:!0}}),ae=r["a"].mixin({data:function(){return{token:null}},watch:{token:"setToken"},created:function(){this.restoreToken()},methods:{backAddress:function(){return"https://salty-earth-36065.herokuapp.com/"},getHeaders:function(){return{headers:{"Content-type":"application/json",Authorization:this.token}}},restoreToken:function(){localStorage.token&&(this.token=localStorage.token)},setToken:function(){localStorage.setItem("token",this.token)}}});r["a"].config.productionTip=!1,te.beforeEach((function(e,t,n){var r=localStorage.getItem("token");return"Home"!==e.name||r||n({name:"Login"}),"Home"!==e.name&&r&&n({name:"Home"}),n()})),new r["a"]({data:function(){return{selectedLeaf:{}}},router:te,vuetify:re,mixins:[ae],render:function(e){return e(p)}}).$mount("#app")},a25f:function(e,t,n){},f4c2:function(e,t,n){"use strict";n("a25f")}});
//# sourceMappingURL=app.3642df9c.js.map