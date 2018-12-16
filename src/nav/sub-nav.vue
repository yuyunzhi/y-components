<template>
    <div class="y-sub-nav" :class="{active}" v-click-outside="close">
        <span @click="onClick" class="y-sub-nav-label">
            <slot name="title"></slot>
            <span class="y-sub-nav-icon" :class="{open}">
                <y-icon name="right"></y-icon>
            </span>
        </span>
        <div class="y-sub-nav-popover" v-show="open" :class="{vertical}">
            <slot></slot>
        </div>

    </div>
</template>

<script>
    import ClickOutside from '../click-outside'
    import YIcon from '../icon'

    export default {
        name: "YSubNav",
        components:{
          'y-icon':  YIcon
        },
        inject: ['root','vertical'],
        directives: {ClickOutside},
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
        computed: {
            active() {
                return this.root.namePath.indexOf(this.name) >= 0
            }
        },
        methods: {
            close() {
                this.open = false
            },
            onClick() {
                this.open = !this.open
            },
            updateNamePath() {
                this.root.namePath.unshift(this.name)
                if (this.$parent.updateNamePath) {
                    this.$parent.updateNamePath()
                } else {

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
        > .y-sub-nav-label {
            padding: 10px 20px;
            display: block;
        }
        .y-sub-nav-icon{display: none}
        &-popover {
            min-width: 8em;
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
            margin-top: 2px;
            box-shadow: 0 0 3px fade_out(black, 0.9);
            border-radius: $border-radius;
            font-size: $font-size;
            &.vertical{
                position: static;
                border-radius: 0;
                box-shadow:none;
                border:none;

            }
        }
    }
//第二层
    .y-sub-nav .y-sub-nav {
        &.active{
            &::after{
                display: none;
            }
        }
        .y-sub-nav-popover {
            top: 0;
            left: 100%;
            margin-left: 8px;
        }
        .y-sub-nav-label{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }
        .y-sub-nav-icon{
            display: inline-flex;
            margin-left:1em;
            transition: transform 250ms;
            &.open{
                transform: rotate(180deg);
            }
        }
    }


</style>