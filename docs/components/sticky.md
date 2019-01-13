---
title:Sticky
---

# Sticky

## 需求演示

- 滚动后固定在某个位置

<ClientOnly>
   <sticky-demo></sticky-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| distance | 距离窗口顶部的距离 | Number  |  必须传  |



## 实现的逻辑

1、组件滚动后离顶部距离 

- let top= window.srollY+this.$refs.wrapper.getBoundingClientRect()

 
2、监听滚动事件

- window.scrollY >= top - this.distance  //滚动过去了
- window.scrollY < top - this.distance  //未滚动过去



3、解决sticky里4个bug
- this.top()只能取一次，故在加载的时候就要计算出来
- 滚动后滚动条消失，滚回去滚动条出现，所以sticky外部需要包裹一个div占一个空间位置，给一个默认高度
- 动态加载的图片可能一开始获取不到height，所以在滚过去后再获取高度
- sticky的top和left不能用css写，得用JS写

4、热更新与beforeDestroy
- 热更新过程，把修改过的组件移除，再把修改后的组件在原来的位置添加
- 所以在使用事件监听时要在beforeDestroy删除监听

