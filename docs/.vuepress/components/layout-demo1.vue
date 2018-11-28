<template>
    <div>
        <img src="https://i.loli.net/2018/10/27/5bd3dbfc6bc92.png" alt="">
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Layout from '../../../src/layout/layout'
    import Header from '../../../src/layout/header'
    import Content from '../../../src/layout/content'
    import Footer from '../../../src/layout/footer'
    export default {

        data(){
            return{
                content:`
<y-layout class="layout">
    <y-header class="header">header</y-header>
    <y-content class="content">content</y-content>
    <y-footer class="footer">footer</y-footer>
</y-layout>`.trim()
            }
        },
        components:{
            'y-layout':Layout,
            'y-header':Header,
            'y-content':Content,
            'y-footer':Footer,
        }
    }
</script>

<style scoped lang="scss">
    .layout{color: white; width:100%;}
    .header{height: 40px; background:#40a9ff;text-align: center;line-height: 40px; }
    .content{height: 80px; background:#096dd9;text-align: center;line-height: 80px; margin:0;}
    .footer{height: 40px; background:#40a9ff;text-align: center;line-height: 40px; }
</style>