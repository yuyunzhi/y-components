<template>
    <div class="tabs-pane">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GululuTabsPane",
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on('update:selected',(name)=>{
                console.log('pane name:',name)
            });
        },
    }
</script>

<style scoped>

</style>