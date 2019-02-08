<template>
    <div class="tabs-item" @click="onClick" :class="classes" :data-name="name">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YTabsItem",
        inject:['eventBus'],
        data(){
            return {
                active:false
            }
        },
        computed:{
            classes(){
                return {
                    active:this.active,
                    disabled:this.disabled
                }
            }
        },
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
        created(){
            if(this.eventBus){
                this.eventBus.$on('update:selected',(name)=>{
                    if( name === this.name ){
                        this.active= true;

                    }else{
                        this.active=false;

                    }
                });
            }


    },
        methods:{
            onClick(){
                if(this.disabled){return}
                this.eventBus.$emit('update:selected',this.name,this);
                this.$emit('click',this)
            }
        }
    }
</script>

<style scoped lang="scss">
    $blue:#1890ff;
    $disabled-color:grey;
.tabs-item{
    padding:0 1em;
    cursor: pointer;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active{
        color:$blue;
    }
    &.disabled{
        color:$disabled-color;
        cursor: not-allowed;
    }
}
</style>