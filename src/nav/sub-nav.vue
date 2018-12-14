<template>
    <div class="y-sub-nav" :class="{active}" v-click-outside="close">
        <span @click="onClick">
            <slot name="title"></slot>
        </span>
        <div class="y-sub-nav-popover" v-show="open">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import ClickOutside from '../click-outside'
    export default {
        name: "YSubNav",
        inject:['root'],
        directives:{ClickOutside},
        props: {
            name: {
                type: String,
                required: true,
            }
        },
        data() {
            return {
                open: false,
            }
        },
        computed:{
          active(){
              return this.root.namePath.indexOf(this.name) >= 0
          }
        },
        methods: {
            close(){
                this.open=false
            },
            onClick() {
                this.open = !this.open
            },
            updateNamePath() {
                this.root.namePath.unshift(this.name)
                if(this.$parent.updateNamePath){
                    this.$parent.updateNamePath()
                }else{

                }

            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";

    .y-sub-nav {
        position: relative;
        &.active {
            position: relative;
            &::after {
                content: '';
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom: 1.5px solid $blue;
                width: 100%;
                height: 1px;

            }

        }
        > span {
            padding: 10px 20px;
            display: block;
        }
        &-popover {
            min-width: 6em;
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
            margin-top: 2px;
            box-shadow: 0 0 3px fade_out(black, 0.9);
            border-radius: $border-radius;
            font-size: $font-size;
        }
    }

    .y-sub-nav .y-sub-nav .y-sub-nav-popover {
        top: 0;
        left: 100%;
        margin-left: 8px;
    }


</style>