import chai, {expect} from 'chai'
import sinon from 'sinon'
import sinonChai from 'sinon-chai'
import {shallowMount, mount} from '@vue/test-utils'
import validate from '../../src/validate.js'

chai.use(sinonChai)

describe('validate.js', () => {
    it('存在.', () => {
        expect(validate).to.exist
    })

    it('test1',()=>{
        let data={
            email:''
        }
        let rules = [
            {key:'email',required:true}
        ]
        let errors = validate(data,rules)
        expect(errors.email.required).to.eq('必填')
    })
    it('test emil is number 0',()=>{
        let data={
            email:0
        }
        let rules = [
            {key:'email',required:true}
        ]
        let errors = validate(data,rules)
        expect(errors.email).to.not.exist
    })

})