# gululu 一个Vue UI 组件

![标](https://travis-ci.org/yuyunzhi/gululu-demo.svg?branch=master)

作者：余韵之
## 介绍
这是我在Vue过程中做的一个UI框架。

## 开始使用

1.添加CSS样式
    使用本框架前，在CSS中加入border-box
    ```
    *,*::before,*::after{box-sizing:border-box}
    ```
    
    你还需要设置默认颜色等变量，复制以下代码：
    ```
    html{
    --button-height: 32px;
    --font-size: 14px;
    --button-bg: white;
    --button-active-bg: #eee;
    --border-radius: 4px;
    --color: #333;
    --border-color: #999;
    --border-color-hover: #666;
    }
    ```
    
    IE 15 及以上浏览器都支持此样式
   
2、安装 gululu
```
npm install --save gululu
```  

3、引入 gululu
```
import {Button,ButtonGroup,Icon} from 'gululu'
import 'gululu/dist/index.css'

export default{
    name:'app',
    components:{
        'g-button':Button,
        'g-icon':Icon
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

