<template>
    <div class="y-slides" @mouseenter="onMouseEnter"
    @mouseleave="onMouseLeave">
        <div class="y-slides-window" ref="window">
            <div class="y-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="y-slides-dots" @mouseenter="onMouseEnter"
             @mouseleave="onMouseLeave">
            <span v-for="n in childrenLength" :class="{active:selectedIndex === n-1}" @click="select(n-1)">
                {{n}}
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            selected: {
                type: String,
            },
            autoPlay: {
                type: Boolean,
                default: true,
            }
        },
        data() {
            return {
                childrenLength: 0,
                lastSelectedIndex: undefined,
                timerId: undefined,
            }
        },
        computed: {
            selectedIndex() {
                return this.names.indexOf(this.selected) || 0
            },
            names() {
                return this.$children.map(vm => vm.name)
            }
        },
        mounted() {
            this.updateChildren()
            this.playAutomatically()
            this.childrenLength = this.$children.length
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            onMouseEnter(){
                this.pause()
            },
            onMouseLeave(){
                this.playAutomatically()
            },
            select(index) {
                this.lastSelectedIndex = this.selectedIndex
                this.$emit('update:selected', this.names[index])
            },
            pause(){
              window.clearTimeout(this.timerId)
                this.timerId=undefined
            },
            playAutomatically() {
                if(this.timerId){
                    return
                }
                let run = () => {
                    let index = this.names.indexOf(this.getSelected())
                    let newIndex = index + 1
                    if (newIndex === -1) {
                        newIndex = this.names.length - 1
                    }
                    if (newIndex === this.names.length) {
                        newIndex = 0
                    }
                    this.select(newIndex)
                    this.timerId = setTimeout(run, 2000)
                }
                setTimeout(run, 2000)


            },
            getSelected() {
                let first = this.$children[0];
                return this.selected || first.name;
            },
            updateChildren() {

                this.$children.forEach((vm) => {

                    // S 用来传递是否为逆向
                    let reverse = this.selectedIndex <= this.lastSelectedIndex
                    if(this.timerId){
                        if(this.lastSelectedIndex===this.$children.length-1&&this.selectedIndex===0){
                            reverse=false
                        }
                        if(this.lastSelectedIndex===0 && this.selectedIndex === this.$children.length-1){
                            reverse=true
                        }
                    }
                    vm.reverse=reverse
                    // E 用来传递是否为逆向

                    //添加$nextTick 解决动画方向bug
                    this.$nextTick(() => {
                        vm.selected = this.getSelected()
                    })

                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .y-slides {

        width: 100%;
        &-window {
            overflow: hidden;
        }
        &-wrapper {
            position: relative;

        }
        &-dots {
            padding:8px 0;
            display: flex;
            justify-content: center;
            align-items: center;
            > span {
                width:20px;
                height:20px;
                border-radius: 50%;
                display: flex;
                justify-content: center;
                align-items: center;
                background:#ddd;
                margin:0 8px;
                font-size: 12px;
                &:hover{
                    cursor: pointer;
                }
                &.active{
                    background:black;
                    color:white;
                    &:hover{
                        cursor: pointer;
                    }
                }

            }
        }

    }
</style>