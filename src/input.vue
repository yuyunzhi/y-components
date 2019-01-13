<template>
    <div class="wrapper" :class="{'error':error}">
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
               @change="$emit('change', $event.target.value)"
               @input="$emit('input', $event.target.value)"
               @focus="$emit('focus', $event.target.value)"
               @blur="$emit('blur', $event.target.value)"
        >
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>

<script>
    import Icon from './icon'
    export default {
        name:'YInput',
        components: {Icon},
        props: {
            value: {
                type: String
            },
            disabled: {
                type: Boolean,
                default: false
            },
            readonly: {
                type: Boolean,
                default: false
            },
            error: {
                type: String
            }
        }
    }
</script>

<style scoped lang="scss">
    $height: 32px;
    $border-color: #999;
    $border-radius: 4px;
    $font-size: 12px;
    $box-shadow-color: #1890ff;
    $red: #F1453D;
    .wrapper { font-size: 14px; display: inline-flex;
        align-items: center;
        > :not(:last-child) {margin-right: .5em; }
        > input { height: 32px;
            border: 1px solid #999; border-radius: 4px; padding: 0 8px; font-size: inherit;
            &:hover { border-color: #1890ff; }
            &:focus { box-shadow: 0px 0px 1px 1px $box-shadow-color; border-color:$box-shadow-color;outline: none; }
            &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
        }
        &.error {
            > input {
                border-color: $red;
                &:focus{
                    box-shadow: 0px 0px 1px 1px transparent; border-color:$red;outline: none;
                }
            }
        }
        .icon-error { fill: $red; }
        .errorMessage { color: $red; }
    }
</style>