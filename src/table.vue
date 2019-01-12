<template>
    <div class="y-table-wrapper">
        <table class="y-table" :class="{hasBorder,compact,striped}">
            <thead>
            <tr>
                <th class="y-table-checkbox">
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
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in dataSource" :key="item.id">
                <td class="y-table-checkbox">
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
            </tr>
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
            orderBy: {
                type: Object,
                default: () => ({})
            },
            loading:{
                type:Boolean,
                default:false,
            }
        },
        data() {
            return {}
        },
        computed: {
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
    }

</style>