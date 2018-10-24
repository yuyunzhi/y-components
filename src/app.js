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
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Collapse from './collapse'
import CollapseItem from './collapse-item'


Vue.component('y-button', Button);
Vue.component('y-icon', Icon);
Vue.component('y-button-group', ButtonGroup);
Vue.component('y-input', Input);
Vue.component('y-row', Row);
Vue.component('y-col', Col);
Vue.component('y-layout', Layout);
Vue.component('y-header', Header);
Vue.component('y-content', Content);
Vue.component('y-footer', Footer);
Vue.component('y-sider', Sider);
Vue.component('y-toast', Toast);
Vue.use(plugin);
Vue.component('y-tabs', Tabs);
Vue.component('y-tabs-head', TabsHead);
Vue.component('y-tabs-body', TabsBody);
Vue.component('y-tabs-item', TabsItem);
Vue.component('y-tabs-pane', TabsPane);
Vue.component('y-collapse', Collapse);
Vue.component('y-collapse-item', CollapseItem);


new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:false,
        loading3:false,
        msg:123,
        selectedTab:['1','2']//'sports',
    },
    methods:{
        yyy(name){
            console.log('app name:',name);
        },
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
          this.$toast('这是消息体',{
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
            this.$toast('这是消息体',{
                position:'top',
                enableHtml:true,
                autoClose:3,//false 或具体 数字
                closeButton:{
                    text:'关闭',
                    callback:(toast)=>{
                        this.log();
                    },
                }
            })
        },
    }
});
