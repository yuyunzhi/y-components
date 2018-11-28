import chai, {expect} from 'chai'

import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Popover from '../../src/popover'
chai.use(sinonChai)

describe('Popover', () => {
    it('存在.', () => {
        expect(Popover).to.exist
    });

    it('可以设置position.', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>点我</button>`},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                position: 'bottom'
            }
        })
        wrapper.find('button').trigger('click')
        let classes = wrapper.find('.content-wrapper').classes()
        expect(classes).to.include('position-bottom')
    })

    it('可以设置 trigger方式', () => {
        const wrapper = mount(Popover, {
            slots: {
                default: {template: `<button>点我</button>`},
                content: '<div>弹出内容</div>'
            },
            propsData: {
                trigger: 'hover',
                position:'bottom',
            }
        })
        //点击前，断言不存在
        expect(wrapper.find('.content-wrapper').element).to.not.exist
        wrapper.find('.popover').trigger('mouseenter')
        //点击后，断言存在
        expect(wrapper.find('.content-wrapper').element).to.exist

    })

});