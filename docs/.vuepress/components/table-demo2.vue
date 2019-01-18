<template>
    <div class="wrapper">
        <!--注意：dataSource一定要有id，否则不支持-->
        <y-table
                :columns="columns"
                :data-source="dataSource"
                :striped="striped"
                hasButton
        >
            <template slot-scope="xxx">
                <span  class="btn" @click="getInformation(xxx.item)">查看</span>
            </template>
        </y-table>

    </div>
</template>

<script>
    import YTable from './table/table.vue'
    import YButton from './button/button.vue'
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
                striped:true,
            }
        },
        methods:{
            getInformation(item){
                alert('查看：'+item.name)
            },
        }
    }
</script>

<style lang="scss">
    .wrapper{
        padding:20px;
    }
    .box{
        margin-top:30px;
        .y-button{
            margin-left:20px;
        }
    }
    .y-table-wrapper{
        width:320px;
    }
    .btn{
        font-size:14px;
        border:none;
        background:transparent;
        color:#40a9ff;
        cursor: pointer;
        margin-right:10px;
    }
</style>