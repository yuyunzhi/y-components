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
                    {id:1,name:'余咖咖1',score:100},
                    {id:2,name:'余咖咖2',score:99},
                    {id:3,name:'余咖咖3',score:46},
                    {id:4,name:'余咖咖4',score:62},

                ],
                columns:[
                    {text:'姓名',field:'name'},
                    {text:'分数',field:'score'},
                ],
                selectedItems:[],
            }
        },
        watch:{
            selectedItems(aNew,bOld){
                console.log(aNew);
            }
        },
    }
</script>

<style lang="scss">
.wrapper{
    padding:20px;
}

</style>