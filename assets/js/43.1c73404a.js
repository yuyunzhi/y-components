(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{380:function(t,e,i){"use strict";i.r(e);var s=i(1),_=Object(s.a)({},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),i("ClientOnly",[i("sticky-demo")],1),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),i("p",[t._v("1、组件滚动后离顶部距离")]),t._v(" "),t._m(6),t._v(" "),i("p",[t._v("2、监听滚动事件")]),t._v(" "),t._m(7),t._v(" "),i("p",[t._v("3、解决sticky里4个bug")]),t._v(" "),t._m(8),t._v(" "),i("p",[t._v("4、热更新与beforeDestroy")]),t._v(" "),t._m(9)],1)},[function(){var t=this.$createElement,e=this._self._c||t;return e("h1",{attrs:{id:"sticky"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#sticky","aria-hidden":"true"}},[this._v("#")]),this._v(" Sticky")])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"需求演示"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#需求演示","aria-hidden":"true"}},[this._v("#")]),this._v(" 需求演示")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("滚动后固定在某个位置")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"api"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("table",[i("thead",[i("tr",[i("th",[t._v("参数")]),t._v(" "),i("th",[t._v("说明")]),t._v(" "),i("th",[t._v("类型")]),t._v(" "),i("th",[t._v("默认值")])])]),t._v(" "),i("tbody",[i("tr",[i("td",[t._v("distance")]),t._v(" "),i("td",[t._v("距离窗口顶部的距离")]),t._v(" "),i("td",[t._v("Number")]),t._v(" "),i("td",[t._v("必须传")])])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("h2",{attrs:{id:"实现的逻辑"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#实现的逻辑","aria-hidden":"true"}},[this._v("#")]),this._v(" 实现的逻辑")])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("let top= window.srollY+this.$refs.wrapper.getBoundingClientRect()")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("window.scrollY >= top - this.distance  //滚动过去了")]),this._v(" "),e("li",[this._v("window.scrollY < top - this.distance  //未滚动过去")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("this.top()只能取一次，故在加载的时候就要计算出来")]),this._v(" "),e("li",[this._v("滚动后滚动条消失，滚回去滚动条出现，所以sticky外部需要包裹一个div占一个空间位置，给一个默认高度")]),this._v(" "),e("li",[this._v("动态加载的图片可能一开始获取不到height，所以在滚过去后再获取高度")]),this._v(" "),e("li",[this._v("sticky的top和left不能用css写，得用JS写")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("ul",[e("li",[this._v("热更新过程，把修改过的组件移除，再把修改后的组件在原来的位置添加")]),this._v(" "),e("li",[this._v("所以在使用事件监听时要在beforeDestroy删除监听")])])}],!1,null,null,null);_.options.__file="sticky.md";e.default=_.exports}}]);