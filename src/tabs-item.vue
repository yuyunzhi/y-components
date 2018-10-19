<template>
    <div class="tabs-item" @click="getName" :class="classes">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "GululuTabsItem",
        inject:['eventBus'],
        data(){
            return {
                active:false
            }
        },
        computed:{
            classes(){
                return {'active': this.active === true }
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
            this.eventBus.$on('update:selected',(name)=>{
                if( name === this.name ){
                    this.active= true;
                    console.log(this.name,'被选中了')
                }else{
                    this.active=false;
                    console.log(this.name,'未被选中')
                }
            });

    },
        methods:{
            getName(){
                this.eventBus.$emit('update:selected',this.name);
            }
        }
    }
</script>

<style scoped lang="scss">
.tabs-item{
    padding:0 2em;
    cursor: pointer;
    height:100%;
    display: flex;
    align-items: center;
    justify-content: center;
    &.active{
        background:red;
    }
}
</style>