<template>
    <div class="wrapper">

        <y-table
                :columns="columns"
                :data-source="dataSource"
                hasButton
                class="table"
        >
            <template slot-scope="xxx">
                <span  class="btn" @click="getInformation(xxx.item)">查看</span>
            </template>
        </y-table>

        <pre><code>{{content}}</code></pre>
    </div>
</template>

<script>
    import YTable from '../../../src/table/table'
    import YButton from '../../../src/button/button.vue'

    export default {
        components: {
            YTable,YButton
        },
        data() {
            return {
                dataSource:[
                    {id:1,name:'小王',score:88},
                    {id:2,name:'小李',score:99},
                    {id:3,name:'小张',score:77},
                    {id:4,name:'小赵',score:55},
                    {id:5,name:'小郑',score:66},
                ],
                columns:[
                    {text:'姓名',field:'name'},
                    {text:'分数',field:'score'},
                ],
                content: `
<y-table
        :columns="columns"
        :data-source="dataSource"
        hasButton
>
    <template slot-scope="xxx">
        <span  class="btn" @click="getInformation(xxx.item)">查看</span>
    </template>
</y-table>

----S data------

dataSource:[
    {id:1,name:'小王',score:88},
    {id:2,name:'小李',score:99},
    {id:3,name:'小张',score:77},
    {id:4,name:'小赵',score:55},
    {id:5,name:'小郑',score:66},
],
columns:[
    {text:'姓名',field:'name'},
    {text:'分数',field:'score'},
],

----E data------

----S methods------

getInformation(item){
  alert(item.name+"的分数是"+item.score)
},

----E methods------

      `.trim()
            }
        },
        methods:{
            getInformation(item){
                alert(item.name+"的分数是"+item.score)
            },
        }
    }
</script>

<style lang="scss">
    .wrapper{
        .table{
            .y-table-wrapper{
                width:100%;
            }
            .y-table-cell{
                width:100px;
            }
        }
        .btn{
            font-size:14px;
            border:none;
            background:transparent;
            color:#40a9ff;
            cursor: pointer;
            margin-right:10px;
        }
    }
</style>