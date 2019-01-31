---
title:Waterfall
---

# Waterfall

## 需求演示

- 自适应布局

<ClientOnly>
   <waterfall-demo></waterfall-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| dataSource | 传入的数据 | Array | 必须填,类型参考案例  |
| imgWidth     | 图片宽度 | Number  | 必须填     |
| imgHeight | 图片高度 | Number | 必须填  |
| responsiveLayout   | 是否要自适应 | Boolean  | false   |

## 实现的逻辑

- 获取瀑布流总宽度wrapperWidth
- 计算出总列数columns = wrapperWidth/imgWidth
- 获取第一行的高度，存入数组
- 找到最小的一位，记录下标
- 根据下标设置每个block的位置absolute left top
- 设置完毕后给该下标的数值加入新的block高度
- 添加resize事件监听及在beforeDestroy销毁该事件监听
