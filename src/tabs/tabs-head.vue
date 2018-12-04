<template>
    <div class="tabs-head" >
        <slot></slot>
        <div class="line" ref="line"></div>
        <div class="actions-wrapper">
            <slot name="actions"></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YTabsHead",
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on("update:selected",(item,vm)=>{
                let {width,height,top,left}=vm.$el.getBoundingClientRect();
                this.$refs.line.style.width=`${width}px`;
                let array=[];
                vm.$parent.$children.forEach((component,index)=>{
                    array.push(component.$el.getBoundingClientRect().width)
                });
                vm.$parent.$children.forEach((component,index)=>{
                    let width=0;
                    if(index===0){
                        this.$refs.line.style.left=`0px`
                    }else{
                        if(component.name===item){
                            for(let i=0;i<index;i++){
                                width=width+array[i]
                                this.$refs.line.style.left=`${width}px`
                            }
                        }

                    }
                });


            })
        },
    }
</script>

<style scoped lang="scss">

$tab-height:40px;
$borderColor:#1890ff;
.tabs-head{
    display:flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
    border-bottom:1px solid #ddd;
   position: relative;
    > .line{
        position:absolute;
        bottom:-1px;
        border-bottom:1px solid $borderColor;
        transition:all .3s;
    }
    >.actions-wrapper{
        margin-left:auto;
        display: flex;
        justify-content: center;
        align-items: center;
    }
}
</style>