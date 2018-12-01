import React from 'react'
import { shallow } from 'enzyme'

import RenderIfElse from '../../src/renderprops/RenderIfElse'

const err = new Error('Must not be called')

describe('renderIf', () => {
  it('supports not passing render functions', () => {
    shallow(<RenderIfElse test={true}/>) // Exercise true default
    shallow(<RenderIfElse test={false}/>) // Exercise false default
  })

  it('calls pass if condition is true', (done) => {
    shallow(<RenderIfElse test={true}
                          pass={() => {done()}}
                          fail={() => {done.fail(err)}}
    />)
  })

  it('calls pass if condition is a function that returns true', (done) => {
    shallow(<RenderIfElse test={() => true}
                          pass={() => {done()}}
                          fail={() => {done.fail(err)}}
    />)
  })

  it('calls fail if condition is false', done => {
    shallow(<RenderIfElse test={false}
                          pass={() => {done.fail(err)}}
                          fail={() => {done()}}
    />)
  })

  it('calls fail if condition is a function that returns false', done => {
    shallow(<RenderIfElse test={() => false}
                          pass={() => {done.fail(err)}}
                          fail={() => {done()}}
    />)
  })
})
