<template>
    <div class="layout" :class="layoutClass">
        <slot></slot>
    </div>
</template>
<script>
    export default {
        name: 'YLayout',
        data () {
            return {
                layoutClass: {
                    hasSider: false
                }
            }
        },
        mounted () {
            //含义是两层最外内和内层的检测,整个组件最重要的点
            this.$children.forEach((vm) => {
                if (vm.$options.name === 'YSider') {
                    this.layoutClass.hasSider = true
                }
            })
        }
    }
</script>

<style lang="scss" scoped>
    .layout {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        flex-wrap:nowrap;
        &.hasSider {
            flex-direction: row;
        }
    }
</style>