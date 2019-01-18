<template>
    <div class="wrapper">

        <y-table
                :columns="columns"
                :data-source="dataSource"
                :order-by.sync="sortRules"
                @update:orderBy="x"
                :loading="loading"
                class="table"
        >
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
                sortRules:{ //如果不写key，表示那一列不需要排列
                    // name:'asc',
                    score:true
                },

                loading:false,
                content: `
<y-table
        :columns="columns"
        :data-source="dataSource"
        :order-by.sync="sortRules"
        @update:orderBy="x"
        :loading="loading"
>
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
sortRules:{ //如果不写key，表示那一列不需要排列
    // name:'asc',
    score:true
},
loading:false,

----E data------

----S methods------
x(sortRules){
    //true 表示默认排序，asc 表示升序，desc表示降序
    console.log(sortRules);
    this.loading=true
    //发送请求，渲染页面
    setTimeout(()=>{
        this.dataSource=this.dataSource.sort((a,b)=>a.score-b.score)
        this.loading=false
    },2000)
}
----E methods------

      `.trim()
            }
        },
        watch:{
            selectedItems(aNew,bOld){
                console.log(aNew);
            }
        },
        methods:{
            //根据排序的规则，发送请求，渲染数据
            x(sortRules){
                //true 表示默认排序，asc 表示升序，desc表示降序
                console.log(sortRules);
                this.loading=true
                //发送请求，渲染页面
                setTimeout(()=>{
                    this.dataSource=this.dataSource.sort((a,b)=>a.score-b.score)

                    this.loading=false
                },2000)
            }
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
            .y-table-loading{
                width:300px;
            }
        }
    }

</style>