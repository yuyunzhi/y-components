---
title:Button
---

# Button

## 需求演示

- 默认按钮
- 图标按钮
- 加载中状态
- 不可用状态
- 按钮组合状态

<ClientOnly>
   <button-demo></button-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| disabled | 是否禁用 | Boolean | false  |
| icon     | 按钮类型 | String  | -      |
| loading | 加载状态 | Boolean | false  |
| icon-position     | 图标位置 | String  | left   |

## 实现的逻辑

- 样式状态变化：根据在组件传入的内容，通过props拿到添加到class，根据class来变化状态
- icon位置变化：根据class来设定元素order顺序
- 校验传参：根据validator校验传入的value值是否符合
- 在mounted里检测buttonGroup的子元素检测必须为button
