---
title:Input
---

# Input

## 需求演示

- 默认状态
- 禁用状态
- 不可编辑状态
- 警示状态
- 绑定事件(change input focus blur)

<ClientOnly>
   <input-demo></input-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| disabled | 是否禁用 | Boolean | false  |
| value    | 默认显示的提示 | String  | -      |
| readonly | 是否可编辑 | Boolean | false  |
| error     | 错误提示状态 | String  | -   |

## 实现逻辑

- 子组件触发事件，父组件监听

```angular2html
@change="$emit('change', $event.target.value)"
@input="$emit('input', $event.target.value)"
@focus="$emit('focus', $event.target.value)"
@blur="$emit('blur', $event.target.value)"
```
- 根据props获取的disabled readonly value值来对input状态进行绑定
- 根据props获取的error值，判断是否存在添加class来切换input样式状态，以及提示是否显示