<template>
    <div class="y-nav-item" :class="{'active':selected}" @click="onClick">
            <slot></slot>
    </div>
</template>

<script>

    export default {
        name: "YNavItem",
        inject:['root'],
        props: {
            name: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                selected: false
            }
        },
        created(){
            this.root.addItem(this)
        },
        methods: {
            onClick() {
                this.root.namePath=[]  //点击后清空高亮部分
                this.$parent.updateNamePath && this.$parent.updateNamePath()
                this.$emit('add:selected', this.name)
            }
        },

    }
</script>

<style scoped lang="scss">
    @import "var";
    .y-nav-item {
        padding: 10px 20px;
        position: relative;
        &.active {
            &::after{
                content:'';
                position: absolute;
                bottom:0;
                left:0;
                border-bottom:1.5px solid $blue;
                width:100%;
                height:1px;

            }
        }
    }
    .y-sub-nav .y-nav-item{
        color:$light-color;

        &.active{
            border-radius: $border-radius;
            background:$grey;
            color:$black;
            &::after{
                display: none;
            }
        }

    }
</style>