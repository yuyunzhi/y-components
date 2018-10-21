const expect = chai.expect;
import Vue from 'vue'
import Tabs from '../src/tabs.vue'


Vue.config.productionTip = false;
Vue.config.devtools = false;

describe('Tabs', () => {

    it('存在.', () => {
        expect(Tabs).to.exist
    });
    it('子组件只能是tabs-head和tabs-body',()=>{

    })


});