---
title:Table
---

# Table

## 需求演示


- 全选，单选
- 展示数据
- 有边框
- 有间隔条纹
- 有序号

<ClientOnly>
   <table-demo1></table-demo1>
</ClientOnly>

- 是否有按钮

<ClientOnly>
   <table-demo2></table-demo2>
</ClientOnly>

- 能排序
- 可以设置loading

<ClientOnly>
   <table-demo3></table-demo3>
</ClientOnly>


## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| columns  | 每列的名字及对应的key | Array | 必须填(格式参考案例)  |
| dataSource   | 数据 | Array   | 必须填(格式参考案例)  |
| numberVisible  | 是否显示序号 | Boolean | true  |
| compact  | 是否紧凑 | Boolean | true  |
| hasBorder  | 是否有边框 | Boolean | true  |
| striped   | 是否有间隔色 | Boolean | true  |
| checkable   | 是否有checkbox | Boolean | true (与selectedItems 同时使用) |
| selectedItems  | 选中的所有数据 | Array   | [] (与checkable同时使用)  |
| orderBy    | 传入排序方式asc/desc  | Object | 必须填(格式参考案例)  |
| loading  | 是否显示加载中 | Boolean | false (与orderBy同时使用) |
| expendField     | 是否有展开项  | String  | 必须填(格式参考案例)  |
| hasButton   | 是否有按钮 | Boolean | false (与slot-scope同时使用) |



## 实现的逻辑

- v-for 一定要搭配key=id，否则删除的时候会找不到
- 数据一定要有id，因为深拷贝后可能就找不到了某个数据了

```
var a = {name: 'a'}
var b = {name : 'b'}
var c = {name: 'c'}
var d = [a, b, c]
let x=JSON.parse(JSON.stringify(d))
console.log(x.indexOf(a));  //-1
```

- 实现半选indeterminate
- background：lighten(grey,10%)
- sort()默认为字典序排序
- &:nth-child(odd) 单，&:nth-child(even) 双，
- 如果需要排序，那么监听orderBy事件，发送请求，拿到数据
- 单选，全选状态，使用单向数据流，给组件外部传selectedItems。组件内部接收，根据数据id来判断自己的状态是否被选中
- td 跨多列，在td标签上加colspan