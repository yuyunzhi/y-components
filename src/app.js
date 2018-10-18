import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast.vue'
import plugin from './plugin.js'


Vue.component('g-button', Button);
Vue.component('g-icon', Icon);
Vue.component('g-button-group', ButtonGroup);
Vue.component('g-input', Input);
Vue.component('g-row', Row);
Vue.component('g-col', Col);
Vue.component('g-layout', Layout);
Vue.component('g-header', Header);
Vue.component('g-content', Content);
Vue.component('g-footer', Footer);
Vue.component('g-sider', Sider);
Vue.component('g-toast', Toast);
Vue.use(plugin);


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        msg:123
    },
    methods:{
        InputChange(e){
          console.log('1')
        },
        bindContent(e){
            this.msg=e
        },
        log(){
          console.log('我是app里面的log函数')
        },
        showToast1(){
          this.$toast('一首凉凉送给你',{
              position:'top'
            })
        },
        showToast2(){
            this.$toast('两首凉凉送给你',{
                position:'middle'
            })
        },
        showToast3(){
            //$toast第一个参数可以是字符串也可以是html
            this.$toast('三首凉凉送给你',{
                position:'bottom',
                enableHtml:true,
                autoClose:3,//false 或具体 数字
                closeButton:{
                    text:'关闭',
                    callback:(toast)=>{
                        this.log();
                        toast.log()
                    },
                }
            })
        },
    }
});
