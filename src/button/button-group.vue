<template>
    <div class="y-button-group">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name:'YButtonGroup',
        mounted(){
            for(let node of this.$el.children){
                let name = node.nodeName.toLowerCase();
                if(name !== 'button'){
                    console.warn(`y-button-group 的子元素应该全是 y-button,但你写的是${name}`)
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    $border-radius: 4px;
    $border-color-hover: #1890ff;
    .y-button-group{
        display:inline-flex;
        vertical-align: middle;
        > .y-button{
            border-radius:0;
            &:not(:first-child) {
                margin-left: -1px;
            }
            &:first-child{
                border-top-left-radius:4px;
                border-bottom-left-radius:4px;
            }
            &:last-child{
                border-top-right-radius: 4px;
                border-bottom-right-radius:4px;
            }
            &:hover{
                border-color:#1890ff;
                position:relative;
                z-index: 1;
            }

        }
    }
</style>