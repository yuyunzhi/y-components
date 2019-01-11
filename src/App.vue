<template>
    <div class="wrapper">
        <y-table
            :columns="columns"
            :data-source="dataSource"
            :numberVisible="false"
            :borderd="false"
            :compact="false"
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
                    {id:5,name:'余咖咖5',score:86},
                    {id:6,name:'余咖咖6',score:123},
                    {id:7,name:'余咖咖7',score:45},
                    {id:8,name:'余咖咖8',score:78},
                ],
                columns:[
                    {text:'姓名',field:'name'},
                    {text:'分数',field:'score'},
                ],
            }
        },

        methods: {

        }
    }
</script>

<style lang="scss">
.wrapper{
    padding:20px;
}

</style>