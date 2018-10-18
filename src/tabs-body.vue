<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GululuTabsBody",
        inject:['eventBus'],
    }
</script>

<style scoped>

</style>