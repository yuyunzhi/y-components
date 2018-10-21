<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>

<script>
import Vue from 'vue'
    export default {
        name: "GululuTabs",
        props:{
            selected:{
                type:String,
                required: true,
            },
            direction:{
                type:String,
                default:'horizontal',
                validator(value){
                    return ['horizontal','vertical'].indexOf(value)>=0
                }
            }
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
            //console.log('tabs',this.eventBus)
            //console.log(this.selected) ;  //打出来的是sports
            //初始状态sports
            if(this.$children.length === 0 ){
                console && console.warn && console.warn('tabs的子组件应该是tabs-head 和 tabs-body')
            }
            this.$children.forEach((vm,index)=>{
                //console.log(vm.$options.name);GululuTabsHead  GululuTabsBody
                if(vm.$options.name === 'GululuTabsHead'){
                    vm.$children.forEach((item,index)=>{
                        if(item.$options.name === 'GululuTabsItem' && item.name === this.selected){
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