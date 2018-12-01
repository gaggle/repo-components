import React from 'react'
import { mount } from 'enzyme'

import RepoCards from '../../../src/components/repocards/RepoCards'

describe('RepoCards', () => {
  let wrapper

  function mountRepoCards (args) {
    wrapper = mount(<RepoCards {...args}/>)
  }

  it('defaults to loading', () => {
    mountRepoCards()
    expect(wrapper.find('.loading')).toBeTruthy()
  })

  it('renders a .repo-cards', () => {
    mountRepoCards({data: {foo: {bar: 'baz'}}})
    expect(wrapper.find('.repo-cards')).toBeTruthy()
  })

  it('renders a gapless columns container', () => {
    mountRepoCards({data: {foo: {bar: 'baz'}}})
    expect(wrapper.find('.columns.is-gapless')).toBeTruthy()
  })

  it('renders a .grid-item', () => {
    mountRepoCards({data: {foo: {bar: 'baz'}}})
    expect(wrapper.find('.grid-item')).toHaveLength(1)
  })

  it('renders a .grid-item > .repo-card for each data key', () => {
    mountRepoCards({
      data: {
        foo: {bar: 'baz'},
        ham: {spam: 'eggs'}
      }
    })
    expect(wrapper.find('.grid-item')).toHaveLength(2)
  })

  afterEach(() => {
    try {
      wrapper.unmount()
    } catch (err) {
      console.log(err)
    }
  })
})
