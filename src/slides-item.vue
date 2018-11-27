<template>

    <transition name="slide">
        <div class="y-slides-item" v-if="visible">
            <slot></slot>
        </div>
    </transition>


</template>

<script>
    export default {
        props: {
            name: {
                type: String,
                required: true
            }
        },
        data() {
            return {
                selected: null,
            }
        },
        mounted(){

        },
        computed:{
            visible(){
                console.log(this.name===this.selected);
                return this.selected === this.name
            }
        }
    }
</script>

<style scoped lang="scss">
    .y-slides-item {
        position: absolute;
        left:0;
        top:0;
    }
    .slide-leave-active{
        position: absolute;
        left:0;
        top:0;
        background:Red;
    }
    .slide-enter-active, .slide-leave-active {
        transition: all 1s;
    }

    .slide-enter {
        transform: translateX(100%);
    }

    .slide-leave-to {
        transform: translateX(-100%);
    }
</style>