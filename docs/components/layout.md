---
title:Layout
---

# Layout

## 需求演示

- 布局一

<ClientOnly>
   <layout-demo1></layout-demo1>
</ClientOnly>

- 布局二

<ClientOnly>
   <layout-demo2></layout-demo2>
</ClientOnly>

- 布局三

<ClientOnly>
   <layout-demo3></layout-demo3>
</ClientOnly>

## 实现逻辑

- 在layout组件中检测子组件是否含有sider组件
- 如果为true 那么flex-direction：row
- 如果为false那么为column方式排列

```
mounted () {
    this.$children.forEach((vm) => {
        if (vm.$options.name === 'YSider') {
            this.layoutClass.hasSider = true
        }
    })
}
```