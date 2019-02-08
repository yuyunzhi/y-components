<template>
    <div class="box">
        <y-cascader :source.sync="source" popover-height="180px"
                    :selected.sync="selected" :load-data="updateNewList">
        </y-cascader>
        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import Button from "../../../src/button/button";
    import Cascader from "../../../src/cascader/cascader";
    import db from '../../../tests/fixtures/db'
    function ajax (parentId = 0) {
        return new Promise((success, fail) => {
            setTimeout(() => {
                let result = db.filter((item) => item.parent_id === parentId);
                result.forEach(node => {
                    if (db.filter(item => item.parent_id === node.id).length > 0) {
                        node.isLeaf = false
                    }else{
                        node.isLeaf = true
                    }
                });
                console.log('result');
                console.log(result);
                success(result)
            }, 10)
        })
    }
    export default {
        components: {
            "y-button": Button,
            "y-cascader": Cascader,
        },
        data(){
            return{
                selected: [],
                source: [],
                content: `

<y-cascader :source.sync="source"
            popover-height="200px"
            :selected.sync="selected"
            :load-data="loadData">
</y-cascader>

      `.trim()
            }
        },
        created () {
            ajax(0).then(result => {
                this.source = result
            })
        },
        destroyed () {
        },
        methods: {
            updateNewList ({id}, updateSource) {
                ajax(id).then(result => {
                    updateSource(result) // 回调:把别人传给我的函数调用一下
                })
            },
        }
    }
</script>

<style scoped lang="scss">

</style>