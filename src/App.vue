<template>
    <div class="wrapper">
        <y-pager :totalPage="16" :currentPage.sync="currentPage"></y-pager>
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
                currentPage:1
            }
        },
        methods:{

        }
    }
</script>

<style lang="scss">

</style>