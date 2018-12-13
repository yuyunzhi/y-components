<template>
    <div class="wrapper">
        <y-nav :selected.sync="selected" >
            <y-nav-item name="home">首页</y-nav-item>
            <y-sub-nav>
                <template slot="title">关于</template>
                <y-nav-item  name="culture">企业文化</y-nav-item>
                <y-nav-item  name="developers">开发团队</y-nav-item>
                <y-nav-item  name="contacts">联系电话</y-nav-item>
            </y-sub-nav>
            <y-nav-item name="hire">招聘</y-nav-item>

        </y-nav>
    </div>
</template>

<script>
    import YNav from './nav/nav.vue'
    import YNavItem from './nav/nav-item.vue'
    import YSubNav from './nav/sub-nav.vue'

    export default {
        components:{
            YNav,YNavItem,YSubNav,
        },
        data() {
            return {
                selected:['home']
            }
        },
        created() {

        }
    }
</script>

<style lang="scss">

</style>