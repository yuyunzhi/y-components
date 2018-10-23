<template>
    <svg class="y-icon">
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
    export default {
        props:['name']
    }
</script>

<style lang="scss" scoped>
    .y-icon {
        width: 1em;
        height: 1em;
        fill:white;
    }
</style>