<template>
    <div class="wrapper">
        {{selectedItems}}
        <hr>

        <!--注意：dataSource一定要有id，否则不支持-->
        <y-table
            :columns="columns"
            :data-source="dataSource"
            :numberVisible="false"
            :hasBorder="true"
            :compact="false"
            :striped="true"
            :selected-items.sync="selectedItems"
            :order-by.sync="sortRules"
            @update:orderBy="x"

        >
        </y-table>

    </div>
</template>

<script>
    import YTable from './table.vue'

    export default {
        components: {
            YTable,
        },
        data() {
            return {
                dataSource:[
                    {id:1,name:'余咖咖1',score:88},
                    {id:2,name:'余咖咖2',score:99},
                    {id:3,name:'余咖咖3',score:46},
                    {id:4,name:'余咖咖4',score:62},

                ],
                columns:[
                    {text:'姓名',field:'name'},
                    {text:'分数',field:'score'},
                ],
                sortRules:{ //如果不写key，表示那一列不需要排列
                 // name:'asc',
                  score:true
                },
                selectedItems:[],
            }
        },
        watch:{
            selectedItems(aNew,bOld){
                console.log(aNew);
            }
        },
        methods:{
            x(sortRules){
                //true 表示默认排序，asc 表示升序，desc表示降序
                console.log(sortRules);
                this.dataSource=this.dataSource.sort((a,b)=>a.score-b.score)
            }
        }
    }
</script>

<style lang="scss">
.wrapper{
    padding:20px;
}

</style>