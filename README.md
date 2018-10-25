# y-components 一个Vue UI 组件

![标](https://travis-ci.org/yuyunzhi/y-components.svg?branch=master)

作者：余韵之
## 介绍
这是我在Vue过程中做的一个UI框架。

## 开始使用

1.添加CSS样式
    使用本框架前，在CSS中加入border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    
  
2、安装 y-components


3、引入 y-components
```
import {Button,ButtonGroup,Icon} from 'y-components'
import 'y-components/dist/index.css'

export default{
    name:'app',
    components:{
        'y-button':Button,
        'y-icon':Icon
    }
}
```

4、引入SVG Symbols
```angular2html
<script src="//at.alicdn.com/t/font_860042_dp5sptsf4cm.js"></script>
```


  
## 提问

## 变更记录

## 联系方式

## 贡献代码
## 安装

