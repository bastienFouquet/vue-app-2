(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5f5bc3b7"],{"23b4":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("li",{staticClass:"node-tree"},[a("div",{staticClass:"node",class:{active:e.isActive},on:{click:function(t){return e.getLeaf(e.leaf)}}},[a("v-icon",[e._v(e._s(e.leaf.label?"mdi-leaf":"mdi-language-markdown"))]),a("span",{staticClass:"label"},[e._v(e._s(e.leaf.label||e.leaf.title))])],1),e.selectedLeaf.notes&&e.selectedLeaf.notes.length?a("ul",{staticClass:"tree-list"},e._l(e.selectedLeaf.notes,(function(e){return a("Leaf",{key:e.id,attrs:{leaf:e}})})),1):e._e(),e.selectedLeaf.children&&e.selectedLeaf.children.length?a("ul",{staticClass:"tree-list"},e._l(e.selectedLeaf.children,(function(e){return a("Leaf",{key:e.id,attrs:{leaf:e}})})),1):e._e()])},s=[],c=(a("96cf"),a("1da1")),r=a("bc3a"),l=a.n(r),i={name:"Leaf",props:{leaf:Object},data:function(){return{selectedLeaf:{}}},methods:{getLeaf:function(){var e=Object(c["a"])(regeneratorRuntime.mark((function e(t){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=8;break}if(this.$root.$data.selectedLeaf=t,!t.label){e.next=8;break}return e.next=6,l.a.get(this.backAddress()+"leaf/"+t.id,this.getHeaders());case 6:a=e.sent,this.selectedLeaf=a.data;case 8:e.next=13;break;case 10:e.prev=10,e.t0=e["catch"](0),console.error(e.t0);case 13:case"end":return e.stop()}}),e,this,[[0,10]])})));function t(t){return e.apply(this,arguments)}return t}()},computed:{isActive:function(){return this.$root.$data.selectedLeaf.id===this.leaf.id}}},f=i,o=(a("440e"),a("2877")),d=a("6544"),u=a.n(d),h=a("132d"),b=Object(o["a"])(f,n,s,!1,null,null,null);t["default"]=b.exports;u()(b,{VIcon:h["a"]})},"440e":function(e,t,a){"use strict";a("a001")},a001:function(e,t,a){}}]);
//# sourceMappingURL=chunk-5f5bc3b7.e2994a5f.js.map