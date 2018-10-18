<template>
    <div class="tabs-head">
        <slot></slot>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "GululuTabsHead",
        inject:['eventBus'],
        created(){
            console.log('tabs-head',this.eventBus)

        }
    }
</script>

<style scoped>

</style>