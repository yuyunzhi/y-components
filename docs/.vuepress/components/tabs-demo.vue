<template>
    <div>
        <y-tabs :selected.sync="tabs">
            <y-tabs-head>
                <y-tabs-item name="one">one</y-tabs-item>
                <y-tabs-item name="two" disabled >
                    two
                </y-tabs-item>
                <y-tabs-item name="three">
                    three
                </y-tabs-item>
            </y-tabs-head>
            <y-tabs-body>
                <y-tabs-pane name="one">内容 1</y-tabs-pane>
                <y-tabs-pane name="two">内容 2</y-tabs-pane>
                <y-tabs-pane name="three">内容 3</y-tabs-pane>
            </y-tabs-body>
        </y-tabs>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Tabs from '../../../src/tabs/tabs'
    import tabsHead from '../../../src/tabs/tabs-head'
    import tabsBody from '../../../src/tabs/tabs-body'
    import tabsItem from '../../../src/tabs/tabs-item'
    import tabsPane from '../../../src/tabs/tabs-pane'

    export default {
        name: "tabs-demo",
        data(){
          return {
              tabs:'one',
              content:`
 <y-tabs :selected.sync="tabs">
    <y-tabs-head>
        <y-tabs-item name="one">
        one
        </y-tabs-item>
        <y-tabs-item name="two" disabled >
            two
        </y-tabs-item>
        <y-tabs-item name="three">
            three
        </y-tabs-item>
    </y-tabs-head>
    <y-tabs-body>
        <y-tabs-pane name="one">内容 1</y-tabs-pane>
        <y-tabs-pane name="two">内容 2</y-tabs-pane>
        <y-tabs-pane name="three">内容 3</y-tabs-pane>
    </y-tabs-body>
</y-tabs>`.trim()
            }
        },
        components:{
            'y-tabs':Tabs,
            'y-tabs-head':tabsHead,
            'y-tabs-body':tabsBody,
            'y-tabs-item':tabsItem,
            'y-tabs-pane':tabsPane

        }
    }
</script>

<style scoped lang="scss">

</style>