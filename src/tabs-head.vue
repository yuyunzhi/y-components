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
        name: "GululuTabsHead",
        inject:['eventBus'],
        mounted(){
            this.eventBus.$on("update:selected",(item,vm)=>{
                let {width,height,top,left}=vm.$el.getBoundingClientRect()
                console.log('left',left);
                this.$refs.line.style.width=`${width}px`
                let lefts=left-50;
                this.$refs.line.style.left=`${lefts}px`
            })
        }
    }
</script>

<style scoped lang="scss">

$tab-height:40px;
$borderColor:blue;
.tabs-head{
    display:flex;
    height: $tab-height;
    justify-content: flex-start;
    align-items: center;
   position: relative;
    > .line{
        position:absolute;
        bottom:0;
        border-bottom:1px solid $borderColor;
        transition:all .3s;
    }
    >.actions-wrapper{
        margin-left:auto;
    }
}
</style>