<template>
    <button class="g-button" :class="{[`icon-${iconPosition}`]:true}"
    @click="$emit('click')"
    >
        <g-icon class="icon" v-if="icon && !loading" :name="icon"></g-icon>
        <g-icon class="icon loading" v-if="loading" name="loading"></g-icon>
        <span class="content">
            <slot ></slot>
        </span>
    </button>
</template>

<script>
    import Icon from './icon'
    export default {
        components:{
          'g-icon':Icon
        },
        //props:['icon','iconPosition']
        props:{
            icon:{},
            loading:{
                type:Boolean,
                default:false,
            },
            iconPosition:{
                type:String,
                default:'left',
                validator(value){
                    return !(value !== 'left' && value !== 'right');
                }
            }
        }
    }
</script>

<style lang="scss" scoped>
    @keyframes spin {
        0%{transform: rotate(0)}
        100%{transform: rotate(360deg)}
    }
    .loading{
        animation: spin 2s linear infinite;
    }
    .g-button {
        font-size: var(--font-size);
        height: var(--button-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);
        display:inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        &:hover {
            border-color: var(--border-color-hover);
            cursor: pointer;

        }
        &:active {background-color: var(--button-active-bg);}
        &:focus {outline: none;}
        > .content{order:2;}
        > .icon{order:1;margin-right:.3em;}
        &.icon-right{
            > .content{order:1;}
            > .icon{order:2;margin-right:0;margin-left:.3em;}
        }
    }
</style>