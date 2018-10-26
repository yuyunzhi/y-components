<template>
    <svg class="y-icon" >
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
    import './svg'
    export default {
        name:'YIcon',
        props:['name'],
    }
</script>

<style lang="scss" scoped>
    $color:white;//;
    .y-icon {
        width: 1em;
        height: 1em;

    }
</style>