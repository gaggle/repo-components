import React from 'react'
import { mount } from 'enzyme'

import RepoCard from '../../../src/components/repocards/RepoCard'

describe('RepoCard', () => {
  it('should support linking to a details page', () => {
    const comp = mount(<RepoCard detailsLink={"foo"}/>)
    expect(comp.find('a').prop('href')).toEqual('/repos/foo')
  })
})
