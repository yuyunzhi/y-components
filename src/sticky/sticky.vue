<template>
    <div class="y-sticky-wrapper" ref="wrapper" :style="{height}">
        <div class="y-sticky" :class="classes" :style="{left, width, top}">
            <slot></slot>
        </div>
    </div>
</template>

<script>
    export default {
        name: "YSticky",
        props: {
            distance: {
                type: Number,
                default: 0
            }
        },
        data () {
            return {
                sticky: false,
                left: undefined,
                width: undefined,
                height: undefined,
                top: undefined,
            }
        },
        mounted () {

            //监听滚动事件
            this.windowScrollHandler = this._windowScrollHandler.bind(this)
            window.addEventListener('scroll', this.windowScrollHandler)

        },
        beforeDestroy () {
            window.removeEventListener('scroll', this.windowScrollHandler)
        },
        computed: {
            classes () {
                return {
                    sticky: this.sticky
                }
            }
        },
        methods: {
            offsetTop () {
                //常用top left width height
                let {top} = this.$refs.wrapper.getBoundingClientRect()
                return {top: top + window.scrollY}
            },
            _windowScrollHandler () {
                //top只计算一次
                let top= this.offsetTop().top

                if (window.scrollY > top - this.distance) {

                    //滚动过去了
                    let {height, left, width} = this.$refs.wrapper.getBoundingClientRect()
                    this.height = height + 'px'
                    this.left = left + 'px'
                    this.width = width + 'px'
                    this.top = this.distance + 'px'
                    this.sticky = true
                } else {
                    //没有滚过去
                    this.height = undefined
                    this.left = undefined
                    this.width = undefined
                    this.top = undefined
                    this.sticky = false
                }
            }
        }
    }
</script>

<style scoped lang="scss">
    .y-sticky {
        &.sticky {
            position: fixed;
        }
    }
</style>