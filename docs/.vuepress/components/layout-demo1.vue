<template>
    <div>
        <y-layout class="layout">
            <y-header class="header">header</y-header>
            <y-content class="content">content</y-content>
            <y-footer class="footer">footer</y-footer>
        </y-layout>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Layout from '../../../src/layout'
    import Header from  '../../../src/header'
    import Content from '../../../src/content'
    import Footer from '../../../src/footer'
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