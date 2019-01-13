<template>
    <div id="app">
        <div style="margin: 20px 0">
            <y-button  @click="getCode">下一张</y-button>
        </div>

        <img-captcha
                :img-height="imgHeight"
                :img-width="imgWidth"
                :captcha="captcha"
                :dots="70"
                :liner="10"
                @update:captcha="getCode"
        ></img-captcha>

    </div>
</template>

<script>
    import imgCaptcha from './captcha/captcha.vue'
    import YButton from './button/button.vue'
    export default {

        components:{YButton,imgCaptcha},
        data(){
            return{
                imgHeight:40,
                imgWidth:120,
                captcha:'adfa',//来自后端提供的验证码
                pool:'ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
            }
        },
        methods: {
            getCode(){
                //模拟发送请求，获取验证码
                let imgCode=''
                for (let i = 0; i < 4; i++) {
                    const text = this.pool[this.randomNumber(0, this.pool.length)]
                    let string = JSON.parse(JSON.stringify(this.captcha))
                    imgCode = imgCode + text
                }
                this.captcha=imgCode
                console.log(imgCode);
            },
            randomNumber(min, max) {
                return parseInt(Math.random() * (max - min) + min)
            },
        },
    }
</script>