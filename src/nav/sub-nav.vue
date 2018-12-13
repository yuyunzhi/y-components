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
    @import "var";
    .y-sub-nav {
        position:relative;
        >span{
            padding:10px 20px;
            display: block;
        }
        &-popover{
            min-width:6em;
            position:absolute;
            top:100%;
            left:0;
            border:1px solid black;
            white-space:nowrap;
            margin-top:2px;
            box-shadow:0 0 3px fade_out(black,0.9);
            border-radius: $border-radius;
            font-size:$font-size;
        }
    }
    .y-sub-nav .y-sub-nav .y-sub-nav-popover{
        top:0;
        left:100%;
        margin-left:8px;
    }


</style>