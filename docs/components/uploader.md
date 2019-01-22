---
title:Uploader
---

# Uploader

## 需求演示


- 自定义上传尺寸、图片格式
- 单图上传
- 多图上传
- 上传进度loading
- 删除图片
- 预览图

<ClientOnly>
   <uploader-demo></uploader-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| accept | 上传内容接受的类型 | String | image/*  |
| action     | 上传地址 | String  | 必填      |
| name | 与后端协商好的文件名字 | String | 必填  |
| size    | 接受上传内容的大小 | Number  | 2 * 1024 * 1024   |
| method | 请求方式 | String | post  |
| parseResponse    | 处理后端响应的内容给src | Function  | 必填 |
| method | 请求方式 | String | post  |
| @error | 上传失败触发的函数 | Function | -  |
| @uploaded | 上传成功后触发的函数 | Function | -  |
## 实现的逻辑

1、上传流程
- 点击上传
- 点击确定后-立马上传
- post请求发到server
- 响应得到url是我们要的
- 预览
- 保存

2、使用的技术
- 点击按钮动态创建input，设置type,multiple,accept
- 动态触发input点击
- 对input监听change事件
- 创建new FormData() 把name和file append进去
- 使用XMLHttpRequest发送文件
- 监听onload事件，获取后端传来的url，赋值给src
- 监听onerror事件，处理上传失败的状态

