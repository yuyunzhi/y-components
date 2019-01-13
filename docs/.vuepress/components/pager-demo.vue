<template>
    <div>
        <y-pager
                :totalPage="16"
                :currentPage.sync="currentPage"
                @update:currentPage="x"
                :hide-pager="true"
        ></y-pager>

        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import YPager from '../../../src/pager/pager.vue'

    export default {
       components:{YPager},
        data() {
            return {
                currentPage:1,
                content: `
<y-pager
        :totalPage="16"
        :currentPage.sync="currentPage"
        @update:currentPage="x"
        :hide-pager="true"
></y-pager>`.trim()
            }
        },
        methods:{
            x(currentPage){
                console.log(currentPage);
            }
        }
    }
</script>

<style scoped lang="scss">

</style>