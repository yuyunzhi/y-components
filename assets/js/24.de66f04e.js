(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{275:function(t,n,o){},276:function(t,n,o){},331:function(t,n,o){"use strict";var s=o(275);o.n(s).a},332:function(t,n,o){"use strict";var s=o(276);o.n(s).a},361:function(t,n,o){"use strict";o.r(n);var s=o(287),a=o(208);o(0).a.use(s.a);var i={components:{"y-button":a.a},data:function(){return{content:"\n\n<y-button class=\"toast\" @click=\"showToast2\">Toast</y-button>\n\nshowToast(){\n    this.$toast('这是消息体B',{\n        position:'middle',\n        autoClose:false,\n        closeButton:{\n            text:'关闭',\n            callback:(toast)=>{\n                this.log(); //组件外部函数\n                toast.log() //组件内部函数\n            },\n        }\n    })\n}".trim()}},methods:{showToast:function(){var t=this;this.$toast("这是消息体B",{position:"middle",autoClose:!1,closeButton:{text:"关闭",callback:function(n){t.log()}}})},log:function(){alert("调用了组件外部的函数")}}},c=(o(331),o(332),o(1)),e=Object(c.a)(i,function(){var t=this.$createElement,n=this._self._c||t;return n("div",[n("y-button",{staticClass:"toast",on:{click:this.showToast}},[this._v("Toast")]),this._v(" "),n("pre",[n("code",[this._v(this._s(this.content))])])],1)},[],!1,null,"791c574d",null);e.options.__file="toast-demo2.vue";n.default=e.exports}}]);