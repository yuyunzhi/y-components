<template>
    <div class="y-table-wrapper">
        <table class="y-table" :class="{hasBorder,compact,striped}">
            <thead>

            <tr>
                <th :style="{width:'50px','text-align':'center'}" class="y-table-expendField"></th>
                <th class="y-table-checkbox" :style="{width:'50px','text-align':'center'}" v-if="checkable">
                    <label>
                        <input type="checkbox" @click="onChangeAllCheckbox" ref="allChecked"
                               :checked="areAllItemsSelected">
                    </label>
                </th>
                <th class="y-table-cell" v-if="numberVisible">序号</th>
                <th class="y-table-cell sorter" v-for="column in columns" :key="column.field">
                    {{column.text}}
                    <span v-if="column.field in orderBy"
                          class="y-table-sorter"
                          @click="changeOrderBy(column.field)">
                        <y-icon name="asc" :class="{active: orderBy[column.field] === 'asc'}"/>
                        <y-icon name="desc" :class="{active: orderBy[column.field] === 'desc'}"/>
                    </span>
                </th>
                <th class="y-table-cell y-table-button">功能</th>
            </tr>
            </thead>
            <tbody>
            <template v-for="(item,index) in dataSource">

                <tr :key="item.id">
                    <td :style="{width:'50px','text-align':'center'}" class="y-table-expendField">
                        <y-icon name="right"
                                class="y-table-icon"
                                :class="{'open':isInexpendIds(item),'close':!isInexpendIds(item)}"
                                @click="openItem(item.id)"
                                v-if="item[expendField]"
                        ></y-icon>
                    </td>
                    <td class="y-table-checkbox" :style="{width:'50px','text-align':'center'}" v-if="checkable">
                        <label>
                            <input type="checkbox" @click="onChangeCheckbox($event,item,index)"
                                   :checked="isSelectedCheckbox(item)"
                            >
                        </label>
                    </td>
                    <td class="y-table-cell" v-if="numberVisible">{{index+1}}</td>
                    <template v-for="column in columns">
                        <td class="y-table-cell" :key="column.field">{{item[column.field]}}</td>
                    </template>
                    <td class="y-table-button">
                        <slot :item="item"></slot>
                    </td>
                </tr >
                <!--S 此为展开内容-->
                <tr :key="`${item.id}abc`"  v-if="isInexpendIds(item)&& item[expendField]">
                    <td :colspan="columns.length+expendedCellColSpan">
                        {{item[expendField]}}
                    </td>
                </tr>

                <!--E 此为展开内容-->
            </template>


            </tbody>
        </table>
        <div class="y-table-loading" v-if="loading">
            <y-icon name="loading" class="y-table-loading-inner"></y-icon>
        </div>
    </div>
</template>

<script>
    import YIcon from './icon.vue'

    export default {
        name: "YTable",
        components: {YIcon},
        props: {
            columns: {
                type: Array,
                required: true,
            },
            dataSource: {
                type: Array,
                required: true,
                validator: function (array) {
                    return array.filter(i => i.id === undefined) <= 0;
                }
            },
            numberVisible: {
                type: Boolean,
                default: true,
            },
            compact: {//紧凑型
                type: Boolean,
                default: false,
            },
            hasBorder: {
                type: Boolean,
                default: true,
            },
            striped: {//间隔颜色css实现
                type: Boolean,
                default: true,
            },
            selectedItems: { //选中的数据
                type: Array,
                default: () => [],
            },
            orderBy: { //排序方式
                type: Object,
                default: () => ({})
            },
            loading:{
                type:Boolean,
                default:false,
            },
            expendField:{ //是否要展开
                type:String,
            },
            checkable:{ //是否有选中
                type:Boolean,
                default:false,
            }
        },
        data() {
            return {
                expendIds:[],
            }
        },
        computed: {
            expendedCellColSpan(){
                let colSpan=1
              if(this.checkable){
                  colSpan++
              }
              if(this.expendField){
                  colSpan++
              }
              if(this.numberVisible){
                  colSpan++
              }
              return colSpan
            },
            //判断两个数组是否是一样的，来切换全选或不选状态的checkbox
            areAllItemsSelected() {
                let a = this.dataSource.map(item => item.id).sort()
                let b = this.selectedItems.map(item => item.id).sort()
                if (a.length !== b.length) {
                    return false
                }
                let equal = true
                for (let i = 0; i < a.length; i++) {
                    if (a[i] !== b[i]) {
                        equal = false
                        break
                    }
                }
                return equal
            }
        },
        watch: {
            //切换半选状态
            selectedItems() {
                if (this.selectedItems.length === this.dataSource.length) {
                    this.$refs.allChecked.indeterminate = false
                } else if (this.selectedItems.length === 0) {
                    this.$refs.allChecked.indeterminate = false
                } else {
                    this.$refs.allChecked.indeterminate = true
                }
            }
        },
        methods: {
            isInexpendIds(item){
                return this.expendIds.indexOf(item.id)>=0
            },
            //打开每一项展开的内容
            openItem(id){
                let index = this.expendIds.indexOf(id)
                console.log(index);
                if(index>=0){
                    this.expendIds.splice(index,1)
                }else{
                    this.expendIds.push(id)
                }
                console.log(this.expendIds);
            },
            //切换排序状态，并通知组件外部
            changeOrderBy(key){
                const newOrderBy = JSON.parse(JSON.stringify(this.orderBy))
                let old = newOrderBy[key]
                if (old === 'asc') {
                    newOrderBy[key] = 'desc'
                } else if (old === 'desc') {
                    newOrderBy[key] = true
                } else {
                    newOrderBy[key] = 'asc'
                }
                this.$emit('update:orderBy', newOrderBy)
            },
            //每条数据checkbox是否被选中
            isSelectedCheckbox(item) {
                return this.selectedItems.filter(i => i.id === item.id).length > 0
            },

            //是否点击了某个数据的checkbox
            onChangeCheckbox(e, item, index) {
                let selected = e.target.checked
                let copy = JSON.parse(JSON.stringify(this.selectedItems))
                if (selected) {
                    copy.push(item)
                } else {
                    copy = copy.filter(i => i.id !== item.id)
                }
                this.$emit('update:selectedItems', copy)
            },

            //是否选中 顶部的checkbox
            onChangeAllCheckbox(e) {
                let selected = e.target.checked
                if (selected) {
                    this.$emit('update:selectedItems', this.dataSource)
                } else {
                    this.$emit('update:selectedItems', [])
                }
            }
        }
    }
</script>
<style scoped lang="scss">
    @import "var";
    .y-table-wrapper{
        position: relative;
    }

    .y-table {

        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        border-bottom: 1px solid $grey;
        &.hasBorder {
            border: 1px solid $grey;
            tr, td, th {
                border: 1px solid $grey;
            }
        }
        &.compact {
            td, th {
                padding: 5px;
            }
        }
        &.striped {
            tbody {
                > tr {
                    &:nth-child(even) {
                        background: lighten($grey, 5%)
                    }
                }
            }
        }
        tbody {
            tr:hover {
                background: rgb(245, 247, 250);
            }
        }
        &-cell.sorter{

        }
        td, th {
            text-align: left;
            box-sizing: border-box;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: normal;
            word-break: break-all;
            line-height: 23px;
            padding: 10px;
            color: rgb(96, 98, 102);
            font-size: 14px;
            border-bottom: 1px solid $grey;
            text-align: left;
            //border:1px solid $grey;

        }
        &-sorter {
            display: inline-flex;
            flex-direction: column;
            margin: 0 4px;
            cursor: pointer;
            vertical-align: middle;
            svg {
                width: 10px;
                height: 10px;
                fill: $grey;
                &.active {
                    fill: rgb(96, 98, 102);
                }
                &:first-child {
                    position: relative;
                    bottom: -1px;
                }
                &:nth-child(2) {
                    position: relative;
                    top: -1px;
                }
            }
        }
        @keyframes loadingSpan{
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        &-loading{
            position: absolute;
            width:100%;
            height:100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background: rgba(255,255,255,0.5);
            z-index: 2;
            top: 0;
            left: 0;
            &-inner{
                width:60px;
                height:60px;
                animation:loadingSpan 2s linear infinite;
            }
        }

        &-icon{
            width:12px;
            height:12px;
            cursor: pointer;
            @keyframes xxx {
                0%{transform: rotate(0deg)}
                100%{transform: rotate(90deg)}
            }
            &.open{
                animation:xxx .3s linear;
                animation-fill-mode:forwards
            }
        }
    }
</style>