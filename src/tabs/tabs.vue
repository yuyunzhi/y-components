<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
    export default {
        name: "YTabs",
        props:{
            selected:{
                type:String,
                required: true,
            },
        },
        data(){
          return{
              eventBus: new Vue()
          }
        },
        provide(){
            return {
                eventBus:this.eventBus
            }

        },
        mounted(){

            if(this.$children.length === 0 ){
                console && console.warn && console.warn('tabs的子组件应该是tabs-head 和 tabs-body')
            }
            this.$children.forEach((vm,index)=>{
                if(vm.$options.name === 'YTabsHead'){
                    vm.$children.forEach((item,index)=>{
                        if(item.$options.name === 'YTabsItem' && item.name === this.selected){
                            this.eventBus.$emit('update:selected',this.selected,item);
                        }
                    })
                }
            });



        }
    }
</script>

<style scoped lang="scss">
.tabs{

}
</style>