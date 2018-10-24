<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YTabsBody",
        inject:['eventBus'],
    }
</script>

<style scoped>

</style>