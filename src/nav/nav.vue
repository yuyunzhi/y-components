<template>
    <div class="y-nav" :class="{vertical}">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YNav",
        provide() {
            return {
                root: this,
                vertical:this.vertical
            }
        },
        props: {
            selected: {
                type: String,
            },
            vertical:{
                type:Boolean,
                default:false,
            }
        },
        data() {
            return {
                items:[],
                namePath:[],
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
                    if (this.selected===vm.name) {
                        vm.selected = true
                    } else {
                        vm.selected = false
                    }
                })
            },
            listenToChildren() {
                this.items.forEach(vm => {
                    vm.$on('update:selected', name => {
                        this.$emit('update:selected', name)
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
        user-select: none;
        &.vertical{
            display:flex;
            flex-direction:column;
            border:1px solid $light-grey;
        }
    }
</style>