<template>
    <svg class="y-icon">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
    export default {
        name:'YIcon',
        props:['name']
    }
</script>

<style lang="scss" scoped>
    $color:#1890ff;//;
    .y-icon {
        width: 1em;
        height: 1em;
        fill:$color;
    }
</style>