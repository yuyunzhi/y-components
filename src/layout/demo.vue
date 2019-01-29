<template>
    <div class="wrapper">
        <y-layout class="layout">
            <y-header class="header">header</y-header>
            <y-layout>
                <y-sider class="sider">sider</y-sider>
                <y-content class="content">content</y-content>
            </y-layout>
            <y-footer class="footer">footer</y-footer>
        </y-layout>

        <hr>

        <y-layout class="layout">
            <y-header class="header">header</y-header>
            <y-layout>
                <y-sider class="sider">sider</y-sider>
                <y-content class="content">content</y-content>
            </y-layout>
            <y-footer class="footer">footer</y-footer>
        </y-layout>

        <hr>

        <y-layout class="layout">
            <y-header class="header">header</y-header>
            <y-content class="content">content</y-content>
            <y-footer class="footer">footer</y-footer>
        </y-layout>
    </div>
</template>

<script>
    import YHeader from './layout/header'
    import YFooter from './layout/footer'
    import YContent from './layout/content'
    import YLayout from './layout/layout'
    import YSider from './layout/sider'


    export default {
        components: {
            YHeader,YFooter,YContent,YLayout,YSider
        }
    }
</script>

<style lang="scss">
    .layout{

        .header{
            background:#1890ff;
            height:100px;
        }
        .footer{
            background:#1890ff;
            height:100px;
        }
        .content{
            background:#096dd9;
            height:200px;
        }
        .sider{
            background:#4a90e2;
            height:200px;
            width:30%;
        }
    }
</style>
