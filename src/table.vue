<template>
    <div class="y-table-wrapper">
        <table class="y-table" :class="{hasBorder,compact,striped}">
            <thead>
            <tr>
                <th class="y-table-checkbox">
                    <label>
                        <input type="checkbox" @click="onChangeAllCheckbox" ref="allCheckbox">
                    </label>
                </th>
                <th class="y-table-cell" v-if="numberVisible">序号</th>
                <th class="y-table-cell" v-for="column in columns" :key="column.field">
                    {{column.text}}
                </th>
            </tr>
            </thead>
            <tbody>
            <tr v-for="(item,index) in dataSource" :key="item.id">
                <td class="y-table-checkbox">
                    <label>
                        <input type="checkbox" @click="onChangeCheckbox($event,item,index)"
                               :checkbox="isSelectedCheckbox(item)"
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
            striped: {
                type: Boolean,
                default: true,
            },
            selectedItems: { //选中的数据
                type: Array,
                default: () => [],
            }
        },
        data() {
            return {}
        },
        watch: {
            selectedItems() {
                if (this.selectedItems.length === this.dataSource.length) {
                    this.$refs.allCheckbox.indeterminate = false
                } else if (this.selectedItems.length === 0) {
                    this.$refs.allCheckbox.indeterminate = false
                } else {
                    this.$refs.allCheckbox.indeterminate = true
                }
            }
        },
        methods: {
            isSelectedCheckbox(item) {
                return this.selectedItems.filter(i => i.id === item.id).length > 0
            },
            onChangeCheckbox(e, item, index) {
                let selected = e.target.checked
                let copy = JSON.parse(JSON.stringify(this.selectedItems))
                if (selected) {
                    copy.push(item)
                } else {
                    copy = copy.filter(i=>i.id!==item.id)
                }
                this.$emit('update:selectedItems', copy)
            },
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

    }
</style>