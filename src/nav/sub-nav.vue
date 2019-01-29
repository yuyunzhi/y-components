<template>
    <div class="y-sub-nav" :class="{active,vertical}" v-click-outside="close">
        <span @click="onClick" class="y-sub-nav-label">
            <slot name="title"></slot>
            <span class="y-sub-nav-icon" :class="{open,vertical}">
                <y-icon name="right"></y-icon>
            </span>
        </span>
        <template v-if="vertical">
            <transition @enter="enter" @after-enter="afterEnter" @leave="leave" @after-leave="afterLeave">
                <div class="y-sub-nav-popover" v-show="open" :class="{vertical}">
                    <slot></slot>
                </div>
            </transition>
        </template>
        <template v-else>
            <div class="y-sub-nav-popover" v-show="open" >
                <slot></slot>
            </div>
        </template>
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

            enter(el,done){
                el.style.height=`auto`
                let {height}=el.getBoundingClientRect()
                el.style.height=`0`
                el.getBoundingClientRect()
                el.style.height=`${height}px`
                el.addEventListener('transitionend',()=>{
                    done()
                })
            },
            afterEnter(el){
                el.style.height='auto'
            },
            leave(el,done){
                let {height}=el.getBoundingClientRect()
                el.style.height=`${height}px`
                el.getBoundingClientRect()
                el.style.height=`0px`

            },
            afterLeave(el){
              el.style.height='auto'
            },
            close() {
                if(this.vertical){
                    return
                }
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
        &:not(.vertical){
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
        }

        > .y-sub-nav-label {
            padding: 10px 20px;
            display: block;
        }
        .y-sub-nav-icon{display: none}
        &-popover {
            transition: height 1s;
            min-width: 8em;
            position: absolute;
            top: 100%;
            left: 0;
            border: 1px solid black;
            white-space: nowrap;
            margin-top: 2px;
            box-shadow: 0 0 3px fade_out(black, 0.9);
            border-radius: 4px;
            font-size: 14px;
            //overflow: hidden;
            &.vertical{
                position: static;
                border-radius: 0;
                box-shadow:none;
                border:none;
                overflow: hidden;
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
            &.vertical{
            transform: rotate(90deg);
                &.open{
                    transform: rotate(270deg);
                }
        }
            &.open{
                transform: rotate(180deg);
            }
        }
    }


</style>