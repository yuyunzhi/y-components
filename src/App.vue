<template>
    <div class="wrapper">
        {{selected}}
        <y-table
            :columns="columns"
            :data-source="dataSource"
            :numberVisible="false"
            :borderd="false"
            :compact="false"
            :striped="false"
            @selectItem="x"
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
                selected:[],
            }
        },

        methods: {
            x(obj){
                let {selected,item,index}=obj
                if(selected){
                    this.selected.push(item)
                }else{
                    let l = this.selected.indexOf(item)
                    this.selected.splice(l,1)
                }

            }

        }
    }
</script>

<style lang="scss">
.wrapper{
    padding:20px;
}

</style>