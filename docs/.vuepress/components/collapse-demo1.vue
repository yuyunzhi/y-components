<template>
    <div>
        <y-collapse :selected.sync="tabs" >
            <y-collapse-item title="标题1" name="one">这是内容</y-collapse-item>
            <y-collapse-item title="标题2" name="two">这是内容</y-collapse-item>
            <y-collapse-item title="标题3"  name="three">这是内容</y-collapse-item>
        </y-collapse>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Collapse from '../../../src/collapse'
    import collapseItem from '../../../src/collapse-item'

    export default {
        name: "collapse-demo1",
        data(){
            return{
                tabs:['one','two'],
                content:`
tabs:['one','two'],

<y-collapse :selected.sync="tabs" >
    <y-collapse-item title="标题1" name="one">这是内容</y-collapse-item>
    <y-collapse-item title="标题2" name="two">这是内容</y-collapse-item>
    <y-collapse-item title="标题3"  name="three">这是内容</y-collapse-item>
</y-collapse>
                `.trim()
            }
        },
        components:{
            'y-collapse':Collapse,
            'y-collapse-item':collapseItem
        }
    }
</script>

<style scoped lang="scss">

</style>