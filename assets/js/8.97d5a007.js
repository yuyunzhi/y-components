(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{213:function(t,e,n){},214:function(t,e,n){},215:function(t,e,n){},216:function(t,e,n){},221:function(t,e,n){},226:function(t,e,n){"use strict";var s=n(213);n.n(s).a},227:function(t,e,n){"use strict";var s=n(214);n.n(s).a},228:function(t,e,n){"use strict";var s=n(215);n.n(s).a},229:function(t,e,n){"use strict";var s=n(216);n.n(s).a},232:function(t,e,n){"use strict";n(48),n(13);var s={name:"YLayout",data:function(){return{layoutClass:{hasSider:!1}}},mounted:function(){var t=this;this.$children.forEach(function(e){"YSider"===e.$options.name&&(t.layoutClass.hasSider=!0)})}},i=(n(226),n(1)),a=Object(i.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"layout",class:this.layoutClass},[this._t("default")],2)},[],!1,null,"355d9900",null);a.options.__file="layout.vue";e.a=a.exports},234:function(t,e,n){"use strict";n(227);var s=n(1),i=Object(s.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"header"},[this._t("default")],2)},[],!1,null,"4992a46c",null);i.options.__file="header.vue";e.a=i.exports},235:function(t,e,n){"use strict";n(228);var s=n(1),i=Object(s.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"content"},[this._t("default")],2)},[],!1,null,"a16c2d5e",null);i.options.__file="content.vue";e.a=i.exports},236:function(t,e,n){"use strict";n(229);var s=n(1),i=Object(s.a)({},function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"footer"},[this._t("default")],2)},[],!1,null,"13fbf6de",null);i.options.__file="footer.vue";e.a=i.exports},251:function(t,e,n){"use strict";var s=n(221);n.n(s).a},253:function(t,e,n){},282:function(t,e,n){"use strict";var s={name:"YSider",data:function(){return{visible:!0}},methods:{}},i=(n(251),n(1)),a=Object(i.a)(s,function(){var t=this.$createElement,e=this._self._c||t;return e("transition",{attrs:{name:"slide"}},[this.visible?e("div",{staticClass:"sider"},[this._t("default")],2):this._e()])},[],!1,null,"650e912f",null);a.options.__file="sider.vue";e.a=a.exports},309:function(t,e,n){"use strict";var s=n(253);n.n(s).a},362:function(t,e,n){"use strict";n.r(e);var s=n(232),i=n(234),a=n(235),o=n(236),r=n(282),c={data:function(){return{content:'\n<y-layout class="layout">\n    <y-sider class="sider">sider</y-sider>\n    <y-layout>\n        <y-header class="header">header</y-header>\n        <y-content class="content">content</y-content>\n        <y-footer class="footer">footer</y-footer>\n    </y-layout>\n</y-layout>\n\n                '.trim()}},components:{"y-layout":s.a,"y-header":i.a,"y-content":a.a,"y-footer":o.a,"y-sider":r.a}},u=(n(309),n(1)),l=Object(u.a)(c,function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("img",{attrs:{src:"https://i.loli.net/2018/10/26/5bd2d5b0451a9.png",alt:""}}),this._v(" "),e("pre",[e("code",[this._v(this._s(this.content))])])])},[],!1,null,"bc85e1b6",null);l.options.__file="layout-demo3.vue";e.default=l.exports}}]);