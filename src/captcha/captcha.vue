<template>
    <div class="y-captcha">
        <canvas
                ref="captcha"
                :width="imgWidth"
                :height="imgHeight"
                @click="updateCaptcha"
        >
        </canvas>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        props:{
          imgHeight:{
              type:Number,
              default:40,
              validator(value) {
                  return typeof value === "number" ? true : false
              }
          },
          imgWidth:{
              type:Number,
              default:120,
              validator(value) {
                  return typeof value === "number" ? true : false
              }
          },
            liner:{
                type:Number,
                default:4,
                validator(value) {
                    return typeof value === "number" ? true : false
                }
            },
            dots:{
                type:Number,
                default:50,
                validator(value) {
                    return typeof value === "number" ? true : false
                }
            },
          captcha:{
              type:String,
              required:true,
          },
        },
        watch:{
            captcha(a,b){
                this.generateCaptchaPicture()
            }
        },
        mounted() {
           this.generateCaptchaPicture()
        },
        methods: {
            updateCaptcha() {
                this.$emit('update:captcha')
            },
            randomNumber(min, max) {
                //值的范围大小  min<x<max
                return parseInt(Math.random() * (max - min) + min)
            },
            randomColor(min, max) {
                const r = this.randomNumber(min, max)
                const g = this.randomNumber(min, max)
                const b = this.randomNumber(min, max)
                return `rgb(${r},${g},${b})`
            },

            generateCaptchaPicture() {
                let context = this.$refs.captcha.getContext('2d')
                context.fillStyle = this.randomColor(200, 250)
                context.fillRect(0, 0, this.imgWidth, this.imgHeight)

                // 对每一个数字进行旋转，设置字体大小，颜色
                for (let i = 0; i < this.captcha.length; i++) {
                    let string=JSON.parse(JSON.stringify(this.captcha))
                    let text = string[i]

                    let fontSize = this.randomNumber(14,35)
                    let rotateDeg = this.randomNumber(-50, 50)

                    context.font = fontSize + 'px yahei'
                    context.textBaseline = 'top'
                    context.fillStyle = this.randomColor(50, 120)

                    context.save()
                    context.translate(30 * i + 15, 15)
                    context.rotate(rotateDeg * Math.PI / 180)

                    context.fillText(text, -15 + 5, -15)
                    context.restore()
                }

                //随机生成干扰点
                for (let i = 0; i < this.dots; i++) {
                    context.beginPath()
                    context.arc(this.randomNumber(0, this.imgWidth), this.randomNumber(0, this.imgHeight), 1, 0, 2 * Math.PI)
                    context.closePath()
                    context.fillStyle = this.randomColor(150, 200)
                    context.fill()
                }

                // 随机产生干扰线,
                for (let i = 0; i < this.liner; i++) {
                    context.beginPath()
                    context.moveTo(this.randomNumber(0, this.imgWidth), this.randomNumber(0, this.imgHeight))
                    context.lineTo(this.randomNumber(0, this.imgWidth), this.randomNumber(0, this.imgHeight))
                    context.strokeStyle = this.randomColor(180, 230)
                    context.closePath()
                    context.stroke()
                }
            }
        }
    }
</script>
<style type="text/css">
    .y-captcha canvas {
        cursor: pointer;
    }
</style>
