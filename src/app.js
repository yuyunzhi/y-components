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
import Popover from './popover'

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
Vue.component('y-popover', Popover);

new Vue({
    el:'#app',
    data:{

    },
    methods:{

    }
});
