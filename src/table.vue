<template>
    <div class="y-table-wrapper">
        <table class="y-table" :class="{borderd,compact}">
            <thead>
            <tr>
                <th class="y-table-checkbox">
                    <label>
                        <input type="checkbox">
                    </label>
                </th>
                <th class="y-table-cell" v-if="numberVisible">序号</th>
                <th class="y-table-cell" v-for="column in columns">
                    {{column.text}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in dataSource">
                <td class="y-table-checkbox">
                    <label>
                        <input type="checkbox" >
                    </label>
                </td>
                <td  class="y-table-cell" v-if="numberVisible">{{index+1}}</td>
                <template v-for="column in columns">
                    <td class="y-table-cell">{{item[column.field]}}</td>
                </template>
            </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
    export default {
        name: "YTable",
        props: {
            columns: {
                type: Array,
                required: true,
            },
            dataSource: {
                type: Array,
                required: true,
            },
            numberVisible:{
                type:Boolean,
                default:true,
            },
            compact:{//紧凑型
                type:Boolean,
                default:false,
            },
            borderd:{
                type:Boolean,
                default:false,
            }
        }
    }
</script>

<style scoped lang="scss">
    @import "var";
    .y-table{

        width:100%;
        border-collapse: collapse;
        border-spacing:0;
        border-bottom:1px solid $grey;
        &.borderd{
            border:1px solid $grey;
            tr,td,th{
                border:1px solid $grey;
            }
        }
        &.compact{
            td,th{
                padding:5px;
            }
        }

        td,th{
            text-align: left;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            word-break: break-all;
            line-height: 23px;
            padding: 10px;
            color:rgb(96, 98, 102);
            font-size:14px;
            border-bottom:1px solid $grey;
            //border:1px solid $grey;
        }
        tbody{
            >tr{
                &:nth-child(odd){
                    background: white;
                }
                &:nth-child(even){
                    background: lighten($grey,5%)
                }
            }
        }

    }
</style>