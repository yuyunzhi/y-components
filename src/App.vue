<template>
    <div class="wrapper">
        <y-pager
                :totalPage="16"
                :currentPage.sync="currentPage"
                @update:currentPage="x"
                :hide-pager="true"
        ></y-pager>
    </div>
</template>

<script>
    import YPager from './pager/pager.vue'

    export default {
        components:{
            'y-pager':YPager
        },
        data() {
            return {
                currentPage:1,
            }
        },
        methods:{
            x(currentPage){
                console.log(currentPage);
            }
        }
    }
</script>

<style lang="scss">


</style>