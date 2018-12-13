<template>
    <div class="y-nav">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YNav",
        provide() {
            return {
                root: this
            }
        },
        props: {
            multiple: {
                type: Boolean,
                default: false
            },
            selected: {
                type: Array,
                default: () => {
                    return []
                }
            }
        },
        data() {
            return {
                items:[]
            }
        },
        mounted() {
            this.updateChildren()
            this.listenToChildren()
        },
        updated() {
            this.updateChildren()
        },
        methods: {
            addItem(vm) {

                this.items.push(vm)
            },
            updateChildren() {
                this.items.forEach(vm => {
                    if (this.selected.indexOf(vm.name) >= 0) {
                        vm.selected = true
                    } else {
                        vm.selected = false
                    }
                })
            },
            listenToChildren() {
                this.items.forEach(vm => {
                    vm.$on('add:selected', name => {
                        if (this.multiple) {
                            //多选
                            if (this.selected.indexOf(name) < 0) {
                                //不能修改props的值，所以要深拷贝
                                let copy = JSON.parse(JSON.stringify(this.selected))
                                copy.push(name)
                                this.$emit('update:selected', copy)
                            }
                        } else {
                            //单选
                            this.$emit('update:selected', [name])
                        }

                    })
                })
            }
        }

    }
</script>

<style scoped lang="scss">
    @import "var";
    .y-nav {
        display: flex;
        border-bottom:1px solid $light-grey;
        color:$black;
        cursor: pointer;
    }
</style>