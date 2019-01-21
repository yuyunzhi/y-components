---
title:Slides
---

# Slides

## 需求演示

- 自动播放
- 鼠标触碰停止，离开继续播放
- 响应式，移动端
- 点击第几张显示第几张
- 设置自动播放间隔

<ClientOnly>
   <slides-demo></slides-demo>
</ClientOnly>

## API

- y-slides

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| selected  | 选中第几个 | String  | 必须填,对应的是name  |
| autoPlay     | 是否自动播放 | Boolean  | true     |
| autoPlayDelay | 间隔多少毫秒播放下一张 | Number | 1500  |

- y-slides-item

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| name | 标记每个轮播图的名字 | String | 必须填 可参考案例  |


## 实现的逻辑

- 使用 transition 实现一张图片显示和隐藏的动画
- 单向数据流 根据传入的数据，动态改变具体显示那张图
- setInterval 如果不终止会造成内存一直变大，所以一般用setTimeout模拟setInterval
- timerId除了可以打破定时器，还要记得置空
- v-for range / v-for="n in 10"
- 添加手机touch事件：touchstart、touchmove、touchend
- updated 生命周期函数，当属性变化的时候就会触发这个函数
- this.$children 只能获取子组件  this.$el.children获取子元素
- 滑动过程就要判断是左滑还是右滑,同时还要判断是真滑动还是假滑动，比如用户向上滑动偏移一点点
