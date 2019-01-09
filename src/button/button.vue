<template>
  <button class="y-button" :class="classes"
    @click="$emit('click')">
    <y-icon class="icon" v-if="icon && !loading" :name="icon"></y-icon>
    <y-icon class="loading icon" v-if="loading" name="loading"></y-icon>
    <div class="content">
      <slot></slot>
    </div>
  </button>
</template>
<script>
  import Icon from '../icon'
  export default {
    name: 'YButton',
    components: {
      'y-icon': Icon
    },
    props: {
      icon: {},
      loading: {
        type: Boolean,
        default: false
      },
      disabled:{
        type:Boolean,
        default:false
      },
      iconPosition: {
        type: String,
        default: 'left',
        validator (value) {
          return value === 'left' || value === 'right'
        }
      }
    },
      computed:{
        classes(){
            return{
                [`icon-${this.iconPosition}`]: true,
                disabled:this.disabled
            }
        }
      }
  }
</script>
<style lang="scss" scoped>
@import 'var.scss';
/*     $button-height: 32px;
     $font-size: 14px;
     $button-bg: #40a9ff;
     $button-active-bg:  #096dd9;//#40a9ff
     $border-radius: 4px;
     $color: white;
      $border-color: white;
     $border-color-hover: #1890ff;  //#096dd9
     $disabled-color:rgb(153,153,153);
     $disabled-bg:white;*/

     @keyframes spin {
         0%{transform: rotate(0)}
         100%{transform: rotate(360deg)}
     }
     .loading{
         animation: spin 2s linear infinite;
     }
     .y-button {
         font-size: $font-size;
         height: $button-height;
         padding: 0 1em;
         border-radius: $border-radius;
         border: 1px solid $button-bg;
         background: $button-bg;
         display:inline-flex;
         justify-content: center;
         align-items: center;
         vertical-align: middle;
         color:$color;
         .icon{
             fill:white;
         }
         .content{
             padding: 0;
         }
         &:hover {
             border-color: $border-color-hover;
             cursor: pointer;
         }
         &:active {background-color: $button-active-bg;}
         &:focus {outline: none;}
         > .content{order:2;}
         > .icon{order:1;margin-right:.3em;}
         &.icon-right{
             > .content{order:1;}
             > .icon{order:2;margin-right:0;margin-left:.3em;}
         }
         &.disabled{
             border:1px solid $disabled-color;
             color:$disabled-color;
             background:$disabled-bg;
             cursor: not-allowed;
         }
     }
</style>

    
