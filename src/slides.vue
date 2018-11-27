<template>
    <div class="y-slides">
        <div class="y-slides-window" ref="window">
            <div class="y-slides-wrapper">
                <slot></slot>
            </div>
        </div>
        <div class="y-slides-dots">
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
                lastSelectedIndex:undefined,
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
           // this.playAutomatically()
            this.childrenLength = this.$children.length
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            select(index){
                this.lastSelectedIndex=this.selectedIndex
                this.$emit('update:selected', this.names[index])
            },
            playAutomatically() {

                let index = this.names.indexOf(this.getSelected())
                let run = () => {
                    let newIndex = index - 1
                    if (newIndex === -1) {
                        newIndex = this.names.length - 1
                    }
                    if (newIndex === this.names.length) {
                        newIndex = 0
                    }
                    this.select(newIndex)
                    setTimeout(run, 3000)
                }
                setTimeout(run, 3000)


            },
            getSelected() {
                let first = this.$children[0];
                return this.selected || first.name;
            },
            updateChildren() {

                this.$children.forEach((vm) => {

                    // S 用来传递是否为逆向
                    vm.reverse = this.selectedIndex <= this.lastSelectedIndex
                    // E 用来传递是否为逆向

                    //添加$nextTick 解决动画方向bug
                    this.$nextTick(()=>{
                        vm.selected = this.getSelected()
                    })

                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .y-slides {
        border: 1px solid green;
        width: 100%;
        &-window {
            overflow: hidden;
        }
        &-wrapper {
            position: relative;

        }
        &-dots {
            > span.active {
                background: red;
            }
        }

    }
</style>