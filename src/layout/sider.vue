<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
        </div>
    </transition>
</template>
<script>
    export default {
        name: 'YSider',
        data () {
            return {
                visible: true
            }
        },
        methods: {}
    }
</script>

<style lang="scss" scoped>
    .sider {
        position: relative;
    }
</style>