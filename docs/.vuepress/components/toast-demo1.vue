<template>
        <div>
            <y-button class="toast"  @click="showToast1">Toast-top</y-button>
            <y-button class="toast" @click="showToast2">Toast-middle</y-button>
            <y-button class="toast" @click="showToast3">Toast-bottom</y-button>
            <pre><code>{{content}}</code></pre>
        </div>
</template>
<style>
    .toast{
        border:1px solid #666;
        background:white;
        padding:5px;
        border-radius:3px;
        cursor:pointer;
    }
</style>
<style scoped>
    * {
        box-sizing: border-box;
    }
</style>
<script>
    import plugin from '../../../src/plugin'
    import Button from '../../../src/button'
    import Vue from 'vue'
    Vue.use(plugin);

    export default {
        components: {
            'y-button':Button
        },
        data () {
            return {
                content:`
<y-button class="toast"  @click="showToast1">Toast-top</y-button>
<y-button class="toast" @click="showToast2">Toast-middle</y-button>
<y-button class="toast" @click="showToast3">Toast-bottom</y-button>

showToast1(){ this.$toast('这是消息体A',{ position:'top' }) },
showToast2(){ this.$toast('这是消息体B',{ position:'middle' }) },
showToast3(){
    //$toast第一个参数可以是字符串也可以是html
    this.$toast('这是消息体C',{
        position:'bottom',
        enableHtml:true,
        autoClose:2,
    })
}`.trim()

            }
        },
        methods:{
            showToast1(){
                this.$toast('这是消息体A',{
                    position:'top',
                })
            },
            showToast2(){
                this.$toast('这是消息体B',{
                    position:'middle'
                })
            },
            showToast3(){
                //$toast第一个参数可以是字符串也可以是html
                this.$toast('这是消息体C',{
                    position:'bottom',
                    enableHtml:true,
                    autoClose:3,//false 或具体 数字
                })
            },
        }
    }
</script>