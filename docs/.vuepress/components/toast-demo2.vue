<template>
    <div>

        <y-button class="toast" @click="showToast">Toast</y-button>

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

<y-button class="toast" @click="showToast2">Toast</y-button>

showToast(){
    this.$toast('这是消息体B',{
        position:'middle',
        autoClose:false,
        closeButton:{
            text:'关闭',
            callback:(toast)=>{
                this.log(); //组件外部函数
                toast.log() //组件内部函数
            },
        }
    })
}`.trim()

            }
        },
        methods:{
            showToast(){
                this.$toast('这是消息体B',{
                    position:'middle',
                    autoClose:false,
                    closeButton:{
                        text:'关闭',
                        callback:(toast)=>{
                            this.log(); //组件外部函数
                            toast.log() //组件内部函数
                        },
                    }
                })
            }
        }
    }
</script>