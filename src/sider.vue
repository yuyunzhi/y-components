<template>
    <transition name="slide">
        <div class="sider" v-if="visible">
            <slot></slot>
            <button class="button"  @click="visible=false">
                <y-icon class="icon" name="searchclose"></y-icon>
            </button>
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
        > button {
            position: absolute;
            top: 0;
            right: 0;
        }
        .button{
            border:1px solid transparent;
            background:transparent;
            cursor: pointer;
            margin-top:2px;
            margin-right:2px;
            .icon{
                fill:#666;

            }
        }
    }
    .slide-enter-active, .slide-leave-active {
        transition: all .3s;
    }
    .slide-enter, .slide-leave-to {
        margin-left: -200px;
    }
</style>