<template>
    <div class="wrapper">
        <!--注意：dataSource一定要有id，否则不支持-->
        <y-table
            :columns="columns"
            :data-source="dataSource"
            :numberVisible="numberVisible"
            :hasBorder="hasBorder"
            :compact="false"
            :striped="striped"
            :selected-items.sync="selectedItems"
            :order-by.sync="sortRules"
            :loading="loading"
            @update:orderBy="x"

        >
        </y-table>

        <div class="box">
            <y-button @click="numberVisible=!numberVisible">有无序号</y-button>
            <y-button  @click="striped=!striped">有无间隔条纹</y-button>
            <y-button @click="hasBorder=!hasBorder">有无边框</y-button>
        </div>

    </div>
</template>

<script>
    import YTable from './table.vue'
    import YButton from './button/button.vue'
    export default {
        components: {
            YTable,YButton
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
                loading:false,
                hasBorder:false,
                striped:true,
                numberVisible:true,

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
    padding:20px;
}
.box{
    margin-top:30px;
    .y-button{
        margin-left:20px;
    }
}
</style>