<template>
    <div class="row" :style="rowStyle" :class="rowClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'YRow',
        props: {
            gutter: {
                type: [Number, String]
            },
            align: {
                type: String,
                validator (value) {
                    return ['left', 'right', 'center'].includes(value)
                }
            }
        },
        computed: {
            //gutter是数值，所以动态改style
            rowStyle () {
                let {gutter} = this;
                return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
            },
            //align是string,所以添加class来修改style
            rowClass () {
                let {align} = this;
                return [align && `align-${align}`]
            }
        },
        mounted () {
            //把gutter的值传给子组件使用
            if(this.gutter){
                this.$children.forEach((vm) => {
                    vm.gutter = this.gutter
                })
            }

        }
    }
</script>
<style scoped lang="scss">
    .row{
        display: flex;
        flex-wrap: nowrap;
        &.align-left {
            justify-content: flex-start;
        }
        &.align-right {
            justify-content: flex-end;

        }
        &.align-center {
            justify-content: center;
        }
    }
</style>