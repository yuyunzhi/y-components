---
title:Tabs
---

# Tabs

## 需求演示

- 默认选中第一项
- 禁用某一项
- 可添加图标

<ClientOnly>
   <tabs-demo></tabs-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| selected.sync | 默认选中某一项 | String  | name值 |
| disabled      | 是否禁用 | Boolean   | false   |
| name  | 每一项的名字 | String | 必须写 |

## 实现逻辑

- 每个同样的组件多次使用，他们的this都是不一样的，所以使用

```
this.$parent //父组件
this.$children  //子组件
this.$option.name  //该组件的name
this.$refs  //该组件ref的某个标签
```

- 组件通信,在父组件使用provide 建立事件中心

```
data(){
  return{
      eventBus: new Vue()
  }
},
provide(){
    return {
        eventBus:this.eventBus
    }
},
```

在子组件或孙组件使用inject注入

```
inject:['eventBus'],
```

- .sync的使用方式,它是一个语法糖

```
//子组件触发
this.$emit('update:selected', newTitle)
//父组件监听
<y-tabs :selected.sync="selectedTab"></y-tabs>
//父组件监听等价于
<y-tabs :selected="selectedTab"  
    @update:selected="selectedTab= $event">   
</y-tabs>
```

- 标签有class style，且组件内部有class、style,两者会共存合并其他则会默认覆盖
- 注意this.$emit()与this.eventBus.$emit()区别 Vue默认不会触发冒泡事件
- getBoundingClientRect() 得到一个元素的width height top left
- 组件name的作用性，通过this.$options.name找到
- this.$children，只能获得子组件不能获得子元素  
- this.$nextTick添加到任务队列中
- throw new Error（''） 报错
- console.warn报警告,但是有些浏览器没有这个函数，所以要检测下console&&console.warn 