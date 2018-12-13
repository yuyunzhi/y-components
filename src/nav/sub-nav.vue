<template>
    <div class="y-sub-nav">
        <span>
            <slot name="title"></slot>
        </span>
        <div class="y-sub-nav-popover">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    export default {
        name: "YSubNav"
    }
</script>

<style scoped lang="scss">
    .y-sub-nav {
        position:relative;
        padding:10px 20px;
        &-popover{
            position:absolute;
            top:100%;
            left:0;
            border:1px solid red;
            white-space:nowrap;
        }
    }
</style>