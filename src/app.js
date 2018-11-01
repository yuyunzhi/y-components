
import Button from './button'
import ButtonGroup from './button-group'
import Cascader from './cascader'
import Col from './col'
import Collapse from './collapse'
import CollapseItem from './collapse-item'
import Content from './content'
import Footer from './footer'
import Header from './header'
import Icon from './icon'
import Input from './input'
import Layout from './layout'
import plugin from './plugin.js'
import Popover from './popover'
import Row from './row'
import Sider from './sider'
import Tabs from './tabs'
import TabsBody from './tabs-body'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import Toast from './toast.vue'
import Vue from 'vue'


Vue.component('y-button', Button);
Vue.component('y-button-group', ButtonGroup);
Vue.component('y-cascader', Cascader);
Vue.component('y-col', Col);
Vue.component('y-collapse', Collapse);
Vue.component('y-collapse-item', CollapseItem);
Vue.component('y-content', Content);
Vue.component('y-footer', Footer);
Vue.component('y-header', Header);
Vue.component('y-icon', Icon);
Vue.component('y-input', Input);
Vue.component('y-layout', Layout);
Vue.component('y-popover', Popover);
Vue.component('y-row', Row);
Vue.component('y-sider', Sider);
Vue.component('y-tabs', Tabs);
Vue.component('y-tabs-body', TabsBody);
Vue.component('y-tabs-head', TabsHead);
Vue.component('y-tabs-item', TabsItem);
Vue.component('y-tabs-pane', TabsPane);
Vue.component('y-toast', Toast);
Vue.use(plugin);

new Vue({
    el:'#app',
    data:{
        source: [{
            name: '浙江',
            children: [
                {
                    name: '杭州',
                    children: [
                        {name: '上城'},
                        {name: '下城'},
                        {name: '江干'},
                    ]
                },
                {
                    name: '嘉兴',
                    children: [
                        {name: '南湖'},
                        {name: '秀洲'},
                        {name: '嘉善'},
                    ]
                },
            ]
        }, {
            name: '福建',
            children: [
                {
                    name: '福州',
                    children: [
                        {name: '鼓楼'},
                        {name: '台江'},
                        {name: '仓山'},
                    ]
                },
            ]
        }]
    },
    methods:{

    }
});
