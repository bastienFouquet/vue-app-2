(function(e){function t(t){for(var a,n,s=t[0],c=t[1],l=t[2],d=0,u=[];d<s.length;d++)n=s[d],Object.prototype.hasOwnProperty.call(o,n)&&o[n]&&u.push(o[n][0]),o[n]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);f&&f(t);while(u.length)u.shift()();return i.push.apply(i,l||[]),r()}function r(){for(var e,t=0;t<i.length;t++){for(var r=i[t],a=!0,n=1;n<r.length;n++){var s=r[n];0!==o[s]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=r[0]))}return e}var a={},n={app:0},o={app:0},i=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-46d8d7b8":"a3cde50d","chunk-5f5bc3b7":"254cffbf","chunk-6645b1bb":"48e69afb"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var r=a[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,c),r.l=!0,r.exports}c.e=function(e){var t=[],r={"chunk-46d8d7b8":1,"chunk-5f5bc3b7":1,"chunk-6645b1bb":1};n[e]?t.push(n[e]):0!==n[e]&&r[e]&&t.push(n[e]=new Promise((function(t,r){for(var a="css/"+({}[e]||e)+"."+{"chunk-46d8d7b8":"539933c0","chunk-5f5bc3b7":"6e47fe79","chunk-6645b1bb":"3f843e46"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var l=i[s],d=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(d===a||d===o))return t()}var u=document.getElementsByTagName("style");for(s=0;s<u.length;s++){l=u[s],d=l.getAttribute("data-href");if(d===a||d===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete n[e],f.parentNode.removeChild(f),r(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){n[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,r){a=o[e]=[t,r]}));t.push(a[2]=i);var l,d=document.createElement("script");d.charset="utf-8",d.timeout=120,c.nc&&d.setAttribute("nonce",c.nc),d.src=s(e);var u=new Error;l=function(t){d.onerror=d.onload=null,clearTimeout(f);var r=o[e];if(0!==r){if(r){var a=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+a+": "+n+")",u.name="ChunkLoadError",u.type=a,u.request=n,r[1](u)}o[e]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:d})}),12e4);d.onerror=d.onload=l,document.head.appendChild(d)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,r){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(c.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(r,a,function(t){return e[t]}.bind(null,a));return r},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/vue-app-2/",c.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],d=l.push.bind(l);l.push=t,l=l.slice();for(var u=0;u<l.length;u++)t(l[u]);var f=d;i.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0370":function(e,t,r){"use strict";r("4ae5")},"4ae5":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("b0c0"),r("e260"),r("e6cf"),r("cca6"),r("a79d");var a=r("2b0e"),n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("router-view")],1)},o=[],i={name:"App",data:function(){return{}}},s=i,c=r("2877"),l=r("6544"),d=r.n(l),u=r("7496"),f=Object(c["a"])(s,n,o,!1,null,null,null),h=f.exports;d()(f,{VApp:u["a"]});var p=r("9483");Object(p["a"])("".concat("/vue-app-2/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(e){console.error("Error during service worker registration:",e)}});r("d3b7");var g=r("8c4f"),v=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-app",[r("v-app-bar",{attrs:{app:""}},[r("v-toolbar-title",[e._v("Markdown Notes")]),r("v-spacer"),r("v-icon",{staticStyle:{"{cursor":"pointer}"},attrs:{color:"#C62828"},on:{click:e.logout}},[e._v(" mdi-power ")])],1),r("v-navigation-drawer",{attrs:{app:"",floating:"",permanent:"",color:"secondary"}},[r("v-container",{staticStyle:{"{text-align":"center}"}},[r("v-btn",{attrs:{width:"100%",elevation:"2",color:"primary"},on:{click:function(t){e.$root.$data.refreshing="parents"}}},[e._v(" Reload tree ")])],1),r("Tree",{attrs:{tree:e.tree}}),!1===e.$root.$data.loadingTree?r("v-container",[0===e.tree.length?r("h4",[e._v("Create your first leaf to begin")]):e._e()]):e._e()],1),r("v-main",{attrs:{app:""}},[r("v-container",{attrs:{fluid:""}},[e.$root.$data.selectedLeaf.title?r("Markdown"):r("div",[r("h2",[e._v("Select a note")])])],1)],1)],1)},b=[],m=(r("96cf"),r("1da1")),k=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"tree"},[!1===e.$root.$data.loadingTree?r("ul",{staticClass:"parent-tree-list"},e._l(e.tree,(function(e){return r("Leaf",{key:e.id,attrs:{leaf:e}})})),1):r("v-row",{attrs:{align:"center",justify:"space-around"}},[r("v-icon",{staticClass:"loading",attrs:{color:"primary"}},[e._v("mdi-loading mdi-spin")])],1),r("div",{staticClass:"actions"},[r("v-speed-dial",{attrs:{bottom:"",right:"","open-on-hover":"",transition:"slide-y-reverse-transition"},scopedSlots:e._u([{key:"activator",fn:function(){return[r("v-btn",{attrs:{color:"blue darken-2",dark:"",fab:""},model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[e.fab?r("v-icon",[e._v(" mdi-close ")]):r("v-icon",[e._v(" mdi-plus ")])],1)]},proxy:!0}]),model:{value:e.fab,callback:function(t){e.fab=t},expression:"fab"}},[r("v-btn",{attrs:{disabled:e.$root.$data.selectedLeaf.title,fab:"",dark:"",small:"",color:"#388E3C"},on:{click:function(t){return e.triggerDialog("leaf")}}},[r("v-icon",[e._v("mdi-leaf")])],1),r("v-btn",{attrs:{disabled:!e.$root.$data.selectedLeaf.label,fab:"",dark:"",small:"",color:"#388E3C"},on:{click:function(t){return e.triggerDialog("markdown")}}},[r("v-icon",[e._v("mdi-language-markdown")])],1),r("v-btn",{attrs:{disabled:!e.$root.$data.selectedLeaf.id,fab:"",dark:"",small:"",color:"#C62828"},on:{click:function(t){return e.triggerDialog("delete")}}},[r("v-icon",[e._v("mdi-delete")])],1)],1)],1),r("v-dialog",{attrs:{"max-width":"500px"},model:{value:e.dialog.triggered,callback:function(t){e.$set(e.dialog,"triggered",t)},expression:"dialog.triggered"}},[r("v-card",[r("v-container",[e._v(" "+e._s(e.dialog.title)+" "),e.dialog.label?r("div",[r("v-text-field",{attrs:{label:e.dialog.label},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.dialog.action(t)}},model:{value:e.dialog.data,callback:function(t){e.$set(e.dialog,"data",t)},expression:"dialog.data"}})],1):e._e()]),r("v-card-actions",[r("v-spacer"),r("v-btn",{attrs:{text:"",color:"#C62828"},on:{click:function(t){e.dialog.triggered=!1}}},[e._v(" Close ")]),r("v-btn",{attrs:{text:"",color:"#388E3C"},on:{click:e.dialog.action}},[e._v(" Confirm ")])],1)],1)],1)],1)},$=[],w=r("bc3a"),y=r.n(w),x={name:"Tree",components:{Leaf:function(){return r.e("chunk-5f5bc3b7").then(r.bind(null,"23b4"))}},props:{tree:Array},data:function(){return{dialog:{triggered:!1,title:null,action:null,data:null},fab:null}},methods:{createLeaf:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$root.$data.selectedLeaf.id||(this.$root.$data.loadingTree=!0),t=this.$root.$data.selectedLeaf.id?this.$root.$data.selectedLeaf.id:null,e.next=5,y.a.post(this.backAddress()+"leaf",{label:this.dialog.data,parentLeaf:t},this.getHeaders());case 5:r=e.sent,r&&(this.dialog.triggered=!1,this.dialog.data=null,this.$root.$data.loadingTree=!1,this.$root.$data.refreshing=t?"leaf":"parents"),e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}(),createNote:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!this.$root.$data.selectedLeaf.id){e.next=6;break}return e.next=4,y.a.post(this.backAddress()+"notes",{title:this.dialog.data,leaf:this.$root.$data.selectedLeaf.id},this.getHeaders());case 4:t=e.sent,t&&(this.dialog.triggered=!1,this.dialog.data=null,this.$root.$data.refreshing="leaf");case 6:e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),delete:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t,r;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,t=this.$root.$data.selectedLeaf.title?"notes":"leaf",e.next=4,y.a.delete(this.backAddress()+t+"/"+this.$root.$data.selectedLeaf.id,this.getHeaders());case 4:r=e.sent,r&&(this.dialog.triggered=!1,"notes"===t?(this.$root.$data.selectedLeaf.id=this.$root.$data.selectedLeaf.leaf,this.$root.$data.refreshing="leaf"):this.$root.$data.selectedLeaf.parentLeaf?(this.$root.$data.selectedLeaf.id=this.$root.$data.selectedLeaf.parentLeaf,this.$root.$data.refreshing="leaf"):this.$root.$data.refreshing="parents"),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),triggerDialog:function(e){switch(e){case"leaf":this.dialog.title="New leaf",this.dialog.label="Label",this.dialog.action=this.createLeaf,this.dialog.triggered=!0;break;case"markdown":this.dialog.title="New markdown note",this.dialog.label="Title",this.dialog.action=this.createNote,this.dialog.triggered=!0;break;case"delete":this.$root.$data.selectedLeaf.title?(this.dialog.title="Are tou sure you want to delete this note ?",this.dialog.action=this.delete,this.dialog.triggered=!0,this.dialog.label=null):(this.dialog.action=this.delete,this.dialog.title="Are tou sure you want to delete this leaf ?",this.dialog.triggered=!0,this.dialog.label=null);break}}}},_=x,L=(r("f4c2"),r("8336")),C=r("b0af"),T=r("99d9"),A=r("a523"),j=r("169a"),O=r("132d"),S=r("0fd9"),V=r("2fa4"),E=r("c73b"),N=r("8654"),P=Object(c["a"])(_,k,$,!1,null,null,null),R=P.exports;d()(P,{VBtn:L["a"],VCard:C["a"],VCardActions:T["a"],VContainer:A["a"],VDialog:j["a"],VIcon:O["a"],VRow:S["a"],VSpacer:V["a"],VSpeedDial:E["a"],VTextField:N["a"]});var H=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[e.alert?r("v-alert",{staticClass:"alert",attrs:{mode:"in-out",elevation:"2",type:"success"}},[e._v("File saved ")]):e._e(),r("div",{attrs:{id:"editor"}},[r("span",{staticClass:"sectionTitle editorSection"},[e._v("Editor")]),r("textarea",{domProps:{value:e.input},on:{input:function(t){return e.update(t.target.value)},keydown:function(t){return(t.type.indexOf("key")||83===t.keyCode)&&t.ctrlKey?(t.preventDefault(),t.stopPropagation(),e.updateNote(t)):null}}}),r("span",{staticClass:"sectionTitle prevSection"},[e._v("Preview")]),r("div",{domProps:{innerHTML:e._s(e.compiledMarkdown)}}),r("v-btn",{staticClass:"custom-button",attrs:{color:"#388E3C",fab:""},on:{click:e.updateNote}},[r("v-icon",[e._v("mdi-content-save")])],1)],1)],1)},M=[],D=r("0e54"),B=r.n(D),I={name:"Markdown",created:function(){this.$root.$data.selectedLeaf.content&&(this.input=this.$root.$data.selectedLeaf.content)},data:function(){return{input:"",alert:!1}},watch:{alert:"timeoutAlert"},computed:{compiledMarkdown:function(){return B()(this.input)}},methods:{update:function(e){this.input=e},updateNote:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,y.a.put(this.backAddress()+"notes/"+this.$root.$data.selectedLeaf.id,{content:this.input},this.getHeaders());case 3:t=e.sent,t&&(this.alert=!0),e.next=10;break;case 7:e.prev=7,e.t0=e["catch"](0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,this,[[0,7]])})));function t(){return e.apply(this,arguments)}return t}(),timeoutAlert:function(){var e=this;setTimeout((function(){e.alert=!1}),3e3)}}},F=I,q=(r("0370"),r("0798")),J=Object(c["a"])(F,H,M,!1,null,null,null),K=J.exports;d()(J,{VAlert:q["a"],VBtn:L["a"],VIcon:O["a"]});var z={name:"Home",components:{Tree:R,Markdown:K},data:function(){return{tree:[]}},created:function(){var e=this;return Object(m["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getParentsLeaf();case 2:case"end":return t.stop()}}),t)})))()},watch:{"$root.$data.refreshing":"refresh"},methods:{getParentsLeaf:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){var t;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,this.$root.$data.selectedLeaf.id||(this.$root.$data.loadingTree=!0),e.next=4,y.a.get(this.backAddress()+"tree",this.getHeaders());case 4:t=e.sent,t&&(this.tree=t.data,this.$root.$data.loadingTree=!1),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,this,[[0,8]])})));function t(){return e.apply(this,arguments)}return t}(),refresh:function(){var e=Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,"parents"!==this.$root.$data.refreshing){e.next=7;break}return this.tree=[],this.$root.$data.selectedLeaf={},e.next=6,this.getParentsLeaf();case 6:this.$root.$data.refreshing=null;case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.error(e.t0);case 12:case"end":return e.stop()}}),e,this,[[0,9]])})));function t(){return e.apply(this,arguments)}return t}()}},U=z,G=r("40dc"),Q=r("f6c4"),W=r("f774"),X=r("2a7f"),Y=Object(c["a"])(U,v,b,!1,null,null,null),Z=Y.exports;d()(Y,{VApp:u["a"],VAppBar:G["a"],VBtn:L["a"],VContainer:A["a"],VIcon:O["a"],VMain:Q["a"],VNavigationDrawer:W["a"],VSpacer:V["a"],VToolbarTitle:X["a"]}),a["a"].use(g["a"]);var ee=[{path:"/",name:"Home",component:Z},{path:"/login",name:"Login",component:function(){return r.e("chunk-6645b1bb").then(r.bind(null,"a55b"))}},{path:"/register",name:"Register",component:function(){return r.e("chunk-46d8d7b8").then(r.bind(null,"73cf"))}}],te=new g["a"]({routes:ee}),re=te,ae=r("f309");a["a"].use(ae["a"]);var ne=new ae["a"]({theme:{dark:!0}}),oe=a["a"].mixin({data:function(){return{token:null}},watch:{token:"setToken"},created:function(){this.restoreToken()},methods:{backAddress:function(){return"https://salty-earth-36065.herokuapp.com/"},getHeaders:function(){return{headers:{"Content-type":"application/json",Authorization:this.token}}},restoreToken:function(){localStorage.token&&(this.token=localStorage.token)},setToken:function(){localStorage.setItem("token",this.token)},logout:function(){var e=this;localStorage.removeItem("token"),setTimeout((function(){e.$router.push({name:"Login"})}),100)}}});a["a"].config.productionTip=!1,re.beforeEach((function(e,t,r){var a=localStorage.getItem("token");return"Home"!==e.name||a||r({name:"Login"}),"Home"!==e.name&&a&&r({name:"Home"}),r()})),new a["a"]({data:function(){return{selectedLeaf:{},loadingTree:!1,refreshing:null}},router:re,vuetify:ne,mixins:[oe],render:function(e){return e(h)}}).$mount("#app")},a25f:function(e,t,r){},f4c2:function(e,t,r){"use strict";r("a25f")}});
//# sourceMappingURL=app.46bb1d77.js.map