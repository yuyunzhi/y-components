<template>
    <div>
        <img src="https://i.loli.net/2018/10/26/5bd2d58ea4a00.png">
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Layout from '../../../src/layout'
    import Header from  '../../../src/header'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'
    import Sider from '../../../src/sider'
    export default {

        data(){
            return{
                content:`
<y-layout class="layout">
    <y-header class="header">header</y-header>
    <y-layout>
        <y-sider class="sider">sider</y-sider>
        <y-content class="content">content</y-content>
    </y-layout>
    <y-footer class="footer">footer</y-footer>
</y-layout>

                `.trim()
            }
        },
        components:{
            'y-layout':Layout,
            'y-header':Header,
            'y-content':Content,
            'y-footer':Footer,
            'y-sider':Sider,
        }
    }
</script>

<style scoped lang="scss">

    .layout{color: white;}
    .header{height: 40px; background:#40a9ff;text-align: center;line-height: 40px;}
    .content{height: 50px; background:#096dd9;text-align: center;line-height: 50px;width:69%; margin:0}
    .footer{height: 40px; background:#40a9ff;text-align: center;line-height: 40px;}
    .sider{height: 114px; background:#1890ff;text-align: center;line-height: 114px;width:29%;margin:0}
</style>