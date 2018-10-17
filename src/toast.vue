<template>

        <div class="toast" ref="toast" :class="toastClasses">
            <div class="message">
                <slot v-if="!enableHtml"></slot>
                <div v-else v-html="$slots.default"></div>
            </div>
            <div class="line" ref="line"></div>
            <span class="close" v-if="closeButton" @click="onClickButton">{{closeButton.text}}</span>
        </div>

</template>

<script>
    export default {
        name: "GululuToast",
        props: {
            autoClose: {
                type: Boolean,
                default: true
            },
            autoCloseDelay: {
                type: Number,
                default: 3
            },
            closeButton:{
                type:Object,
                default: ()=>{
                    return {
                        text:'关闭',
                        callback:undefined,
                    }
                }
            },
            enableHtml:{
                type:Boolean,
                default:false
            },
            position:{
                type:String,
                default:'top',
                validator(value){
                    return ['middle','top','bottom'].includes(value)
                }
            }
        },
        computed:{
            toastClasses(){
                return {[`position-${this.position}`]:true}
            }
        },
        mounted(){
            this.updateStyles();
            this.execAutoClose();
            console.log('this.$refs.line',this.$refs.line);

        },
        methods:{
            execAutoClose(){
                if(this.autoClose){
                    setTimeout(()=>{
                        this.close()
                    },this.autoCloseDelay*1000)
                }
            },
            updateStyles(){
                this.$nextTick(()=>{
                    this.$refs.line.style.height=`${this.$refs.toast.getBoundingClientRect().height}px`
                })
            },
            close(){
                this.$el.remove();
               // this.$destroy()
            },
            onClickButton(){
                //删除自己
                this.close();
                //删除后调用函数
                if(this.closeButton && typeof this.closeButton.callback === 'function'){
                    this.closeButton.callback(this)//this.代表当前实例
                }
            },
            log(){
                console.log('我是toast里面的log函数')
            }
        }
    }
</script>

<style scoped lang="scss">
$font-size:14px;
$toast-min-height:40px;
$toast-bg:rgba(0,0,0,.75);
    .toast{
        font-size:$font-size;
        min-height: $toast-min-height;
        line-height:1.8;
        position: fixed;
        left:50%;
        transform:translateX(-50%);
        display: flex;
        align-items: center;
        color:white;
        background:$toast-bg;
        border-radius:4px;
        box-shadow:0 0 3px 0 rgba(0,0,0,0.50);
        padding:0 16px;
        &.position-top{
            top:0;
            left:50%;
            transform:translateX(-50%);
        }
        &.position-middle{
            top:100%;
            left:50%;
            transform: translateX(-50%);
        }
        &.position-bottom{
            bottom:0;
            left:50%;
            transform: translateX(-50%);
        }
    }
    .message {
        padding: 8px 0;
    }
    .close{
        padding-left:16px;
        flex-shrink: 0;
    }
    .line{
        height:100%;
        border-left:1px solid #666;
        margin-left:16px;
    }


</style>