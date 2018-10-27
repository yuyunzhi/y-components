---
title:Grid
---

# Grid

## 需求演示

- 布局一 

<ClientOnly>
   <grid-demo1></grid-demo1>
</ClientOnly>

- 布局二 gutter

<ClientOnly>
   <grid-demo2></grid-demo2>
</ClientOnly>

- 布局三 offset

<ClientOnly>
   <grid-demo3></grid-demo3>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| gutter | 间隔 | Number/String  | -  |
| align     | 位置 | String  | -      |
| span | 跨度 | Number/String  | -  |
| offset  | 空格块 | Number/String  | -   |

## 实现逻辑

- col 使用margin:0  gutter px
- row 使用margin:0 -gutter/2 px
- 同时在row使用 flex-wrap:nowrap
- offset 使用了 margin-left 来设置
- 跨度样式使用了SASS的forEach

```angular2html
$class-prefix: col-;
@for $n from 1 through 24 {
    &.#{$class-prefix}#{$n} {
        width: ($n / 24) * 100%;
    }
}
```
