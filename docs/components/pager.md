---
title:Pager
---

# Pager

## 需求演示

- 修改总页数
- 获取当前页数
- 一页的时候隐藏

<ClientOnly>
   <pager-demo></pager-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| totalPage | 总页数 | Number  |  必须传  |
| currentPage | 当前显示的页 | Number   | 必须传   |
| hidePager | 当只有一页的时候是否要隐藏分页器 | Boolean | true  |


## 实现的逻辑

1、如何实现数组的变化？
- 确定 ：[1, this.currentPage - 1,this.currentPage, this.currentPage + 1,this.totalPage]
- 使用filter过滤
- 使用sort排序
- 对排序后的数组，去重返回一个新数组
- 对数组用reduce处理，是否要加...
- 把处理后的数组放在计算属性里，进行遍历，根据内容设置条件渲染到页面
- 使用单向数据流，向外界传递当前页数，再从外界组件更新内部组件

2、实现1页隐藏分页器?
- 用户传入boolean值，根据boolean给div加class，使用display:none