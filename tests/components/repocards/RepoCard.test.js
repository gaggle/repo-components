import React from 'react'
import { mount } from 'enzyme'

import RepoCard from '../../../src/components/repocards/RepoCard'

describe('RepoCard', () => {
  it('should support href prop', () => {
    const comp = mount(<RepoCard linkTo={"foo"}/>)
    expect(comp.find('a').prop('href')).toEqual('/repos/foo')
  })
})
