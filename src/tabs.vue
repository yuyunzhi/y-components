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
            this.eventBus.$emit('update:selected',this.selected);


        }
    }
</script>

<style scoped lang="scss">
.tabs{

}
</style>