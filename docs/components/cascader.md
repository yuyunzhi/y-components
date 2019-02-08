---
title:Cascader
---

# Cascader

## 需求演示

- 当选中某一级时，动态加载该级下的选项
- 不限层数

<ClientOnly>
   <cascader-demo></cascader-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| popover-height | 设置列表高度 | String | 必须填  |
| source     | 传入列表的第一层数据 | Array  | 必须要包含name、isLeaf、id    |
| selected | 选中的内容 | Array | []  |
| load-data    | 次级列表查询函数 | Function  | 参数为id 和 回调函数   |

## 实现的逻辑

- 每次点击级联获取城市名字，通过单向数据流更新selected来更新显示的内容
- 使用自定义指令对DOM的封装，实现点击外部触发close函数，关闭浮层
- 使用递归组件cascader-item,实现了多层的需求
- 根据子叶isLeaf，来判断是否要有下一级的显示