<template>
    <div class="y-nav-item" :class="{'active':selected}" @click="onClick">
            <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "YNavItem",
        inject:['root'],
        props: {
            name: {
                type: String,
                required: true,
            },
        },
        data() {
            return {
                selected: false
            }
        },
        created(){
            this.root.addItem(this)
        },
        methods: {
            onClick() {
                this.$emit('add:selected', this.name)
            }
        },

    }
</script>

<style scoped lang="scss">
    .y-nav-item {
        padding: 10px 20px;
        &.active {
            background: red;
        }
    }
</style>