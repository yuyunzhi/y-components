<template>
    <div>
        <div style="padding: 20px;">
            <y-cascader :source.sync="source" popover-height="200px"
                        :selected.sync="selected" :load-data="loadData"></y-cascader>
        </div>
    </div>
</template>
<script>
    import Button from "./button/button";
    import Cascader from "./cascader/cascader";
    import db from '../tests/fixtures/db'
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
        name: "demo",
        components: {
            "y-button": Button,
            "y-cascader": Cascader,

        },
        data () {
            return {
                selected: [],
                source: []
            };
        },
        created () {
            ajax(0).then(result => {
                this.source = result
            })
        },
        destroyed () {
        },
        methods: {
            loadData ({id}, updateSource) {
                ajax(id).then(result => {
                    updateSource(result) // 回调:把别人传给我的函数调用一下
                })
            },
        }
    };
</script>
<style>
    * {margin: 0; padding: 0; box-sizing: border-box;}
    img {max-width: 100%;}
    html {
        --font-size: 14px;
    }
    body {
        font-size: var(--font-size);
    }
</style>


