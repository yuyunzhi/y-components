---
title:Captcha
---

# Captcha

## 需求演示

- 生成图形验证码图
- 设置长宽
- 随机生成干扰线
- 随机生成干扰点

<ClientOnly>
   <captcha-demo></captcha-demo>
</ClientOnly>

## API

| 参数   | 说明   | 类型  | 默认值 |
| -------- | -------- | ------- | ------ |
| imgHeight  | 图形高度 | Number  | 40  |
| imgWidth    | 图形宽度 | Number  | 120    |
| liner  | 干扰线数量 | Number  | 4  |
| dots   | 干扰点数量 | Number  | 50  |
| captcha   | 后端提供的验证码 | String  | 必须填  |


## 实现的逻辑

1、使用canvas绘图
- let context = canvas.getContext('2d')
- 绘制长方形，填充长方形颜色
- 遍历验证码，对每一个验证码设置随机字体大小，设置随机旋转角度，设置随机的字体颜色，随机偏移的位置
- 随机生成干扰点 画圆并随机位置
- 随机生成干扰线 随机起点，随机终点连线，填充随机颜色

2、生成随机函数
- 随机数字
- 随机颜色