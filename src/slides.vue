<template>
    <div class="y-slides">
        <div class="y-slides-window" ref="window">
            <div class="y-slides-wrapper">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            selected: {
                type: String,
            }
        },
        mounted() {
            this.updateChildren()

        },
        updated() {
            this.updateChildren()
        },
        methods: {
            updateChildren() {
                let first = this.$children[0];
                let selected = this.selected || first.name;
                this.$children.forEach((vm) => {
                    vm.selected = selected

                })
            }
        }
    }
</script>

<style scoped lang="scss">
    .y-slides {
        border:1px solid green;
        display: inline-block;
        .y-slides-wrapper {
            position: relative;

        }
    }
</style>