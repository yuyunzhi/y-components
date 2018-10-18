<template>
    <div class="tabs-item" @click="xxx">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GululuTabsItem",
        inject:['eventBus'],
        props:{
            disabled:{
                type:Boolean,
                default:false,
            },
            name:{
                type:String,
                required: true,
            }
        },
        mounted(){
            this.eventBus.$on('update:selected',(name)=>{
                console.log('item name:',name)
            });
    },
        methods:{
            xxx(){
                this.eventBus.$emit('update:selected',this.name);

            }
        }
    }
</script>

<style scoped>

</style>