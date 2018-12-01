import React from 'react'
import { shallow } from 'enzyme'

import RenderIf from '../../src/renderprops/RenderIf'

describe('renderIf', () => {
  it('supports not passing a render function', () => {
    shallow(<RenderIf test={true}/>)
  })

  it('calls function if condition is true', (done) => {
    shallow(<RenderIf test={true} render={() => {done()}}/>)
  })

  it('calls function if condition is a function that returns true', (done) => {
    shallow(<RenderIf test={() => true} render={() => {done()}}/>)
  })

  it('does not call function if condition is false', done => {
    shallow(<RenderIf test={false} render={
      () => {done.fail(new Error('Must not be called'))}
    }/>)
    done()
  })

  it('does not call function if condition is a function that returns false', done => {
    shallow(<RenderIf test={() => false} render={
      () => {done.fail(new Error('Must not be called'))}
    }/>)
    done()
  })
})
