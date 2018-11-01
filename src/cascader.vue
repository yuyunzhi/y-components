<template>
    <div class="cascader">
        <div class="trigger">
            <slot></slot>
        </div>
        <div class="popover">
            <div v-for="item in source">
                <cascader-x :info="item"></cascader-x>
            </div>
        </div>
    </div>
</template>

<script>
    import CascaderX from './cascader-x'
    export default {
        name: "YCascader",
        components:{
            'cascader-x':CascaderX
        },
        props:{
          source:{
              type:Array,

          }
        },
    }
</script>

<style scoped lang="scss">
    @import "var";
    .cascader{

    }
</style>