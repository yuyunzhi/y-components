<template>
    <div>
        <img src="https://i.loli.net/2018/10/26/5bd2d5b0451a9.png" alt="">
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Layout from '../../../src/layout/layout'
    import Header from '../../../src/layout/header'
    import Content from '../../../src/layout/content'
    import Footer from '../../../src/layout/footer'
    import Sider from '../../../src/layout/sider'

    export default {

        data(){
            return{
                content:`
<y-layout class="layout">
    <y-sider class="sider">sider</y-sider>
    <y-layout>
        <y-header class="header">header</y-header>
        <y-content class="content">content</y-content>
        <y-footer class="footer">footer</y-footer>
    </y-layout>
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
    .content{height: 80px; background:#096dd9;text-align: center;line-height: 80px;margin:0;}
    .footer{height: 40px; background:#40a9ff;text-align: center;line-height: 40px;}
    .sider{height: 224px; background:#1890ff;text-align: center;line-height: 224px;width:30%;}
</style>