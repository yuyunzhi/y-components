<template>
    <div>
        {{info.name}}
        <cascader-x v-for="item in info.children"
            v-if="info.children"
            :info="item"
        >
        </cascader-x>
    </div>
</template>

<script>
    const component = {
        name: "cascader-x",
        components:{
          cascaderX:component
        },
        props:{
            info:{
                type:Object
            }
        }
    }
    export default component
</script>

<style scoped lang="scss">

</style>