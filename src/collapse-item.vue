<template>
    <div class="collapseItem">
        <div class="title" @click="toggle">
            {{title}}
        </div>
        <div class="content" v-if="open">
            <slot></slot>
        </div>
    </div>
</template>

<script>

    export default {
        name: "GululuCollapseItem",
        props:{
            title:{
                type:String,
                required:true
            }
        },
        inject:['eventBus'],
        data(){
          return{
              open:false
          }
        },
        methods:{
            toggle(){
                if(this.open){
                    this.open=false
                }else{
                    this.open=true;
                    this.eventBus && this.eventBus.$emit('update:selected',this)
                }

            },
            close(){
                this.open=false
            }
        },
        mounted(){
            this.eventBus && this.eventBus.$on('update:selected',(vm)=>{
                if(vm !== this){
                    this.close()
                }
            })
        }
    }
</script>

<style scoped lang="scss">
    $grey:#ddd;
    $border-radius:4px;
    .collapseItem{
        >.title{
            border:1px solid $grey;
            margin-top:-1px;
            margin-left:-1px;
            margin-right:-1px;
            min-height:32px;
            display: flex;
            align-items: center;
            padding:0 8px;
        }
        >.content{
            padding:0 8px;
        }
        &:first-child{
            >.title{
                border-top-left-radius: $border-radius;
                border-top-right-radius: $border-radius;
            }
        }
        &:last-child{
            > .title:last-child{
                border-bottom-left-radius: $border-radius;
                border-bottom-right-radius: $border-radius;
            }
        }
    }

</style>