---
title:Collapse
---

# Collapse

## 需求演示

- 设置默认打开的面板
- 可以同时展开多个面板

<ClientOnly>
   <collapse-demo1></collapse-demo1>
</ClientOnly>

- 每次只可以展示一个面板

<ClientOnly>
   <collapse-demo2></collapse-demo2>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| selected.sync | 默认打开项 | Array  | - |
| single       | 每次只显示一项| Boolean   | false   |
| title   | 标题 | String | 必须写 |
| name    | 每个item标记 | String | 必须写 |

## 实现逻辑

- 单向数据流
collapse-item自己得到了点击不更改状态，但通知collapse。由collapse通知所有的item后再修改