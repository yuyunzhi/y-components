import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import Uploader from '../../src/uploader/uploader'
import $http from '../../src/XMLHttpRequest.js'

chai.use(sinonChai)

describe('Uploader.vue', () => {
    it('存在.', () => {
        expect(Uploader).to.exist
    })

    xit('可以上传一个文件', () => {
        let stub = sinon.stub($http, 'post').callsFake((url, options) => {
            setTimeout(function () {
                options.success('{"id": "123123"}')
            }, 100)
        })

        const wrapper = mount(Uploader, {
            propsData: {
                name: 'file',
                action: '/upload',
                method: 'post',
                accept:'image/*',
                parseResponse: (response) => {
                    let object = JSON.parse(response)
                    return `/preview/${object.id}`
                },
                fileList: []
            },
            slots: {default: `<button id="x">click me</button>`},
            listeners: {
                'update:fileList': (fileList) => { wrapper.setProps({fileList}) },
                'uploaded': () => {

                    console.log(1);
                    expect(wrapper.find('use').exists()).to.eq(false)
                    expect(wrapper.props().fileList[0].url).to.eq('/preview/123123')
                    stub.restore()


                }
            }
        })
        //触发button
        wrapper.find('#x').trigger('click')

        //找到input ,创建新文件
        let inputWrapper = wrapper.find('input[type="file"]')
        let input = inputWrapper.element
        let file1 = new File(['xxxxxxxxx'], 'xxx.txt')

        //给input 设置文件
        const data = new DataTransfer()
        data.items.add(file1)
        input.files = data.files;

        //上传后期待出现loading
        let use = wrapper.find('use').element
        expect(use.getAttribute('xlink:href')).to.eq('#i-loading')

    })
})


//测试input ajax
/*
describe('Uploader.vue', () => {
    xit('存在.', () => {
        expect(Uploader).to.exist
    })


    xit('可以上传文件',()=>{

        //mock 服务器
      $http.post=(url,options)=>{

          setTimeout(function(){

              options.success('{"id":"123123123"}')

          },10)
        }

        const wrapper = mount(Uploader, {
            propsData: {
                name:'file',
                action:'/xxx',
                method:'post',
                parseResponse:(res)=>{
                    let obj = JSON.parse(res)
                    let url= `/preview/${obj.id}`
                    return url
                },
                fileList:[],
                accept:'image/!*'
            },
            slots:{
                default:`<button id="button">点击我</button>>`
            },
            listeners:{
                //监听sync事件3
                'update:fileList':(fileList)=>{
                    wrapper.setProps({fileList})
                },
            }
        })

        //找到button,点击
        wrapper.find('#button').trigger('click')


        //找到input元素
        let inputWrapper = wrapper.find('input[type="file"]')
        let input = inputWrapper.element

        //新建两个文件
        let file1=new File(['aaaaaaaaaa'],'aaa.txt')
        let file2=new File(['bbbbbbbbbb'],'bbb.txt')

        //插入到file里
        const data=new DataTransfer()
        data.items.add(file1)
        data.items.add(file2)
        input.files=data.files

        //期待会出现loading

        let use = wrapper.find('use').element
        expect(use.getAttribute('xlink:href')).to.eq('#i-loading')

    })

})*/
