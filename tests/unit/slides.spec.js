import chai, {expect} from 'chai'
import Vue from 'vue'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import Slides from '../../src/slides/slides.vue'
import SlidesItem from '../../src/slides/slides-item.vue'
import {mount} from "@vue/test-utils";
chai.use(sinonChai)

describe('Slides.vue',()=>{
    it('存在',()=>{
        expect(Slides).to.exist
    })

    it('接受YSlidesItem,且默认展示第一个',(done)=>{
        Vue.component('YSlidesItem', SlidesItem)
        const wrapper=mount(Slides,{
            slots:{
                default: `
                  <y-slides-item name="1">
                    <div class="box1">1</div>
                  </y-slides-item>
                  <y-slides-item name="2">
                    <div class="box2">2</div>
                  </y-slides-item>
                  <y-slides-item name="3">
                    <div class="box3">3</div>
                  </y-slides-item>
                 `
            },
            propsData: {
                autoPlay: false
            },
        })
        setTimeout(()=>{
            expect(wrapper.find('.box1').exists()).to.be.true
            expect(wrapper.find('.active').exists()).to.be.true
            done()
        })

    })

    it('selected 是几，选中的就是几', (done) => {
        Vue.component('YSlidesItem', SlidesItem)
        const wrapper=mount(Slides,{
            slots:{
                default: `
                  <y-slides-item name="1">
                    <div class="box1">1</div>
                  </y-slides-item>
                  <y-slides-item name="2">
                    <div class="box2">2</div>
                  </y-slides-item>
                  <y-slides-item name="3">
                    <div class="box3">3</div>
                  </y-slides-item>
                 `
            },
            propsData: {
                autoPlay: false,
                selected: '2'
            },
        })
        setTimeout(() => {
            expect(wrapper.find('.box2').exists()).to.be.true
            done()
        })
    })

    it('点击第二个就展示第二个', (done) => {
        Vue.component('YSlidesItem', SlidesItem)
        const wrapper=mount(Slides,{
            slots:{
                default: `
                  <y-slides-item name="1">
                    <div class="box1">1</div>
                  </y-slides-item>
                  <y-slides-item name="2">
                    <div class="box2">2</div>
                  </y-slides-item>
                  <y-slides-item name="3">
                    <div class="box3">3</div>
                  </y-slides-item>
                 `
            },
            propsData: {
                autoPlay: false,
                selected: '1'
            },
            listeners: {
                'update:selected': (x) => {
                    expect(x).to.eq('2')
                    done()
                }
            }
        })
        setTimeout(() => {
            wrapper.find('[data-index="1"]').trigger('click')
        })
    })

    it('会自动播放', (done) => {
        Vue.component('YSlidesItem', SlidesItem)
        const callback = sinon.fake();
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                autoPlayDelay: 20,
                selected: '1'
            },
            slots: {
                default: `
                  <y-slides-item name="1">
                    <div class="box1">1</div>
                  </y-slides-item>
                  <y-slides-item name="2">
                    <div class="box2">2</div>
                  </y-slides-item>
                  <y-slides-item name="3">
                    <div class="box3">3</div>
                  </y-slides-item>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })

        setTimeout(() => {
            setTimeout(()=>{
                expect(callback).to.have.been.called
                done()
            },22)
            done()
        }, 21)
    })

    xit('可以点击上一张', (done) => {
        Vue.component('YSlidesItem', SlidesItem)
        const callback = sinon.fake();
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                autoPlayDelay: 20,
                selected: '1'
            },
            slots: {
                default: `
                  <y-slides-item name="1">
                    <div class="box1">1</div>
                  </y-slides-item>
                  <y-slides-item name="2">
                    <div class="box2">2</div>
                  </y-slides-item>
                  <y-slides-item name="3">
                    <div class="box3">3</div>
                  </y-slides-item>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })
        setTimeout(() => {
            wrapper.find('[data-action="next"]').trigger('click')
            expect(callback).to.have.been.calledWith('2')
            done()
        }, 21)


    })

   /* xit('可以点击下一张', (done) => {
        Vue.component('YSlidesItem', SlidesItem)
        const callback = sinon.fake();
        const wrapper = mount(Slides, {
            propsData: {
                autoPlay: true,
                autoPlayDelay: 20,
                selected: '1'
            },
            slots: {
                default: `
                  <y-slides-item name="1">
                    <div class="box1">1</div>
                  </y-slides-item>
                  <y-slides-item name="2">
                    <div class="box2">2</div>
                  </y-slides-item>
                  <y-slides-item name="3">
                    <div class="box3">3</div>
                  </y-slides-item>
        `
            },
            listeners: {
                'update:selected': callback
            }
        })
    setTimeout(() => {
      wrapper.find('[data-action="next"]').trigger('click')
      expect(callback).to.have.been.calledWith('2')
      done()
    }, 21)
    })*/















})