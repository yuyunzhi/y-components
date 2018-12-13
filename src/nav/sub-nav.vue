<template>
    <div class="y-sub-nav">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="y-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "YSubNav",
        data(){
            return{
                open: false
            }
        },
        methods:{
            onClick(){
                this.open=!this.open
            }
        }
    }
</script>

<style scoped lang="scss">
    .y-sub-nav {
        position:relative;
        >span{
            padding:10px 20px;
            display: block;
        }
        &-popover{
            position:absolute;
            top:100%;
            left:0;
            border:1px solid black;
            white-space:nowrap;
            margin-top:2px;
        }
    }
    .y-sub-nav .y-sub-nav .y-sub-nav-popover{
        top:0;
        left:100%;
        margin-left:8px;
    }
</style>